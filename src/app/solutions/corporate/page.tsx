import React from "react";
import { Metadata } from "next";
import { Building2, CheckCircle, ArrowUpRight, Shield, Award } from "lucide-react";
import { solutionsContent } from "@/content/solutions";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";
import { ProjectGrid } from "@/components/ProjectGrid";
import { TestimonialSection } from "@/components/TestimonialSection";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Corporate Video Production in Atlanta | Conté Films",
  description:
    "High-end corporate video production, brand films, healthcare client testimonials, and executive thought leadership in Metro Atlanta.",
};

export default function CorporateSolutionPage() {
  const content = solutionsContent["corporate"];

  return (
    <div className="pt-28 space-y-0">
      {/* Corporate Hero */}
      <section className="py-16 bg-bg-primary transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Solutions", href: "/#solutions" }, { label: "Corporate & Brand" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
            <div className="lg:col-span-8 space-y-6">
              <Reveal direction="up">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent-bronze flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>Corporate & Brand Content</span>
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
                  Start Corporate Project
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences & Business Context */}
      <section className="py-20 bg-bg-surface border-y border-border-subtle transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Reveal direction="up" className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent-bronze">
              Who We Serve
            </span>
            <h2 className="text-3xl font-serif font-medium text-text-primary">
              Built for organizations where credibility is paramount.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.targetAudience.map((audience, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-bg-primary border border-border-subtle flex items-start gap-4">
                <Shield className="w-5 h-5 text-accent-bronze flex-shrink-0 mt-0.5" />
                <p className="text-sm text-text-primary font-medium">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Capabilities */}
      <section className="py-24 bg-bg-primary transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <Reveal direction="up" className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent-bronze">
              Production Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-text-primary">
              Comprehensive corporate visual services.
            </h2>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.capabilities.map((cap, idx) => (
              <StaggerItem key={idx}>
                <div className="p-8 rounded-xl bg-bg-surface border border-border-medium hover:border-accent-bronze/40 transition-colors h-full space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-text-primary">{cap.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{cap.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Featured Corporate Work */}
      <section className="py-24 bg-bg-surface border-y border-border-subtle transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Reveal direction="up" className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent-bronze">
              Corporate Case Studies
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-text-primary">
              Selected Corporate & Healthcare Productions
            </h2>
          </Reveal>

          <ProjectGrid initialCategory="corporate" />
        </div>
      </section>

      {/* Deliverables List */}
      <section className="py-24 bg-bg-primary transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-2xl bg-bg-surface border border-border-medium space-y-8">
            <h3 className="text-2xl font-serif font-medium text-text-primary">
              Standard Corporate Deliverables Package
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {content.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-bg-primary border border-border-subtle">
                  <CheckCircle className="w-4 h-4 text-accent-bronze flex-shrink-0" />
                  <span className="text-sm text-text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection categoryFilter="corporate" />

      {/* CTA */}
      <CTASection
        headline="Ready to elevate your corporate brand story?"
        subheadline="Partner with Conté Films to produce video assets that inspire trust and advance your market position."
      />
    </div>
  );
}
