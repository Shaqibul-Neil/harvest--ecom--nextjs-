"use client";
import React from "react";

const AddToCartButton = ({ product }) => {
  return (
    <button
      className="addCart flex justify-center h-11 w-full items-center gap-1 bg-green-600"
      onClick={() => alert(product.title)}
    >
      <div className="svg-wrapper-1">
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
      </div>
      <span>Add to Cart</span>
    </button>
  );
};

export default AddToCartButton;
