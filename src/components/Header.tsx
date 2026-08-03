"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { SolutionsDropdown } from "@/components/SolutionsDropdown";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileMenu } from "@/components/MobileMenu";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const HEADER_CLEARANCE_PX = 72;

export function Header() {
  const pathname = usePathname();
  const hasDarkHeroPage =
    pathname === "/" || pathname.startsWith("/solutions/");
  const [isScrolled, setIsScrolled] = useState(false);
  const [overDarkHero, setOverDarkHero] = useState(hasDarkHeroPage);

  useEffect(() => {
    const update = () => {
      setIsScrolled(window.scrollY > 20);

      if (!hasDarkHeroPage) {
        setOverDarkHero(false);
        return;
      }

      const hero = document.querySelector<HTMLElement>("[data-site-hero]");
      if (!hero) {
        setOverDarkHero(false);
        return;
      }

      // Stay in the light-on-dark nav state while the hero still fills
      // the area under the fixed header.
      setOverDarkHero(hero.getBoundingClientRect().bottom > HEADER_CLEARANCE_PX);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [hasDarkHeroPage, pathname]);

  const lightOnDark = hasDarkHeroPage && overDarkHero;

  return (
    <>
      {/* Skip to Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-accent-gradient text-accent-fg font-medium text-sm rounded-md shadow-lg"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          lightOnDark
            ? isScrolled
              ? "border-b border-white/10 bg-black/40 py-3 backdrop-blur-md"
              : "bg-transparent py-5"
            : isScrolled
              ? "border-b border-border-subtle bg-bg-primary/85 py-3 shadow-sm backdrop-blur-md"
              : "bg-transparent py-5",
          // Sitting over the hero video, so the accent needs the dark-surface
          // ramp to match the hero's own actions rather than the page theme's.
          lightOnDark && "accent-on-dark"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Logo forceWhite={lightOnDark} />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link
              href="/work"
              className={cn(
                "rounded-sm py-2 transition-colors focus-ring",
                pathname === "/work"
                  ? "font-semibold text-accent-bronze"
                  : lightOnDark
                    ? "text-white/90 hover:text-white"
                    : "text-text-primary hover:text-accent-bronze"
              )}
            >
              Work
            </Link>

            <SolutionsDropdown overDarkHero={lightOnDark} />

            <Link
              href="/about"
              className={cn(
                "rounded-sm py-2 transition-colors focus-ring",
                pathname === "/about"
                  ? "font-semibold text-accent-bronze"
                  : lightOnDark
                    ? "text-white/90 hover:text-white"
                    : "text-text-primary hover:text-accent-bronze"
              )}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={cn(
                "rounded-sm py-2 transition-colors focus-ring",
                pathname === "/contact"
                  ? "font-semibold text-accent-bronze"
                  : lightOnDark
                    ? "text-white/90 hover:text-white"
                    : "text-text-primary hover:text-accent-bronze"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <ThemeToggle
              className={
                lightOnDark
                  ? "border-white/25 bg-white/10 text-white hover:border-white/50 hover:text-white"
                  : undefined
              }
            />

            <Button href="/contact" size="sm" icon={<ArrowUpRight className="h-3.5 w-3.5" />}>
              Start a Project
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          <MobileMenu overDarkHero={lightOnDark} />
        </div>
      </header>
    </>
  );
}
