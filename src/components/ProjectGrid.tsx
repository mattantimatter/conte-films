"use client";

import React, { useState } from "react";
import { Project, projectsContent } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { VideoLightbox } from "@/components/VideoLightbox";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";

interface ProjectGridProps {
  initialCategory?: "all" | "corporate" | "real-estate" | "events";
  limit?: number;
}

export function ProjectGrid({ initialCategory = "all", limit }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>(initialCategory);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsContent.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  const filters = [
    { id: "all", label: "All Selected Work" },
    { id: "corporate", label: "Corporate & Healthcare" },
    { id: "real-estate", label: "Luxury Real Estate & Architecture" },
    { id: "events", label: "Events & Keynotes" },
  ];

  return (
    <>
      <div className="space-y-10">
        {/* Filter Navigation Tabs */}
        {!limit && (
          <div
            className="flex flex-wrap items-center justify-center gap-2 border-b border-border-subtle pb-6"
            role="tablist"
            aria-label="Filter portfolio by category"
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  role="tab"
                  aria-selected={isActive}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all focus-ring ${
                    isActive
                      ? "bg-accent-bronze text-white shadow-sm"
                      : "bg-bg-surface text-text-muted hover:text-text-primary hover:bg-bg-elevated border border-border-subtle"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Projects Grid */}
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, idx) => (
            <StaggerItem key={project.slug}>
              <ProjectCard
                project={project}
                onSelect={(p) => setSelectedProject(p)}
                priority={idx === 0}
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      {/* Lightbox Modal */}
      <VideoLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
