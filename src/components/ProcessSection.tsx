import React from "react";
import { Route } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const phases = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Strategy & Creative Intent",
    description:
      "We begin by identifying what makes your business, property, or event distinct. We define measurable outcomes, distribution platforms, and core brand messaging before touching a lens.",
  },
  {
    number: "02",
    title: "Plan",
    subtitle: "Rigorous Pre-Production",
    description:
      "Every shoot is orchestrated with precision. We construct detailed storyboards, lighting schematics, interview prompts, flight permits, and crew schedules to guarantee zero wasted time on set.",
  },
  {
    number: "03",
    title: "Produce",
    subtitle: "Cinematic Execution",
    description:
      "Led by founder Stefan Jobe, our team deploys cinema camera systems, high-fidelity wireless audio, and FAA-certified aerial drones with scaled crews of up to 10 professionals.",
  },
  {
    number: "04",
    title: "Deliver",
    subtitle: "Post-Production & Polish",
    description:
      "Color grading, sound design, music licensing, and multi-ratio exports. We deliver master files and platform-optimized social cuts ready for immediate deployment.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-bg-primary transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="max-w-3xl mb-16">
          <Eyebrow icon={<Route className="h-3.5 w-3.5" />} rule>
            Our Production Framework
          </Eyebrow>
          <h2 className="mt-6 font-display text-[2rem] sm:text-4xl lg:text-5xl font-semibold tracking-[-0.035em] leading-[1.08] text-text-primary">
            Organized execution. No studio clutter.
          </h2>
          <p className="mt-5 text-base text-text-muted leading-relaxed">
            A collaborative workflow built around clear communication, organized shoot days, and outcomes designed to advance your brand.
          </p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {phases.map((phase) => (
            <StaggerItem key={phase.number} className="h-full">
              <SpotlightCard className="h-full bg-bg-surface" contentClassName="flex flex-col p-8">
                <div className="mb-4 flex items-center justify-between border-b border-border-subtle pb-4">
                  <span className="text-gradient-accent font-display text-2xl font-semibold tabular-nums leading-none">
                    {phase.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                    Phase {phase.number}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-text-primary">
                  {phase.title}
                </h3>
                <p className="mt-1.5 text-xs font-medium text-accent-bronze">{phase.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">{phase.description}</p>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
