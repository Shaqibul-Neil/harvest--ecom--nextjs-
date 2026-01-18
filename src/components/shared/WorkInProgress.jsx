"use client";

import { motion } from "motion/react";
import { Construction, Sparkles, Hammer, Wrench } from "lucide-react";
import Link from "next/link";

export default function WorkInProgress() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50/50 via-white to-emerald-50/30 px-4 my-16">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-100/20 rounded-full blur-3xl" />
      </div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-white/80 backdrop-blur-xl p-10 md:p-14 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-green-100/50 text-center max-w-lg"
      >
        {/* Decorative Corner Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="absolute -top-4 -right-4 bg-gradient-to-br from-green-500 to-emerald-600 text-white p-3 rounded-2xl shadow-lg shadow-green-500/30"
        >
          <Sparkles size={24} />
        </motion.div>

        {/* Icon Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
          className="relative mx-auto mb-8 w-28 h-28"
        >
          {/* Animated Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-500/20 animate-pulse" />
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100" />

          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Construction
              size={40}
              className="text-green-600"
              strokeWidth={1.5}
            />
          </div>

          {/* Orbiting Icons */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white p-2 rounded-xl shadow-lg shadow-slate-100 border border-slate-50">
              <Hammer size={14} className="text-amber-500" />
            </div>
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white p-2 rounded-xl shadow-lg shadow-slate-100 border border-slate-50">
              <Wrench size={14} className="text-slate-500" />
            </div>
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <span className="inline-block text-[0.65rem] font-black uppercase tracking-[0.25em] text-green-600 bg-green-50 px-4 py-2 rounded-full">
            Coming Soon
          </span>

          <h1 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
            We're Building
            <br />
            <span className="text-green-600">Something Great</span>
          </h1>

          <p className="text-slate-400 font-medium text-sm leading-relaxed max-w-sm mx-auto">
            This feature is currently under construction. We're crafting
            something clean, fast, and genuinely useful for you.
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 space-y-3"
        >
          {/* Progress Bar */}
          <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
            />
          </div>

          <div className="flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[0.7rem] font-bold text-slate-400 uppercase tracking-widest">
              Development in progress
            </span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.15em] px-8 py-4 rounded-full hover:bg-green-600 transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-green-200 active:scale-95"
          >
            Back to Home
          </Link>
        </motion.div>

        {/* Bottom Decorative Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-[0.6rem] font-bold uppercase tracking-[0.3em] text-slate-300"
        >
          Harvest • Fresh & Organic
        </motion.p>
      </motion.div>
    </div>
  );
}
