import React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PrimaryButton = ({
  children,
  onClick,
  className,
  icon: Icon = ChevronRight,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "w-52 bg-slate-900 overflow-hidden relative group hover:bg-green-700 text-white font-black md:py-4 py-3 rounded-[2rem] transition-all duration-500 shadow-xl shadow-slate-200 hover:shadow-green-200 uppercase tracking-[0.2em] text-[0.75rem] flex items-center justify-center gap-3 active:scale-95",
        className
      )}
    >
      <span className="relative z-10 transition-all duration-500 group-hover:-translate-x-1">
        {children}
      </span>
      {Icon && (
        <Icon
          size={16}
          className="relative z-10 transition-all duration-500 group-hover:translate-x-1"
          strokeWidth={4}
        />
      )}
      {/* Subtle Hover Overlay */}
      <div className="absolute inset-0 bg-green-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
    </button>
  );
};

export default PrimaryButton;
