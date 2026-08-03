"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Volume2, VolumeX } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface SolutionHeroCta {
  label: string;
  href: string;
}

export interface SolutionHeroProps {
  eyebrow: string;
  headline: string;
  /** Optional word inside the headline to render in the accent italic style */
  accentWord?: string;
  description: string;
  primaryCta: SolutionHeroCta;
  secondaryCta?: SolutionHeroCta;
  /** Mux playback ID — wire this when solution reel assets are ready */
  playbackId?: string;
  /** Still frame shown while buffering (or as the sole background before video exists) */
  posterSrc?: string;
}

function renderHeadline(headline: string, accentWord?: string) {
  if (!accentWord || !headline.includes(accentWord)) {
    return headline;
  }

  const parts = headline.split(accentWord);
  return (
    <>
      {parts[0]}
      <span className="text-gradient-accent font-normal italic">{accentWord}</span>
      {parts.slice(1).join(accentWord)}
    </>
  );
}

export function SolutionHero({
  eyebrow,
  headline,
  accentWord,
  description,
  primaryCta,
  secondaryCta,
  playbackId,
  posterSrc,
}: SolutionHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const streamUrl = playbackId
    ? `https://stream.mux.com/${playbackId}.m3u8?min_resolution=720p&max_resolution=1080p&rendition_order=desc`
    : null;
  const muxPoster =
    playbackId && !posterSrc
      ? `https://image.mux.com/${playbackId}/thumbnail.webp?time=0&width=1920`
      : posterSrc;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !streamUrl) return;

    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    const startPlay = () => video.play().catch(() => {});
    const onPlaying = () => window.setTimeout(() => setPlaying(true), 500);
    video.addEventListener("playing", onPlaying);

    async function initHls() {
      if (video && video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = streamUrl!;
        video.addEventListener("loadedmetadata", startPlay, { once: true });
        startPlay();
        return;
      }

      const { default: Hls } = await import("hls.js");
      if (!Hls.isSupported() || !video) return;

      const hls = new Hls({
        capLevelToPlayerSize: false,
        abrEwmaDefaultEstimate: 50_000_000,
        maxBufferLength: 60,
        maxMaxBufferLength: 120,
      });

      hls.loadSource(streamUrl!);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        hls.startLevel = 0;
        hls.loadLevel = 0;
        hls.currentLevel = 0;
        startPlay();
      });

      return () => hls.destroy();
    }

    const cleanup = initHls();
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startPlay();
        else video.pause();
      },
      { threshold: 0.1 }
    );
    observer.observe(video);

    return () => {
      video.removeEventListener("playing", onPlaying);
      observer.disconnect();
      cleanup?.then((fn) => fn?.());
    };
  }, [streamUrl]);

  return (
    <section
      data-site-hero
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Background media plane — full-bleed like the homepage reel */}
      <div className="absolute inset-0 bg-[#090909]">
        <div className="absolute inset-0 overflow-hidden">
          {muxPoster ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={muxPoster}
              alt=""
              aria-hidden
              className={cn(
                "absolute inset-0 h-full w-full object-cover scale-105 transition-opacity duration-700",
                streamUrl && playing ? "opacity-0" : "opacity-100"
              )}
            />
          ) : (
            // Placeholder atmosphere until per-solution reels are added
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(176,141,87,0.18),transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(40,40,40,0.9),#090909)]"
            />
          )}

          {streamUrl && (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden
              className={cn(
                "absolute inset-0 h-full w-full object-cover scale-105 transition-opacity duration-700",
                playing ? "opacity-100" : "opacity-0"
              )}
            >
              <track kind="captions" src="/captions/ambient.vtt" srcLang="en" label="English" />
            </video>
          )}
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090909] via-black/30 to-black/50" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      </div>

      {/* Centered hero copy */}
      <div className="absolute inset-0 z-10 flex items-center justify-center p-4 sm:p-6 lg:p-8 pointer-events-none">
        <div className="accent-on-dark max-w-4xl space-y-6 text-center pointer-events-auto">
          <Reveal direction="up" delay={0.1}>
            <span className="inline-flex items-center rounded-full border border-white/20 bg-black/70 px-4 py-1.5 shadow-lg backdrop-blur-md">
              <span className="text-gradient-accent text-xs font-mono font-semibold uppercase tracking-widest">
                {eyebrow}
              </span>
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h1 className="font-display text-4xl font-semibold leading-[1.15] tracking-[-0.04em] text-white drop-shadow-2xl sm:text-6xl lg:text-7xl">
              {renderHeadline(headline, accentWord)}
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-white/90 drop-shadow sm:text-xl">
              {description}
            </p>
          </Reveal>

          <Reveal
            direction="up"
            delay={0.4}
            className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row"
          >
            <Button
              href={primaryCta.href}
              size="lg"
              className="w-full sm:w-auto"
              icon={<ArrowUpRight className="h-4 w-4" />}
            >
              {primaryCta.label}
            </Button>

            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                variant="glass"
                size="lg"
                className="w-full sm:w-auto"
              >
                {secondaryCta.label}
              </Button>
            )}
          </Reveal>
        </div>
      </div>

      {streamUrl && (
        <div className="absolute bottom-10 right-8 z-20 hidden sm:block">
          <button
            type="button"
            onClick={() => {
              const video = videoRef.current;
              if (!video) return;
              video.muted = !video.muted;
              setMuted(video.muted);
            }}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 font-mono text-xs tracking-wider text-white/90 backdrop-blur-md transition-all hover:border-accent-bronze hover:text-accent-bronze focus-ring"
            aria-label={muted ? "Unmute reel audio" : "Mute reel audio"}
          >
            {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
            <span>{muted ? "SOUND OFF" : "SOUND ON"}</span>
          </button>
        </div>
      )}

      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition-colors hover:text-white">
        <span className="text-[10px] font-medium uppercase tracking-[0.25em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
}
