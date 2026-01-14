import ProductCardSkeleton from "@/components/shared/skeletons/ProductCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(9).map((_, i) => <ProductCardSkeleton key={i} />)]}
    </div>
  );
};

export default loading;
