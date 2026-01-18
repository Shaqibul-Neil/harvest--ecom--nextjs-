import Link from "next/link";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaSquareInstagram,
} from "react-icons/fa6";

import { FooterSection } from "./FooterSection";
import { ContactSection } from "./ContactSection";
import FooterAppButton from "./FooterAppButton";

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-44 pb-12 border-t border-slate-100">
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
            <FooterAppButton />
          </div>
          {/* Category Column */}
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
          {/* Company Column */}
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
          {/* Account Column */}
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
          <div>
            <ContactSection title="Contact Us" />
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaSquareInstagram].map(
                (Icon, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    className="w-8 h-8 flex items-center justify-center bg-white text-slate-400 hover:bg-green-600 hover:text-white transition-all duration-500 rounded-xl border border-slate-100 shadow-sm"
                  >
                    <Icon size={14} />
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-slate-600 text-sm">
        All Right Reserved © 2023 Harvest. Shaqibul Islam.
      </p>
    </footer>
  );
};

export default Footer;
