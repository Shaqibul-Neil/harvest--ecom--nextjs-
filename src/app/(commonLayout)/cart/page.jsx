import CartLayout from "@/components/cart/CartLayout";
import MainHeadings from "@/components/shared/headings/MainHeadings";
import SubHeadings from "@/components/shared/headings/SubHeadings";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Cart = () => {
  return (
    <div className="min-h-screen bg-[#fcfdfc] pb-20 pt-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto lg:space-y-16 space-y-10 lg:py-10 py-8">
        {/* Header Section */}
        <div className="lg:space-y-4 md:space-y-2 space-y-1">
          <SubHeadings>Cart</SubHeadings>
          <div className="flex md:justify-between md:flex-row flex-col gap-6">
            <MainHeadings highlight="Cart" text="Collection">
              My{" "}
            </MainHeadings>
            <div className="flex gap-4">
              <Link
                href="/products"
                className="flex items-center gap-2 text-green-600 font-bold hover:underline transition-all"
              >
                Continue Shopping <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
        {/* Cart Info and checkout */}
        <CartLayout />
      </div>
    </div>
  );
};

export default Cart;
