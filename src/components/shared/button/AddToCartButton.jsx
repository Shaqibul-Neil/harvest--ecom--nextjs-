"use client";
import { useCart } from "@/context/CartContext";
import { showLoginRequiredAlert } from "@/lib/toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddToCartButton = ({ product, quantity = 1, className }) => {
  const [loading, setLoading] = useState(false);
  const { addToStorage } = useCart();
  const { status } = useSession();
  const router = useRouter();

  const handleAddToCart = async () => {
    // Check if user is logged in
    if (status !== "authenticated") {
      // Show SweetAlert for login required
      const result = await showLoginRequiredAlert();
      if (result.isConfirmed) {
        // Redirect to login page
        router.push("/login");
      }
      return;
    }

    // User is logged in, proceed with adding to cart
    setLoading(true);
    addToStorage(product, quantity);
    setLoading(false);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={loading}
      className={`addCart flex justify-center h-11 items-center gap-2 font-bold rounded-2xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      <div className="svg-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
        </svg>
      </div>
      <span>{loading ? "Adding..." : "Add to Cart"}</span>
    </button>
  );
};

export default AddToCartButton;
