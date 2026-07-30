import React from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  /** Draw a fading gradient rule after the label. */
  rule?: boolean;
  className?: string;
}

/** Small gradient section label used above headings across the site. */
export function Eyebrow({ children, icon, rule = false, className }: EyebrowProps) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      {icon && <span className="text-accent-bronze shrink-0">{icon}</span>}
      <span className="text-gradient-accent text-[11px] font-semibold uppercase tracking-[0.25em]">
        {children}
      </span>
      {rule && <span aria-hidden className="rule-gradient-accent h-px flex-1 opacity-60" />}
    </span>
  );
}
