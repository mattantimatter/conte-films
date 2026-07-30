"use client";

import React, { useCallback, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "glass" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Trailing icon. Travels up-and-right on hover. */
  icon?: React.ReactNode;
  /** Leading icon. Stays put. */
  leadingIcon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: string;
    target?: string;
    rel?: string;
  };

const SIZES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[11px] gap-1.5",
  md: "px-6 py-3 text-xs gap-2",
  lg: "px-8 py-4 text-xs gap-2.5",
};

const VARIANTS: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-accent-gradient text-accent-fg border border-transparent",
    "shadow-accent hover:shadow-accent-lg",
  ),
  secondary: cn(
    "bg-bg-elevated/80 text-text-primary backdrop-blur-sm",
    "border border-border-medium hover:border-transparent",
    "shadow-sm hover:shadow-accent",
  ),
  glass: cn(
    "bg-black/50 text-white backdrop-blur-md",
    "border border-white/25 hover:border-white/60",
    "shadow-lg",
  ),
  ghost: cn(
    "bg-transparent text-accent-bronze border border-transparent",
    "px-0 py-1 text-xs shadow-none hover:shadow-none",
  ),
};

/**
 * Shared action button.
 *
 * Hover layers a cursor-tracked highlight under a sheen that sweeps across the
 * face; press drops the button back into the page. Renders as a `button`, an
 * `a`, or a next/link depending on `href`.
 */
export function Button({
  variant = "primary",
  size = "md",
  icon,
  leadingIcon,
  fullWidth = false,
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const surfaceRef = useRef<HTMLSpanElement | null>(null);

  // Written straight to the node so cursor movement never triggers a render.
  const trackPointer = useCallback((event: React.PointerEvent<HTMLElement>) => {
    const surface = surfaceRef.current;
    if (!surface) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    surface.style.setProperty("--btn-x", `${event.clientX - bounds.left}px`);
    surface.style.setProperty("--btn-y", `${event.clientY - bounds.top}px`);
  }, []);

  const isGhost = variant === "ghost";
  const isPrimary = variant === "primary";

  const classes = cn(
    "group/btn relative inline-flex items-center justify-center overflow-hidden",
    "font-semibold uppercase tracking-widest leading-none whitespace-nowrap",
    "rounded-full select-none focus-ring",
    "transition-[transform,box-shadow,border-color,color] duration-300 ease-out",
    !isGhost && "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] active:duration-75",
    "disabled:pointer-events-none disabled:opacity-50",
    !isGhost && SIZES[size],
    VARIANTS[variant],
    fullWidth && "w-full",
    className,
  );

  const decoration = (
    <>
      {/* Gradient hairline that resolves on hover for the outlined variant. */}
      {variant === "secondary" && (
        <span
          aria-hidden
          className="accent-hairline opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100"
        />
      )}

      {/* Cursor-tracked highlight. */}
      {!isGhost && (
        <span
          ref={surfaceRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100"
          style={{
            background: `radial-gradient(140px circle at var(--btn-x, 50%) var(--btn-y, 50%), ${
              isPrimary ? "rgba(255,255,255,0.32)" : "var(--accent-soft)"
            }, transparent 70%)`,
          }}
        />
      )}

      {/* Sheen sweep. */}
      {!isGhost && (
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12",
            "bg-gradient-to-r from-transparent to-transparent",
            isPrimary ? "via-white/40" : "via-white/15",
            "transition-transform duration-[900ms] ease-out",
            "group-hover/btn:translate-x-[400%]",
          )}
        />
      )}

      {/* Underline that grows from the left for the text-only variant. */}
      {isGhost && (
        <span
          aria-hidden
          className="rule-gradient-accent pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover/btn:scale-x-100"
        />
      )}
    </>
  );

  const content = (
    <>
      {decoration}
      {leadingIcon && (
        <span aria-hidden className="relative shrink-0">
          {leadingIcon}
        </span>
      )}
      <span className={cn("relative", isGhost && "text-gradient-accent")}>{children}</span>
      {icon && (
        <span
          aria-hidden
          className="relative shrink-0 transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
        >
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    const isExternal = /^(https?:|mailto:|tel:|#)/.test(href);
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;

    if (isExternal) {
      return (
        <a href={href} className={classes} onPointerMove={trackPointer} {...anchorProps}>
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onPointerMove={trackPointer} {...anchorProps}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} onPointerMove={trackPointer} {...rest}>
      {content}
    </button>
  );
}
