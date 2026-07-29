"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 focus-ring rounded-sm transition-opacity hover:opacity-85 group",
        className
      )}
      aria-label="Conté Films Home"
    >
      {/* SVG Image Logo for Dark Mode (White Text) */}
      <div className={cn("items-center", isDark || !mounted ? "flex" : "hidden")}>
        <Image
          src="/logo-light.svg"
          alt="Conté Films"
          width={220}
          height={38}
          priority
          className="h-6 sm:h-7 w-auto object-contain"
        />
      </div>

      {/* SVG Image Logo for Light Mode (Black Text) */}
      <div className={cn("items-center", !isDark && mounted ? "flex" : "hidden")}>
        <Image
          src="/logo-dark.svg"
          alt="Conté Films"
          width={220}
          height={38}
          priority
          className="h-6 sm:h-7 w-auto object-contain"
        />
      </div>
    </Link>
  );
}
