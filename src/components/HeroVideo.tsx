"use client";

import React, { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, ChevronDown } from "lucide-react";

const MUX_PLAYBACK_ID = "7FEEOISkBx8NenBqj76E902NEDY4fqL6qFizqzK8oYoc";
const HLS_URL   = `https://stream.mux.com/${MUX_PLAYBACK_ID}.m3u8`;
const POSTER    = `https://image.mux.com/${MUX_PLAYBACK_ID}/thumbnail.jpg?width=1920&height=1080&fit_mode=smartcrop&time=2`;

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Always set muted directly on DOM element — React's muted prop is broken
    video.muted = true;

    const startPlay = () => video.play().catch(() => {});

    async function initHls() {
      // Safari supports HLS natively — just point src at the .m3u8
      if (video && video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = HLS_URL;
        video.addEventListener("loadedmetadata", startPlay, { once: true });
        startPlay();
        return;
      }

      // Chrome / Firefox / Edge — use hls.js
      const { default: Hls } = await import("hls.js");
      if (!Hls.isSupported() || !video) return;

      const hls = new Hls({
        startLevel: -1,
        capLevelToPlayerSize: false,
        // Seed bandwidth estimate high so HLS.js starts at max quality
        abrEwmaDefaultEstimate: 50_000_000, // 50 Mbps default estimate
        maxBufferLength: 60,
        maxMaxBufferLength: 120,
      });

      hls.loadSource(HLS_URL);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, (_event, data) => {
        // Force the highest quality level immediately
        hls.currentLevel = data.levels.length - 1;
        startPlay();
      });

      return () => hls.destroy();
    }

    const cleanup = initHls();

    // Pause/resume on scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startPlay();
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(video);

    return () => {
      observer.disconnect();
      cleanup?.then((fn) => fn?.());
    };
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div className="relative w-full h-full min-h-screen flex items-center justify-center overflow-hidden bg-[#090909]">

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={POSTER}
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-black/30 to-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />

      {/* Mute toggle */}
      <div className="absolute bottom-10 right-8 z-20 hidden sm:block">
        <button
          onClick={toggleMute}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white/90 border border-white/20 text-xs font-mono tracking-wider hover:border-accent-bronze hover:text-accent-bronze transition-all focus-ring"
          aria-label={isMuted ? "Unmute reel audio" : "Mute reel audio"}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          <span>{isMuted ? "SOUND OFF" : "SOUND ON"}</span>
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
