import React from "react";
import SubHeadings from "../shared/headings/SubHeadings";
import MainHeadings from "../shared/headings/MainHeadings";

import ProductCard from "../cards/ProductCard";
import ProductCardSkeleton from "../shared/skeletons/ProductCardSkeleton";
import { getFeaturedProductsController } from "@/controllers/productsController";

const FeaturedProducts = async () => {
  //fetch data
  const { result } = await getFeaturedProductsController();
  console.log(result);
  return (
    <div className="space-y-16 py-12">
      <div className="space-y-4">
        <SubHeadings>Featured Products</SubHeadings>
        <div className="flex lg:justify-between lg:items-center lg:flex-row flex-col space-y-4">
          <MainHeadings highlight="Collection">Our Featured </MainHeadings>
          <div className="flex gap-4">
            <button className="px-6 py-2.5 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-200">
              Go to Shop
            </button>
          </div>
        </div>
      </div>
      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {result.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <ProductCardSkeleton />
    </div>
  );
};

export default FeaturedProducts;
