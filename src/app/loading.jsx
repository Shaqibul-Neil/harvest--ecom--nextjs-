import React from "react";

const RootLoading = () => {
  return (
    <div className="min-h-screen  bg-linear-to-br from-green-50/50 via-white to-white flex flex-col items-center justify-center gap-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />

      {/* Main Logo/Icon Loading */}
      <div className="relative z-10">
        {/* Outer Rotating Ring */}
        <div className="w-24 h-24 border-4 border-green-100 border-t-green-600 rounded-full shadow-lg animate-harvest-spin" />

        {/* Inner Pulsing Circle */}
        <div className="absolute inset-0 m-auto w-10 h-10 bg-green-500 rounded-full animate-harvest-pulse" />
      </div>

      {/* Loading Text */}
      <div className="flex flex-col items-center gap-2 z-10">
        <h2 className="text-slate-900 font-black text-xl tracking-[0.2em] uppercase animate-harvest-fade-up">
          Harvest
        </h2>
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full animate-harvest-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>

      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-12 h-1 bg-green-600 rounded-full opacity-20 animate-harvest-slide" />

      {/* Floating Decorative Orbs (Pure CSS - Matches not-found style) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-400/30 rounded-full animate-harvest-orb-float"
            style={{
              left: `${15 + i * 18}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RootLoading;
