"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, Volume2, VolumeX } from "lucide-react";
import { Project } from "@/content/projects";
import { attachHlsStream } from "@/lib/hls-video";
import { muxStreamUrl, projectPosterSrc } from "@/lib/mux";
import { disableVideoTextTracks } from "@/lib/video-captions";

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
    if (!video || !project) return;
    return disableVideoTextTracks(video);
  }, [project]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !project?.videoSource || project.videoSource.type !== "mux") {
      return;
    }

    video.playsInline = true;
    const startPlay = () => {
      for (let i = 0; i < video.textTracks.length; i += 1) {
        video.textTracks[i].mode = "disabled";
      }
      video.play().catch(() => {});
    };

    const detach = attachHlsStream(video, muxStreamUrl(project.videoSource.url), {
      onReady: startPlay,
    });

    return () => {
      detach();
      video.removeAttribute("src");
      video.load();
    };
  }, [project]);

  if (!project) return null;

  const poster = projectPosterSrc(project);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5 backdrop-blur-xl animate-in fade-in duration-200 sm:p-8 lg:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={`Video presentation for ${project.title}`}
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[calc(100dvh-2.5rem)] w-full max-w-6xl flex-col overflow-hidden rounded-lg border border-border-medium bg-bg-surface shadow-2xl sm:max-h-[calc(100dvh-4rem)] lg:h-[calc(100dvh-5rem)] lg:max-h-[calc(100dvh-5rem)] lg:max-w-7xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-border-subtle bg-bg-primary/90 px-4 py-3 sm:px-5">
          <div className="min-w-0 lg:hidden">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-accent-bronze">
              {project.client}
            </span>
            <h3 className="truncate font-serif text-sm font-medium text-text-primary">
              {project.title}
            </h3>
          </div>
          <div className="hidden min-w-0 lg:block">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-accent-bronze">
              Case Study
            </span>
          </div>
          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
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

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto lg:flex-row lg:overflow-hidden">
          <div className="relative aspect-video w-full shrink-0 bg-black lg:aspect-auto lg:h-full lg:min-h-0 lg:flex-1 lg:self-stretch">
            {canPlayInline && project.videoSource ? (
              <video
                ref={videoRef}
                src={isMp4 ? project.videoSource.url : undefined}
                poster={poster}
                controls
                autoPlay
                muted={isMuted}
                playsInline
                className="absolute inset-0 h-full w-full object-contain"
              >
                <track
                  kind="captions"
                  src="/captions/ambient.vtt"
                  srcLang="en"
                  label="English"
                  default={false}
                />
              </video>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-text-muted">
                <div>
                  <p className="mb-4 text-sm">
                    Video playback stream ready upon final production upload.
                  </p>
                  <p className="font-mono text-xs opacity-60">
                    Source URL: {project.videoSource?.url || "Pending Asset Upload"}
                  </p>
                </div>
              </div>
            )}
          </div>

          <aside className="flex w-full shrink-0 flex-col border-t border-border-subtle bg-bg-surface p-5 sm:p-6 lg:w-[22rem] lg:overflow-y-auto lg:border-l lg:border-t-0 xl:w-96">
            <span className="hidden text-[10px] font-semibold uppercase tracking-widest text-accent-bronze lg:block">
              {project.client}
            </span>
            <h3 className="mt-1 hidden font-serif text-xl font-medium leading-snug text-text-primary lg:block">
              {project.title}
            </h3>
            {project.location ? (
              <p className="mt-2 hidden text-xs text-text-muted lg:block">
                {project.location}
              </p>
            ) : null}
            <p className="text-sm leading-relaxed text-text-muted lg:mt-5">
              {project.fullDescription || project.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.services.map((service, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-border-subtle bg-bg-elevated px-2.5 py-1 text-[11px] font-medium text-text-primary"
                >
                  {service}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
