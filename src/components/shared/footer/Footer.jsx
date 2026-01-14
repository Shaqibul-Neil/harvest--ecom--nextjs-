"use client";

import Link from "next/link";
import { useState } from "react";
import { MapPin, Phone, Mail, Smartphone, ChevronDown } from "lucide-react";

import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaSquareInstagram,
} from "react-icons/fa6";

import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-100">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="group inline-flex items-center gap-3">
              <h2 className="text-4xl font-black text-slate-800 tracking-tight">
                Harvest
              </h2>
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
            </Link>
            <p className="text-slate-500 text-base leading-relaxed font-medium max-w-sm">
              The Harvest is the biggest market of grocery products. Get your
              daily needs from our store with premium quality and speed.
            </p>
            <div className="flex gap-4">
              <button className="flex items-center gap-3 bg-slate-900 text-white px-5 py-3 rounded-2xl hover:bg-green-600 transition-all shadow-xl shadow-slate-100 active:scale-95">
                <Smartphone size={20} />
                <div className="text-left font-black">
                  <div className="text-[10px] uppercase opacity-60 tracking-widest">Get it on</div>
                  <div className="text-xs uppercase tracking-wider">Google Play</div>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-slate-900 text-white px-5 py-3 rounded-2xl hover:bg-green-600 transition-all shadow-xl shadow-slate-100 active:scale-95">
                <div className="w-5 h-5 fill-current">
                   <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.07-3.11-1.08.05-2.37.74-3.14 1.61-.69.77-1.28 2.01-1.11 3.15 1.19.09 2.4-.6 3.18-1.65" /></svg>
                </div>
                <div className="text-left font-black">
                  <div className="text-[10px] uppercase opacity-60 tracking-widest">Download on</div>
                  <div className="text-xs uppercase tracking-wider">App Store</div>
                </div>
              </button>
            </div>
          </div>

          <FooterSection
            title="Category"
            items={[
              "Dairy & Milk",
              "Snack & Spice",
              "Fast Food",
              "Juice & Drinks",
              "Bakery",
              "Seafood",
            ]}
          />

          <FooterSection
            title="Company"
            items={[
              "About us",
              "Delivery",
              "Legal Notice",
              "Terms & conditions",
              "Secure payment",
              "Contact us",
            ]}
          />

          <FooterSection
            title="Account"
            items={[
              "Sign In",
              "View Cart",
              "Return Policy",
              "Become a Vendor",
              "Affiliate Program",
              "Payments",
            ]}
          />

          {/* Contact Column */}
          <div className="lg:col-span-1 space-y-8">
            <h3 className="text-[0.7rem] font-black text-slate-800 uppercase tracking-[0.25em]">
              Contact Us
            </h3>
            <div className="space-y-5 text-slate-500 text-sm font-medium">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                   <MapPin size={18} />
                </div>
                <p className="self-center">1234 Elm Street USA.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                   <Phone size={18} />
                </div>
                <p className="self-center">+00 9876543210</p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                   <Mail size={18} />
                </div>
                <p className="self-center">example@email.com</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaSquareInstagram].map((Icon, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white text-slate-400 hover:bg-green-600 hover:text-white transition-all duration-500 rounded-xl border border-slate-100 shadow-sm"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Component for Collapsible Sections
const FooterSection = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:col-span-1 border-b border-slate-200 lg:border-none pb-6 lg:pb-0">
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex lg:hidden items-center justify-between w-full text-base font-black text-slate-800 uppercase tracking-widest"
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
      <h3 className="hidden lg:block text-[0.7rem] font-black text-slate-800 uppercase tracking-[0.25em] mb-8">
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

export default Footer;
