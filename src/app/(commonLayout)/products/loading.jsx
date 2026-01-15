import FilterSidebarSkeleton from "@/components/shared/skeletons/FilterSidebarSkeleton";
import ProductCardSkeleton from "@/components/shared/skeletons/ProductCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="space-y-8 max-w-[1440px] w-11/12 mx-auto lg:py-20 py-16 animate-pulse">
      {/* Title section skeleton */}
      <div className="space-y-4">
        {/* SubHeading */}
        <div className="h-3 w-28 bg-slate-200 rounded-full" />

        {/* Main heading */}
        <div className="h-8 w-64 bg-slate-200 rounded-xl" />
      </div>

      {/* Search bar skeleton */}
      <div className="relative">
        {/* Search icon placeholder */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 bg-slate-200 rounded-full" />

        {/* Input placeholder */}
        <div className="w-full h-11 bg-slate-200 rounded-lg" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <FilterSidebarSkeleton />
        </div>
        <div className="col-span-1 lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
