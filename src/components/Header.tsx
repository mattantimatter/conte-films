"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { SolutionsDropdown } from "@/components/SolutionsDropdown";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileMenu } from "@/components/MobileMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <>
      {/* Skip to Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-accent-bronze text-white font-medium text-sm rounded-md shadow-lg"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-bg-primary/85 backdrop-blur-md border-b border-border-subtle py-3 shadow-sm"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo forceWhite={isHome && !isScrolled} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link
              href="/#featured-work"
              className={cn(
                "transition-colors py-2 focus-ring rounded-sm",
                pathname === "/#featured-work"
                  ? "text-accent-bronze font-semibold"
                  : isHome && !isScrolled
                  ? "text-white/90 hover:text-white"
                  : "text-text-primary hover:text-accent-bronze"
              )}
            >
              Work
            </Link>

            <SolutionsDropdown isScrolled={isScrolled} />

            <Link
              href="/about"
              className={cn(
                "transition-colors py-2 focus-ring rounded-sm",
                pathname === "/about"
                  ? "text-accent-bronze font-semibold"
                  : isHome && !isScrolled
                  ? "text-white/90 hover:text-white"
                  : "text-text-primary hover:text-accent-bronze"
              )}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={cn(
                "transition-colors py-2 focus-ring rounded-sm",
                pathname === "/contact"
                  ? "text-accent-bronze font-semibold"
                  : isHome && !isScrolled
                  ? "text-white/90 hover:text-white"
                  : "text-text-primary hover:text-accent-bronze"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest bg-accent-bronze text-white hover:bg-accent-bronze-hover transition-all transform hover:-translate-y-0.5 shadow-sm focus-ring"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Navigation Menu */}
          <MobileMenu />
        </div>
      </header>
    </>
  );
}
