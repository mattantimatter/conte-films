import React from "react";
import { Metadata } from "next";
import { Calendar, CheckCircle, ArrowUpRight, Radio, Zap } from "lucide-react";
import { solutionsContent } from "@/content/solutions";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";
import { ProjectGrid } from "@/components/ProjectGrid";
import { TestimonialSection } from "@/components/TestimonialSection";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Event Videography & Photography in Atlanta | Conté Films",
  description:
    "Cinematic event coverage, multi-camera keynote recording, gala recap films, and rapid-turnaround social edits for conferences and corporate activations in Atlanta.",
};

export default function EventsSolutionPage() {
  const content = solutionsContent["events"];

  return (
    <div className="pt-28 space-y-0">
      {/* Event Hero */}
      <section className="py-16 bg-bg-primary transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Solutions", href: "/#solutions" }, { label: "Events & Experiences" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
            <div className="lg:col-span-8 space-y-6">
              <Reveal direction="up">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent-bronze flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Events & Experiences</span>
                </span>
                <h1 className="text-4xl sm:text-6xl font-serif font-medium text-text-primary tracking-tight leading-tight mt-2">
                  {content.heroHeadline}
                </h1>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <p className="text-base sm:text-lg text-text-muted leading-relaxed font-light">
                  {content.heroDescription}
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.3} className="pt-4 flex flex-wrap gap-4">
                <Button href="/contact" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
                  Book Event Coverage
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Capabilities */}
      <section className="py-24 bg-bg-surface border-y border-border-subtle transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <Reveal direction="up" className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent-bronze">
              Coverage Models
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-text-primary">
              Multi-Camera & Rapid Social Delivery
            </h2>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.capabilities.map((cap, idx) => (
              <StaggerItem key={idx}>
                <div className="p-8 rounded-xl bg-bg-primary border border-border-medium hover:border-accent-bronze/40 transition-colors h-full space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-text-primary">{cap.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{cap.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Featured Event Productions */}
      <section className="py-24 bg-bg-primary transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Reveal direction="up" className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent-bronze">
              Event Case Studies
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-text-primary">
              Featured Conference & Keynote Productions
            </h2>
          </Reveal>

          <ProjectGrid initialCategory="events" />
        </div>
      </section>

      {/* Deliverables List */}
      <section className="py-24 bg-bg-surface border-t border-border-subtle transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-2xl bg-bg-primary border border-border-medium space-y-8">
            <h3 className="text-2xl font-serif font-medium text-text-primary">
              Event Production Deliverables Package
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {content.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-bg-surface border border-border-subtle">
                  <CheckCircle className="w-4 h-4 text-accent-bronze flex-shrink-0" />
                  <span className="text-sm text-text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Testimonial */}
      <TestimonialSection categoryFilter="events" />

      {/* CTA */}
      <CTASection
        headline="Capture your upcoming conference or brand activation."
        subheadline="Reserve multi-camera video, stage recording, and rapid-turnaround event photography with Conté Films."
      />
    </div>
  );
}
