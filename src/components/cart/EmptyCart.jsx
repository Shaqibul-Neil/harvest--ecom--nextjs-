import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const EmptyCart = () => (
  <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-6">
    <div className="relative mb-8">
      <div className="absolute inset-0 bg-green-100 rounded-full scale-150 blur-3xl opacity-30 animate-pulse"></div>
      <div className="relative bg-white p-10 rounded-full shadow-2xl border border-green-50">
        <ShoppingBag size={80} className="text-green-600 stroke-[1.5px]" />
      </div>
    </div>
    <h2 className="text-4xl font-black text-slate-800 mb-4">
      Your Bag is Empty
    </h2>
    <p className="text-slate-500 max-w-sm mb-10 font-medium">
      Looks like you haven&apos;t added any fresh harvest yet. Let&apos;s fill
      it with something healthy!
    </p>
    <Link
      href="/products"
      className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-green-600 hover:shadow-xl hover:shadow-green-100 transition-all duration-500 uppercase tracking-widest text-sm"
    >
      Start Shopping
    </Link>
  </div>
);

export default EmptyCart;
