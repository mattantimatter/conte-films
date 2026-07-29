import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle, ShieldCheck, Film, Building2, Home as HomeIcon, Calendar } from "lucide-react";
import { HeroVideo } from "@/components/HeroVideo";
import { ClientStrip } from "@/components/ClientStrip";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { siteContent } from "@/content/site";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <HeroVideo />

        {/* Hero Text Content (Centered Floating Overlay) */}
        <div className="absolute inset-0 z-10 flex items-center justify-center p-4 sm:p-6 lg:p-8 pointer-events-none">
          <div className="max-w-4xl text-center space-y-6 pointer-events-auto">
            <Reveal direction="up" delay={0.1}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-accent-bronze text-xs font-mono font-semibold tracking-widest uppercase shadow-lg">
                Atlanta Visual Production Studio
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white tracking-tight leading-[1.1] drop-shadow-2xl">
                Films that make the work <span className="italic font-light text-accent-bronze">impossible</span> to overlook.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow">
                Conté Films is a founder-led studio crafting cinematic photography, commercial video, and FAA-certified aerial media for brands, luxury real estate, and defining experiences.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#featured-work"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent-bronze text-white font-semibold text-xs uppercase tracking-widest hover:bg-accent-bronze-hover transition-all transform hover:-translate-y-0.5 shadow-xl flex items-center justify-center gap-2 focus-ring"
              >
                <span>View Our Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/30 hover:border-white transition-all flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest focus-ring"
              >
                <span>Start a Project</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Credibility Strip */}
      <ClientStrip />

      {/* 3. Studio Introduction (Editorial Offset) */}
      <section className="py-24 bg-bg-primary transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Reveal direction="up">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-bronze">
                  Strategic Visual Craft
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif font-medium text-text-primary tracking-tight leading-tight mt-2">
                  We don’t just record footage. We identify what makes your work valuable.
                </h2>
              </Reveal>

              <Reveal direction="up" delay={0.2} className="space-y-4 text-base text-text-muted leading-relaxed">
                <p>
                  Most production vendors treat videography like a commodity. At Conté Films, every project is anchored in creative direction, organized pre-production, and precise visual pacing.
                </p>
                <p>
                  Led by founder Stefan Jobe, our studio combines a decade of commercial experience with international fashion work and FAA drone certification to elevate how enterprise organizations, luxury home builders, and brand leaders present themselves to the world.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.3} className="pt-4 grid grid-cols-2 gap-4 border-t border-border-subtle">
                <div className="space-y-1">
                  <p className="text-2xl font-serif font-bold text-accent-bronze">10+ Years</p>
                  <p className="text-xs text-text-muted">Professional Production</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-serif font-bold text-accent-bronze">FAA Part 107</p>
                  <p className="text-xs text-text-muted">Certified Drone Pilots</p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal direction="left">
                <div className="relative aspect-portrait-editorial rounded-2xl overflow-hidden border border-border-medium bg-bg-surface p-8 flex flex-col justify-between shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent z-10" />
                  
                  <div className="relative z-20 flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full bg-accent-bronze text-white text-[10px] font-mono tracking-widest uppercase font-semibold">
                      Founder-Led Studio
                    </span>
                    <Film className="w-6 h-6 text-white/80" />
                  </div>

                  <div className="relative z-20 space-y-3">
                    <p className="text-xs uppercase tracking-widest text-accent-bronze font-mono">
                      Creative Direction
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-serif font-medium text-white">
                      “Production capabilities of a large studio with the intimacy of a partner.”
                    </h3>
                    <p className="text-xs text-white/70">
                      Stefan Jobe • Executive Creative Director
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Three Editorial Solutions Preview */}
      <section id="solutions" className="py-24 bg-bg-surface border-y border-border-subtle transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <Reveal direction="up" className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-bronze">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-text-primary tracking-tight">
              Bespoke visual solutions across three core markets.
            </h2>
          </Reveal>

          {/* Solution 1: Corporate */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-2xl bg-bg-primary border border-border-medium hover:border-accent-bronze/40 transition-colors">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-bronze">
                <Building2 className="w-4 h-4" />
                <span>01. Corporate & Brand Content</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif font-medium text-text-primary">
                Advance market authority with strategic brand documentary films.
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                We partner with mid-market companies, healthcare institutions, and brand leaders to produce executive thought leadership, authentic customer stories, and commercial media.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-medium text-text-primary">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-bronze" /> Brand Overview Films
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-bronze" /> Patient & Client Testimonials
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-bronze" /> Corporate Headshots
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-bronze" /> Social Campaign Cutdowns
                </span>
              </div>
              <div className="pt-2">
                <Link
                  href="/solutions/corporate"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-bronze hover:underline"
                >
                  <span>Explore Corporate Solutions</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 aspect-video sm:aspect-cinema rounded-xl overflow-hidden bg-bg-elevated border border-border-subtle flex items-center justify-center p-6 text-center">
              <p className="text-xs font-mono text-text-muted">Corporate Media Asset Placeholder</p>
            </div>
          </div>

          {/* Solution 2: Real Estate */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-2xl bg-bg-primary border border-border-medium hover:border-accent-bronze/40 transition-colors">
            <div className="lg:col-span-5 aspect-video sm:aspect-cinema rounded-xl overflow-hidden bg-bg-elevated border border-border-subtle flex items-center justify-center p-6 text-center order-2 lg:order-1">
              <p className="text-xs font-mono text-text-muted">Architectural Media Asset Placeholder</p>
            </div>
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-bronze">
                <HomeIcon className="w-4 h-4" />
                <span>02. Luxury Real Estate & Architecture</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif font-medium text-text-primary">
                Architectural cinema for bespoke residences & custom builders.
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Specialized visual production for custom home builders, architects, interior designers, and luxury brokers. Capturing twilight illumination, spatial continuity, and FAA drone aerial passes.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-medium text-text-primary">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-bronze" /> Architectural Walkthroughs
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-bronze" /> FAA Drone Aerial Media
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-bronze" /> Twilight Photography
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-bronze" /> Builder Brand Films
                </span>
              </div>
              <div className="pt-2">
                <Link
                  href="/solutions/real-estate"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-bronze hover:underline"
                >
                  <span>Explore Real Estate Solutions</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Solution 3: Events */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-2xl bg-bg-primary border border-border-medium hover:border-accent-bronze/40 transition-colors">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-bronze">
                <Calendar className="w-4 h-4" />
                <span>03. Events & Experiences</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif font-medium text-text-primary">
                Capture the energy and significance of defining events.
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Multi-camera keynote recording, gala coverage, and rapid-turnaround vertical highlight edits for conferences, brand activations, and nonprofit galas.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-medium text-text-primary">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-bronze" /> Multi-Cam Stage Recording
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-bronze" /> Rapid Social Cutdowns
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-bronze" /> On-Site Photography
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-bronze" /> Sponsor Visual Assets
                </span>
              </div>
              <div className="pt-2">
                <Link
                  href="/solutions/events"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-bronze hover:underline"
                >
                  <span>Explore Event Solutions</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 aspect-video sm:aspect-cinema rounded-xl overflow-hidden bg-bg-elevated border border-border-subtle flex items-center justify-center p-6 text-center">
              <p className="text-xs font-mono text-text-muted">Event Production Asset Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Work Showcase */}
      <section id="featured-work" className="py-24 bg-bg-primary transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Reveal direction="up" className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-bronze">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-text-primary tracking-tight">
              Selected Works & Case Studies
            </h2>
            <p className="text-base text-text-muted">
              Select any project to launch the interactive video presentation.
            </p>
          </Reveal>

          <ProjectGrid initialCategory="all" />
        </div>
      </section>

      {/* 6. Process Section */}
      <ProcessSection />

      {/* 7. Verified Client Testimonials */}
      <TestimonialSection />

      {/* 8. Founder Teaser */}
      <section className="py-24 bg-bg-primary transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-2xl bg-bg-surface border border-border-medium">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 aspect-square rounded-xl bg-bg-elevated border border-border-subtle flex items-center justify-center text-center p-6">
                <div>
                  <p className="text-lg font-serif font-bold text-text-primary">Stefan Jobe</p>
                  <p className="text-xs text-accent-bronze uppercase tracking-widest mt-1">Founder & Director</p>
                </div>
              </div>
              <div className="lg:col-span-8 space-y-6">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-accent-bronze">
                  Founder-Led Commitment
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif font-medium text-text-primary">
                  “When clients hire Conté, they get direct creative alignment with the founder.”
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Stefan Jobe brings over a decade of visual craft to every production, balancing fashion editorial standards with reliable technical execution.
                </p>
                <div>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-bg-elevated text-text-primary border border-border-medium hover:border-accent-bronze transition-colors text-xs font-semibold uppercase tracking-widest"
                  >
                    <span>Read The Conté Story</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <CTASection />
    </div>
  );
}
