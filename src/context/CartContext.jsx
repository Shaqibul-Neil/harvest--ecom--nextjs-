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
  // FLAG: Once fetched, don't fetch again in this session
  const hasFetchedRef = useRef(false);
  // Avoid server/client branching during render
  const [mounted, setMounted] = useState(false);
  // Check if the user is logged in or not
  const { data: session, status } = useSession();

  /* -------- CART STATE -------- */
  const [cart, setCart] = useState([]);

  /* ====================================================================
     NEW SIMPLIFIED LOGIC: DARAZ STYLE (Login Required, DB Only)
     ==================================================================== */

  /* -------- FETCH CART ON LOGIN -------- */
  useEffect(() => {
    const fetchCartFromDB = async () => {
      // Only fetch for authenticated users who haven't fetched yet
      if (
        status === "authenticated" &&
        session?.user &&
        !hasFetchedRef.current
      ) {
        try {
          const response = await fetch("/api/cart", { cache: "no-store" });
          const data = await response.json();
          hasFetchedRef.current = true;
          setCart(data.success && data.cartItems ? data.cartItems : []);
        } catch (error) {
          console.error("Fetch Cart Error:", error);
        }
      }
    };

    fetchCartFromDB();
  }, [status, session]);

  /* -------- MOUNTED STATE -------- */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* -------- ADD TO CART FUNCTION (LOGIN REQUIRED) -------- */
  const addToStorage = (product, quantity = 1) => {
    try {
      // Double-check: Only logged-in users can add to cart
      if (status !== "authenticated") {
        toast.error("Please login to add items to cart");
        return;
      }

      if (!product?._id || quantity <= 0) return;
      if (isAddingRef.current) return;

      isAddingRef.current = true;

      const price = product.sellingPrice || product.price?.mrp;

      setCart((prevCart) => {
        const index = prevCart.findIndex(
          (item) => item.productId === product._id && item.price === price,
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
        fetch("/api/cart", {
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

  /* -------- INCREASE QUANTITY -------- */
  const increaseQuantity = (productId) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.productId === productId);
      if (index === -1) return prevCart;
      const item = prevCart[index];
      if (item.stock <= item.quantity) {
        toast.error("Stock Limit Reached");
        return prevCart;
      }
      const updatedCart = [...prevCart];
      updatedCart[index] = {
        ...updatedCart[index],
        quantity: item.quantity + 1,
      };
      return updatedCart;
    });
  };

  /* -------- DECREASE QUANTITY -------- */
  const decreaseQuantity = (productId) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.productId === productId);
      if (index === -1) return prevCart;
      const item = prevCart[index];
      if (item.quantity <= 1) return prevCart;
      const updatedCart = [...prevCart];
      updatedCart[index] = {
        ...updatedCart[index],
        quantity: updatedCart[index].quantity - 1,
      };
      return updatedCart;
    });
  };

  /* -------- REMOVE FROM CART -------- */
  const removeFromCart = (productId, price) => {
    // Find item first (match both productId and price)
    const item = cart.find(
      (item) => item.productId === productId && item.price === price
    );

    // Update cart state (optimistic UI update)
    setCart((prevCart) => {
      return prevCart.filter(
        (item) => !(item.productId === productId && item.price === price)
      );
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
        body: JSON.stringify({ productId, price }),
      });
    }
  };

  /* -------- CONTEXT VALUE -------- */
  const value = {
    cart,
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

/* ====================================================================
     COMMENTED OUT: OLD LOCAL STORAGE LOGIC (Daraz Style - No Guest Cart)
     ==================================================================== */

// /* -------- SYNC CART TO LOCAL STORAGE (DISABLED) -------- */
// useEffect(() => {
//   if (isFromServerRef.current) {
//     isFromServerRef.current = false;
//     return;
//   }
//   if (status === "unauthenticated") {
//     localStorage.setItem("harvest_cart", JSON.stringify(cart));
//   }
// }, [cart, status]);

// /* -------- INITIAL LOAD FOR GUEST (DISABLED) -------- */
// useEffect(() => {
//   if (mounted && status === "unauthenticated") {
//     try {
//       const localCart =
//         JSON.parse(localStorage.getItem("harvest_cart")) || [];
//       if (localCart.length > 0) {
//         setCart(localCart);
//       }
//     } catch (error) {
//       console.error("Error loading cart from localStorage:", error);
//     }
//   }
// }, [mounted, status]);

// /* -------- OLD SYNC ON LOGIN WITH MERGE (DISABLED) -------- */
// const isFromServerRef = useRef(false);
// const isSyncingRef = useRef(false);
// const hasSyncedRef = useRef(false);
//
// useEffect(() => {
//   const syncWithDB = async () => {
//     if (hasSyncedRef.current) return;
//     const localCartData = localStorage.getItem("harvest_cart");
//     const parsedLocalCart = localCartData ? JSON.parse(localCartData) : [];
//
//     if (status === "authenticated" && session?.user) {
//       if (isSyncingRef.current) return;
//       isSyncingRef.current = true;
//       try {
//         const isFirstLogin =
//           parsedLocalCart.length > 0 && !hasSyncedRef.current;
//
//         if (isFirstLogin) {
//           // MERGE LOGIC - Now disabled
//           const response = await fetch("/api/cart/sync", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ localItems: parsedLocalCart }),
//           });
//           const data = await response.json();
//           if (data.success && data.cartItems) {
//             hasSyncedRef.current = true;
//             localStorage.removeItem("harvest_cart");
//             isFromServerRef.current = true;
//             setCart(data.cartItems);
//           }
//         } else {
//           const response = await fetch("/api/cart", { cache: "no-store" });
//           const data = await response.json();
//           hasSyncedRef.current = true;
//           isFromServerRef.current = true;
//           setCart(data.success && data.cartItems ? data.cartItems : []);
//         }
//       } catch (error) {
//         console.error("Sync/Fetch Error:", error);
//       } finally {
//         isSyncingRef.current = false;
//       }
//     }
//   };
//   syncWithDB();
// }, [status, session]);
