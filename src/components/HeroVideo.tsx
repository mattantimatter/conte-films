"use client";

import React, { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, ChevronDown } from "lucide-react";

const MUX_PLAYBACK_ID = "7FEEOISkBx8NenBqj76E902NEDY4fqL6qFizqzK8oYoc";

// Mux streaming URLs
const MUX_MP4_HIGH  = `https://stream.mux.com/${MUX_PLAYBACK_ID}/high.mp4`;
const MUX_MP4_MED   = `https://stream.mux.com/${MUX_PLAYBACK_ID}/medium.mp4`;
const MUX_POSTER    = `https://image.mux.com/${MUX_PLAYBACK_ID}/thumbnail.jpg?width=1920&height=1080&fit_mode=smartcrop&time=2`;

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Autoplay as soon as enough data is available
    const onCanPlay = () => {
      video.play().catch(() => {});
      setIsLoaded(true);
    };
    video.addEventListener("canplaythrough", onCanPlay);

    // Pause when scrolled out of view to save resources
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);

    return () => {
      video.removeEventListener("canplaythrough", onCanPlay);
      observer.disconnect();
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full h-full min-h-screen flex items-center justify-center overflow-hidden bg-[#090909]">

      {/* Mux Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={MUX_POSTER}
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* High quality first, fallback to medium */}
        <source src={MUX_MP4_HIGH} type="video/mp4" />
        <source src={MUX_MP4_MED} type="video/mp4" />
      </video>

      {/* Poster shown while video loads */}
      {!isLoaded && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={MUX_POSTER}
          alt="Conté Films hero reel"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
      )}

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-black/30 to-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />

      {/* Mute / Unmute toggle */}
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
