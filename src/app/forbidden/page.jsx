"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Forbidden() {
  return (
    <div className="min-h-screen bg-linear-to-br from-red-50 via-white to-red-50 flex items-center justify-center px-6 py-12 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Lock Icon with Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="mx-auto mb-10"
        >
          <div className="relative w-36 h-36 mx-auto">
            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-4 border-dashed border-red-200"
            />
            {/* Inner Circle with Lock */}
            <div className="absolute inset-5 bg-linear-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/40 border-4 border-white/20">
              <svg
                className="w-14 h-14 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Error Code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block px-6 py-2 bg-red-50 text-red-600 text-[0.65rem] font-black rounded-full tracking-[0.25em] border border-red-100 uppercase">
            Error 403
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-6xl font-black text-slate-800 mb-6 tracking-tight"
        >
          Access{" "}
          <span className="bg-linear-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
            Forbidden
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-slate-500 text-lg mb-10 max-w-md mx-auto leading-loose font-medium"
        >
          Sorry, you don't have permission to access this page. Please contact
          the administrator or return to safety.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center px-10 py-4 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-full overflow-hidden transition-all duration-300 hover:bg-red-600 hover:shadow-2xl hover:shadow-red-500/30 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Go Home
            </span>
          </Link>

          <Link
            href="/login"
            className="group inline-flex items-center justify-center px-10 py-4 bg-white text-slate-800 font-black text-xs uppercase tracking-widest rounded-full border-2 border-slate-100 transition-all duration-300 hover:border-red-500 hover:text-red-600 active:scale-95 shadow-xl shadow-slate-100"
          >
            <span className="flex items-center gap-3">
              Sign In
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </Link>
        </motion.div>

        {/* Help Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-sm text-gray-500"
        >
          Think this is a mistake?{" "}
          <Link
            href="/contact"
            className="text-red-600 hover:text-red-700 font-medium underline underline-offset-4 decoration-red-300 hover:decoration-red-500 transition-colors"
          >
            Contact Support
          </Link>
        </motion.p>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-400/40 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
