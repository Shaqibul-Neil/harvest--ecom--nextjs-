import React from "react";

const SubHeadings = ({ children, className, style }) => {
  return (
    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-green-200/50 rounded-full px-4 py-2 shadow-lg shadow-green-100/50">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
      <span className="md:text-[0.7rem] text-[10px] font-bold text-green-700 uppercase tracking-[0.2em]">
        {children}
      </span>
    </div>
  );
};

export default SubHeadings;
