import React from "react";

export default function ProductCardSkeleton() {
  return (
    <div className="relative rounded-3xl border border-gray-100 bg-white shadow-sm w-full animate-pulse">
      {/* Product Image Placeholder */}
      <div className="relative mb-4 flex h-50 w-full items-center justify-center rounded-t-2xl bg-gray-200 overflow-hidden">
        {/* empty placeholder */}
      </div>

      {/* Content */}
      <div className="space-y-2 p-4">
        <div className="space-y-1">
          {/* Category & Rating Row */}
          <div className="flex items-center justify-between">
            <span className="h-3 w-16 bg-gray-300 rounded"></span>
            <div className="flex gap-0.5">
              <span className="h-3 w-3 bg-gray-300 rounded-full"></span>
              <span className="h-3 w-3 bg-gray-300 rounded-full"></span>
              <span className="h-3 w-3 bg-gray-300 rounded-full"></span>
              <span className="h-3 w-3 bg-gray-300 rounded-full"></span>
              <span className="h-3 w-3 bg-gray-300 rounded-full"></span>
            </div>
          </div>

          {/* Title */}
          <div className="h-4 w-3/4 bg-gray-300 rounded mt-1"></div>

          {/* Price & Unit Row */}
          <div className="flex items-center justify-between mt-2 pt-1">
            <div className="flex items-center gap-2">
              <div className="h-5 w-12 bg-gray-300 rounded"></div>
            </div>

            {/* Unit / Weight */}
            <div className="h-4 w-10 bg-gray-300 rounded"></div>
          </div>
        </div>

        {/* Action Button Placeholder */}
        <div className="h-10 w-full bg-gray-300 rounded-lg mt-2"></div>
      </div>
    </div>
  );
}
