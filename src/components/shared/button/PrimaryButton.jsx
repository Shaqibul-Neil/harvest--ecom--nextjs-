import React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const PrimaryButton = ({
  children,
  onClick,
  className,
  href,
  icon: Icon = ChevronRight,
  type = "button",
}) => {
  const commonClasses = cn(
    "w-52 bg-slate-900 overflow-hidden relative group hover:bg-green-700 text-white font-black md:py-4 py-3 rounded-[2rem] transition-all duration-500 shadow-xl shadow-slate-200 hover:shadow-green-200 uppercase tracking-[0.2em] text-[0.75rem] flex items-center justify-center gap-3 active:scale-95 cursor-pointer",
    className,
  );
  const content = (
    <>
      {" "}
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
    </>
  );
  // Link version
  if (href) {
    return (
      <Link href={href} className={commonClasses}>
        {content}
      </Link>
    );
  }
  // Button version
  return (
    <button type={type} onClick={onClick} className={commonClasses}>
      {content}
    </button>
  );
};

export default PrimaryButton;
