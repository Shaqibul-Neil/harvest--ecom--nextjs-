"use client";
import { Heart, Trash2 } from "lucide-react";
import React from "react";
import QuantityButtons from "../shared/button/QuantityButtons";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const CartCard = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  return (
    <div
      key={item.productId}
      className="group relative flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(22,163,74,0.1)] transition-all duration-500"
    >
      {/* 1. Image Section (Ager style thakbe) */}
      <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-2xl bg-slate-50">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-contain p-6 transition-transform duration-700 group-hover:scale-105 shadow-2xl"
        />
      </div>

      {/* 2. Content Section (Layout Change) */}
      <div className="flex-1 w-full flex flex-col justify-between self-stretch">
        {/* Row 1: Title and Total Price */}
        <div className="flex justify-between items-center gap-2">
          <h3 className="md:text-xl text-base font-bold text-slate-800 mb-1">
            {item.title}
          </h3>
          <p className="md:text-xl text-sm font-black text-slate-900">
            <span className="font-semibold">Total:</span> $
            {(item.price * item.quantity).toFixed(2)}
          </p>
        </div>

        {/* Row 2: Only Unit Price */}
        <div>
          <p className="text-slate-400 font-bold mb-4 text-sm">
            <span className="font-semibold">Unit Price:</span> ${item.price}
          </p>
        </div>

        {/* Row 3: Action Buttons (flex justify-between) */}
        <div className="flex flex-row justify-between items-center gap-4">
          {/* Quantity Selector Group */}
          <div className="flex items-center justify-center sm:justify-start gap-4">
            <QuantityButtons
              quantity={item.quantity}
              min={1}
              max={item.stock}
              onIncrease={() => increaseQuantity(item.productId)}
              onDecrease={() => decreaseQuantity(item.productId)}
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="p-3 text-green-400 hover:text-green-500 bg-green-50 hover:bg-green-100 rounded-full transition-all duration-300 cursor-pointer">
              <Heart size={20} />
            </button>
            {/* Delete Icon */}
            <button
              className="p-3 text-red-400 hover:text-red-500 bg-red-50 hover:bg-red-100 rounded-full transition-all duration-300 cursor-pointer"
              onClick={() => removeFromCart(item.productId, item.price)}
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
