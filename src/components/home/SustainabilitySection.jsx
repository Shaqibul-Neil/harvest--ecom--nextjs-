"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MainHeadings from "../shared/headings/MainHeadings";
import SubHeadings from "../shared/headings/SubHeadings";
import packages from "../../assets/package.webp";
import farmers from "../../assets/farmers.webp";

const SustainabilitySection = () => {
  const stories = [
    {
      id: 1,
      image: farmers,
      title: "Supporting Local Farmers",
      category: "Community",
      description:
        "We partner directly with small-scale growers to ensure fair pay and bring peak-season freshness to your table.",
    },
    {
      id: 2,
      image: packages,
      title: "Eco-friendly Packaging",
      category: "Planet",
      description:
        "Our 100% plastic-free mission ensures that your harvest arrives in compostable materials that love the earth.",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Header Area - Consistent with Featured Products */}
        <div className="max-w-3xl mb-16 space-y-3">
          <SubHeadings>Our Commitment</SubHeadings>
          <MainHeadings highlight="Sustainability" text="Story">
            Rooted in Our{" "}
          </MainHeadings>
        </div>

        {/* Story Grid - Responsive 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {stories.map((story) => (
            <motion.div
              key={story.id}
              whileHover={{ y: -5 }}
              className="flex flex-col md:flex-row bg-white rounded-[2.5rem] overflow-hidden border border-slate-50 shadow-2xl shadow-slate-100 group transition-all duration-500"
            >
              {/* Image Side */}
              <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-green-500 text-white text-[0.6rem] font-black uppercase tracking-widest rounded-full shadow-lg">
                    {story.category}
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="md:w-1/2 p-8 space-y-4 flex flex-col justify-center">
                <h3 className="text-xl font-black text-slate-800 leading-tight group-hover:text-green-700 transition-colors">
                  {story.title}
                </h3>
                <p className="text-slate-500 font-medium text-sm line-clamp-3">
                  {story.description}
                </p>
                <button className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-800 hover:text-green-600 transition-colors pt-2">
                  Read Full Story
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
