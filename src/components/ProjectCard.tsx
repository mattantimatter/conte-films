"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { Project } from "@/content/projects";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { muxStreamUrl, projectPosterSrc } from "@/lib/mux";
import { disableVideoTextTracks } from "@/lib/video-captions";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<{ destroy: () => void } | null>(null);
  const loadedRef = useRef(false);
  const [hovering, setHovering] = useState(false);
  const [previewReady, setPreviewReady] = useState(false);
  const poster = projectPosterSrc(project);
  const canPreview =
    project.videoSource?.type === "mux" || project.videoSource?.type === "mp4";

  useEffect(() => {
    return () => {
      hlsRef.current?.destroy();
      hlsRef.current = null;
      loadedRef.current = false;
    };
  }, [project.videoSource]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    return disableVideoTextTracks(video);
  }, [project.slug]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !project.videoSource || !canPreview || !hovering) return;

    let cancelled = false;

    async function ensureLoaded() {
      if (!video || !project.videoSource) return;

      video.muted = true;
      video.playsInline = true;
      video.loop = true;

      if (!loadedRef.current) {
        if (project.videoSource.type === "mp4") {
          video.src = project.videoSource.url;
        } else {
          const streamUrl = muxStreamUrl(project.videoSource.url);

          if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = streamUrl;
          } else {
            const { default: Hls } = await import("hls.js");
            if (cancelled || !Hls.isSupported()) return;

            const hls = new Hls({
              capLevelToPlayerSize: true,
              maxBufferLength: 10,
              maxMaxBufferLength: 20,
              abrEwmaDefaultEstimate: 2_000_000,
            });
            hls.loadSource(streamUrl);
            hls.attachMedia(video);
            hlsRef.current = hls;
          }
        }
        loadedRef.current = true;
      }

      const play = () => {
        if (cancelled) return;
        video.currentTime = 0;
        video
          .play()
          .then(() => {
            if (!cancelled) setPreviewReady(true);
          })
          .catch(() => {
            if (!cancelled) setPreviewReady(false);
          });
      };

      if (video.readyState >= 2) play();
      else video.addEventListener("loadeddata", play, { once: true });
    }

    ensureLoaded();

    return () => {
      cancelled = true;
      video.pause();
      setPreviewReady(false);
    };
  }, [hovering, project.videoSource, canPreview]);

  return (
    <SpotlightCard className="h-full" contentClassName="flex flex-col">
      <button
        type="button"
        onClick={() => onSelect(project)}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onFocus={() => setHovering(true)}
        onBlur={() => setHovering(false)}
        aria-label={`Play ${project.title}`}
        className="accent-on-dark group/poster relative block aspect-cinema w-full overflow-hidden rounded-t-2xl bg-neutral-950 text-left focus-ring"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={poster}
          alt=""
          aria-hidden
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
            previewReady && hovering ? "opacity-0" : "opacity-100"
          )}
        />

        {canPreview && (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
              previewReady && hovering ? "opacity-100" : "opacity-0"
            )}
          >
            {/* Decorative hover preview — no caption track (iOS would auto-enable it). */}
          </video>
        )}

        <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/35" />
        <span className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover/poster:opacity-100" />

        <span className="absolute inset-0 flex items-center justify-center">
          <span
            className={cn(
              "relative flex h-16 w-16 items-center justify-center transition-all duration-300 ease-out",
              hovering ? "scale-110" : "scale-100"
            )}
          >
            <span
              aria-hidden
              className={cn(
                "bg-accent-gradient absolute inset-0 rounded-full blur-md transition-opacity duration-300",
                hovering ? "opacity-70" : "opacity-40"
              )}
            />
            <span className="bg-accent-gradient relative flex h-14 w-14 items-center justify-center rounded-full text-accent-fg shadow-accent-lg">
              <Play className="h-5 w-5 translate-x-0.5 fill-current" />
            </span>
          </span>
        </span>

        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
          {project.categoryLabel}
        </span>
      </button>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-gradient-accent text-[11px] font-semibold uppercase tracking-[0.2em]">
          {project.client}
        </p>

        <h3 className="mt-2 font-display text-xl font-semibold leading-[1.22] tracking-[-0.02em] text-text-primary">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="rounded-sm text-left transition-colors duration-300 hover:text-accent-bronze focus-ring"
          >
            {project.title}
          </button>
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-text-muted">
          {project.summary}
        </p>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
          {project.services.slice(0, 3).map((service) => (
            <li
              key={service}
              className="rounded-full border border-border-subtle bg-bg-surface px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-text-muted transition-colors duration-300 group-hover/spot:border-accent-bronze/30"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>
    </SpotlightCard>
  );
}
