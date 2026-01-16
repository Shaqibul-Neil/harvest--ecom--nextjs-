"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

/* ------------------ CONTEXT ------------------ */
const CartContext = createContext(null);

/* ------------------ PROVIDER ------------------ */
export const CartProvider = ({ children }) => {
  // Prevent double execution (button spam / strict mode safety)
  const isAddingRef = useRef(false);

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
    localStorage.setItem("harvest_cart", JSON.stringify(cart));
  }, [cart]);

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
