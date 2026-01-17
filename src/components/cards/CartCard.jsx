"use client";
import { Heart, Trash2, TrendingDown, TrendingUp } from "lucide-react";
import React from "react";
import QuantityButtons from "../shared/button/QuantityButtons";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const CartCard = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  // Calculate price change direction (compare with previousPrice)
  const priceIncreased =
    item.hasPriceChanged &&
    item.previousPrice &&
    item.previousPrice !== item.price &&
    item.price > item.previousPrice;
  const priceDecreased =
    item.hasPriceChanged &&
    item.previousPrice &&
    item.price < item.previousPrice;

  return (
    <div
      key={item.productId}
      className="group relative flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(22,163,74,0.1)] transition-all duration-500"
    >
      {/* 1. Image Section */}
      <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-2xl bg-slate-50">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-contain p-6 transition-transform duration-700 group-hover:scale-105 shadow-2xl"
        />
      </div>

      {/* 2. Content Section */}
      <div className="flex-1 w-full flex flex-col justify-between md:space-y-2 space-y-4">
        {/* Row 1: Title and Total Price */}
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-3 md:gap-2">
          <div className="flex items-center gap-1">
            <h3 className="md:text-xl text-base font-bold text-slate-800">
              {item.title}
            </h3>
            {/* Stock Status Badge */}
            <div>
              <span
                className={cn(
                  "text-[0.65rem] font-black uppercase tracking-widest",
                  item.stock > item.quantity
                    ? "text-green-500"
                    : "text-rose-500",
                )}
              >
                ({item.stock > item.quantity ? "In Stock" : "Out of Stock"})
              </span>
            </div>
            {/*Price Change Notification */}
            {item.hasPriceChanged &&
              item.previousPrice &&
              item.previousPrice !== item.price && (
                <div
                  className={`md:text-xs font-semibold text-[10px] ${
                    priceDecreased ? "text-green-700" : "text-amber-700"
                  }`}
                >
                  {priceDecreased ? (
                    <>
                      <TrendingDown size={14} />
                    </>
                  ) : (
                    <>
                      <TrendingUp size={14} />
                    </>
                  )}
                </div>
              )}
          </div>

          <p className="md:text-xl text-sm font-black text-slate-900">
            <span className="font-semibold">Total:</span> $
            {(item.price * item.quantity).toFixed(2)}
          </p>
        </div>

        {/* Row 2: Unit Price + Price Change Notification */}

        <p className="text-slate-400 font-bold text-xs md:text-left text-center">
          <span className="font-semibold">Unit Price:</span> ${item.price}
        </p>

        {/* Row 3: Action Buttons */}
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
            {/* Delete Icon - Amazon Style: productId only */}
            <button
              className="p-3 text-red-400 hover:text-red-500 bg-red-50 hover:bg-red-100 rounded-full transition-all duration-300 cursor-pointer"
              onClick={() => removeFromCart(item.productId)}
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
