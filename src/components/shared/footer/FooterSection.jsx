"use client";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const FooterSection = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:col-span-1 border-b border-slate-200 lg:border-none pb-6 lg:pb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex lg:hidden items-center justify-between w-full text-[0.7rem] font-black text-slate-800 uppercase tracking-[0.25em]"
      >
        <span>{title}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-green-600 transition-transform duration-300",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        />
      </button>

      <h3 className="hidden lg:block text-sm font-black text-slate-800 uppercase tracking-[0.25em] mb-8">
        {title}
      </h3>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out lg:block",
          isOpen
            ? "max-h-[500px] opacity-100 mt-6"
            : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100 lg:mt-0"
        )}
      >
        <ul className="space-y-5 text-slate-400 text-sm font-bold">
          {items.map((item) => (
            <li key={item}>
              <Link
                href="#"
                className="hover:text-green-600 hover:translate-x-2 transition-all duration-300 inline-block"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
