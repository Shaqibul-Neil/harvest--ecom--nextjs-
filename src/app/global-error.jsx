"use client";

import { motion } from "framer-motion";
import { ShieldAlert, RefreshCw, Home } from "lucide-react";

export default function GlobalError() {
  return (
    <html>
      <body className="bg-slate-950 min-h-screen flex items-center justify-center p-6 selection:bg-green-500 selection:text-white">
        {/* Deep background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(22,163,74,0.1),transparent_70%)]" />
          <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-green-900/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-green-900/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-3xl w-full text-center">
          {/* OS-Level Critical Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12 inline-block"
          >
            <div className="p-8 bg-green-600/10 border-2 border-green-500/20 rounded-[3rem] backdrop-blur-xl shadow-[0_0_50px_rgba(34,197,94,0.1)] relative group">
              <ShieldAlert
                className="w-20 h-20 text-green-500 transition-transform duration-700 group-hover:scale-110"
                strokeWidth={1.5}
              />

              {/* Critical Glitch Effect Circles */}
              <div className="absolute inset-0 border border-green-400/30 rounded-[3rem] animate-ping opacity-20" />
            </div>
          </motion.div>

          {/* Large Critical Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6 mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
              SYSTEM <span className="text-green-500 block">FAILURE</span>
            </h1>

            <p className="text-slate-400 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
              A critical core exception has occurred. The current process was
              terminated to protect your security and data integrity.
            </p>
          </motion.div>

          {/* Recovery Actions (Emergency Exit) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <button
              onClick={() => window.location.reload()}
              className="group relative px-12 py-5 bg-green-600 text-white font-black text-sm uppercase tracking-[0.2em] rounded-2xl overflow-hidden transition-all duration-300 hover:bg-green-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] active:scale-95 flex items-center gap-4"
            >
              <RefreshCw className="w-5 h-5 animate-spin-slow group-hover:animate-spin" />
              Reload Application
            </button>

            <button
              onClick={() => (window.location.href = "/")}
              className="group px-12 py-5 bg-transparent text-slate-300 font-extrabold text-sm uppercase tracking-[0.2em] border-2 border-slate-800 rounded-2xl transition-all duration-300 hover:border-green-500/50 hover:text-green-400 active:scale-95 flex items-center gap-4"
            >
              <Home className="w-5 h-5" />
              Emergency Exit
            </button>
          </motion.div>

          {/* Subtle Technical Trace (Fake OS/Terminal Look) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 1 }}
            className="mt-24 font-mono text-[10px] text-green-500/80 uppercase tracking-[0.3em] flex flex-col gap-2 items-center"
          >
            <div className="flex gap-4">
              <span>Error_Code: 0x8004100E</span>
              <span className="w-1 h-3 bg-green-500/50 animate-pulse" />
              <span>Process: App_Root_Hydration</span>
            </div>
            <p>Attempting recovery through safe-mode reset...</p>
          </motion.div>
        </div>
      </body>
    </html>
  );
}
