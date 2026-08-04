import React from "react";
import { ArrowUpRight, Building2, Calendar, Home as HomeIcon, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ViewfinderFrame } from "@/components/ui/ViewfinderFrame";
import { solutionsContent } from "@/content/solutions";

interface SolutionPreview {
  slug: keyof typeof solutionsContent;
  icon: LucideIcon;
  imageSrc: string;
  imageAlt: string;
  imagePositionClassName?: string;
  /** Short homepage-level blurb; the solution pages carry the full description. */
  blurb: string;
  /** Compact market name for the card's call to action. */
  shortTitle: string;
  chips: string[];
  reel: string;
  timecode: string;
  lens: string[];
}

const PREVIEWS: SolutionPreview[] = [
  {
    slug: "corporate",
    icon: Building2,
    shortTitle: "Corporate",
    imageSrc: "/images/solutions/corporate-preview.jpg",
    imageAlt: "Luxury product cinematography for brand and commercial campaigns",
    blurb:
      "Executive thought leadership, authentic customer stories, and commercial media for mid-market companies, healthcare institutions, and brand leaders.",
    chips: [
      "Brand Films",
      "Client Testimonials",
      "Product Explainers",
      "Social Content",
    ],
    reel: "A-CAM",
    timecode: "00:04:12:18",
    lens: ["35mm", "f/2.0", "Product"],
  },
  {
    slug: "real-estate",
    icon: HomeIcon,
    shortTitle: "Real Estate",
    imageSrc: "/images/solutions/real-estate-preview.jpg",
    imageAlt: "Aerial view of a luxury residence with pool and landscaped grounds",
    blurb:
      "Twilight illumination, spatial continuity, and FAA-certified aerial passes for custom home builders, architects, interior designers, and luxury brokers.",
    chips: [
      "Architectural Walkthroughs",
      "FAA Aerial Media",
      "Twilight Photography",
      "Builder Brand Films",
    ],
    reel: "AERIAL",
    timecode: "00:07:38:04",
    lens: ["16mm", "f/8.0"],
  },
  {
    slug: "events",
    icon: Calendar,
    shortTitle: "Events",
    imageSrc: "/images/solutions/events-preview.jpg",
    imageAlt: "Keynote speaker on stage during a multi-camera conference production",
    // Subject sits toward the right of the still — bias framing so he’s visible in the crop.
    imagePositionClassName: "object-[68%_center]",
    blurb:
      "Multi-camera keynote recording, gala coverage, and rapid-turnaround vertical highlights for conferences, brand activations, and nonprofit galas.",
    chips: [
      "Multi-Cam Stage",
      "Rapid Social Cutdowns",
      "On-Site Photography",
      "Sponsor Assets",
    ],
    reel: "B-CAM",
    timecode: "00:11:02:23",
    lens: ["85mm", "f/1.4", "Multi-Cam"],
  },
];

export function SolutionsPreview() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-bg-surface py-24 transition-colors sm:py-32"
    >
      <div
        aria-hidden
        className="animate-accent-drift pointer-events-none absolute -right-32 top-0 h-[26rem] w-[26rem] rounded-full opacity-[0.06] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="max-w-3xl">
          <Eyebrow icon={<Layers className="h-3.5 w-3.5" />} rule>
            Core Capabilities
          </Eyebrow>
          <h2 className="mt-6 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] text-text-primary sm:text-5xl">
            Bespoke visual solutions across{" "}
            <span className="text-gradient-accent">three core markets</span>.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-muted">
            Every engagement runs on the same production discipline — only the lens package, crew shape,
            and delivery format change.
          </p>
        </Reveal>

        <StaggerGroup
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          staggerChildren={0.1}
        >
          {PREVIEWS.map((preview, index) => {
            const solution = solutionsContent[preview.slug];
            const Icon = preview.icon;

            return (
              <StaggerItem key={preview.slug} className="h-full">
                <SpotlightCard className="h-full bg-bg-primary" contentClassName="flex flex-col">
                  <ViewfinderFrame
                    icon={<Icon className="h-12 w-12" strokeWidth={1.25} />}
                    imageSrc={preview.imageSrc}
                    imageAlt={preview.imageAlt}
                    imagePositionClassName={preview.imagePositionClassName}
                    reel={preview.reel}
                    timecode={preview.timecode}
                    meta={preview.lens}
                    className="rounded-none border-0 border-b border-border-subtle"
                  />

                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-baseline gap-3">
                      <span className="text-gradient-accent font-display text-2xl font-semibold leading-none tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-muted">
                        {solution.title}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl font-semibold leading-[1.2] tracking-[-0.02em] text-text-primary sm:text-2xl">
                      {solution.heroHeadline}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-text-muted">{preview.blurb}</p>

                    <ul className="mt-6 flex flex-wrap gap-1.5">
                      {preview.chips.map((chip) => (
                        <li
                          key={chip}
                          className="rounded-full border border-border-subtle bg-bg-surface px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-text-muted transition-colors duration-300 group-hover/spot:border-accent-bronze/30 group-hover/spot:text-text-primary"
                        >
                          {chip}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-7">
                      <span aria-hidden className="mb-5 block h-px w-full bg-border-subtle" />
                      <Button
                        href={`/solutions/${solution.slug}`}
                        variant="ghost"
                        icon={<ArrowUpRight className="h-4 w-4" />}
                      >
                        Explore {preview.shortTitle}
                      </Button>
                    </div>
                  </div>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
