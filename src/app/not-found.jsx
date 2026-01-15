"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MoveLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-green-50 flex items-center justify-center px-6 py-12 overflow-hidden relative font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200/30 rounded-full blur-3xl text-green-200" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-200/40 rounded-full blur-3xl text-green-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-100/20 rounded-full blur-3xl text-green-100" />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Animated Visual Focal Element (Abstract Map/Path) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="mx-auto mb-10"
        >
          <div className="relative w-40 h-40 mx-auto">
            {/* Outer Rotating Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-4 border-dashed border-green-200"
            />
            {/* Inner Glowing Circle */}
            <div className="absolute inset-6 bg-linear-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 border-4 border-white/20">
              <svg
                className="w-16 h-16 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A2 2 0 013 15.488V5.512a2 2 0 011.053-1.789L9 1m0 19l6 3 5.447-2.724A2 2 0 0021 18.488V8.512a2 2 0 00-1.053-1.789L15 4m-6 16V1l6 3m0 0V23"
                />
                {/* Broken Path X */}
                <motion.path
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5, type: "spring" }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M10 10l4 4m0-4l-4 4"
                  className="text-green-200"
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Error Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block px-6 py-2 bg-green-50 text-green-600 text-[0.7rem] font-black rounded-full tracking-[0.3em] border border-green-100 uppercase">
            Error 404
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-tight"
        >
          Page{" "}
          <span className="bg-linear-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
            Not Found
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-slate-500 text-lg md:text-xl mb-12 max-w-lg mx-auto leading-relaxed font-medium"
        >
          The page you're looking for seems to have vanished into thin air or
          never existed in the first place.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            href="/"
            className="group relative w-full sm:w-60 overflow-hidden bg-slate-900 text-white font-black py-5 rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/25 active:scale-95 flex items-center justify-center gap-3 uppercase tracking-widest text-xs"
          >
            <span className="relative z-10 flex items-center gap-3 transition-transform duration-500 group-hover:-translate-x-1">
              <MoveLeft className="w-4 h-4" strokeWidth={3} />
              Return Home
            </span>
            <div className="absolute inset-0 bg-green-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </Link>

          <Link
            href="/products"
            className="group w-full sm:w-60 bg-white text-slate-900 font-black py-5 rounded-full border-2 border-slate-100 transition-all duration-500 hover:border-green-500 hover:text-green-600 active:scale-95 flex items-center justify-center gap-3 uppercase tracking-widest text-xs shadow-xl shadow-slate-100/50"
          >
            <Search
              className="w-4 h-4 transition-transform duration-500 group-hover:scale-110"
              strokeWidth={3}
            />
            Browse Products
          </Link>
        </motion.div>

        {/* Refined Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <button
            onClick={() => window.history.back()}
            className="text-slate-400 hover:text-green-600 font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2 mx-auto"
          >
            <span className="w-8 h-px bg-slate-200" />
            Go Back to Safety
            <span className="w-8 h-px bg-slate-200" />
          </button>
        </motion.div>
      </div>

      {/* Floating Decorative Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400/30 rounded-full"
            style={{
              left: `${15 + i * 18}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
