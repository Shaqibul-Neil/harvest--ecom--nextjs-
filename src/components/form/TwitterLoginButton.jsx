"use client";

import { Button } from "@/components/ui/button";

const TwitterLoginButton = () => {
  return (
    <Button
      type="button"
      variant="outline"
      className="lg:w-32 md:w-28 w-20 h-11 cursor-pointer hover:bg-gray-50 transition-colors flex justify-center items-center md:gap-2"
      onClick={() => {}}
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#000000">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
      <span className="hidden md:block">Twitter</span>
    </Button>
  );
};

export default TwitterLoginButton;
