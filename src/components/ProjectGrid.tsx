"use client";

import React, { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Project, projectsContent } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { VideoLightbox } from "@/components/VideoLightbox";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";
import { cn } from "@/lib/utils";

interface ProjectGridProps {
  initialCategory?: "all" | "corporate" | "real-estate" | "events";
  limit?: number;
}

const FILTERS = [
  { id: "all", label: "All Work" },
  { id: "corporate", label: "Corporate & Healthcare" },
  { id: "real-estate", label: "Real Estate & Architecture" },
  { id: "events", label: "Events & Keynotes" },
] as const;

export function ProjectGrid({ initialCategory = "all", limit }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>(initialCategory);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const counts = useMemo(
    () =>
      FILTERS.reduce<Record<string, number>>((totals, filter) => {
        totals[filter.id] =
          filter.id === "all"
            ? projectsContent.length
            : projectsContent.filter((project) => project.category === filter.id).length;
        return totals;
      }, {}),
    [],
  );

  const filteredProjects = projectsContent.filter(
    (project) => activeFilter === "all" || project.category === activeFilter,
  );

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <>
      <div className="space-y-12">
        {/* Segmented filter control */}
        {!limit && (
          <div className="flex justify-center">
            <div
              role="tablist"
              aria-label="Filter portfolio by category"
              className="inline-flex max-w-full flex-wrap justify-center gap-1 rounded-full border border-border-subtle bg-bg-surface p-1 shadow-sm"
            >
              {FILTERS.map((filter) => {
                const isActive = activeFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    role="tab"
                    aria-selected={isActive}
                    className={cn(
                      "relative rounded-full px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em]",
                      "transition-colors duration-300 focus-ring active:scale-[0.97]",
                      !isActive && "text-text-muted hover:text-text-primary",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        aria-hidden
                        layoutId="project-filter-pill"
                        className="bg-accent-gradient absolute inset-0 rounded-full shadow-accent"
                        transition={
                          shouldReduceMotion
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 420, damping: 36 }
                        }
                      />
                    )}
                    <span
                      className={cn(
                        "relative flex items-center gap-1.5",
                        isActive && "text-accent-fg",
                      )}
                    >
                      {filter.label}
                      <span
                        className={cn(
                          "tabular-nums text-[9px] font-medium",
                          isActive ? "opacity-70" : "opacity-50",
                        )}
                      >
                        {counts[filter.id]}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Projects */}
        <StaggerGroup
          key={activeFilter}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          staggerChildren={0.07}
        >
          {displayedProjects.map((project, idx) => (
            <StaggerItem key={project.slug} className="h-full">
              <ProjectCard
                project={project}
                onSelect={(p) => setSelectedProject(p)}
                priority={idx === 0}
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <VideoLightbox project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
