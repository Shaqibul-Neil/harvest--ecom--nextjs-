const FilterSidebarSkeleton = () => {
  return (
    <aside className="w-full animate-pulse">
      <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-100 p-10 sticky top-32 border border-slate-50 space-y-10">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="h-5 w-24 bg-slate-200 rounded-lg" />
          <div className="h-8 w-20 bg-slate-200 rounded-full" />
        </div>

        {/* Categories */}
        <div className="space-y-6">
          <div className="h-3 w-28 bg-slate-200 rounded-full" />

          <div className="flex flex-wrap gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-10 w-24 bg-slate-200 rounded-[2rem]" />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-100" />

        {/* Price Range */}
        <div className="space-y-8">
          <div className="h-3 w-32 bg-slate-200 rounded-full" />

          {/* Slider */}
          <div className="space-y-6 px-2">
            <div className="relative h-1 w-full bg-slate-200 rounded-full">
              <div className="absolute left-[25%] right-[35%] h-full bg-slate-300 rounded-full" />
              <div className="absolute top-1/2 -translate-y-1/2 left-[25%] h-6 w-6 bg-slate-300 rounded-full" />
              <div className="absolute top-1/2 -translate-y-1/2 right-[35%] h-6 w-6 bg-slate-300 rounded-full" />
            </div>

            {/* Min / Max */}
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-slate-50 border border-slate-100 p-4 rounded-[1.5rem] space-y-2">
                <div className="h-3 w-10 bg-slate-200 rounded-full" />
                <div className="h-4 w-16 bg-slate-200 rounded-md" />
              </div>

              <div className="w-4 h-[2px] bg-slate-200" />

              <div className="flex-1 bg-slate-50 border border-slate-100 p-4 rounded-[1.5rem] space-y-2">
                <div className="h-3 w-10 bg-slate-200 rounded-full" />
                <div className="h-4 w-16 bg-slate-200 rounded-md" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-100" />

        {/* Apply Button */}
        <div className="w-52 mx-auto">
          <div className="h-12 bg-slate-200 rounded-full" />
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebarSkeleton;
