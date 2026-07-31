"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { siteContent } from "@/content/site";
import { cn } from "@/lib/utils";

const primaryLinks = [
  { index: "01", label: "Work", href: "/work" },
  {
    index: "02",
    label: "Solutions",
    href: "#solutions",
    children: [
      { label: "Corporate & Brand Content", href: "/solutions/corporate" },
      { label: "Luxury Real Estate & Aerial Media", href: "/solutions/real-estate" },
      { label: "Events & Experiences", href: "/solutions/events" },
    ],
  },
  { index: "03", label: "About", href: "/about" },
  { index: "04", label: "Contact", href: "/contact" },
] as const;

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsExpanded, setSolutionsExpanded] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-md p-2 text-text-primary transition-colors hover:text-accent-bronze focus-ring"
        aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 left-0 top-0 z-50 flex h-dvh w-full flex-col overflow-y-auto bg-bg-primary px-5 pb-8 pt-5 animate-in fade-in duration-200 sm:px-6">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-border-medium p-2 text-text-primary transition-colors hover:text-accent-bronze focus-ring"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <nav className="mt-10 flex flex-1 flex-col justify-center gap-1 pb-8 sm:mt-12">
            {primaryLinks.map((item) => {
              const hasChildren = "children" in item && item.children;

              if (hasChildren) {
                return (
                  <div key={item.index} className="py-1">
                    <button
                      type="button"
                      onClick={() => setSolutionsExpanded((open) => !open)}
                      aria-expanded={solutionsExpanded}
                      className="group flex w-full items-baseline gap-4 py-2.5 text-left focus-ring"
                    >
                      <span className="w-8 shrink-0 font-mono text-[11px] tabular-nums tracking-wider text-text-muted">
                        {item.index}
                      </span>
                      <span className="flex-1 font-sans text-[2.15rem] font-semibold leading-[1.05] tracking-[-0.035em] text-text-primary transition-colors group-hover:text-accent-bronze sm:text-[2.5rem]">
                        {item.label}
                      </span>
                      <ArrowUpRight
                        className={cn(
                          "h-5 w-5 shrink-0 text-text-muted transition-transform duration-200 group-hover:text-accent-bronze",
                          solutionsExpanded && "rotate-45 text-accent-bronze"
                        )}
                        aria-hidden
                      />
                    </button>

                    {solutionsExpanded && (
                      <ul className="mb-2 ml-12 space-y-3 pb-3 pt-1 sm:ml-14">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className="block font-sans text-base font-medium text-text-muted transition-colors hover:text-accent-bronze focus-ring sm:text-lg"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-baseline gap-4 py-2.5 focus-ring"
                >
                  <span className="w-8 shrink-0 font-mono text-[11px] tabular-nums tracking-wider text-text-muted">
                    {item.index}
                  </span>
                  <span className="flex-1 font-sans text-[2.15rem] font-semibold leading-[1.05] tracking-[-0.035em] text-text-primary transition-colors group-hover:text-accent-bronze sm:text-[2.5rem]">
                    {item.label}
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-text-muted transition-colors group-hover:text-accent-bronze"
                    aria-hidden
                  />
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto space-y-6">
            <Button
              href="/contact"
              onClick={() => setIsOpen(false)}
              size="lg"
              fullWidth
              icon={<ArrowUpRight className="h-4 w-4" />}
            >
              Start a Project
            </Button>

            <div className="space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-muted">
                New Business
              </p>
              <a
                href={`mailto:${siteContent.contact.email}`}
                className="block font-sans text-base font-semibold tracking-tight text-text-primary transition-colors hover:text-accent-bronze focus-ring"
              >
                {siteContent.contact.email}
              </a>
              <a
                href={`tel:${siteContent.contact.phone}`}
                className="flex items-center gap-2 pt-1 text-sm text-text-muted transition-colors hover:text-accent-bronze focus-ring"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden />
                <span>{siteContent.contact.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
