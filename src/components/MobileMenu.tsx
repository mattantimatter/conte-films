"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronRight, Phone, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { siteContent } from "@/content/site";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsExpanded, setSolutionsExpanded] = useState(true);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when open
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

  // Handle escape key
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
        className="p-2 text-text-primary hover:text-accent-bronze transition-colors focus-ring rounded-md"
        aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-0 left-0 w-full h-screen bg-bg-primary z-50 flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-border-subtle pb-4">
            <Logo />
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full border border-border-medium text-text-primary hover:text-accent-bronze transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="my-auto py-8 space-y-6">
            <div>
              <Link
                href="/work"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif tracking-wider font-light text-text-primary hover:text-accent-bronze transition-colors flex items-center justify-between py-2 border-b border-border-subtle/50"
              >
                <span>Work</span>
                <ChevronRight className="w-5 h-5 opacity-40" />
              </Link>
            </div>

            {/* Nested Solutions */}
            <div className="border-b border-border-subtle/50 pb-2">
              <button
                onClick={() => setSolutionsExpanded(!solutionsExpanded)}
                className="w-full text-2xl font-serif tracking-wider font-light text-text-primary hover:text-accent-bronze transition-colors flex items-center justify-between py-2"
              >
                <span>Solutions</span>
                <ChevronRight
                  className={cn(
                    "w-5 h-5 transition-transform duration-200",
                    solutionsExpanded && "rotate-90 text-accent-bronze"
                  )}
                />
              </button>

              {solutionsExpanded && (
                <div className="pl-4 mt-2 space-y-3 border-l border-accent-bronze/30 ml-2">
                  <Link
                    href="/solutions/corporate"
                    onClick={() => setIsOpen(false)}
                    className="block text-base text-text-muted hover:text-accent-bronze transition-colors py-1"
                  >
                    Corporate & Brand Content
                  </Link>
                  <Link
                    href="/solutions/real-estate"
                    onClick={() => setIsOpen(false)}
                    className="block text-base text-text-muted hover:text-accent-bronze transition-colors py-1"
                  >
                    Luxury Real Estate & Aerial Media
                  </Link>
                  <Link
                    href="/solutions/events"
                    onClick={() => setIsOpen(false)}
                    className="block text-base text-text-muted hover:text-accent-bronze transition-colors py-1"
                  >
                    Events & Experiences
                  </Link>
                </div>
              )}
            </div>

            <div>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif tracking-wider font-light text-text-primary hover:text-accent-bronze transition-colors flex items-center justify-between py-2 border-b border-border-subtle/50"
              >
                <span>About</span>
                <ChevronRight className="w-5 h-5 opacity-40" />
              </Link>
            </div>

            <div>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif tracking-wider font-light text-text-primary hover:text-accent-bronze transition-colors flex items-center justify-between py-2 border-b border-border-subtle/50"
              >
                <span>Contact</span>
                <ChevronRight className="w-5 h-5 opacity-40" />
              </Link>
            </div>
          </nav>

          {/* Footer & Primary Action */}
          <div className="pt-6 border-t border-border-subtle space-y-4">
            <Button
              href="/contact"
              onClick={() => setIsOpen(false)}
              size="lg"
              fullWidth
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Start a Project
            </Button>

            <div className="flex flex-col gap-2 pt-2 text-xs text-text-muted">
              <a
                href={`tel:${siteContent.contact.phone}`}
                className="flex items-center gap-2 hover:text-accent-bronze transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{siteContent.contact.phoneFormatted}</span>
              </a>
              <a
                href={`mailto:${siteContent.contact.email}`}
                className="flex items-center gap-2 hover:text-accent-bronze transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{siteContent.contact.email}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
