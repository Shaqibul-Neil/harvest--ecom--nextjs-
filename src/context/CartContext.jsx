"use client";

import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

/* ------------------ CONTEXT ------------------ */
const CartContext = createContext(null);

/* ------------------ PROVIDER ------------------ */
export const CartProvider = ({ children }) => {
  // Prevent double execution (button spam / strict mode safety)
  const isAddingRef = useRef(false);
  // To prevent multiple data fetch when user tries login logout too fast too many times and to prevent RACE CONDITION.
  const isSyncingRef = useRef(false);
  // FLAG: Once synced, never sync again in this session (prevents infinite loop)
  const hasSyncedRef = useRef(false);
  // FLAG: Skip localStorage write when data comes from server
  const isFromServerRef = useRef(false);
  // Avoid server/client branching during render
  const [mounted, setMounted] = useState(false);
  // Check if the user is logged in or not
  const { data: session, status } = useSession();

  /* -------- INITIAL STATE FROM LOCAL STORAGE -------- */
  const [cart, setCart] = useState(() => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem("harvest_cart")) || [];
    } catch (error) {
      console.error("Invalid cart data in localStorage");
      return [];
    }
  });

  /* -------- SYNC CART TO LOCAL STORAGE -------- */
  useEffect(() => {
    // Skip writing to localStorage if data just came from server (prevents loop)
    if (isFromServerRef.current) {
      isFromServerRef.current = false;
      return;
    }
    localStorage.setItem("harvest_cart", JSON.stringify(cart));
  }, [cart]);

  /* -------- SYNC ON LOGIN -------- */
  useEffect(() => {
    const syncWithDB = async () => {
      // If already synced in this session, do nothing
      if (hasSyncedRef.current) return;

      const localCartData = localStorage.getItem("harvest_cart");
      const parsedLocalCart = localCartData ? JSON.parse(localCartData) : [];
      //case 1: logged in + data in local = merge
      if (
        status === "authenticated" &&
        session?.user &&
        parsedLocalCart.length > 0
      ) {
        if (isSyncingRef.current) return;
        isSyncingRef.current = true;

        try {
          const response = await fetch("/api/cart/sync", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ localItems: parsedLocalCart }),
          });

          const data = await response.json();

          if (data.success && data.cartItems) {
            // Mark as synced so it won't sync again
            hasSyncedRef.current = true;
            // Clear localStorage FIRST
            localStorage.removeItem("harvest_cart");
            // Set flag to skip the localStorage write in useEffect
            isFromServerRef.current = true;
            // Update state with server data
            setCart(data.cartItems);
          }
        } catch (error) {
          console.error("Sync Error:", error);
        } finally {
          isSyncingRef.current = false;
        }
      }
      //case 2 : logged in + local empty = fetch from database
      else if (
        status === "authenticated" &&
        session?.user &&
        parsedLocalCart.length === 0
      ) {
        if (isSyncingRef.current) return;
        isSyncingRef.current = true;
        try {
          const response = await fetch("/api/cart");
          const data = await response.json();
          if (data.success && data.cartItems?.length > 0) {
            hasSyncedRef.current = true; // data fetch completed do not need to fetch again
            isFromServerRef.current = true;
            setCart(data.cartItems);
          }
        } catch (error) {
          console.error("Fetch Cart Error:", error);
        } finally {
          isSyncingRef.current = false;
        }
      }
    };

    syncWithDB();
  }, [status, session]);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* -------- ADD TO CART FUNCTION -------- */
  const addToStorage = (product, quantity = 1) => {
    try {
      if (!product?._id || quantity <= 0) return;
      if (isAddingRef.current) return;

      isAddingRef.current = true;

      const price = product.sellingPrice || product.price?.mrp;

      setCart((prevCart) => {
        const index = prevCart.findIndex(
          (item) => item.productId === product._id && item.price === price
        );

        // Update existing item
        if (index > -1) {
          const updatedCart = [...prevCart];
          updatedCart[index] = {
            ...updatedCart[index],
            quantity: updatedCart[index].quantity + quantity,
          };
          return updatedCart;
        }

        // Add new item
        return [
          ...prevCart,
          {
            productId: product._id,
            title: product.title,
            image: product.mainImage,
            price,
            quantity,
          },
        ];
      });

      toast.success(`${product.title} added to cart`);

      // release lock
      setTimeout(() => {
        isAddingRef.current = false;
      }, 300);

      //add to the database for admin abandoned cart analytics
      fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: product._id, quantity }),
      });
    } catch (error) {}
  };

  /* -------- CONTEXT VALUE -------- */
  const value = {
    cart,
    addToStorage,
    mounted,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

/* ------------------ CUSTOM HOOK ------------------ */
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};

/**isSyncing সেফগার্ডের প্রয়োজনীয়তা এবং এটি কোথায় ও কীভাবে ব্যবহার করবেন, তার বিস্তারিত ব্যাখ্যা নিচে দেওয়া হলো:

১. কেন এটি প্রয়োজন? (The "Why")
NextAuth যখন লগইন স্ট্যাটাস চেক করে, তখন status ভেরিয়েবলটি কয়েকবার পরিবর্তিত হতে পারে (যেমন: loading -> authenticated)। এর ফলে আপনার useEffect একাধিকবার ট্রিগার হতে পারে। যদি একই সাথে আপনার /api/cart/sync এপিআই-তে ৩-৪টি রিকোয়েস্ট চলে যায়, তবে ডাটাবেজে ডুপ্লিকেট ডাটা তৈরি হওয়া বা রেস কন্ডিশন (Race Condition) হওয়ার সম্ভাবনা থাকে। isSyncing সেফগার্ড নিশ্চিত করে যে, একটি সিঙ্ক প্রসেস চলাকালীন অন্য কোনো নতুন সিঙ্ক শুরু হবে না।

২. কোথায় ব্যবহার করবেন? (The "Where")
এটি আপনার 
CartContext.jsx
 ফাইলের "SYNC ON LOGIN" useEffect-এর ভেতরে ব্যবহার করা উচিত। যেহেতু এটি শুধুমাত্র এপিআই কল ব্লক করার জন্য, তাই এখানে একটি useRef ব্যবহার করা সবচেয়ে ভালো (ঠিক আপনার isAddingRef এর মতো), কারণ এর ফলে অপ্রয়োজনীয় রি-রেন্ডার হবে না। */
