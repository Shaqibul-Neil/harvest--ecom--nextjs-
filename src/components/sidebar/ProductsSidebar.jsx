import React from "react";
import { RotateCcw, ChevronRight } from "lucide-react";

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
      <div className="bg-white rounded-xl shadow-sm shadow-slate-200/60 p-8 sticky top-32 border border-slate-50">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10">
          <h3 className="font-semibold text-gray-800 text-xl">Filters</h3>
          <button className="flex items-center gap-1.5 text-[0.65rem] font-semibold text-green-600 hover:text-green-700 transition-all uppercase tracking-[0.15em] bg-green-50 px-3 py-1.5 rounded-xl cursor-pointer">
            <RotateCcw size={12} className="stroke-[2px]" />
            Reset
          </button>
        </div>

        <div className="space-y-10">
          {/* 1. Category Filter - Pill Style (Like Blood Group) */}
          <div>
            <label className="block text-[0.65rem] font-semibold text-slate-400 uppercase tracking-[0.2em] mb-5 px-1">
              Categories
            </label>
            <div className="flex flex-wrap gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 hover:scale-105 active:scale-90 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-green-600 text-white shadow-md shadow-green-200 ring-2 ring-green-100"
                      : "bg-slate-50 text-slate-500 hover:bg-white hover:shadow-md border border-slate-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>

          {/* 2. Price Range Filter - Modern Dual Range Style */}
          <div>
            <label className="block text-[0.65rem] font-semibold text-slate-400 uppercase tracking-[0.2em] mb-8 px-1">
              Price Range
            </label>
            <div className="px-2">
              {/* Visual Range Slider Component */}
              <div className="relative h-1.5 w-full bg-slate-100 rounded-full mb-8">
                {/* Active Range Track */}
                <div className="absolute h-full bg-green-500 rounded-full left-[20%] right-[30%] shadow-[0_0_15px_rgba(34,197,94,0.3)]"></div>

                {/* Custom Knobs (Mockup) */}
                <div className="absolute top-1/2 -translate-y-1/2 left-[20%] w-5 h-5 bg-white border-[3px] border-green-500 rounded-full shadow-lg cursor-pointer hover:scale-125 transition-transform z-10"></div>
                <div className="absolute top-1/2 -translate-y-1/2 right-[30%] w-5 h-5 bg-white border-[3px] border-green-500 rounded-full shadow-lg cursor-pointer hover:scale-125 transition-transform z-10"></div>
              </div>

              {/* Price Values Display */}
              <div className="flex justify-between items-center gap-3">
                <div className="flex-1 bg-slate-50 border border-slate-100 p-3 rounded-2xl">
                  <span className="text-white bg-slate-400 text-[0.5rem] px-1.5 py-0.5 rounded-md block w-fit mb-1 font-semibold uppercase">
                    Min
                  </span>
                  <div className="text-sm font-semibold text-slate-700">
                    $20
                  </div>
                </div>
                <div className="w-4 h-[2px] bg-slate-200"></div>
                <div className="flex-1 bg-slate-50 border border-slate-100 p-3 rounded-2xl">
                  <span className="text-white bg-slate-400 text-[0.5rem] px-1.5 py-0.5 rounded-md block w-fit mb-1 font-semibold uppercase">
                    Max
                  </span>
                  <div className="text-sm font-semibold text-slate-700">
                    $500
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>
        </div>

        {/* Action Button */}
        <button className="w-full mt-12 bg-slate-900 overflow-hidden relative group hover:bg-green-700 text-white font-bold py-3 rounded-[1.5rem] transition-all duration-500 shadow-xl shadow-slate-200 hover:shadow-green-200 uppercase tracking-[0.2em] text-[0.75rem] flex items-center justify-center gap-3 active:scale-95">
          <span className="relative z-10 transition-transform group-hover:-translate-x-1">
            Apply Selection
          </span>
          <ChevronRight
            size={16}
            className="relative z-10 transition-all group-hover:translate-x-1"
            strokeWidth={3}
          />
          {/* Subtle Hover Overlay */}
          <div className="absolute inset-0 bg-green-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
        </button>
      </div>
    </aside>
  );
};

export default ProductsSidebar;
