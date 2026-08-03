"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Building2, Home, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface SolutionItem {
  name: string;
  href: string;
  description: string;
  icon: React.ElementType;
}

const solutions: SolutionItem[] = [
  {
    name: "Corporate & Brand",
    href: "/solutions/corporate",
    description: "Brand films, executive interviews, healthcare & recruitment media",
    icon: Building2,
  },
  {
    name: "Real Estate & Drone",
    href: "/solutions/real-estate",
    description: "Luxury custom residences, architectural walkthroughs & drone",
    icon: Home,
  },
  {
    name: "Events & Experiences",
    href: "/solutions/events",
    description: "Keynotes, galas, brand activations & rapid social recap edits",
    icon: Calendar,
  },
];

const CLOSE_DELAY_MS = 280;

export function SolutionsDropdown({ overDarkHero }: { overDarkHero?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const isSolutionsActive = pathname.startsWith("/solutions");

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const openMenu = () => {
    clearCloseTimeout();
    setIsOpen(true);
  };

  const scheduleClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => setIsOpen(false), CLOSE_DELAY_MS);
  };

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        clearCloseTimeout();
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearCloseTimeout();
    };
  }, []);

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      clearCloseTimeout();
      setIsOpen(false);
    } else if (e.key === "ArrowDown" && !isOpen) {
      e.preventDefault();
      openMenu();
    }
  };

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block text-left"
      onKeyDown={handleKeyDown}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        onClick={() => {
          clearCloseTimeout();
          setIsOpen((open) => !open);
        }}
        className={cn(
          "inline-flex items-center gap-1.5 text-sm font-medium transition-colors py-2 focus-ring rounded-sm",
          isSolutionsActive
            ? "text-accent-bronze font-semibold"
            : overDarkHero
            ? "text-white/90 hover:text-white"
            : "text-text-primary hover:text-accent-bronze"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
        id="solutions-menu-button"
      >
        <span>Solutions</span>
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 transition-transform duration-200",
            isOpen && "rotate-180 text-accent-bronze"
          )}
        />
      </button>

      {isOpen && (
        // pt-1 keeps a hoverable bridge between the trigger and panel so the menu
        // doesn't flicker closed when the cursor crosses the gap.
        <div className="absolute left-0 top-full z-50 w-80 pt-1">
          <div
            className="rounded-md border border-border-medium bg-bg-surface p-2 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-150"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="solutions-menu-button"
          >
            <div className="px-3 py-2 border-b border-border-subtle mb-1">
              <p className="text-[10px] uppercase tracking-widest text-text-muted font-semibold">
                Production Capabilities
              </p>
            </div>
            <div className="space-y-1">
              {solutions.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      clearCloseTimeout();
                      setIsOpen(false);
                    }}
                    className={cn(
                      "group flex items-start gap-3 p-2.5 rounded-md text-sm transition-colors focus-ring",
                      isActive
                        ? "bg-bg-elevated text-accent-bronze"
                        : "text-text-primary hover:bg-bg-elevated hover:text-accent-bronze"
                    )}
                    role="menuitem"
                  >
                    <div className="mt-0.5 p-1.5 rounded-md bg-bg-primary border border-border-subtle group-hover:border-accent-bronze/40 transition-colors">
                      <Icon className="w-4 h-4 text-accent-bronze" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-text-primary group-hover:text-accent-bronze flex items-center gap-1">
                        {item.name}
                      </div>
                      <p className="text-xs text-text-muted mt-0.5 leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
