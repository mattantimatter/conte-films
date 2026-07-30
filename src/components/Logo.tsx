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
        "inline-flex items-center focus-ring rounded-sm transition-opacity hover:opacity-85 group",
        className
      )}
      aria-label="Conté Films Home"
    >
      {/* White logo: shown in dark mode OR when forced (e.g. over dark hero video) */}
      <Image
        src="/logo-white.png"
        alt="Conté Films"
        width={1024}
        height={203}
        priority
        className={cn(
          "h-6 sm:h-7 w-auto object-contain",
          forceWhite ? "block" : "hidden dark:block"
        )}
      />

      {/* Dark logo: shown in light mode, hidden when forceWhite */}
      <Image
        src="/logo-dark.png"
        alt="Conté Films"
        width={1024}
        height={203}
        priority
        className={cn(
          "h-6 sm:h-7 w-auto object-contain",
          forceWhite ? "hidden" : "block dark:hidden"
        )}
      />
    </Link>
  );
}
