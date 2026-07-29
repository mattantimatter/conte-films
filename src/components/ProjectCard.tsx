"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, ArrowUpRight } from "lucide-react";
import { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  priority?: boolean;
}

export function ProjectCard({ project, onSelect, priority = false }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col rounded-lg overflow-hidden border border-border-subtle bg-bg-surface hover:border-accent-bronze/40 transition-all duration-300 shadow-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Media Poster Area */}
      <div
        className="relative aspect-cinema w-full overflow-hidden bg-bg-elevated cursor-pointer"
        onClick={() => onSelect(project)}
      >
        {/* Placeholder SVG Gradient background if image loads */}
        <div className="absolute inset-0 bg-gradient-to-br from-bg-surface via-bg-elevated to-bg-primary opacity-90" />

        {/* Local SVGs / Render fallback */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] font-mono tracking-widest text-accent-bronze uppercase mb-1">
            {project.client}
          </span>
          <p className="text-lg font-serif font-semibold text-text-primary max-w-md line-clamp-2">
            {project.title}
          </p>
        </div>

        {/* Play Overlay Button */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-accent-bronze text-white flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-xl">
            <Play className="w-6 h-6 fill-white translate-x-0.5" />
          </div>
        </div>

        {/* Category Pill Tag */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-bg-primary/80 backdrop-blur-md text-text-primary border border-border-medium">
            {project.categoryLabel}
          </span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-accent-bronze">
                {project.client}
              </p>
              <h3 className="text-xl font-serif font-medium text-text-primary mt-1 group-hover:text-accent-bronze transition-colors">
                {project.title}
              </h3>
            </div>
            <button
              onClick={() => onSelect(project)}
              className="p-2 rounded-full border border-border-subtle group-hover:border-accent-bronze group-hover:text-accent-bronze transition-colors focus-ring"
              aria-label={`View ${project.title}`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-text-muted mt-3 leading-relaxed line-clamp-2">
            {project.summary}
          </p>
        </div>

        {/* Services Chips */}
        <div className="pt-4 border-t border-border-subtle flex flex-wrap gap-1.5">
          {project.services.slice(0, 3).map((service, idx) => (
            <span
              key={idx}
              className="text-[10px] tracking-wide uppercase px-2 py-0.5 rounded-md bg-bg-primary text-text-muted border border-border-subtle"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
