import React from "react";
import { RotateCcw, ChevronRight } from "lucide-react";

import PrimaryButton from "../shared/button/PrimaryButton";

const ProductsSidebar = () => {
  // Demo States
  const categories = [
    "All",
    "Vegetables",
    "Fruits",
    "Snacks",
    "Condiments",
    "Beverages",
  ];
  const selectedCategory = "Vegetables";

  return (
    <aside className="w-full">
      <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-100 p-10 sticky top-32 border border-slate-50">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10">
          <h3 className="font-black text-slate-800 text-xl tracking-tight">
            Filters
          </h3>
          <button className="flex items-center gap-1.5 text-[0.65rem] font-black text-green-600 hover:text-green-700 transition-all uppercase tracking-[0.2em] bg-green-50 px-4 py-2 rounded-full cursor-pointer">
            <RotateCcw size={12} className="stroke-[3px]" />
            Reset
          </button>
        </div>

        <div className="lg:space-y-12 space-y-6">
          {/* Category Filter  */}
          <div>
            <label className="block text-[0.65rem] font-black text-slate-400 uppercase tracking-[0.25em] mb-6 px-1">
              Categories
            </label>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-6 py-3 rounded-[2rem] text-xs font-black transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border ${
                    selectedCategory === cat
                      ? "bg-green-600 text-white shadow-lg shadow-green-100 border-green-600"
                      : "bg-slate-50 text-slate-500 hover:bg-white hover:shadow-md border-slate-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>

          {/* 2. Price Range Filter */}
          <div>
            <label className="block text-[0.65rem] font-black text-slate-400 uppercase tracking-[0.25em] mb-8 px-1">
              Price Range
            </label>
            <div className="px-2">
              {/* Visual Range Slider Component */}
              <div className="relative h-1 w-full bg-slate-100 rounded-full mb-8">
                {/* Active Range Track */}
                <div className="absolute h-full bg-green-500 rounded-full left-[20%] right-[30%] shadow-[0_0_15px_rgba(34,197,94,0.3)]"></div>

                {/* Custom Knobs */}
                <div className="absolute top-1/2 -translate-y-1/2 left-[20%] w-6 h-6 bg-white border-[4px] border-green-500 rounded-full shadow-lg cursor-pointer hover:scale-125 transition-transform z-10"></div>
                <div className="absolute top-1/2 -translate-y-1/2 right-[30%] w-6 h-6 bg-white border-[4px] border-green-500 rounded-full shadow-lg cursor-pointer hover:scale-125 transition-transform z-10"></div>
              </div>

              {/* Price Values Display */}
              <div className="flex justify-between items-center gap-4">
                <div className="flex-1 bg-slate-50 border border-slate-100 p-4 rounded-[1.5rem]">
                  <span className="text-white bg-slate-400 text-[0.5rem] px-2 py-0.5 rounded-full block w-fit mb-1 font-black uppercase tracking-widest">
                    Min
                  </span>
                  <div className="text-sm font-black text-slate-700">$20</div>
                </div>
                <div className="w-4 h-[2px] bg-slate-200"></div>
                <div className="flex-1 bg-slate-50 border border-slate-100 p-4 rounded-[1.5rem]">
                  <span className="text-white bg-slate-400 text-[0.5rem] px-2 py-0.5 rounded-full block w-fit mb-1 font-black uppercase tracking-widest">
                    Max
                  </span>
                  <div className="text-sm font-black text-slate-700">$500</div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>
        </div>

        {/* Action Button */}
        <div className="lg:mt-12 mt-6 w-52 mx-auto">
          <PrimaryButton>Apply Selection</PrimaryButton>
        </div>
      </div>
    </aside>
  );
};

export default ProductsSidebar;
