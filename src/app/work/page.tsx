import React from "react";
import { Metadata } from "next";
import { ProjectGrid } from "@/components/ProjectGrid";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import StaggeredText from "@/components/react-bits/staggered-text";

export const metadata: Metadata = {
  title: "Work & Case Studies | Conté Films",
  description:
    "Selected Conté Films productions across corporate, healthcare, luxury real estate, and events — cinematic photography, film, and aerial media.",
};

type WorkCategory = "all" | "corporate" | "real-estate" | "events";

function resolveCategory(value?: string): WorkCategory {
  if (value === "corporate" || value === "real-estate" || value === "events") {
    return value;
  }
  if (value === "event") return "events";
  return "all";
}

export default function WorkPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const category = resolveCategory(searchParams.category);

  return (
    <div className="space-y-0">
      <section className="relative overflow-hidden bg-bg-primary pb-24 pt-32 transition-colors sm:pb-32 sm:pt-40">
        <div
          aria-hidden
          className="animate-accent-drift pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full opacity-[0.07] blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" className="mx-auto max-w-3xl text-center">
            <Eyebrow className="justify-center">Portfolio</Eyebrow>
            <StaggeredText
              as="h1"
              text="Selected Works & Case Studies"
              segmentBy="words"
              staggerDirection="center"
              delay={40}
              className="mt-5 justify-center text-center font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] text-text-primary sm:text-5xl"
            />
            <p className="mt-5 text-base text-text-muted">
              Select any project to launch the interactive video presentation.
            </p>
          </Reveal>

          <ProjectGrid key={category} initialCategory={category} />
        </div>
      </section>

      <CTASection
        headline="Ready to produce your next case study?"
        subheadline="Partner with Conté Films for cinematic photography, film, and aerial media that elevate your brand."
      />
    </div>
  );
}
