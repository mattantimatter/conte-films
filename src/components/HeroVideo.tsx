"use client";

import { useState } from "react";
import { Volume2, VolumeX, ChevronDown } from "lucide-react";
import { muxStreamUrl } from "@/lib/mux";
import { useAmbientVideo } from "@/lib/use-ambient-video";

const PLAYBACK_ID = "7FEEOISkBx8NenBqj76E902NEDY4fqL6qFizqzK8oYoc";

const STREAM_URL = muxStreamUrl(PLAYBACK_ID);

const POSTER_URL =
  `https://image.mux.com/${PLAYBACK_ID}/thumbnail.webp?time=0&width=1920`;

export function HeroVideo() {
  const { videoRef, playing } = useAmbientVideo(STREAM_URL);
  const [muted, setMuted] = useState(true);

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
          aria-hidden
          className={`absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-700 ${
            playing ? "opacity-100" : "opacity-0"
          }`}
        >
          <track kind="captions" src="/captions/ambient.vtt" srcLang="en" label="English" />
        </video>
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
