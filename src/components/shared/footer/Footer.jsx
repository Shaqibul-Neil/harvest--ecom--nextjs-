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
    <footer className="bg-green-50/50 pt-16 pb-8 border-t border-green-100 font-sans">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column - Always visible */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-bold text-green-900 border-b-2 border-green-300 inline-block pb-1">
                Harvest
              </h2>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed pr-4">
              The Harvest is the biggest market of grocery products. Get your
              daily needs from our store.
            </p>
            <div className="flex gap-4 pt-2">
              <button className="flex items-center gap-2 bg-gray-900 text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition">
                <Smartphone size={20} />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-medium">
                    Get it on
                  </div>
                  <div className="text-sm font-bold leading-none">
                    Google Play
                  </div>
                </div>
              </button>
              <button className="flex items-center gap-2 bg-gray-900 text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.07-3.11-1.08.05-2.37.74-3.14 1.61-.69.77-1.28 2.01-1.11 3.15 1.19.09 2.4-.6 3.18-1.65" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-medium">
                    Download on
                  </div>
                  <div className="text-sm font-bold leading-none">
                    App Store
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Collapsible Columns Group */}
          {/* Note: In mobile/tablet (sm/md) these stack. In lg they are part of the grid */}

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

          {/* Contact Column - Always visible/standard layout logic */}
          <div className="lg:col-span-1 space-y-6 mt-6 lg:mt-0">
            <h3 className="text-lg font-semibold text-green-900 border-b border-green-200 pb-2 lg:border-none lg:pb-0">
              Contact
            </h3>
            <div className="space-y-4 text-gray-500 text-sm">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-green-600 shrink-0" />
                <p>1234 Elm Street USA.</p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-green-600 shrink-0" />
                <p>+00 9876543210</p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-green-600 shrink-0" />
                <p>example@email.com</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-1 mt-6">
              {[
                { Icon: FaFacebookF },
                { Icon: FaXTwitter },
                { Icon: FaLinkedinIn },
                { Icon: FaSquareInstagram },
              ].map(({ Icon }, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-green-800 text-white hover:scale-105 transition-all duration-600 rounded-full"
                >
                  <Icon size={18} />
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
    <div className="lg:col-span-1 border-b border-green-200 lg:border-none pb-4 lg:pb-0">
      {/* Mobile/Tablet Toggle Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex lg:hidden items-center justify-between w-full text-lg font-bold text-green-900 group"
      >
        <span>{title}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-green-600 transition-transform duration-300",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        />
      </button>

      {/* Desktop Header (Static) */}
      <h3 className="hidden lg:block text-lg font-semibold  text-green-900 mb-6">
        {title}
      </h3>

      {/* Content */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out lg:block",
          isOpen
            ? "max-h-[500px] opacity-100 mt-4"
            : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100 lg:mt-0"
        )}
      >
        <ul className="space-y-4 text-gray-500 text-sm">
          {items.map((item) => (
            <li key={item}>
              <Link
                href="#"
                className="hover:text-green-600 hover:translate-x-1 transition-all inline-block"
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
