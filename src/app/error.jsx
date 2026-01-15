"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RefreshCcw, Home, AlertCircle } from "lucide-react";

export default function Error() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-12 relative overflow-hidden bg-white/50 backdrop-blur-sm rounded-3xl border border-green-100/50 my-10 mx-auto max-w-5xl shadow-2xl shadow-green-500/5">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-200 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <div className="relative z-10 text-center max-w-xl">
        {/* Animated Error Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="mb-8 relative"
        >
          <div className="w-24 h-24 bg-green-100 rounded-3xl flex items-center justify-center mx-auto rotate-12 relative group hover:rotate-0 transition-transform duration-500 shadow-xl shadow-green-100">
            <AlertCircle className="w-12 h-12 text-green-600 -rotate-12 group-hover:rotate-0 transition-transform duration-500" />

            {/* Pulsing indicator */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight leading-tight"
        >
          Oops! This Page{" "}
          <span className="bg-linear-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
            Messed Up
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-500 text-lg mb-10 leading-relaxed font-medium"
        >
          Don't worry, the rest of the application is working just fine.
          Something unexpected happened on this specific page. Let's try to fix
          it!
        </motion.p>

        {/* Specific error message (minified/subtle) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.5 }}
          className="mb-10 p-4 bg-slate-50 rounded-xl border border-slate-100"
        >
          <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 overflow-hidden text-ellipsis whitespace-nowrap">
            Diagnostic: Internal Page Fault
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => window.location.reload()}
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 active:scale-95 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-3 transition-transform duration-500 group-hover:-translate-x-1">
              <RefreshCcw className="w-4 h-4" />
              Try Again
            </span>
            <div className="absolute inset-0 bg-green-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </button>

          <Link
            href="/"
            className="group inline-flex items-center justify-center px-8 py-4 bg-white text-slate-800 font-black text-xs uppercase tracking-widest rounded-full border-2 border-slate-100 transition-all duration-300 hover:border-green-500 hover:text-green-600 active:scale-95 shadow-lg shadow-slate-100 cursor-pointer"
          >
            <span className="flex items-center gap-3 transition-transform duration-500 group-hover:translate-x-1">
              <Home className="w-4 h-4" />
              Go Back Home
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Floating Decorative Orbs (Consistent with project) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400/20 rounded-full"
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
