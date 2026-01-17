import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";
import MainHeadings from "../shared/headings/MainHeadings";
import SubHeadings from "../shared/headings/SubHeadings";
import AddToCartButton from "../shared/button/AddToCartButton";
import pineapple from "../../assets/pineapple.webp";
import strawberries from "../../assets/strawberries.webp";
import grapes from "../../assets/grapes.webp";
import broccoli from "../../assets/broccoli.webp";
import AnimateOnScroll from "../animation/AnimateOnScroll";

const SeasonalPromoSection = () => {
  // Static Data for Promotional Items
  const promoItems = [
    {
      id: 1,
      name: "Pineapple",
      description: "Extra sweet, golden ripe seasonal harvest.",
      price: 12.5,
      oldPrice: 15.0,
      badge: "20% OFF",
      badgeColor: "bg-amber-500 text-white",
      image: pineapple,
      theme: "bg-orange-50/50",
    },
    {
      id: 2,
      name: "Strawberries",
      description: "Hand-picked this morning from local fields.",
      price: 8.99,
      badge: "LIMITED",
      badgeColor: "bg-rose-500 text-white",
      image: strawberries,
      theme: "bg-red-50/50",
    },
    {
      id: 3,
      name: "Grapes",
      description: "Seedless, juicy, and packed with antioxidants.",
      price: 10.0,
      oldPrice: 14.0,
      badge: "BEST SELLER",
      badgeColor: "bg-yellow-500 text-slate-800",
      image: grapes,
      theme: "bg-purple-50/50",
    },
    {
      id: 4,
      name: "Broccoli",
      description: "Crunchy florets perfect for a healthy stir-fry.",
      price: 4.5,
      badge: "FRESH PICK",
      badgeColor: "bg-green-500 text-white",
      image: broccoli,
      theme: "bg-green-50/50",
    },
  ];

  return (
    <section className="overflow-hidden">
      <div className="max-w-[1440px] w-11/12 mx-auto px-5">
        {/* Section Header */}
        <div className="mb-12 lg:space-y-8 space-y-6">
          <AnimateOnScroll delay={300} offset={20}>
            {" "}
            <SubHeadings>Limited Time Offers</SubHeadings>
          </AnimateOnScroll>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <AnimateOnScroll delay={300} offset={20}>
              <MainHeadings highlight="Picked Seasonal" text="Collection">
                This Week's Fresh{" "}
              </MainHeadings>
            </AnimateOnScroll>
            <AnimateOnScroll delay={300} offset={20}>
              <Link
                href="/products"
                className="w-48 group flex items-center gap-2 text-green-600 font-bold text-sm tracking-widest uppercase hover:gap-4 transition-all duration-300"
              >
                <span>Seasonal Picks</span>
                <ArrowRight size={18} />
              </Link>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promoItems.map((item, i) => (
            <AnimateOnScroll key={item.id} delay={i * 200}>
              <div
                key={item.id}
                className="group relative bg-white rounded-[2.5rem] border border-slate-100 p-4 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(22,163,74,0.12)] hover:-translate-y-2"
              >
                {/* Image Container */}
                <div
                  className={`relative aspect-[4/5] rounded-[2rem] overflow-hidden ${item.theme}`}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Animated Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`flex items-center gap-1 ${item.badgeColor} backdrop-blur-md text-[10px] font-black tracking-tighter px-3 py-1.5 rounded-full shadow-sm animate-pulse`}
                    >
                      <Sparkles size={10} /> {item.badge}
                    </span>
                  </div>

                  {/* Quick Add Overlay */}
                  {/* <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <AddToCartButton className={'w-full'}/>
                </div> */}
                </div>

                {/* Content */}
                <div className="mt-6 px-2 pb-2">
                  <h3 className="text-xl font-bold text-slate-800 line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-slate-400 text-sm mt-1 font-medium">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-base font-semibold text-slate-700">
                      Starts from :
                    </span>
                    <span className="text-xl font-black text-green-700">
                      ${item.price}
                    </span>
                    {item.oldPrice && (
                      <span className="text-sm font-bold text-slate-300 line-through">
                        ${item.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonalPromoSection;
