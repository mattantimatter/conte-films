"use client";

import React from "react";
import { MapPin, Play } from "lucide-react";
import { Project } from "@/content/projects";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

const GRAIN_URL =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <SpotlightCard className="h-full" contentClassName="flex flex-col">
      {/* Poster */}
      <button
        type="button"
        onClick={() => onSelect(project)}
        aria-label={`Play ${project.title}`}
        className="accent-on-dark group/poster relative block aspect-cinema w-full overflow-hidden bg-neutral-950 text-left focus-ring"
      >
        {/* Composed backdrop. Production stills are still outstanding — see
            ASSET_GUIDE.md — so nothing is requested from project.posterImage
            yet; drop an <Image fill /> above the scrim once they land. */}
        <span
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(120%_100%_at_15%_0%,rgba(255,255,255,0.09),transparent_55%)]"
        />
        <span
          aria-hidden
          className="animate-accent-drift absolute -left-1/4 bottom-0 h-2/3 w-2/3 rounded-full opacity-30 blur-[70px] transition-opacity duration-700 group-hover/poster:opacity-50"
        />
        <span
          aria-hidden
          className="absolute inset-0 flex items-center px-6 font-display text-[2.6rem] font-bold uppercase leading-[0.92] tracking-[-0.045em] text-white/[0.07] transition-transform duration-700 ease-out group-hover/poster:scale-105"
        >
          {project.client}
        </span>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-overlay"
          style={{ backgroundImage: GRAIN_URL }}
        />

        {/* Scrim + play affordance */}
        <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/30" />
        <span className="absolute inset-0 bg-black/25 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover/poster:opacity-100" />

        <span className="absolute inset-0 flex items-center justify-center">
          <span className="relative flex h-16 w-16 scale-75 items-center justify-center opacity-0 transition-all duration-300 ease-out group-hover/poster:scale-100 group-hover/poster:opacity-100">
            <span
              aria-hidden
              className="bg-accent-gradient absolute inset-0 rounded-full opacity-40 blur-md"
            />
            <span className="bg-accent-gradient relative flex h-14 w-14 items-center justify-center rounded-full text-accent-fg shadow-accent-lg">
              <Play className="h-5 w-5 translate-x-0.5 fill-current" />
            </span>
          </span>
        </span>

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
          {project.categoryLabel}
        </span>

        {/* Slate */}
        <span className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/65">
          {project.year && <span className="tabular-nums">{project.year}</span>}
          {project.location && (
            <span className="flex min-w-0 items-center gap-1.5">
              <MapPin className="h-3 w-3 shrink-0" aria-hidden />
              <span className="truncate">{project.location}</span>
            </span>
          )}
        </span>
      </button>

      {/* Details */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-gradient-accent text-[11px] font-semibold uppercase tracking-[0.2em]">
          {project.client}
        </p>

        <h3 className="mt-2 font-display text-xl font-semibold leading-[1.22] tracking-[-0.02em] text-text-primary">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="text-left transition-colors duration-300 hover:text-accent-bronze focus-ring rounded-sm"
          >
            {project.title}
          </button>
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-text-muted">{project.summary}</p>

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
