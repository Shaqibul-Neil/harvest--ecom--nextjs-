import Image from "next/image";
import React from "react";
import loginPic from "@/assets/login.webp";
import LoginForm from "@/components/form/LoginForm";
import FadeInUp from "@/components/animation/FadeInUp";
import ScaleIn from "@/components/animation/ScaleIn";
import { Leaf, ShieldCheck, Truck } from "lucide-react";
import SubHeadings from "@/components/shared/headings/SubHeadings";
import MainHeadings from "@/components/shared/headings/MainHeadings";

export const metadata = {
  title: "Login | Harvest",
  description: "Login to your Harvest account",
};

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/50 via-white to-emerald-50/30 py-10 md:py-16 px-4">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime-50/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Form Section */}
          <div className="order-2 lg:order-1">
            <FadeInUp delay={0.1}>
              {/* Header */}
              <div className="text-center lg:text-left mb-8 space-y-4">
                <SubHeadings>Welcome Back</SubHeadings>
                <MainHeadings highlight={"Harvest"}>Login to</MainHeadings>
                <p className="text-slate-400 font-medium text-sm mt-3 max-w-md mx-auto lg:mx-0">
                  Continue your journey to fresh, organic goodness. Your cart is
                  waiting!
                </p>
              </div>
            </FadeInUp>

            <ScaleIn delay={0.2}>
              <LoginForm />
            </ScaleIn>
          </div>

          {/* Right: Image & Features Section */}
          <div className="order-1 lg:order-2 hidden lg:block">
            <FadeInUp delay={0.3}>
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-green-900/10">
                  <Image
                    src={loginPic}
                    alt="Fresh organic vegetables"
                    width={600}
                    height={700}
                    priority
                    className="w-full h-auto object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent" />

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-black text-white mb-2">
                      Farm Fresh Goodness
                    </h3>
                    <p className="text-white/80 text-sm font-medium max-w-xs">
                      Discover the finest organic produce, delivered fresh to
                      your doorstep.
                    </p>
                  </div>
                </div>

                {/* Floating Feature Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl shadow-slate-200/50 border border-white/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-800">
                        100% Organic
                      </p>
                      <p className="text-[10px] font-medium text-slate-400">
                        Certified Products
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl shadow-slate-200/50 border border-white/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                      <Truck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-800">
                        Fast Delivery
                      </p>
                      <p className="text-[10px] font-medium text-slate-400">
                        Same Day Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Trust Badges */}
            <FadeInUp delay={0.5}>
              <div className="flex items-center justify-center gap-6 mt-12">
                <div className="flex items-center gap-2 text-slate-400">
                  <ShieldCheck size={18} className="text-green-500" />
                  <span className="text-xs font-bold">Secure Login</span>
                </div>
                <div className="w-1 h-1 bg-slate-300 rounded-full" />
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-xs font-bold">
                    256-bit SSL Encryption
                  </span>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
