"use client";
import { Tag, Loader2 } from "lucide-react";
import CartCard from "../cards/CartCard";
import PrimaryButton from "../shared/button/PrimaryButton";
import { useCart } from "@/context/CartContext";
import EmptyCart from "./EmptyCart";
import { useMemo } from "react";
import CartSkeleton from "../shared/skeletons/CartSkeleton";

const CartLayout = () => {
  const { cart, isLoading } = useCart();
  console.log(cart);
  const subtotal = useMemo(
    () => cart?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0,
    [cart],
  );
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  // Show loading skeleton while fetching cart
  if (isLoading) {
    return <CartSkeleton />;
  }

  if (!cart || cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <>
      <p className="text-slate-500 font-medium font-poppins text-sm uppercase tracking-widest my-4">
        You have {cart.length} items in your carts
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Cart Items - LEFT SIDE */}
        <div className="lg:col-span-8 space-y-6">
          {cart.map((item) => (
            <CartCard key={item.productId} item={item} />
          ))}
        </div>

        {/* Checkout Summary - RIGHT SIDE (Baki sob ager mto) */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
          <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)]">
            <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-2">
              SUMMARY
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-slate-500 font-medium">
                <span>Subtotal</span>
                <span className="text-slate-900 font-bold">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-slate-500 font-medium">
                <span>Shipping Estimate</span>
                <span className="text-slate-900 font-bold">
                  {shipping === 0 ? "FREE" : `$${shipping}`}
                </span>
              </div>
              <div className="flex justify-between text-slate-500 font-medium">
                <span>Taxes (Included)</span>
                <span className="text-slate-900 font-bold">$0.00</span>
              </div>

              <div className="pt-4">
                <div className="relative group">
                  <Tag
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-green-600 transition-colors"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Promo Code"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-24 focus:ring-2 focus:ring-green-100 focus:border-green-500 outline-none transition-all font-medium"
                  />
                  <button className="absolute right-2 top-2 bottom-2 px-4 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-green-600 transition-all cursor-pointer">
                    APPLY
                  </button>
                </div>
              </div>
              <div className="border-t border-dashed border-slate-200 mt-6 pt-6">
                <div className="flex justify-between items-end">
                  <span className="text-slate-900 font-bold text-lg">
                    Total Amount
                  </span>
                  <span className="text-3xl font-black text-green-600 tracking-tighter">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-52 mx-auto">
              <PrimaryButton href={"/cart/checkout"}>
                CHECKOUT NOW
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartLayout;
