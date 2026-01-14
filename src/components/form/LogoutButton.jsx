"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <Button
      type="button"
      onClick={() => signOut()}
      className="w-full cursor-pointer"
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
