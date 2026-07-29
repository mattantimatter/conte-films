import React from "react";
import { Reveal } from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";

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
    <section className="py-24 bg-bg-primary border-b border-border-subtle transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="max-w-3xl mb-16 space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-accent-bronze">
            Our Production Framework
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-text-primary">
            Organized execution. No studio clutter.
          </h2>
          <p className="text-base text-text-muted leading-relaxed">
            A collaborative workflow built around clear communication, organized shoot days, and outcomes designed to advance your brand.
          </p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase) => (
            <StaggerItem key={phase.number}>
              <div className="p-8 rounded-lg bg-bg-surface border border-border-subtle hover:border-accent-bronze/40 transition-colors h-full flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between border-b border-border-subtle pb-4 mb-4">
                    <span className="text-2xl font-serif font-bold text-accent-bronze">
                      {phase.number}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase">
                      Phase {phase.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-text-primary">
                    {phase.title}
                  </h3>
                  <p className="text-xs font-medium text-accent-bronze mt-1">
                    {phase.subtitle}
                  </p>
                  <p className="text-sm text-text-muted mt-4 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
