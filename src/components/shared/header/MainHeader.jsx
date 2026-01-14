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
import { Crop, Menu, ShoppingCart, X } from "lucide-react";
import { useSession } from "next-auth/react";
import LogoutButton from "@/components/form/LogoutButton";
import NavbarDropdown from "./NavbarDropdown";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const session = useSession();
  const path = usePathname();
  //console.log(session);
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Products", href: "/products" },
    { title: "Contact", href: "/contact" },
  ];
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
                    className={cn(
                      "px-3 py-2 text-base font-medium transition-colors",
                      "hover:text-green-800",
                      path === link.href && "text-green-800"
                    )}
                  >
                    {link.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right: Login / Register */}

        <div className="flex gap-4 items-center">
          <button className="cursor-pointer text-green-800">
            <ShoppingCart className="w-6 h-6" />
          </button>
          {session.status === "authenticated" ? (
            <NavbarDropdown />
          ) : (
            <Link
              href="/login"
              className="md:w-28 md:h-10 w-20 h-8 bg-green-800 text-white hover:text-green-800 hover:bg-white rounded-lg flex justify-center transition-all duration-500 items-center border border-transparent hover:border-green-800 text-sm md:text-base"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
