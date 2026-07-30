"use client";

import { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, ChevronDown } from "lucide-react";

const PLAYBACK_ID = "7FEEOISkBx8NenBqj76E902NEDY4fqL6qFizqzK8oYoc";

// Strip blurry low-res renditions at the Mux CDN level.
// min_resolution=720p removes 270p–540p from the manifest entirely.
// rendition_order=desc puts 1080p first so the player picks it by default.
const STREAM_URL =
  `https://stream.mux.com/${PLAYBACK_ID}.m3u8` +
  `?min_resolution=720p` +
  `&max_resolution=1080p` +
  `&rendition_order=desc`;

const POSTER_URL =
  `https://image.mux.com/${PLAYBACK_ID}/thumbnail.webp?time=0&width=1920`;

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying]   = useState(false);
  const [muted,   setMuted]     = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // React's `muted` prop doesn't set the HTML attribute — do it directly.
    video.muted    = true;
    video.loop     = true;
    video.playsInline = true;

    const startPlay = () => video.play().catch(() => {});

    // Dissolve poster 500 ms after playback is confirmed playing at 720p+
    const onPlaying = () => window.setTimeout(() => setPlaying(true), 500);
    video.addEventListener("playing", onPlaying);

    async function initHls() {
      // Safari has native HLS — just set src directly
      if (video && video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = STREAM_URL;
        video.addEventListener("loadedmetadata", startPlay, { once: true });
        startPlay();
        return;
      }

      // Chrome / Firefox / Edge — use hls.js
      const { default: Hls } = await import("hls.js");
      if (!Hls.isSupported() || !video) return;

      const hls = new Hls({
        capLevelToPlayerSize:   false,
        // Seed bandwidth estimate at 50 Mbps so hls.js picks the highest level
        abrEwmaDefaultEstimate: 50_000_000,
        maxBufferLength:        60,
        maxMaxBufferLength:     120,
      });

      hls.loadSource(STREAM_URL);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, (_e, data) => {
        // With rendition_order=desc, level 0 is already the highest quality.
        // Lock it in and start playing.
        hls.startLevel   = 0;
        hls.loadLevel    = 0;
        hls.currentLevel = 0;
        startPlay();
      });

      return () => hls.destroy();
    }

    const cleanup = initHls();

    // Pause when scrolled out of view
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
  }, []);

  return (
    <div className="relative w-full h-full min-h-screen flex items-center justify-center overflow-hidden bg-[#090909]">

      <div className="absolute inset-0 overflow-hidden">
        {/* Sharp poster — always visible during buffering */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={POSTER_URL}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />

        {/* Video — invisible until playing event + 500 ms grace period */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-700 ${
            playing ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Top poster overlay — sits above video, dissolves once playing is confirmed */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={POSTER_URL}
          alt=""
          aria-hidden
          className={`pointer-events-none absolute inset-0 h-full w-full object-cover scale-105 transition-opacity duration-700 ${
            playing ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-black/30 to-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />

      {/* Mute toggle */}
      <div className="absolute bottom-10 right-8 z-20 hidden sm:block">
        <button
          onClick={() => {
            const video = videoRef.current;
            if (!video) return;
            video.muted = !video.muted;
            setMuted(video.muted);
          }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white/90 border border-white/20 text-xs font-mono tracking-wider hover:border-accent-bronze hover:text-accent-bronze transition-all focus-ring"
          aria-label={muted ? "Unmute reel audio" : "Mute reel audio"}
        >
          {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          <span>{muted ? "SOUND OFF" : "SOUND ON"}</span>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors">
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </div>
  );
}
