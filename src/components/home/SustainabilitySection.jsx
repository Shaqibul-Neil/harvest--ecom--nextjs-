"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Sparkles, Heart, Globe, ArrowUpRight } from "lucide-react";
import farmers from "../../assets/farmers.webp";
import SubHeadings from "../shared/headings/SubHeadings";
import AnimateOnScroll from "../animation/AnimateOnScroll";
import MainHeadings from "../shared/headings/MainHeadings";
import PrimaryButton from "../shared/button/PrimaryButton";

const SustainabilitySection = () => {
  return (
    <section className="py-24 bg-green-50/50 overflow-hidden">
      <div className="max-w-[1440px] w-11/12 mx-auto px-5">
        {/* Hero Container with Asymmetric Layout */}
        <div className="relative">
          {/* Background Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-green-200/40 to-emerald-100/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-lime-200/30 to-green-100/20 rounded-full blur-3xl pointer-events-none" />

          {/* Main Grid */}
          <div className="relative flex lg:flex-row flex-col justify-between gap-16 lg:gap-4 items-center min-h-[600px]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="space-y-8 z-10"
            >
              <AnimateOnScroll delay={300} offset={20}>
                <SubHeadings>Sustainably Sourced</SubHeadings>
              </AnimateOnScroll>

              {/* Main Headline - Typography as Art */}
              <div className="space-y-2">
                <MainHeadings highlight={"the Earth"}>Fresh from</MainHeadings>

                <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-md pt-4">
                  Every harvest tells a story of care, community, and conscious
                  choices that nourish both people and planet.
                </p>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { icon: Leaf, label: "100% Organic" },
                  { icon: Heart, label: "Fair Trade" },
                  { icon: Globe, label: "Zero Waste" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 bg-white rounded-full px-5 py-3 shadow-md shadow-slate-100 border border-slate-100 cursor-default group"
                  >
                    <item.icon className="w-4 h-4 text-green-600 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-sm font-bold text-slate-700">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <PrimaryButton>Sustainable Tale</PrimaryButton>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative">
                {/* Organic Shape Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-emerald-300/10 to-lime-200/20 rounded-[3rem] lg:rounded-[4rem] transform rotate-3 scale-105" />

                {/* Image */}
                <div className="relative w-full aspect-square rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-2xl shadow-green-900/20 md:h-130 h-96">
                  <Image
                    src={farmers}
                    alt="Local farmer harvesting fresh vegetables"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="md:object-cover"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-transparent to-transparent" />
                </div>

                {/* Floating Stat Card - Top Right */}

                <motion.div
                  initial={{ opacity: 1, y: 0 }}
                  animate={{
                    opacity: 1,
                    y: [0, -2, 0],
                    rotate: [0, 0.5, 0, -0.5], // up-down subtle float
                  }}
                  transition={{
                    duration: 4, // total float cycle
                    repeat: Infinity, // loop
                    ease: "easeInOut",
                  }}
                  style={{ transformOrigin: "center" }}
                  className="will-change:transform absolute -top-4 right-10 md:top-4 md:right-4 lg:top-12 lg:-right-10 bg-white/90 backdrop-blur-xl rounded-2xl lg:p-5 p-3 shadow-2xl shadow-slate-200/50 border border-white/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/30">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="md:text-3xl text-xl font-black text-slate-800">
                        500+
                      </p>
                      <p className="md:text-xs text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        Local Farms
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Stat Card - Bottom Left */}
                <motion.div
                  initial={{ opacity: 1, y: 0 }}
                  animate={{
                    opacity: 1,
                    y: [0, -2, 0],
                    rotate: [0, 0.5, 0, -0.5], // up-down subtle float
                  }}
                  transition={{
                    duration: 4, // total float cycle
                    repeat: Infinity, // loop
                    ease: "easeInOut",
                  }}
                  style={{ transformOrigin: "center" }}
                  className="will-change:transform absolute bottom-8 left-10 md:bottom-4 md:left-4 lg:bottom-12 lg:-left-12 bg-white/90 backdrop-blur-xl rounded-2xl lg:p-5 p-3 shadow-2xl shadow-slate-200/50 border border-white/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lime-400 to-green-500 flex items-center justify-center shadow-lg shadow-green-500/30">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="md:text-3xl text-xl font-black text-slate-800">
                        0%
                      </p>
                      <p className="md:text-xs text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        Plastic Waste
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Badge - Bottom Right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 right-8 lg:bottom-4 lg:right-20"
                >
                  <div className="relative w-24 h-24 lg:w-28 lg:h-28">
                    {/* Rotating text circle */}
                    <svg
                      className="w-full h-full animate-spin-slow"
                      viewBox="0 0 100 100"
                    >
                      <defs>
                        <path
                          id="circlePath"
                          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        />
                      </defs>
                      <text className="text-[8px] font-bold fill-green-700 uppercase tracking-[0.3em]">
                        <textPath xlinkHref="#circlePath">
                          • FARM FRESH • ORGANIC • SUSTAINABLE •
                        </textPath>
                      </text>
                    </svg>
                    {/* Center icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center shadow-lg">
                        <Leaf className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Feature Strip */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Supporting Local Farmers",
                desc: "We source directly from nearby farms, ensuring fair prices for farmers and fresher produce for you.",
                gradient: "from-green-500 to-emerald-600",
              },
              {
                title: "Eco-friendly Packaging",
                desc: "Our packaging is recyclable and thoughtfully designed to reduce waste without compromising freshness.",
                gradient: "from-emerald-500 to-teal-600",
              },
              {
                title: "Promoting Sustainable Practices",
                desc: "Our farms follow eco-friendly methods, reducing chemical use and protecting the environment.",
                gradient: "from-teal-600 to-green-500",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative bg-white rounded-3xl p-7 shadow-xl shadow-slate-100/50 border border-slate-100 overflow-hidden cursor-pointer"
              >
                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="lg:text-lg text-sm font-bold text-slate-800 group-hover:text-white transition-colors duration-300 mb-2">
                    {item.title}
                  </h3>
                  <p className="lg:text-sm text-xs font-medium text-slate-400 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow indicator */}
                <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-slate-300 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Custom CSS for slow spin animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SustainabilitySection;
