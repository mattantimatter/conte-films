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
        "inline-flex items-center focus-ring rounded-sm transition-opacity hover:opacity-85 group",
        className
      )}
      aria-label="Conté Films Home"
    >
      {/* Uploaded Logo Image - White Text for Dark Theme */}
      <div className={cn("items-center", isDark || !mounted ? "flex" : "hidden")}>
        <Image
          src="/logo-white.png"
          alt="Conté Films"
          width={1024}
          height={203}
          priority
          className="h-6 sm:h-7 w-auto object-contain"
        />
      </div>

      {/* Uploaded Logo Image - Dark Text for Light Theme */}
      <div className={cn("items-center", !isDark && mounted ? "flex" : "hidden")}>
        <Image
          src="/logo-dark.png"
          alt="Conté Films"
          width={1024}
          height={203}
          priority
          className="h-6 sm:h-7 w-auto object-contain"
        />
      </div>
    </Link>
  );
}
