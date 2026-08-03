"use client";

import React, { useState, Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import {
  Building2,
  CalendarDays,
  Home,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";
import { Project, projectsContent, projectMatchesCategory } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { VideoLightbox } from "@/components/VideoLightbox";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";
import { cn } from "@/lib/utils";

interface ProjectGridProps {
  initialCategory?: "all" | "corporate" | "real-estate" | "events";
  limit?: number;
}

const FILTERS: {
  id: "all" | "corporate" | "real-estate" | "events";
  label: string;
  icon: LucideIcon;
}[] = [
  { id: "all", label: "All Work", icon: LayoutGrid },
  { id: "corporate", label: "Corporate", icon: Building2 },
  { id: "real-estate", label: "Real Estate", icon: Home },
  { id: "events", label: "Event", icon: CalendarDays },
];

function ProjectGridInner({ initialCategory = "all", limit }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>(initialCategory);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filteredProjects = projectsContent.filter((project) =>
    projectMatchesCategory(
      project,
      activeFilter as "all" | "corporate" | "real-estate" | "events",
    ),
  );

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  const selectFilter = (id: (typeof FILTERS)[number]["id"]) => {
    setActiveFilter(id);
    if (limit || pathname !== "/work") return;

    const params = new URLSearchParams(searchParams.toString());
    if (id === "all") params.delete("category");
    else params.set("category", id);
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  return (
    <>
      <div className="space-y-12">
        {!limit && (
          <div className="flex justify-center">
            <div
              role="tablist"
              aria-label="Filter portfolio by category"
              className={cn(
                "flex max-w-full flex-wrap justify-center gap-2",
                "md:inline-flex md:gap-1 md:rounded-full md:border md:border-border-subtle md:bg-bg-surface md:p-1 md:shadow-sm",
              )}
            >
              {FILTERS.map((filter) => {
                const isActive = activeFilter === filter.id;
                const Icon = filter.icon;
                return (
                  <button
                    key={filter.id}
                    onClick={() => selectFilter(filter.id)}
                    role="tab"
                    aria-selected={isActive}
                    className={cn(
                      "relative rounded-full px-3.5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em]",
                      "transition-colors duration-300 focus-ring active:scale-[0.97]",
                      "border border-border-subtle bg-bg-surface shadow-sm",
                      "md:border-transparent md:bg-transparent md:shadow-none md:px-4",
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
                        "relative flex items-center gap-2",
                        isActive && "text-accent-fg",
                      )}
                    >
                      <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} aria-hidden />
                      <span>{filter.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <StaggerGroup
          key={activeFilter}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          staggerChildren={0.07}
        >
          {displayedProjects.map((project) => (
            <StaggerItem key={project.slug} className="h-full">
              <ProjectCard project={project} onSelect={setSelectedProject} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <VideoLightbox project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}

export function ProjectGrid(props: ProjectGridProps) {
  return (
    <Suspense fallback={null}>
      <ProjectGridInner {...props} />
    </Suspense>
  );
}
