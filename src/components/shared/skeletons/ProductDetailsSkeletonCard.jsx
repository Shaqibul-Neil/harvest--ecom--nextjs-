import React from "react";

const ProductDetailsSkeletonCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-pulse">
      {/* Top Section: Grid 6 Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-20">
        
        {/* Main Content: 5 Columns */}
        <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-5 gap-12 bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-slate-100 border border-slate-50">
          
          {/* LHS: Image Panel (60% / 3 Columns) */}
          <div className="md:col-span-3 space-y-6">
            <div className="relative aspect-square rounded-[2rem] bg-slate-100/50 border border-slate-100/50 flex items-center justify-center">
               <div className="w-1/2 h-1/2 bg-slate-200 rounded-3xl" />
            </div>
            
            <div className="flex gap-4">
               {[1,2,3].map(i => (
                 <div key={i} className="w-24 h-24 rounded-2xl bg-slate-100 border border-slate-100" />
               ))}
            </div>
          </div>

          {/* RHS: Info Panel (40% / 2 Columns) */}
          <div className="md:col-span-2 flex flex-col justify-between py-2">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-6 w-24 bg-slate-100 rounded-full" />
                  <div className="h-4 w-16 bg-slate-100 rounded-lg" />
                </div>
                <div className="h-10 w-3/4 bg-slate-200 rounded-2xl" />
                <div className="flex gap-2">
                   {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-4 bg-slate-100 rounded-full" />)}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-32 bg-slate-200 rounded-2xl" />
                <div className="h-8 w-20 bg-slate-100 rounded-xl" />
              </div>

              <div className="h-px bg-slate-100" />

              <div className="space-y-3">
                <div className="h-4 w-full bg-slate-100 rounded-lg" />
                <div className="h-4 w-5/6 bg-slate-100 rounded-lg" />
                <div className="h-4 w-4/6 bg-slate-100 rounded-lg" />
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                   <div className="w-10 h-10 bg-slate-100 rounded-xl" />
                   <div className="h-4 w-1/2 bg-slate-100 rounded-lg self-center" />
                </div>
                <div className="flex gap-4">
                   <div className="w-10 h-10 bg-slate-100 rounded-xl" />
                   <div className="h-4 w-1/2 bg-slate-100 rounded-lg self-center" />
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
                <div className="h-14 w-32 bg-slate-100 rounded-2xl" />
                <div className="h-14 flex-1 bg-slate-200 rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Sidebar Placeholder */}
        <div className="lg:col-span-1 hidden lg:block text-center border-l border-slate-100">
           <div className="pt-10 px-4">
              <div className="h-32 w-4 bg-slate-50 rounded-full mx-auto" />
           </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-slate-100 border border-slate-50">
        <div className="flex gap-8 border-b border-slate-100 mb-10">
           {[1,2,3,4].map(i => <div key={i} className="h-12 w-24 bg-slate-100 rounded-t-xl" />)}
        </div>
        <div className="space-y-6">
           <div className="h-4 w-full bg-slate-50 rounded-lg" />
           <div className="h-4 w-full bg-slate-50 rounded-lg" />
           <div className="h-4 w-3/4 bg-slate-50 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeletonCard;
