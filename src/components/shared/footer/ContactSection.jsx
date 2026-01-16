"use client";
import { cn } from "@/lib/utils";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export const ContactSection = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:col-span-1 border-b border-slate-200 lg:border-none pb-6 lg:pb-0">
      {/* Mobile Toggle */}
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

      {/* Desktop Header */}
      <h3 className="hidden lg:block text-sm font-black text-slate-800 uppercase tracking-[0.25em] mb-8">
        {title}
      </h3>

      {/* Content */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out lg:block",
          isOpen
            ? "max-h-[500px] opacity-100 mt-6"
            : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100 lg:mt-0"
        )}
      >
        <div className="space-y-6">
          <div className="space-y-1 text-slate-500 text-sm font-medium">
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-xl bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                <MapPin size={14} />
              </div>
              <p className="self-center font-bold text-slate-400 text-xs">
                Proxima Centurai, Kuiper Belt.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                <Phone size={14} />
              </div>
              <p className="self-center font-bold text-slate-400 text-xs">
                +09876543210
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <Mail size={14} />
              </div>
              <p className="self-center font-bold text-slate-400 text-xs">
                example@email.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
