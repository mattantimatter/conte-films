import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Home as HomeIcon, CheckCircle, ArrowUpRight, Compass, ShieldCheck, Sun } from "lucide-react";
import { solutionsContent } from "@/content/solutions";
import { Reveal } from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";
import { ProjectGrid } from "@/components/ProjectGrid";
import { TestimonialSection } from "@/components/TestimonialSection";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Luxury Real Estate Photography & Video in Atlanta | Conté Films",
  description:
    "Architectural video production, luxury residential photography, and FAA-certified drone media for custom builders, architects, and brokers in Buckhead & Metro Atlanta.",
};

export default function RealEstateSolutionPage() {
  const content = solutionsContent["real-estate"];

  return (
    <div className="pt-28 space-y-0">
      {/* Architectural Hero */}
      <section className="py-16 bg-bg-primary transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Solutions", href: "/#solutions" }, { label: "Luxury Real Estate & Drone" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
            <div className="lg:col-span-8 space-y-6">
              <Reveal direction="up">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent-bronze flex items-center gap-2">
                  <HomeIcon className="w-4 h-4" />
                  <span>Luxury Real Estate & Architecture</span>
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
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-accent-bronze text-white font-semibold text-xs uppercase tracking-widest hover:bg-accent-bronze-hover transition-all shadow-md focus-ring"
                >
                  Book Architectural Shoot
                </Link>
                <a
                  href="#drone"
                  className="px-8 py-3.5 rounded-full bg-bg-elevated text-text-primary border border-border-medium hover:border-accent-bronze transition-colors text-xs font-semibold uppercase tracking-widest"
                >
                  FAA Drone Capabilities
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Drone Section with ID="drone" for redirects */}
      <section id="drone" className="py-24 bg-bg-surface border-y border-border-subtle transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Reveal direction="up">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent-bronze flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>FAA Part 107 Remote Pilots</span>
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif font-medium text-text-primary tracking-tight">
                  FAA-Certified Aerial Photography & Video
                </h2>
              </Reveal>
              <Reveal direction="up" delay={0.2} className="space-y-4 text-sm text-text-muted leading-relaxed">
                <p>
                  Conté Films holds active FAA Part 107 certifications, allowing us to legally and safely fly commercial drone missions across Metro Atlanta’s controlled airspace and residential zones.
                </p>
                <p>
                  Our aerial cinematography articulates lot boundaries, neighborhood proximity, architectural rooflines, and twilight vistas with cinematic smoothness.
                </p>
              </Reveal>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-bg-primary border border-border-subtle">
                  <p className="text-lg font-serif font-bold text-accent-bronze">4K Aerial Video</p>
                  <p className="text-xs text-text-muted">Smooth Tracking Passes</p>
                </div>
                <div className="p-4 rounded-lg bg-bg-primary border border-border-subtle">
                  <p className="text-lg font-serif font-bold text-accent-bronze">High-Res Stills</p>
                  <p className="text-xs text-text-muted">Publication Print Ready</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 aspect-video sm:aspect-cinema rounded-2xl bg-bg-elevated border border-border-medium flex items-center justify-center p-8 text-center shadow-xl">
              <div>
                <Compass className="w-10 h-10 text-accent-bronze mx-auto mb-3" />
                <p className="text-sm font-serif font-semibold text-text-primary">FAA Part 107 Certified Airspace Ops</p>
                <p className="text-xs text-text-muted mt-1">Atlanta • Buckhead • Alpharetta • Milton • Lake Oconee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Real Estate Work */}
      <section className="py-24 bg-bg-primary transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Reveal direction="up" className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent-bronze">
              Architectural Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-text-primary">
              Multimillion-Dollar Residence Productions
            </h2>
          </Reveal>

          <ProjectGrid initialCategory="real-estate" />
        </div>
      </section>

      {/* Deliverables List */}
      <section className="py-24 bg-bg-surface border-t border-border-subtle transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-2xl bg-bg-primary border border-border-medium space-y-8">
            <h3 className="text-2xl font-serif font-medium text-text-primary">
              Luxury Property & Builder Deliverables Package
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

      {/* Kalos Testimonial */}
      <TestimonialSection categoryFilter="real-estate" />

      {/* CTA */}
      <CTASection
        headline="Document your next architectural build with intention."
        subheadline="Partner with Conté Films for architectural cinema, twilight stills, and FAA aerial coverage that sets your portfolio apart."
      />
    </div>
  );
}
