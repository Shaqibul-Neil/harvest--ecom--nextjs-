"use client";

import React from "react";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="relative w-full z-30 -mb-25 overflow-x-clip">
      <div className="max-w-[1150px] mx-auto px-4 md:px-6">
        {/* Banner-style Wide Rectangle Container */}
        <div className="relative bg-gradient-to-br from-green-600 to-green-700 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(22,163,74,0.2)] border border-green-500/10 py-8 md:py-12 px-6 md:px-12 lg:px-20">
          
          {/* Subtle Glows */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_40%)] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.05),transparent_40%)] pointer-events-none" />

          {/* Grid/Flex Layout for Rectangle Shape */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            
            {/* Text Side - Compact & Small */}
            <div className="space-y-3 text-center lg:text-left flex-1 max-w-xl">
              <h2 className="text-lg md:text-xl lg:text-2xl font-black text-white leading-tight tracking-tightest">
                Subscribe to our newsletter to get updates <br className="hidden xl:block" />
                to our latest collections
              </h2>
              <p className="text-green-50/70 text-xs md:text-sm font-bold tracking-wide">
                Get 20% off on your first order just by subscribing to our newsletter
              </p>
            </div>

            {/* Form Side - Efficient & Clean */}
            <div className="w-full lg:max-w-md space-y-3">
              
              {/* md+: Integrated Button */}
              <div className="hidden md:block relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600 z-10 transition-colors group-focus-within:text-green-700">
                  <Mail size={16} strokeWidth={3} />
                </div>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-12 md:h-14 pl-12 pr-32 rounded-2xl bg-white text-slate-800 text-xs font-bold border-none shadow-xl focus-visible:ring-2 focus-visible:ring-green-400/30 transition-all placeholder:text-slate-400 ring-0 focus-visible:ring-offset-0"
                />
                <button className="absolute right-1.5 top-1.5 bottom-1.5 px-6 bg-slate-900 text-white rounded-xl font-black text-[0.65rem] uppercase tracking-widest hover:bg-green-700 transition-all active:scale-95 shadow-md">
                  Subscribe
                </button>
              </div>

              {/* sm: Stacked Layout */}
              <div className="md:hidden flex flex-col gap-3">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600 z-10">
                    <Mail size={16} strokeWidth={3} />
                  </div>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full h-12 pl-12 rounded-2xl bg-white text-slate-800 text-xs font-bold border-none shadow-md focus-visible:ring-2 focus-visible:ring-green-400/30"
                  />
                </div>
                <button className="w-full h-12 bg-slate-900 text-white rounded-2xl font-black text-[0.65rem] uppercase tracking-widest hover:bg-green-700 transition-all active:scale-95 shadow-md">
                  Subscribe
                </button>
              </div>

              <p className="text-green-50/50 text-[0.55rem] md:text-[0.6rem] font-bold text-center lg:text-left uppercase tracking-[0.2em] px-2">
                Unsubscribe at any time. Read our{" "}
                <span className="underline underline-offset-4 cursor-pointer hover:text-white transition-colors">
                  privacy policy
                </span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
