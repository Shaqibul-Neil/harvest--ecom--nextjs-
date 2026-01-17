"use client";
import EmptyCart from "@/components/cart/EmptyCart";
import PrimaryButton from "@/components/shared/button/PrimaryButton";
import QuantityButtons from "@/components/shared/button/QuantityButtons";
import MainHeadings from "@/components/shared/headings/MainHeadings";
import SubHeadings from "@/components/shared/headings/SubHeadings";
import { useCart } from "@/context/CartContext";
import { ArrowRight, Minus, Plus, Tag, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();
  console.log(cart);
  const subtotal =
    cart?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  if (!cart || cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="min-h-screen bg-[#fcfdfc] pb-20 pt-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto lg:space-y-16 space-y-10 lg:py-16 py-8">
        {/* Header Section */}
        <div className="lg:space-y-4 md:space-y-2 space-y-1">
          <SubHeadings>Cart</SubHeadings>
          <div className="flex md:justify-between md:flex-row flex-col gap-6">
            <MainHeadings highlight="Cart" text="Collection">
              My{" "}
            </MainHeadings>
            <div className="flex gap-4">
              <Link
                href="/products"
                className="flex items-center gap-2 text-green-600 font-bold hover:underline transition-all"
              >
                Continue Shopping <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <p className="text-slate-500 font-medium font-poppins text-sm uppercase tracking-widest my-4">
            You have {cart.length} items in your carts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Cart Items - LEFT SIDE */}
          <div className="lg:col-span-8 space-y-6">
            {cart.map((item) => (
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
                    <h3 className="text-xl font-bold text-slate-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="md:text-xl text-lg font-black text-slate-900">
                      ${item.price * item.quantity}
                    </p>
                  </div>

                  {/* Row 2: Only Unit Price */}
                  <div>
                    <p className="text-green-600 font-bold text-lg mb-4">
                      ${item.price}
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

                    {/* Delete Icon */}
                    <button
                      className="p-3 text-red-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-300 cursor-pointer"
                      onClick={() => removeFromCart(item.productId, item.price)}
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Summary - RIGHT SIDE (Baki sob ager mto) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)]">
              <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-2">
                SUMMARY
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Subtotal</span>
                  <span className="text-slate-900 font-bold">৳{subtotal}</span>
                </div>
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Shipping Estimate</span>
                  <span className="text-slate-900 font-bold">
                    {shipping === 0 ? "FREE" : `$${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Taxes (Included)</span>
                  <span className="text-slate-900 font-bold">$0.00</span>
                </div>

                <div className="pt-4">
                  <div className="relative group">
                    <Tag
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-green-600 transition-colors"
                      size={18}
                    />
                    <input
                      type="text"
                      placeholder="Promo Code"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-24 focus:ring-2 focus:ring-green-100 focus:border-green-500 outline-none transition-all font-medium"
                    />
                    <button className="absolute right-2 top-2 bottom-2 px-4 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-green-600 transition-all">
                      APPLY
                    </button>
                  </div>
                </div>
                <div className="border-t border-dashed border-slate-200 mt-6 pt-6">
                  <div className="flex justify-between items-end">
                    <span className="text-slate-900 font-bold text-lg">
                      Total Amount
                    </span>
                    <span className="text-4xl font-black text-green-600 tracking-tighter">
                      ৳{total}
                    </span>
                  </div>
                </div>
              </div>
              <PrimaryButton>CHECKOUT NOW</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
