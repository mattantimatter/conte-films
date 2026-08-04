import React from "react";
import { cn } from "@/lib/utils";

interface ViewfinderFrameProps {
  /** Centred glyph when no photo is provided. */
  icon?: React.ReactNode;
  /** Optional production still — replaces the icon reticle when set. */
  imageSrc?: string;
  imageAlt?: string;
  /** object-position for the photo (useful when the subject isn’t centered). */
  imagePositionClassName?: string;
  /** Camera-roll identifier shown top-left, e.g. "A-CAM". */
  reel?: string;
  timecode?: string;
  /** Lens/exposure chips along the bottom edge. */
  meta?: string[];
  className?: string;
}

/**
 * Media panel for solution cards: either a production still or the camera-monitor
 * reticle fallback, with a light HUD overlay.
 */
export function ViewfinderFrame({
  icon,
  imageSrc,
  imageAlt = "",
  imagePositionClassName = "object-center",
  reel = "A-CAM",
  timecode = "00:04:12:18",
  meta = [],
  className,
}: ViewfinderFrameProps) {
  const hasImage = Boolean(imageSrc);

  return (
    <div
      className={cn(
        "relative isolate clip-rounded overflow-hidden rounded-xl border border-border-subtle bg-bg-elevated",
        className,
      )}
    >
      <div className="relative aspect-[4/3] w-full">
        {hasImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt={imageAlt}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover/spot:scale-[1.04]",
              imagePositionClassName,
            )}
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/25 dark:from-white/[0.04] dark:via-transparent dark:to-black/50" />
            <div
              aria-hidden
              className="animate-accent-drift absolute -right-1/4 -top-1/4 h-3/4 w-3/4 rounded-full opacity-30 blur-3xl transition-opacity duration-700 group-hover/spot:opacity-50"
            />
            <div aria-hidden className="absolute inset-0 text-text-muted opacity-20">
              <span className="absolute inset-y-0 left-1/3 w-px bg-current" />
              <span className="absolute inset-y-0 left-2/3 w-px bg-current" />
              <span className="absolute inset-x-0 top-1/3 h-px bg-current" />
              <span className="absolute inset-x-0 top-2/3 h-px bg-current" />
            </div>
            <div className="relative flex h-full w-full items-center justify-center">
              <div className="relative grid h-28 w-28 place-items-center transition-transform duration-500 ease-out group-hover/spot:scale-[1.06]">
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
                      "absolute h-5 w-5 rounded-[3px] border-accent-bronze/60 transition-colors duration-500 group-hover/spot:border-accent-bronze",
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
          </>
        )}
      </div>

      {hasImage ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25"
        />
      ) : null}

      {/* Top HUD */}
      <div
        className={cn(
          "absolute inset-x-4 top-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] sm:text-[10px]",
          hasImage ? "text-white/80" : "text-text-muted",
        )}
      >
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
        <div
          className={cn(
            "absolute inset-x-4 bottom-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[9px] uppercase tracking-[0.18em] sm:text-[10px]",
            hasImage ? "text-white/75" : "text-text-muted",
          )}
        >
          {meta.map((entry) => (
            <span key={entry}>{entry}</span>
          ))}
        </div>
      )}
    </div>
  );
}
