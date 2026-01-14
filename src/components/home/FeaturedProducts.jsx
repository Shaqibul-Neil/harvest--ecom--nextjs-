import React from "react";
import SubHeadings from "../shared/headings/SubHeadings";
import MainHeadings from "../shared/headings/MainHeadings";
import { getProducts } from "@/controllers/productsController";
import ProductCard from "../cards/ProductCard";

const FeaturedProducts = async () => {
  //fetch data
  const { result } = await getProducts();
  console.log(result);
  return (
    <div className="space-y-16">
      {/* Title section */}
      <div className="space-y-2">
        <SubHeadings>Feature Products</SubHeadings>
        <div className="flex lg:justify-between lg:items-center lg:flex-row flex-col space-y-2">
          <MainHeadings>Our Featured Collection</MainHeadings>
          <div className="flex gap-3">
            <button className="w-24 h-11 bg-green-500 text-white rounded-lg">
              demo
            </button>
            <button className="w-24 h-11 bg-green-500 text-white rounded-lg">
              demo
            </button>
            <button className="w-24 h-11 bg-green-500 text-white rounded-lg">
              demo
            </button>
          </div>
        </div>
      </div>
      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {result.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
