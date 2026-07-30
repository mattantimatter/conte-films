"use client";

import { useState } from "react";
import { Volume2, VolumeX, ChevronDown } from "lucide-react";
import { MuxBackgroundVideo } from "@mux/mux-background-video/react";

const PLAYBACK_ID = "7FEEOISkBx8NenBqj76E902NEDY4fqL6qFizqzK8oYoc";

const STREAM_URL =
  `https://stream.mux.com/${PLAYBACK_ID}.m3u8` +
  `?min_resolution=720p` +
  `&max_resolution=1080p` +
  `&rendition_order=desc`;

const POSTER_URL = `https://image.mux.com/${PLAYBACK_ID}/thumbnail.webp?time=0&width=1920`;

export function HeroVideo() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  return (
    <div className="relative w-full h-full min-h-screen flex items-center justify-center overflow-hidden bg-[#090909]">

      {/* Mux Background Video — min 720p, max 1080p, highest rendition first */}
      <div className="absolute inset-0 overflow-hidden">
        <MuxBackgroundVideo
          src={STREAM_URL}
          preload="auto"
          muted={muted}
          onPlaying={() => {
            // Small delay so we're sure the 720p segment is actually rendering
            window.setTimeout(() => setPlaying(true), 500);
          }}
          className="h-full w-full object-cover scale-105"
        >
          {/* Mux Background Video uses child img as its built-in loading state */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={POSTER_URL}
            alt=""
            className="h-full w-full object-cover scale-105"
          />
        </MuxBackgroundVideo>

        {/* Poster overlay — stays fully opaque until 720p playback is confirmed,
            then dissolves over 700ms so the quality switch is never visible */}
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
          onClick={() => setMuted((m) => !m)}
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
