"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const ProductCard = ({ product }) => {
  // Destructure product data
  const { category, mainImage, price, rating, unit, title } = product || {};

  // Calculate Discounted Price
  const discountAmount =
    price?.discountType === "PERCENT"
      ? (price.mrp * price.discount) / 100
      : price?.discount;

  const sellingPrice = price?.mrp - discountAmount;

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
    <div className="group relative w-[280px] rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md hover:border-green-100 w-full">
      {/* NEW Badge - Vertical Text */}

      {/* Product Image */}
      <div className="relative mb-4 flex h-[200px] w-full items-center justify-center rounded-2xl bg-white overflow-hidden">
        <Image
          src={mainImage}
          alt={title || "Product Image"}
          fill
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className=" bg-green-50">
        <div className="p-4 space-y-1">
          {/* Category & Rating Row */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
              {category}
            </span>
            <div className="flex gap-0.5">
              {renderStars(rating?.average || 0)}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base font-bold text-gray-800 line-clamp-1 group-hover:text-green-700 transition-colors">
            {title}
          </h3>

          {/* Price & Unit Row */}
          <div className="flex items-center justify-between mt-2 pt-1">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-green-700">
                ${price?.discountType ? Math.round(sellingPrice) : price?.mrp}
              </span>
              {price?.discount > 0 && (
                <span className="text-sm font-medium text-gray-400 line-through decoration-gray-400">
                  ${price.mrp}
                </span>
              )}
            </div>

            {/* Unit / Weight Placeholder from image */}
            <span className="text-sm font-medium text-gray-400">{unit}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
