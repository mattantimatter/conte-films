"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center focus-ring rounded-sm transition-opacity hover:opacity-80",
        className
      )}
      aria-label="Conté Films Home"
    >
      {/* Dark logo (black text) — visible in light mode */}
      <Image
        src="/logo-dark.png"
        alt="Conté Films"
        width={180}
        height={32}
        priority
        className={cn(
          "h-5 sm:h-6 w-auto object-contain transition-opacity duration-200",
          isDark ? "hidden" : "block"
        )}
      />
      {/* White logo — visible in dark mode */}
      <Image
        src="/logo-white.png"
        alt="Conté Films"
        width={180}
        height={32}
        priority
        className={cn(
          "h-5 sm:h-6 w-auto object-contain transition-opacity duration-200",
          isDark ? "block" : "hidden"
        )}
      />
    </Link>
  );
}
