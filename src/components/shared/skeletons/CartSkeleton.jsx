const CartSkeleton = () => {
  return (
    <>
      {/* Header text skeleton */}
      <div className="h-4 w-48 bg-slate-200 rounded-lg animate-pulse my-4" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT SIDE - Cart Items Skeleton */}
        <div className="lg:col-span-8 space-y-6">
          {/* Cart Card Skeleton - 3 items */}
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="group relative flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] animate-pulse"
            >
              {/* Image Placeholder */}
              <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-2xl bg-slate-100" />

              {/* Content Placeholder */}
              <div className="flex-1 w-full flex flex-col justify-between self-stretch space-y-4">
                {/* Row 1: Title and Total Price */}
                <div className="flex justify-between items-center gap-2">
                  <div className="h-5 w-3/4 bg-slate-200 rounded-lg" />
                  <div className="h-5 w-20 bg-slate-200 rounded-lg" />
                </div>

                {/* Row 2: Unit Price */}
                <div className="h-4 w-24 bg-green-100 rounded-lg" />

                {/* Row 3: Quantity Buttons and Delete */}
                <div className="flex flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 bg-slate-200 rounded-full" />
                    <div className="h-6 w-8 bg-slate-200 rounded-lg" />
                    <div className="h-10 w-10 bg-slate-200 rounded-full" />
                  </div>
                  <div className="h-10 w-10 bg-red-50 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - Checkout Summary Skeleton */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
          <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] animate-pulse">
            {/* Summary Title */}
            <div className="h-7 w-32 bg-slate-200 rounded-lg mb-8" />

            <div className="space-y-4 mb-8">
              {/* Subtotal Row */}
              <div className="flex justify-between">
                <div className="h-4 w-20 bg-slate-200 rounded-lg" />
                <div className="h-4 w-16 bg-slate-200 rounded-lg" />
              </div>

              {/* Shipping Row */}
              <div className="flex justify-between">
                <div className="h-4 w-32 bg-slate-200 rounded-lg" />
                <div className="h-4 w-12 bg-slate-200 rounded-lg" />
              </div>

              {/* Taxes Row */}
              <div className="flex justify-between">
                <div className="h-4 w-28 bg-slate-200 rounded-lg" />
                <div className="h-4 w-12 bg-slate-200 rounded-lg" />
              </div>

              {/* Promo Code Input */}
              <div className="pt-4">
                <div className="h-14 w-full bg-slate-100 rounded-2xl" />
              </div>

              {/* Total Section */}
              <div className="border-t border-dashed border-slate-200 mt-6 pt-6">
                <div className="flex justify-between items-end">
                  <div className="h-5 w-28 bg-slate-200 rounded-lg" />
                  <div className="h-9 w-24 bg-green-100 rounded-lg" />
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <div className="w-52 mx-auto">
              <div className="h-12 w-full bg-slate-200 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSkeleton;
