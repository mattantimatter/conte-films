import React from "react";
import { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { solutionsContent } from "@/content/solutions";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SolutionHero } from "@/components/SolutionHero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { TestimonialSection } from "@/components/TestimonialSection";
import { CTASection } from "@/components/CTASection";
import { EventsDeliverables } from "@/components/EventsDeliverables";
import { EventsCapabilities } from "@/components/EventsCapabilities";
import { EventsWhoWeServe } from "@/components/EventsWhoWeServe";
import { Button } from "@/components/ui/Button";
import { EventsFaq } from "@/components/SiteFaq";

export const metadata: Metadata = {
  title: "Event Videography & Photography in Atlanta | Conté Films",
  description:
    "Cinematic event coverage, multi-camera keynote recording, gala recap films, and rapid-turnaround social edits for conferences and corporate activations in Atlanta.",
};

export default function EventsSolutionPage() {
  const content = solutionsContent["events"];

  return (
    <div className="space-y-0">
      <SolutionHero
        eyebrow="Events & Experiences"
        headline={content.heroHeadline}
        accentWord="shape"
        description={content.heroDescription}
        primaryCta={{ label: "Book Event Coverage", href: "/contact" }}
        secondaryCta={{ label: "View Event Work", href: "#case-studies" }}
        playbackId="Wt4OwK02015Cxc22004EjuGqHCzJcNXzR502BQLlSGVZxSM"
      />

      <EventsWhoWeServe />

      <EventsCapabilities />

      <section id="case-studies" className="py-24 bg-bg-primary transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Reveal direction="up" className="max-w-3xl space-y-4">
            <Eyebrow>Event Case Studies</Eyebrow>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-text-primary">
              Featured Conference & Keynote Productions
            </h2>
          </Reveal>

          <ProjectGrid initialCategory="events" limit={3} />

          <div className="flex justify-center">
            <Button href="/work?category=events" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
              See more event case studies
            </Button>
          </div>
        </div>
      </section>

      <EventsDeliverables />

      <TestimonialSection />

      <EventsFaq />

      <CTASection
        headline="Capture your upcoming conference or brand activation."
        subheadline="Reserve multi-camera video, stage recording, and rapid-turnaround event photography with Conté Films."
      />
    </div>
  );
}
