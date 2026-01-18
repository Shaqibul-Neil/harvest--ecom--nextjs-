"use client";
import LogoutButton from "@/components/form/LogoutButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import placeholder from "@/assets/placeholder.webp";

import React from "react";
import Link from "next/link";

const NavbarDropdown = ({ session }) => {
  return (
    <div className="flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none focus:ring-0">
          <div className="relative group">
            <Image
              src={session?.user?.image || placeholder}
              loading="eager"
              alt="User"
              width={100}
              height={100}
              className="rounded-full w-10 h-10 cursor-pointer border-2 border-white shadow-lg group-hover:border-green-500 transition-all duration-500"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="bottom"
          align="end"
          className="w-64 p-2 rounded-[1.5rem] border-slate-100 shadow-2xl mt-2 animate-in fade-in slide-in-from-top-2 duration-300"
        >
          <div className="px-4 py-3 border-b border-slate-50 mb-2">
            <DropdownMenuLabel className="p-0 font-black text-slate-800 text-sm">
              {session?.user?.name || "User"}
            </DropdownMenuLabel>
            <p className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
              {session?.user?.email}
            </p>
          </div>

          <DropdownMenuItem className="rounded-xl focus:bg-slate-50 p-0 overflow-hidden">
            <Link
              href={"/dashboard/profile"}
              className="w-full h-full px-4 py-2.5 text-xs font-black uppercase tracking-widest text-slate-600 hover:text-green-600 transition-colors"
            >
              My Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-xl focus:bg-slate-50 p-0 overflow-hidden">
            <Link
              href={"/dashboard"}
              className="w-full h-full px-4 py-2.5 text-xs font-black uppercase tracking-widest text-slate-600 hover:text-green-600 transition-colors"
            >
              Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-xl focus:bg-slate-50 p-0 overflow-hidden">
            <Link
              href={"/cart"}
              className="w-full h-full px-4 py-2.5 text-xs font-black uppercase tracking-widest text-slate-600 hover:text-green-600 transition-colors"
            >
              My cart
            </Link>
          </DropdownMenuItem>

          <div className="mt-2 pt-2 border-t border-slate-50">
            <DropdownMenuItem className="rounded-xl focus:bg-red-50 p-0 overflow-hidden">
              <LogoutButton />
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavbarDropdown;
