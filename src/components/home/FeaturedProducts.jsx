import React from "react";
import SubHeadings from "../shared/headings/SubHeadings";
import MainHeadings from "../shared/headings/MainHeadings";

import ProductCard from "../cards/ProductCard";
import { getFeaturedProductsController } from "@/controllers/productsController";
//const delay = (ms)=> new Promise(resolve=>setTimeout(resolve, ms))

const FeaturedProducts = async () => {
  //await delay(10000);
  //fetch data
  const { result } = await getFeaturedProductsController();
  //console.log(result);
  return (
    <div className="space-y-16 py-12">
      <div className="space-y-6">
        <SubHeadings>Featured Products</SubHeadings>
        <div className="flex lg:justify-between lg:items-end lg:flex-row flex-col gap-6">
          <MainHeadings highlight="Collection">Our Featured </MainHeadings>
          <div className="flex gap-4">
            <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-green-600 transition-all shadow-2xl shadow-slate-200 active:scale-95">
              Explore Shop
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
    </div>
  );
};

export default FeaturedProducts;
