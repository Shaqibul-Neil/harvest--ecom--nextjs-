"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Crop, Menu, X } from "lucide-react";

export default function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Products", href: "/products" },
    { title: "About", href: "/about" },
  ];
  return (
    <header className="w-full border-b border-border bg-background py-3">
      <div className="mx-auto flex items-center justify-between container max-w-[95%]">
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
              className={`bg-green-50 dark:bg-black border-l-4 border-green-200 rounded-xl dark:border-gray-700 z-20 transform transition-all duration-500 top-full absolute w-48 left-0 ${
                menuOpen
                  ? "translate-y-2 opacity-100 pointer-events-auto"
                  : "-translate-y-5 opacity-0 pointer-events-none"
              } `}
            >
              <nav className="flex flex-col gap-1 px-6 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
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
            <Link href={"/"} className="flex items-center gap-1 text-green-800">
              <Crop className="hidden lg:block" />
              <span className="font-bold text-2xl ">Harvest</span>
            </Link>
          </div>
        </div>

        {/* Middle: Navigation Menu */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="flex gap-4">
            {navLinks.map((link, i) => (
              <NavigationMenuItem key={i}>
                <NavigationMenuLink asChild>
                  <Link
                    href={link.href}
                    className="px-3 py-2 hover:bg-accent hover:text-accent-foreground rounded-md"
                  >
                    {link.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right: Login / Register */}
        <div className="flex gap-2">
          <Link
            href="/login"
            className="md:w-28 md:h-10 w-20 h-8 bg-green-800 text-white hover:text-green-800 hover:bg-white rounded-lg flex justify-center transition-all duration-500 items-center border border-transparent hover:border-green-800 text-sm md:text-base"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
