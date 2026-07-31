import React from "react";
import { Metadata } from "next";
import { solutionsContent } from "@/content/solutions";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SolutionHero } from "@/components/SolutionHero";
import { ArrowUpRight } from "lucide-react";
import { ProjectGrid } from "@/components/ProjectGrid";
import { TestimonialSection } from "@/components/TestimonialSection";
import { CTASection } from "@/components/CTASection";
import { CorporateWhoWeServe } from "@/components/CorporateWhoWeServe";
import { CorporateCapabilities } from "@/components/CorporateCapabilities";
import { CorporateDeliverables } from "@/components/CorporateDeliverables";
import { Button } from "@/components/ui/Button";
import { CorporateFaq } from "@/components/SiteFaq";

export const metadata: Metadata = {
  title: "Corporate Video Production in Atlanta | Conté Films",
  description:
    "High-end corporate video production, brand films, healthcare client testimonials, and executive thought leadership in Metro Atlanta.",
};

export default function CorporateSolutionPage() {
  const content = solutionsContent["corporate"];

  return (
    <div className="space-y-0">
      <SolutionHero
        eyebrow="Corporate & Brand Content"
        headline={content.heroHeadline}
        accentWord="authority"
        description={content.heroDescription}
        primaryCta={{ label: "Start Corporate Project", href: "/contact" }}
        secondaryCta={{ label: "View Corporate Work", href: "#case-studies" }}
      />

      <CorporateWhoWeServe />

      <CorporateCapabilities />

      {/* Featured Corporate Work */}
      <section id="case-studies" className="py-24 bg-bg-surface transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Reveal direction="up" className="max-w-3xl space-y-4">
            <Eyebrow>Corporate Case Studies</Eyebrow>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-text-primary">
              Selected Corporate & Healthcare Productions
            </h2>
          </Reveal>

          <ProjectGrid initialCategory="corporate" limit={3} />

          <div className="flex justify-center">
            <Button href="/work" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
              See more corporate case studies
            </Button>
          </div>
        </div>
      </section>

      <CorporateDeliverables />

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA */}
      <CorporateFaq />

      <CTASection
        headline="Ready to elevate your corporate brand story?"
        subheadline="Partner with Conté Films to produce video assets that inspire trust and advance your market position."
      />
    </div>
  );
}
