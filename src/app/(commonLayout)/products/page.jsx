import ProductCard from "@/components/cards/ProductCard";
import MainHeadings from "@/components/shared/headings/MainHeadings";
import SubHeadings from "@/components/shared/headings/SubHeadings";
import ProductsSidebar from "@/components/sidebar/ProductsSidebar";
import { getAllProductsController } from "@/controllers/productsController";
import { Search } from "lucide-react";
import React from "react";

export const metadata = {
  title: "All Products",
  description: "An E-commerce app for fresh vegetables and fruits",
};

const Products = async () => {
  //fetch data
  const { result } = await getAllProductsController();
  console.log(result);
  return (
    <div className="space-y-8 max-w-[1440px] w-11/12 mx-auto lg:py-20 py-16">
      {/* Title section */}
      <div className="space-y-2">
        <SubHeadings>All Products</SubHeadings>
        <div className="flex lg:justify-between lg:items-center lg:flex-row flex-col space-y-2">
          <MainHeadings highlight="Collections">Our Fresh</MainHeadings>
        </div>
      </div>
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search by a product name or category"
          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
        />
      </div>
      {/* Card Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <ProductsSidebar />
        </div>
        <div className="col-span-1 lg:col-span-3 space-y-6">
          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {result.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
