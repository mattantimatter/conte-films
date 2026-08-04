"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { SolutionsDropdown } from "@/components/SolutionsDropdown";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileMenu } from "@/components/MobileMenu";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const HERO_EXIT_PX = 56;
const HERO_ENTER_PX = 96;

export function Header() {
  const pathname = usePathname();
  const hasDarkHeroPage =
    pathname === "/" || pathname.startsWith("/solutions/");
  const [isScrolled, setIsScrolled] = useState(false);
  const [overDarkHero, setOverDarkHero] = useState(hasDarkHeroPage);
  const overDarkHeroRef = useRef(overDarkHero);
  const isScrolledRef = useRef(isScrolled);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    overDarkHeroRef.current = overDarkHero;
  }, [overDarkHero]);

  useEffect(() => {
    isScrolledRef.current = isScrolled;
  }, [isScrolled]);

  useEffect(() => {
    const update = () => {
      const nextScrolled = window.scrollY > 12;
      if (nextScrolled !== isScrolledRef.current) {
        setIsScrolled(nextScrolled);
      }

      if (!hasDarkHeroPage) {
        if (overDarkHeroRef.current) setOverDarkHero(false);
        return;
      }

      const hero = document.querySelector<HTMLElement>("[data-site-hero]");
      if (!hero) {
        if (overDarkHeroRef.current) setOverDarkHero(false);
        return;
      }

      const bottom = hero.getBoundingClientRect().bottom;
      const currentlyOver = overDarkHeroRef.current;
      const nextOver = currentlyOver
        ? bottom > HERO_EXIT_PX
        : bottom > HERO_ENTER_PX;

      if (nextOver !== currentlyOver) {
        setOverDarkHero(nextOver);
      }
    };

    const onScrollOrResize = () => {
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [hasDarkHeroPage, pathname]);

  const lightOnDark = hasDarkHeroPage && overDarkHero;
  const sticky = isScrolled || !lightOnDark;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-accent-gradient text-accent-fg font-medium text-sm rounded-md shadow-lg"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          // Fixed padding avoids mobile scroll jumps when sticky state toggles.
          "fixed top-0 left-0 right-0 z-40 py-3.5 transition-[background-color,border-color,box-shadow] duration-300",
          lightOnDark && !isScrolled
            ? "border-b border-transparent bg-transparent"
            : lightOnDark
              ? "border-b border-white/10 bg-black/45 shadow-sm backdrop-blur-md"
              : isScrolled
                ? "border-b border-border-subtle bg-bg-primary/80 shadow-sm backdrop-blur-md"
                : "border-b border-transparent bg-transparent",
          lightOnDark && "accent-on-dark"
        )}
      >
        {/* Metallic accent rule — same gradient language as desktop CTAs */}
        <span
          aria-hidden
          className={cn(
            "rule-gradient-accent pointer-events-none absolute inset-x-0 bottom-0 h-px transition-opacity duration-300",
            sticky && isScrolled ? "opacity-100" : "opacity-0"
          )}
        />

        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo forceWhite={lightOnDark} />

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

          <MobileMenu overDarkHero={lightOnDark} />
        </div>
      </header>
    </>
  );
}
