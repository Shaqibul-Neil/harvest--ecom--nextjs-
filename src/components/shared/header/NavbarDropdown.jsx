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
import { useSession } from "next-auth/react";
import Image from "next/image";
import placeholder from "@/assets/placeholder.webp";

import React from "react";
import Link from "next/link";

const NavbarDropdown = () => {
  const session = useSession();
  //console.log(session);
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image
            src={placeholder}
            loading="eager"
            alt="Placeholder login"
            width={100}
            height={100}
            className="rounded-lg lg:w-12 lg:h-12 w-10 h-10 cursor-pointer"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="bottom"
          align="end" // try "start" or "center" depending on your trigger
          className="w-48"
        >
          <DropdownMenuLabel>{session?.data?.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={"/dashboard/profile"}>My Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            {" "}
            <Link href={"/dashboard"}>Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Cart</DropdownMenuItem>
          <DropdownMenuItem>
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavbarDropdown;
