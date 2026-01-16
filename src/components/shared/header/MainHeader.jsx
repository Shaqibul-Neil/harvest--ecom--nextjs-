"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Crop, Menu, ShoppingCart, X } from "lucide-react";
import NavbarDropdown from "./NavbarDropdown";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export default function MainHeader({ session }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname();
  const { cart, mounted } = useCart();
  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  //console.log(cart);
  //console.log(cartQuantity);
  //console.log(session);
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Products", href: "/products" },
    { title: "Contact", href: "/contact" },
  ];
  if (!mounted) {
    return null; // বা skeleton / empty header
  }

  return (
    <header className="w-full border-b border-border py-4">
      <div className="mx-auto flex items-center justify-between w-11/12 max-w-[1440px]">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-1 relative">
          <div>
            {/* Mobile Hamburger */}

            <button
              className="lg:hidden mt-2 cursor-pointer z-30 relative"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {/* SM and md Navigation */}
            <div
              className={`bg-white dark:bg-black border-l-4 border-green-500 rounded-[2rem] shadow-2xl z-20 transform transition-all duration-500 top-full absolute w-56 left-0 ${
                menuOpen
                  ? "translate-y-2 opacity-100 pointer-events-auto"
                  : "-translate-y-5 opacity-0 pointer-events-none"
              } `}
            >
              <nav className="flex flex-col gap-2 px-8 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-slate-600 dark:text-gray-200 font-black text-[0.7rem] uppercase tracking-widest hover:text-green-600 transition-colors"
                    onClick={() => setMenuOpen(false)} // close menu on click
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          {/* Logo */}
          <div>
            <Link
              href={"/"}
              className="flex items-center gap-2 text-slate-800 group"
            >
              <div className="w-10 h-10 bg-green-200 md:flex items-center justify-center rounded-2xl group-hover:bg-green-600 group-hover:text-white transition-all duration-500 hidden">
                <Crop className="w-6 h-6" />
              </div>
              <span className="font-black text-2xl tracking-tighter">
                Harvest
              </span>
            </Link>
          </div>
        </div>

        {/* Middle: Navigation Menu */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="flex gap-6">
            {navLinks.map((link, i) => (
              <NavigationMenuItem key={i}>
                <NavigationMenuLink asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      "px-4 py-2 text-[0.7rem] font-black uppercase tracking-[0.2em] transition-all relative overflow-hidden group",
                      path === link.href
                        ? "text-green-600"
                        : "text-slate-400 hover:text-slate-800"
                    )}
                  >
                    {link.title}
                    <div
                      className={cn(
                        "absolute bottom-0 left-0 h-0.5 bg-green-500 transition-all duration-500",
                        path === link.href ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right: Login / Register */}

        <div className="flex gap-6 items-center">
          <Link
            href={"/cart"}
            className="cursor-pointer text-slate-400 hover:text-green-600 transition-colors relative"
          >
            <ShoppingCart className="md:w-7 md:h-7 w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-green-500 text-slate-800 md:text-xs text-[10px] font-black md:w-6 md:h-6 h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
              {cartQuantity}
            </span>
          </Link>
          {session ? (
            <NavbarDropdown session={session} />
          ) : (
            <Link
              href="/login"
              className="px-8 py-3 bg-slate-900 text-white hover:bg-green-600 rounded-full flex justify-center transition-all duration-500 items-center font-black text-xs uppercase tracking-widest shadow-xl shadow-slate-100"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
