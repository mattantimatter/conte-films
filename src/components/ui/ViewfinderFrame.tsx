import React from "react";
import { cn } from "@/lib/utils";

const GRAIN_URL =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

interface ViewfinderFrameProps {
  /** Centred glyph, typically the solution's lucide icon. */
  icon: React.ReactNode;
  /** Camera-roll identifier shown top-left, e.g. "A-CAM". */
  reel?: string;
  timecode?: string;
  /** Lens/exposure chips along the bottom edge. */
  meta?: string[];
  className?: string;
}

/**
 * Camera-monitor styled media panel: focus brackets, rule-of-thirds guides,
 * exposure HUD and film grain over a gradient field. Stands in for production
 * stills while reading as a deliberate, on-brand visual.
 */
export function ViewfinderFrame({
  icon,
  reel = "A-CAM",
  timecode = "00:04:12:18",
  meta = [],
  className,
}: ViewfinderFrameProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-xl border border-border-subtle bg-bg-elevated",
        className,
      )}
    >
      {/* Depth field */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/25 dark:from-white/[0.04] dark:via-transparent dark:to-black/50" />

      {/* Accent bloom drifting behind the subject */}
      <div
        aria-hidden
        className="animate-accent-drift absolute -right-1/4 -top-1/4 h-3/4 w-3/4 rounded-full opacity-30 blur-3xl transition-opacity duration-700 group-hover/spot:opacity-50"
      />

      {/* Rule-of-thirds guides */}
      <div aria-hidden className="absolute inset-0 text-text-muted opacity-20">
        <span className="absolute inset-y-0 left-1/3 w-px bg-current" />
        <span className="absolute inset-y-0 left-2/3 w-px bg-current" />
        <span className="absolute inset-x-0 top-1/3 h-px bg-current" />
        <span className="absolute inset-x-0 top-2/3 h-px bg-current" />
      </div>

      {/* Subject, framed by an autofocus reticle */}
      <div className="relative flex aspect-[4/3] w-full items-center justify-center">
        <div className="relative grid h-28 w-28 place-items-center transition-transform duration-500 ease-out group-hover/spot:scale-[1.06]">
          {/* Reticle corners */}
          {[
            "left-0 top-0 border-l-2 border-t-2",
            "right-0 top-0 border-r-2 border-t-2",
            "left-0 bottom-0 border-l-2 border-b-2",
            "right-0 bottom-0 border-r-2 border-b-2",
          ].map((corner) => (
            <span
              key={corner}
              aria-hidden
              className={cn(
                "absolute h-5 w-5 rounded-[3px] border-accent-bronze/45 transition-colors duration-500 group-hover/spot:border-accent-bronze",
                corner,
              )}
            />
          ))}

          <span
            aria-hidden
            className="bg-accent-gradient absolute inset-2 rounded-full opacity-30 blur-2xl transition-opacity duration-500 group-hover/spot:opacity-55"
          />
          <span className="relative text-accent-bronze">{icon}</span>
        </div>
      </div>

      {/* Top HUD */}
      <div className="absolute inset-x-4 top-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-text-muted sm:text-[10px]">
        <span className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-bronze opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-bronze" />
          </span>
          {reel}
        </span>
        <span className="tabular-nums">{timecode}</span>
      </div>

      {/* Bottom HUD */}
      {meta.length > 0 && (
        <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[9px] uppercase tracking-[0.18em] text-text-muted sm:text-[10px]">
          {meta.map((entry) => (
            <span key={entry}>{entry}</span>
          ))}
        </div>
      )}

      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.13] mix-blend-overlay dark:opacity-[0.18]"
        style={{ backgroundImage: GRAIN_URL }}
      />
    </div>
  );
}
