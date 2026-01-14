const ProductCardSkeleton = () => {
  return (
    <div className="relative rounded-[2rem] border border-slate-50 bg-white shadow-xl shadow-slate-100/50 w-full animate-pulse overflow-hidden">
      {/* Product Image Placeholder */}
      <div className="h-52 w-full bg-slate-100" />

      {/* Content Area */}
      <div className="bg-slate-50/50 space-y-4 p-6">
        <div className="space-y-3">
          {/* Category & Rating Row */}
          <div className="flex items-center justify-between">
            <div className="h-3 w-16 bg-slate-200 rounded-full" />
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-3 w-3 bg-slate-200 rounded-full" />
              ))}
            </div>
          </div>

          {/* Title */}
          <div className="h-5 w-3/4 bg-slate-200 rounded-lg" />

          {/* Price & Unit Row */}
          <div className="flex items-center justify-between pt-2">
            <div className="h-6 w-20 bg-slate-200 rounded-lg" />
            <div className="h-6 w-12 bg-white rounded-lg border border-slate-100" />
          </div>
        </div>

        {/* Action Button Placeholder */}
        <div className="h-12 w-full bg-slate-200 rounded-full" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
