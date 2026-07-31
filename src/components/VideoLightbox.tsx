"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, Volume2, VolumeX } from "lucide-react";
import { Project } from "@/content/projects";
import { muxStreamUrl, projectPosterSrc } from "@/lib/mux";

interface VideoLightboxProps {
  project: Project | null;
  onClose: () => void;
}

export function VideoLightbox({ project, onClose }: VideoLightboxProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const isMux = project?.videoSource?.type === "mux";
  const isMp4 = project?.videoSource?.type === "mp4";
  const canPlayInline = isMux || isMp4;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !project?.videoSource || project.videoSource.type !== "mux") {
      return;
    }

    const streamUrl = muxStreamUrl(project.videoSource.url);
    video.playsInline = true;
    const startPlay = () => video.play().catch(() => {});

    async function initHls(el: HTMLVideoElement) {
      if (el.canPlayType("application/vnd.apple.mpegurl")) {
        el.src = streamUrl;
        el.addEventListener("loadedmetadata", startPlay, { once: true });
        startPlay();
        return;
      }

      const { default: Hls } = await import("hls.js");
      if (!Hls.isSupported()) return;

      const hls = new Hls({
        capLevelToPlayerSize: false,
        abrEwmaDefaultEstimate: 50_000_000,
        maxBufferLength: 60,
        maxMaxBufferLength: 120,
      });

      hls.loadSource(streamUrl);
      hls.attachMedia(el);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        hls.startLevel = 0;
        hls.loadLevel = 0;
        hls.currentLevel = 0;
        startPlay();
      });

      return () => hls.destroy();
    }

    const cleanup = initHls(video);
    return () => {
      cleanup?.then((fn) => fn?.());
      video.removeAttribute("src");
      video.load();
    };
  }, [project]);

  if (!project) return null;

  const poster = projectPosterSrc(project);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-8 backdrop-blur-xl animate-in fade-in duration-200 sm:p-12 lg:p-16"
      role="dialog"
      aria-modal="true"
      aria-label={`Video presentation for ${project.title}`}
      onClick={onClose}
    >
      <div
        className="relative flex max-h-full w-full max-w-5xl flex-col overflow-hidden rounded-lg border border-border-medium bg-bg-surface shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-border-subtle bg-bg-primary/90 px-6 py-4">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-accent-bronze">
              {project.client}
            </span>
            <h3 className="font-serif text-base font-medium text-text-primary">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            {canPlayInline && (
              <button
                onClick={() => {
                  const video = videoRef.current;
                  if (!video) return;
                  video.muted = !video.muted;
                  setIsMuted(video.muted);
                }}
                className="rounded-full border border-border-medium p-2 text-text-primary transition-colors hover:text-accent-bronze focus-ring"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
            )}
            <button
              onClick={onClose}
              className="rounded-full border border-border-medium p-2 text-text-primary transition-colors hover:text-accent-bronze focus-ring"
              aria-label="Close video player"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="relative flex aspect-video items-center justify-center bg-black">
            {canPlayInline && project.videoSource ? (
              <video
                ref={videoRef}
                src={isMp4 ? project.videoSource.url : undefined}
                poster={poster}
                controls
                autoPlay
                muted={isMuted}
                playsInline
                className="h-full w-full object-contain"
              />
            ) : (
              <div className="p-8 text-center text-text-muted">
                <p className="mb-4 text-sm">
                  Video playback stream ready upon final production upload.
                </p>
                <p className="font-mono text-xs opacity-60">
                  Source URL: {project.videoSource?.url || "Pending Asset Upload"}
                </p>
              </div>
            )}
          </div>

          <div className="border-t border-border-subtle bg-bg-surface p-6">
            <p className="max-w-3xl text-sm leading-relaxed text-text-muted">
              {project.fullDescription || project.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.services.map((service, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-border-subtle bg-bg-elevated px-2.5 py-1 text-[11px] font-medium text-text-primary"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
