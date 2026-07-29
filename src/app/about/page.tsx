import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Camera, Film, Compass, ShieldCheck, Award, Users } from "lucide-react";
import { siteContent } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Conté Films | Atlanta Visual Production Studio",
  description:
    "Learn about Conté Films and founder Stefan Jobe. Over a decade of professional cinematography, luxury real estate photography, and FAA drone production in Atlanta, GA.",
};

const pillars = [
  {
    title: "See What Others Miss",
    description:
      "We look beyond basic coverage to discover the spatial harmony, human emotion, and subtle textures that make a story unforgettable.",
  },
  {
    title: "Plan With Intention",
    description:
      "Great films don't happen by accident. Rigorous pre-production, precise shot lists, and clear communication ensure shoot days run flawlessly.",
  },
  {
    title: "Execute With Precision",
    description:
      "Deploying cinema cameras, custom lighting, and FAA drone aerials with scaled crews of up to 10 professionals tailored to project scope.",
  },
];

const capabilities = [
  { title: "Cinematography", desc: "4K cinema-grade digital filming, multi-camera setups, & custom lighting direction." },
  { title: "Architectural Photography", desc: "Interior, exterior, & twilight photography tailored for publication and builder portfolios." },
  { title: "FAA Aerial Production", desc: "Part 107 certified drone flight ops for cinematic property overviews & site context." },
  { title: "Creative Direction", desc: "Concept development, narrative arc structuring, storyboard design, & visual pacing." },
  { title: "Production Planning", desc: "Location scouting, schedule logistics, talent direction, & crew coordination." },
  { title: "Editing & Post-Production", desc: "Color grading, sound design, dialogue cleanup, & multi-ratio web exports." },
  { title: "Social Cutdowns", desc: "High-impact vertical edits optimized for Instagram, LinkedIn, & ad campaigns." },
];

export default function AboutPage() {
  return (
    <div className="pt-28 space-y-0">
      {/* Editorial Hero */}
      <section className="py-16 bg-bg-primary transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
            <div className="lg:col-span-7 space-y-6">
              <Reveal direction="up">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent-bronze">
                  The Conté Films Story
                </span>
                <h1 className="text-4xl sm:text-6xl font-serif font-medium text-text-primary tracking-tight leading-tight mt-2">
                  Founder-led visual craft with the scale of a commercial studio.
                </h1>
              </Reveal>

              <Reveal direction="up" delay={0.2} className="text-base sm:text-lg text-text-muted leading-relaxed space-y-4 font-light">
                <p>
                  Conté Films was established to bridge the gap between commoditized videography and high-budget agency production. We believe exceptional work deserves to be presented with restraint, elegance, and technical authority.
                </p>
                <p>
                  Based in Buckhead and serving Metro Atlanta, we bring a decade of experience across corporate brand stories, luxury architectural media, and high-profile live events.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal direction="left">
                <div className="relative aspect-portrait-editorial rounded-2xl overflow-hidden border border-border-medium bg-bg-surface p-8 flex flex-col justify-between shadow-2xl">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono tracking-widest text-accent-bronze uppercase">
                      Studio Founder
                    </span>
                    <h3 className="text-3xl font-serif font-bold text-text-primary">
                      Stefan Jobe
                    </h3>
                    <p className="text-xs text-text-muted">
                      Executive Creative Director & Director of Photography
                    </p>
                  </div>

                  <div className="space-y-3 pt-8 border-t border-border-subtle">
                    <p className="text-xs text-text-muted italic leading-relaxed">
                      &ldquo;Every project we take on is an opportunity to elevate how our clients are perceived by their most valuable audiences.&rdquo;
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Approach Pillars */}
      <section className="py-24 bg-bg-surface border-y border-border-subtle transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent-bronze">
              Visual Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-text-primary tracking-tight">
              Three pillars that guide every production.
            </h2>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <StaggerItem key={idx}>
                <div className="p-8 rounded-xl bg-bg-primary border border-border-medium hover:border-accent-bronze/40 transition-colors h-full flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-xl font-serif font-bold text-accent-bronze">
                      0{idx + 1}.
                    </span>
                    <h3 className="text-xl font-serif font-semibold text-text-primary mt-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-text-muted mt-3 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Selected Proof Points */}
      <section className="py-24 bg-bg-primary transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <Reveal direction="up" className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent-bronze">
              Verified Experience
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-text-primary tracking-tight">
              A track record of excellence in Metro Atlanta & beyond.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl bg-bg-surface border border-border-subtle space-y-3">
              <Award className="w-6 h-6 text-accent-bronze" />
              <h4 className="text-lg font-serif font-semibold text-text-primary">10 Years Experience</h4>
              <p className="text-xs text-text-muted leading-relaxed">
                Decade of professional production across fashion, healthcare, real estate, and corporate commercial work.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-bg-surface border border-border-subtle space-y-3">
              <ShieldCheck className="w-6 h-6 text-accent-bronze" />
              <h4 className="text-lg font-serif font-semibold text-text-primary">FAA Part 107 Certified</h4>
              <p className="text-xs text-text-muted leading-relaxed">
                Fully licensed and insured remote drone pilots for aerial videography and architectural photography.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-bg-surface border border-border-subtle space-y-3">
              <Users className="w-6 h-6 text-accent-bronze" />
              <h4 className="text-lg font-serif font-semibold text-text-primary">Scalable Crewing</h4>
              <p className="text-xs text-text-muted leading-relaxed">
                Ability to deploy lean solo operators or full production crews of up to 10 specialists.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-bg-surface border border-border-subtle space-y-3">
              <Compass className="w-6 h-6 text-accent-bronze" />
              <h4 className="text-lg font-serif font-semibold text-text-primary">Buckhead Business Assoc.</h4>
              <p className="text-xs text-text-muted leading-relaxed">
                Active member of the Buckhead business and creative community in Atlanta, GA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-24 bg-bg-surface border-t border-border-subtle transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <Reveal direction="up" className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent-bronze">
              Capabilities Breakdown
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-text-primary tracking-tight">
              Full-service visual production from concept to final master.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-bg-primary border border-border-subtle space-y-2">
                <h4 className="text-lg font-serif font-semibold text-text-primary">{cap.title}</h4>
                <p className="text-xs text-text-muted leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
