"use client";

import Image from "next/image";
import { Eye, GitCompare, Heart, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import AddToCartButton from "../shared/button/AddToCartButton";
import IconButton from "../shared/button/IconButton";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProductCard = ({ product }) => {
  const [hoverState, setHoverState] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Destructure product data
  const { category, mainImage, price, rating, unit, title, sellingPrice } =
    product || {};

  // Star Rating Helper
  const renderStars = (avgRating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={cn(
          "fill-current",
          i < Math.round(avgRating)
            ? "text-green-600"
            : "text-gray-200 stroke-gray-200"
        )}
      />
    ));
  };

  return (
    <div
      className="relative rounded-[2rem] shadow-xl shadow-slate-200/50 bg-white border border-slate-50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-100/50 hover:border-green-100 w-full group overflow-hidden"
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      {/* Product Image */}
      <div className="relative">
        <div className="relative flex h-52 w-full items-center justify-center bg-white overflow-hidden p-6">
          <Image
            src={mainImage}
            alt={title || "Product Image"}
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        {/* Hover Buttons with Framer Motion */}

        <AnimatePresence>
          {(hoverState || isMobile) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 absolute bottom-2 left-1/2 -translate-x-1/2"
            >
              {/* Wishlist */}
              <IconButton icon={Heart} />

              {/* Quick View */}
              <IconButton icon={Eye} />

              {/* Compare */}
              <IconButton icon={GitCompare} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content Area */}
      <div className="bg-green-50/50 space-y-3 p-6">
        <div className="space-y-2">
          {/* Category & Rating Row */}
          <div className="flex items-center justify-between">
            <span className="text-[0.6rem] font-black text-slate-400 uppercase tracking-[0.2em]">
              {category}
            </span>
            <div className="flex gap-0.5">
              {renderStars(rating?.average || 0)}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-extrabold text-slate-800 line-clamp-1 group-hover:text-green-700 transition-colors tracking-tight">
            {title}
          </h3>

          {/* Final Row: Price & Unit */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-green-700">
                ${price?.discountType ? sellingPrice : price?.mrp}
              </span>
              {price?.discount > 0 && (
                <span className="text-sm font-bold text-slate-300 line-through">
                  ${price.mrp}
                </span>
              )}
            </div>

            <span className="text-xs font-bold text-slate-400 bg-white px-2 py-1 rounded-lg border border-slate-100">
              {unit}
            </span>
          </div>
        </div>

        {/* Action button */}
        <div className="pt-2">
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
