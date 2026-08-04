import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  forceWhite?: boolean;
}

export function Logo({ className, forceWhite }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group relative inline-flex h-6 w-[7.25rem] items-center focus-ring rounded-sm transition-opacity hover:opacity-85 sm:h-7 sm:w-[8.5rem]",
        className
      )}
      aria-label="Conté Films Home"
    >
      {/* Crossfade instead of display swapping — avoids a 1-frame blank on scroll. */}
      <Image
        src="/logo-white.png"
        alt="Conté Films"
        width={1024}
        height={203}
        priority
        className={cn(
          "absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-200",
          forceWhite ? "opacity-100" : "opacity-0 dark:opacity-100"
        )}
      />
      <Image
        src="/logo-dark.png"
        alt=""
        aria-hidden
        width={1024}
        height={203}
        priority
        className={cn(
          "absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-200",
          forceWhite ? "opacity-0" : "opacity-100 dark:opacity-0"
        )}
      />
    </Link>
  );
}
