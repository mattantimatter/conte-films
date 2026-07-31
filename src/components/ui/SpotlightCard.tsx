"use client";

import React, { useCallback, useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Radius of the cursor-tracked glow, in pixels. */
  radius?: number;
  /** Lift the card on hover. */
  lift?: boolean;
  className?: string;
  /** Applied to the inner content wrapper, e.g. to lay children out as a column. */
  contentClassName?: string;
}

/**
 * Surface that lights up under the cursor and resolves a gradient hairline on
 * hover. Pointer position is written to CSS variables so tracking never
 * re-renders the subtree.
 */
export function SpotlightCard({
  children,
  radius = 420,
  lift = true,
  className,
  contentClassName,
  ...rest
}: SpotlightCardProps) {
  const glowRef = useRef<HTMLSpanElement | null>(null);

  const trackPointer = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const glow = glowRef.current;
    if (!glow) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    glow.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
    glow.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
  }, []);

  return (
    <div
      onPointerMove={trackPointer}
      className={cn(
        "group/spot relative isolate clip-rounded rounded-2xl",
        "border border-border-subtle bg-bg-primary",
        "translate-y-0 transform-gpu transition-[transform,box-shadow] duration-500 ease-out",
        lift && "hover:-translate-y-1 hover:shadow-accent-lg",
        className,
      )}
      {...rest}
    >
      <span
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          background: `radial-gradient(${radius}px circle at var(--spot-x, 50%) var(--spot-y, 0%), var(--accent-soft), transparent 65%)`,
        }}
      />

      <span
        aria-hidden
        className="accent-hairline opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
      />

      <div className={cn("relative h-full", contentClassName)}>{children}</div>
    </div>
  );
}
