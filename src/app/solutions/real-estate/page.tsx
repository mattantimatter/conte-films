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
import { RealEstatePricing } from "@/components/RealEstatePricing";
import { RealEstateAerial } from "@/components/RealEstateAerial";
import { RealEstateDeliverables } from "@/components/RealEstateDeliverables";
import { Button } from "@/components/ui/Button";
import { RealEstateFaq } from "@/components/SiteFaq";

export const metadata: Metadata = {
  title: "Luxury Real Estate Photography & Video in Atlanta | Conté Films",
  description:
    "Architectural video production, luxury residential photography, and FAA-certified drone media for custom builders, architects, and brokers in Buckhead & Metro Atlanta.",
};

export default function RealEstateSolutionPage() {
  const content = solutionsContent["real-estate"];

  return (
    <div className="space-y-0">
      <SolutionHero
        eyebrow="Luxury Real Estate & Architecture"
        headline={content.heroHeadline}
        accentWord="exceptional"
        description={content.heroDescription}
        primaryCta={{ label: "Book Architectural Shoot", href: "/contact" }}
        secondaryCta={{ label: "Drone Capabilities", href: "#drone" }}
        playbackId="7FEEOISkBx8NenBqj76E902NEDY4fqL6qFizqzK8oYoc"
      />

      <RealEstateAerial />

      <RealEstatePricing />

      {/* Featured Real Estate Work */}
      <section className="py-24 bg-bg-primary transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Reveal direction="up" className="max-w-3xl space-y-4">
            <Eyebrow>Architectural Portfolio</Eyebrow>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-text-primary">
              Residential & Commercial Architectural Films
            </h2>
          </Reveal>

          <ProjectGrid initialCategory="real-estate" limit={3} />

          <div className="flex justify-center">
            <Button href="/work?category=real-estate" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
              See more real estate case studies
            </Button>
          </div>
        </div>
      </section>

      <RealEstateDeliverables />

      {/* Kalos Testimonial */}
      <TestimonialSection />

      {/* CTA */}
      <RealEstateFaq />

      <CTASection
        headline="Document your next architectural build with intention."
        subheadline="Partner with Conté Films for architectural cinema, twilight stills, and aerial drone coverage that sets your portfolio apart."
      />
    </div>
  );
}
