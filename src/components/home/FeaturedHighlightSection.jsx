"use client";

import React from "react";
import Image from "next/image";
import PrimaryButton from "../shared/button/PrimaryButton";
import featured1 from "@/assets/featured1.webp";
import MainHeadings from "../shared/headings/MainHeadings";
import SubHeadings from "../shared/headings/SubHeadings";

const FeaturedHighlightSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
      {/* Left Content Side */}
      <div className="flex-1 space-y-8 text-center lg:text-left lg:order-1 order-2">
        <div className="lg:space-y-8 space-y-6">
          <SubHeadings className={"justify-center lg:justify-start"}>
            Freshness Daily
          </SubHeadings>

          <MainHeadings highlight="Garden Harvest">Wholesome</MainHeadings>
        </div>

        <p className="text-slate-500 text-sm md:text-base font-medium max-w-md mx-auto lg:mx-0 leading-relaxed">
          Experience the crunch of farm-fresh goodness. From pesticide-free
          greens to sun-ripened fruits, we bring the best of nature directly to
          your kitchen.
        </p>

        <div className="flex justify-center lg:justify-start pt-2">
          <PrimaryButton>Shop Collection</PrimaryButton>
        </div>
      </div>

      {/* Right Image Side */}
      <div className="flex-1 relative lg:w-full md:w-2/3 w-full aspect-square lg:aspect-auto lg:h-[400px] md:h-96 lg:order-2 order-1">
        {/* Main Image */}
        <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50">
          <Image
            src={featured1}
            alt="Premium Organic Harvest"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            placeholder="blur"
          />
        </div>

        {/* Overlapping Produce Image - No extra animation as per rules */}
        <div className="absolute -bottom-10 -left-12 md:-left-12 lg:-left-28 w-28 md:w-56 aspect-square bg-white rounded-full p-3 z-20">
          <div className="relative w-full h-full rounded-full overflow-hidden md:border-4 border-3 border-white">
            <Image
              src="https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?q=80&w=2000&auto=format&fit=crop"
              alt="Fresh Organic Produce"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover scale-150"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHighlightSection;
