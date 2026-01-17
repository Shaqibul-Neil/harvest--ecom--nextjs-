"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles, Leaf, Truck } from "lucide-react";

// Animation Variants
const textVariants = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 },
};

const imageVariants = {
  initial: { scale: 1.1, opacity: 0, rotate: 2 },
  animate: { scale: 1, opacity: 1, rotate: 0 },
  exit: { scale: 0.95, opacity: 0, rotate: -2 },
};

const floatVariants = {
  animate: {
    y: [0, -8, 0],
    rotate: [0, 1, 0, -1, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const BannerSlider = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentSlide = slides[activeIndex];

  // AutoPlay
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Pagination Click
  const handlePaginationClick = (index) => {
    setActiveIndex(index);
  };

  // H1 Text Splitting
  const parts = currentSlide.dynamic.split(" ");
  const dynamicWord = parts[0];
  const staticWords = parts.slice(1).join(" ");

  return (
    <>
      {/* 2-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] lg:min-h-[90vh] items-center gap-16 lg:gap-4">
        {/* LEFT: TEXT AREA */}
        <div className="flex flex-col justify-center text-center lg:text-left min-h-[40vh] lg:min-h-[90vh] flex-1 lg:order-1 order-2 z-10">
          {/* Animated Badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.key + "_badge"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start mb-6"
            >
              <div className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border ${currentSlide.badgeColor || "border-green-200/50 text-green-700"} rounded-full px-4 py-2 shadow-lg shadow-slate-100/50`}>
                <div className={`w-2 h-2 ${currentSlide.badgeDot || "bg-green-500"} rounded-full animate-pulse`} />
                <span className="text-[10px] md:text-[0.7rem] font-bold uppercase tracking-[0.2em]">
                  {currentSlide.badge || "Fresh Arrival"}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Main Headline */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentSlide.key + "_h1"}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-4 lg:mb-6"
            >
              <span>Explore </span>
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-green-600">
                  {dynamicWord}
                </span>
                {/* Underline decoration */}
                <svg
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-green-300"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 8.5C50 2 150 2 198 8.5"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br className="hidden lg:block" />
              <span className="lg:hidden"> </span>
              <span>{staticWords}</span>
            </motion.h1>
          </AnimatePresence>

          {/* Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSlide.key + "_p"}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="text-slate-500 text-sm md:text-base lg:text-lg font-medium mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              {currentSlide.offer}
            </motion.p>
          </AnimatePresence>

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start">
            <button className="w-52 bg-slate-900 overflow-hidden relative group hover:bg-green-700 text-white font-black md:py-4 py-3 rounded-[2rem] transition-all duration-500 shadow-xl shadow-slate-200 hover:shadow-green-200 uppercase tracking-[0.2em] text-[0.75rem] flex items-center justify-center gap-3 active:scale-95">
              <span className="relative z-10 transition-all duration-500 group-hover:-translate-x-1">
                Shop Now
              </span>
              <ArrowRight
                size={16}
                className="relative z-10 transition-all duration-500 group-hover:translate-x-1"
                strokeWidth={3}
              />
              <div className="absolute inset-0 bg-green-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </button>
          </div>

          {/* Trust Badges - Desktop Only */}
          <div className="hidden lg:flex items-center gap-6 mt-10">
            {[
              { icon: Leaf, label: "100% Organic" },
              { icon: Truck, label: "Free Delivery" },
              { icon: Sparkles, label: "Farm Fresh" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-2 text-slate-400"
              >
                <item.icon className="w-4 h-4 text-green-500" />
                <span className="text-xs font-bold">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT: IMAGE AREA */}
        <div className="relative h-[280px] sm:h-[320px] md:h-[420px] lg:min-h-[85vh] flex items-center justify-center lg:order-2 order-1">
          {/* Organic Shape Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[85%] h-[85%] bg-gradient-to-br from-green-200/40 via-emerald-100/30 to-lime-200/20 rounded-[4rem] blur-3xl transform rotate-6" />
          </div>

          {/* Floating Accent Circle */}
          <motion.div
            variants={floatVariants}
            animate="animate"
            className="absolute top-10 right-10 lg:top-20 lg:right-20 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-green-400/30 to-emerald-500/20 rounded-full blur-xl"
          />

          {/* Main Image Container */}
          <motion.div className="w-full h-full relative overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.key}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <Image
                  src={currentSlide.img}
                  alt={currentSlide.dynamic}
                  width={500}
                  height={500}
                  priority={activeIndex === 0}
                  className="object-contain drop-shadow-2xl lg:p-8 w-auto h-[240px] sm:h-[280px] md:h-[400px] lg:h-[500px] xl:h-[550px]"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Floating Price/Offer Card */}
          <motion.div
            variants={floatVariants}
            animate="animate"
            className="absolute md:bottom-20 bottom-60 md:left-4 left-0 lg:bottom-28 lg:left-0 bg-white/90 backdrop-blur-xl rounded-2xl md:p-3 p-2 lg:p-4 shadow-2xl shadow-slate-200/50 border border-white/50 z-20"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.key + "_offer"}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex items-center md:gap-3 gap-2"
              >
                <div className="md:w-10 md:h-10 h-8 w-8 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                  <Sparkles className="md:w-5 md:h-5 h-4 w-4 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <p className="md:text-lg text-sm lg:text-2xl font-black text-slate-800">
                    {currentSlide.discount || "Save 20%"}
                  </p>
                  <p className="text-[10px] lg:text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    This Week
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Decorative Dots Grid - Desktop Only */}
          <div className="hidden lg:block absolute top-10 left-10 w-20 h-20 opacity-20">
            <div className="grid grid-cols-4 gap-2">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-green-600 rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* *** Enhanced Pagination *** */}
      <div className="absolute -bottom-5 lg:bottom-12 left-1/2 lg:left-12 transform -translate-x-1/2 lg:translate-x-0 flex items-center gap-3 z-20">
        {/* Slide Counter */}
        <span className="hidden lg:block text-xs font-bold text-slate-400 mr-2">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </span>

        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handlePaginationClick(index)}
              className="relative h-3 rounded-full overflow-hidden cursor-pointer"
              animate={{
                width: activeIndex === index ? 40 : 12,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Background */}
              <div className="absolute inset-0 bg-slate-200 rounded-full" />

              {/* Active Fill with Progress */}
              {activeIndex === index && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 8, ease: "linear" }}
                />
              )}

              {/* Inactive State */}
              {activeIndex !== index && (
                <div className="absolute inset-0 bg-slate-300 rounded-full hover:bg-slate-400 transition-colors" />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </>
  );
};

export default BannerSlider;
