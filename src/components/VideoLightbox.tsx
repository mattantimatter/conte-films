"use client";

import React, { useEffect, useRef } from "react";
import { X, Play, Volume2, VolumeX } from "lucide-react";
import { Project } from "@/content/projects";

interface VideoLightboxProps {
  project: Project | null;
  onClose: () => void;
}

export function VideoLightbox({ project, onClose }: VideoLightboxProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = React.useState(false);

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

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={`Video presentation for ${project.title}`}
    >
      <div className="relative w-full max-w-5xl rounded-lg overflow-hidden bg-bg-surface border border-border-medium shadow-2xl">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border-subtle bg-bg-primary/90">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-accent-bronze">
              {project.client}
            </span>
            <h3 className="text-base font-serif font-medium text-text-primary">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            {project.videoSource?.type === "mp4" && (
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-full border border-border-medium text-text-primary hover:text-accent-bronze transition-colors focus-ring"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-full border border-border-medium text-text-primary hover:text-accent-bronze transition-colors focus-ring"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Area */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          {project.videoSource?.type === "mp4" ? (
            <video
              ref={videoRef}
              src={project.videoSource.url}
              poster={project.posterImage}
              controls
              autoPlay
              muted={isMuted}
              playsInline
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="p-8 text-center text-text-muted">
              <p className="mb-4 text-sm">Video playback stream ready upon final production upload.</p>
              <p className="text-xs font-mono opacity-60">Source URL: {project.videoSource?.url || "Pending Asset Upload"}</p>
            </div>
          )}
        </div>

        {/* Modal Footer Description */}
        <div className="p-6 bg-bg-surface border-t border-border-subtle">
          <p className="text-sm text-text-muted leading-relaxed max-w-3xl">
            {project.fullDescription || project.summary}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.services.map((service, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-bg-elevated text-text-primary border border-border-subtle"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
