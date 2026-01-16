"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  ChevronRight,
  Share2,
  Heart,
  Minus,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import AddToCartButton from "../shared/button/AddToCartButton";
import QuantityButtons from "../shared/button/QuantityButtons";

const ProductDetailsCard = ({ product }) => {
  const [activeTab, setActiveTab] = useState("details");
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const {
    title,
    category,
    mainImage,
    price,
    rating,
    unit,
    stock,
    shortDescription,
    longDescription,
    vendor,
    tags,
    nutrition,
    specifications,
    sellingPrice,
    discountAmount,
  } = product;

  const tabs = [
    { id: "details", label: "Details" },
    { id: "specification", label: "Specification" },
    { id: "vendor", label: "Vendor" },
    { id: "reviews", label: "Reviews" },
  ];

  const renderStars = (avgRating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={cn(
          "fill-current",
          i < Math.round(avgRating)
            ? "text-green-500"
            : "text-slate-200 shadow-sm"
        )}
      />
    ));
  };

  const unitPrice = sellingPrice || price?.mrp || 0;
  const totalPrice = unitPrice * quantity;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Top Section: Grid 6 Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-6 md:gap-8 gap-6 md:mb-20 mb-12">
        {/* Main Content: 5 Columns */}
        <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-4 gap-12 bg-white rounded-[2.5rem] md:p-10 shadow-2xl shadow-slate-100 border border-slate-50">
          {/* LHS: Image Panel (60% / 3 Columns) */}
          <div className="md:col-span-2 space-y-6">
            <div className="relative aspect-square rounded-[2rem] bg-slate-50 overflow-hidden group border border-slate-100/50">
              <Image
                src={mainImage}
                alt={title}
                fill
                className="object-contain p-12 transition-transform duration-700 group-hover:scale-105 shadow-2xl"
                priority
              />

              {/* Stock Status Badge */}
              <div className="absolute top-6 left-6">
                <span
                  className={cn(
                    "px-4 py-2 rounded-xl text-[0.65rem] font-black uppercase tracking-widest shadow-lg backdrop-blur-md",
                    stock?.status === "IN_STOCK"
                      ? "bg-green-500/90 text-white"
                      : "bg-rose-500/90 text-white"
                  )}
                >
                  {stock?.status?.replace("_", " ")}
                </span>
              </div>

              <div className="absolute top-6 right-6 flex flex-col gap-3">
                <button className="p-3 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white hover:bg-white text-slate-600 transition-all active:scale-90">
                  <Heart size={20} />
                </button>
                <button className="p-3 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white hover:bg-white text-slate-600 transition-all active:scale-90">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            {/* Gallery Thumbnails Placeholder */}
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-24 h-24 rounded-2xl bg-slate-50 border border-slate-100 p-2 cursor-pointer hover:border-green-300 transition-colors overflow-hidden relative"
                >
                  <Image
                    src={mainImage}
                    alt="thumbnail"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RHS: Info Panel (40% / 2 Columns) */}
          <div className="md:col-span-2 flex flex-col justify-between py-2">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  {/* Category */}
                  <span className="inline-block px-4 py-1.5 bg-green-50 text-green-600 text-[0.65rem] font-black uppercase tracking-[0.2em] rounded-full">
                    {category}
                  </span>
                  {/* SKU */}
                  <span className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest text-xs">
                    SKU: {stock?.sku}
                  </span>
                </div>
                {/* Title */}
                <h1 className="text-4xl font-black text-slate-800 tracking-tight leading-tight">
                  {title}
                </h1>
                {/* Rating */}
                <div className="flex items-center gap-4">
                  <div className="flex gap-1">
                    {renderStars(rating?.average)}
                  </div>
                  <span className="text-sm font-bold text-slate-400">
                    ({rating?.total} Reviews)
                  </span>
                </div>
              </div>
              {/* Price */}
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-black text-green-600">
                  ${totalPrice}
                </span>
                {price?.discount > 0 && (
                  <span className="text-xl font-bold text-slate-300 line-through">
                    ${price.mrp * quantity}
                  </span>
                )}
                <span className="text-sm font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100 ml-auto">
                  Per {unit}
                </span>
              </div>

              <div className="h-px bg-slate-100" />

              <p className="text-slate-500 leading-relaxed font-medium">
                {shortDescription}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs md:text-sm font-bold text-slate-600">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                    <ShieldCheck size={20} />
                  </div>
                  <span>Quality Guarantee From {vendor?.name}</span>
                </div>
                <div className="flex items-center gap-4 text-xs md:text-sm font-bold text-slate-600">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                    <Truck size={20} />
                  </div>
                  <span>Fast Delivery within 24 Hours</span>
                </div>
              </div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4">
                {tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-50 text-slate-400 rounded-lg text-[0.6rem] font-black uppercase tracking-wider border border-slate-100"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 space-y-4">
              <div className="flex items-center md:flex-row flex-col gap-4">
                <QuantityButtons
                  quantity={quantity}
                  min={1}
                  max={stock?.quantity}
                  onIncrease={() => setQuantity((prev) => prev + 1)}
                  onDecrease={() => setQuantity((prev) => prev - 1)}
                />
                <div className="flex-1">
                  <AddToCartButton
                    product={product}
                    quantity={quantity}
                    className="h-14 rounded-2xl shadow-xl shadow-green-200"
                  />
                </div>
              </div>
              <p className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest text-center">
                Only {stock?.quantity - quantity} left in stock
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar: 1 Column */}
        <div className="lg:col-span-1 hidden lg:block text-center border-l border-slate-100">
          <div className="sticky top-32 space-y-6 pt-10">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] transform -rotate-90 origin-center whitespace-nowrap opacity-50 mx-auto">
              Suggested Products
            </h3>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-white rounded-[2.5rem] md:p-10 p-4 shadow-2xl shadow-slate-100 border border-slate-50 overflow-hidden">
        <div className="flex border-b border-slate-100 mb-10 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-8 py-5 md:text-sm text-xs font-black uppercase tracking-widest transition-all relative",
                activeTab === tab.id
                  ? "text-green-600"
                  : "text-slate-400 hover:text-slate-600"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 rounded-full" />
              )}
            </button>
          ))}
        </div>

        <div className="min-h-[300px] animate-in fade-in slide-in-from-bottom-2 duration-500">
          {activeTab === "details" && (
            <div className="space-y-10">
              <div className="space-y-6">
                {longDescription?.paragraphs?.map((p, i) => (
                  <p
                    key={i}
                    className="text-slate-500 leading-loose md:text-lg font-medium text-sm"
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Nutrition Facts Grid */}
              {nutrition && (
                <div className="bg-slate-50 rounded-[2rem] md:p-8 border border-slate-100 p-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center text-white">
                      <Star size={16} />
                    </div>
                    <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest">
                      Nutrition Facts
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {Object.entries(nutrition).map(([key, value]) => (
                      <div
                        key={key}
                        className="bg-white lg:p-4 p-2 rounded-2xl border border-slate-100 shadow-sm text-center"
                      >
                        <span className="block text-[0.6rem] font-black text-slate-400 tracking-wider mb-1 capitalize">
                          {key}
                        </span>
                        <span className="md:text-sm text-xs font-black text-slate-800">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "specification" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                <h4 className="font-black text-slate-800 mb-4 uppercase tracking-widest text-xs">
                  General Specs
                </h4>
                <ul className="space-y-3">
                  <li className="flex justify-between text-sm font-bold">
                    <span className="text-slate-400">Unit</span>{" "}
                    <span className="text-slate-700">{unit}</span>
                  </li>
                  <li className="flex justify-between text-sm font-bold">
                    <span className="text-slate-400">Category</span>{" "}
                    <span className="text-slate-700">{category}</span>
                  </li>
                  <li className="flex justify-between text-sm font-bold">
                    <span className="text-slate-400">Available</span>{" "}
                    <span className="text-slate-700">
                      {stock?.quantity} Units
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white lg:p-6 p-4 rounded-[2rem] border border-slate-100 space-y-6 shadow-sm">
                <h4 className="font-black text-slate-800 uppercase tracking-widest text-xs border-b border-slate-200 pb-4">
                  Product Details
                </h4>
                <ul className="space-y-3">
                  {specifications &&
                    Object.entries(specifications)
                      .filter(([key]) => key !== "productType")
                      .map(([key, value]) => (
                        <li
                          key={key}
                          className="flex justify-between text-sm font-bold"
                        >
                          <span className="text-slate-400 uppercase tracking-widest text-[0.65rem]">
                            {key.replace(/([A-Z])/g, " $1")}
                          </span>
                          <span className="text-slate-700">{value}</span>
                        </li>
                      ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === "vendor" && (
            <div className="flex md:items-start md:flex-row flex-col items-center gap-8 bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-lg text-green-600 font-black text-2xl border border-slate-50">
                {vendor?.name?.charAt(0)}
              </div>
              <div className="space-y-3">
                <h4 className="md:text-2xl text-xl font-black text-slate-800">
                  {vendor?.name}
                </h4>
                <p className="text-slate-500 font-medium">{vendor?.email}</p>
                <p className="text-slate-500 max-w-2xl leading-relaxed">
                  {vendor?.shortDescription}
                </p>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="flex flex-col items-center justify-center space-y-6 py-10 opacity-60">
              <div className="flex gap-1">{renderStars(rating?.average)}</div>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">
                No recent reviews to display
              </p>
              <button className="px-8 py-3 bg-slate-800 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-600 transition-all">
                Write a Review
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
