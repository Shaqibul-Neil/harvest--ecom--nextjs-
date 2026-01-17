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
  // Avoid server/client branching during render
  const [mounted, setMounted] = useState(false);
  /* -------- CART STATE -------- */
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // Check if the user is logged in or not
  const { data: session, status } = useSession();

  /* -------- FETCH CART ON LOGIN -------- */
  useEffect(() => {
    const fetchCartFromDB = async () => {
      // Still loading if status is loading
      if (status === "loading") {
        setIsLoading(true);
        return;
      }
      // If not authenticated, stop loading (no cart to fetch)
      if (status === "unauthenticated") {
        setIsLoading(false);
        return;
      }

      // Authenticated user - fetch cart from DB
      if (status === "authenticated" && session?.user) {
        setIsLoading(true);
        try {
          const response = await fetch("/api/cart", { cache: "no-store" });
          const data = await response.json();
          setCart(data.success && data.cartItems ? data.cartItems : []);
        } catch (error) {
          console.error("Fetch Cart Error:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchCartFromDB();
  }, [status, session]);

  /* -------- MOUNTED STATE -------- */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* -------- ADD TO CART (Amazon Style - productId only) -------- */
  const addToStorage = async (product, quantity = 1) => {
    try {
      // Double-check: Only logged-in users can add to cart
      if (status !== "authenticated") {
        toast.error("Please login to add items to cart");
        return;
      }
      if (!product?._id || quantity <= 0) return;
      if (isAddingRef.current) return;

      isAddingRef.current = true;
      const currentPrice = product.sellingPrice || product.price?.mrp;

      setCart((prevCart) => {
        // Amazon Style: Check by productId ONLY
        const index = prevCart.findIndex(
          (item) => item.productId === product._id,
        );

        // Update existing item
        if (index > -1) {
          const updatedCart = [...prevCart];
          const existingItem = updatedCart[index];

          // Check if price changed from current
          const priceChanged = existingItem.price !== currentPrice;

          updatedCart[index] = {
            ...existingItem,
            quantity: existingItem.quantity + quantity,
            // Always update to current price
            price: currentPrice,
            // Store the PREVIOUS price (so user sees what it was before)
            previousPrice: priceChanged
              ? existingItem.price
              : existingItem.previousPrice,
            // Keep track of ORIGINAL price when first added
            originalPrice: existingItem.originalPrice || existingItem.price,
            hasPriceChanged: priceChanged,
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
            price: currentPrice,
            previousPrice: null, // No previous price when first added
            originalPrice: currentPrice, // Track original price
            hasPriceChanged: false,
            quantity,
            stock: product.stock?.quantity || 0,
          },
        ];
      });

      toast.success(`${product.title} added to cart`);

      // Release lock
      setTimeout(() => {
        isAddingRef.current = false;
      }, 300);

      // Save to database (logged-in users only)
      if (session?.user) {
        await fetch("/api/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productId: product._id, quantity }),
        });
      }
    } catch (error) {
      console.error("Add to cart error:", error);
    }
  };

  /* -------- INCREASE QUANTITY (Local only - sync at checkout) -------- */
  const increaseQuantity = (productId) => {
    // find the current item
    const currentItem = cart.find((item) => item.productId === productId);

    // Stock check - before setCart
    if (!currentItem) return;
    if (currentItem.stock <= currentItem.quantity) {
      toast.error("Stock Limit Reached");
      return;
    }
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.productId === productId);
      if (index === -1) return prevCart;
      const item = prevCart[index];
      const updatedCart = [...prevCart];
      updatedCart[index] = {
        ...updatedCart[index],
        quantity: item.quantity + 1,
      };
      return updatedCart;
    });
  };

  /* -------- DECREASE QUANTITY (Local only - sync at checkout) -------- */
  const decreaseQuantity = (productId) => {
    // find the current item
    const currentItem = cart.find((item) => item.productId === productId);

    // Stock check - before setCart
    if (!currentItem || currentItem.quantity <= 1) return;

    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.productId === productId);
      if (index === -1) return prevCart;
      const item = prevCart[index];
      if (item.quantity <= 1) return prevCart;
      const updatedCart = [...prevCart];
      updatedCart[index] = {
        ...updatedCart[index],
        quantity: item.quantity - 1,
      };
      return updatedCart;
    });
  };

  /* -------- REMOVE FROM CART -------- */
  const removeFromCart = (productId) => {
    // Find item first
    const item = cart.find((item) => item.productId === productId);

    // Update cart state (optimistic UI update)
    setCart((prevCart) => {
      return prevCart.filter((item) => item.productId !== productId);
    });

    // Show toast (outside setCart)
    if (item) {
      toast.success(`${item.title} removed from cart`);
    }

    // Delete from database (logged-in users only)
    if (session?.user) {
      fetch("/api/cart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });
    }
  };

  /* -------- CONTEXT VALUE -------- */
  const value = {
    cart,
    isLoading,
    addToStorage,
    mounted,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
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
