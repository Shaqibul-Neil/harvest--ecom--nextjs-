"use client";
import React from "react";
import IconButton from "../shared/button/IconButton";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useRouter } from "next/navigation";
import { Eye, GitCompare, Heart } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ProductCardActions = ({ className, productId }) => {
  const [hoverState, setHoverState] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className={cn(
        "flex items-center gap-3 absolute bottom-4 left-1/2 -translate-x-1/2",
        className
      )}
    >
      {/* Wishlist */}
      <IconButton icon={Heart} />

      {/* Quick View */}
      <Link href={`/products/${productId}`}>
        <IconButton icon={Eye} />
      </Link>

      {/* Compare */}
      <IconButton icon={GitCompare} />
    </div>
  );
};

export default ProductCardActions;
