import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center focus-ring rounded-sm transition-opacity hover:opacity-85 group",
        className
      )}
      aria-label="Conté Films Home"
    >
      {/* Dark mode logo: White text (visible only in dark mode) */}
      <Image
        src="/logo-white.png"
        alt="Conté Films"
        width={1024}
        height={203}
        priority
        className="h-6 sm:h-7 w-auto object-contain hidden dark:block"
      />

      {/* Light mode logo: Solid Black text (visible only in light mode) */}
      <Image
        src="/logo-dark.png"
        alt="Conté Films"
        width={1024}
        height={203}
        priority
        className="h-6 sm:h-7 w-auto object-contain block dark:hidden"
      />
    </Link>
  );
}
