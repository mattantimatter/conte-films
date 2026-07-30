import React from "react";
import Image from "next/image";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { HeroVideo } from "@/components/HeroVideo";
import { ClientStrip } from "@/components/ClientStrip";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { StudioIntro } from "@/components/home/StudioIntro";
import { SolutionsPreview } from "@/components/home/SolutionsPreview";
import StaggeredText from "@/components/react-bits/staggered-text";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { siteContent } from "@/content/site";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <HeroVideo />

        {/* Hero Text Content (Centered Floating Overlay) */}
        <div className="absolute inset-0 z-10 flex items-center justify-center p-4 sm:p-6 lg:p-8 pointer-events-none">
          <div className="accent-on-dark max-w-4xl text-center space-y-6 pointer-events-auto">
            <Reveal direction="up" delay={0.1}>
              {/* The pill and the gradient text have to be separate elements —
                  background-clip: text would otherwise clip the pill fill too. */}
              <span className="inline-flex items-center rounded-full bg-black/70 px-4 py-1.5 backdrop-blur-md border border-white/20 shadow-lg">
                <span className="text-gradient-accent text-xs font-mono font-semibold tracking-widest uppercase">
                  Atlanta Visual Production Studio
                </span>
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold text-white tracking-[-0.04em] leading-[1.05] drop-shadow-2xl">
                Films that make the work{" "}
                <span className="text-gradient-accent font-normal italic">impossible</span> to overlook.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow">
                Conté Films is a founder-led studio crafting cinematic photography, commercial video, and FAA-certified aerial media for brands, luxury real estate, and defining experiences.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                href="#featured-work"
                size="lg"
                className="w-full sm:w-auto"
                leadingIcon={<PlayCircle className="w-4 h-4" />}
              >
                View Our Work
              </Button>

              <Button
                href="/contact"
                variant="glass"
                size="lg"
                className="w-full sm:w-auto"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Start a Project
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Credibility Strip */}
      <ClientStrip />

      {/* 3. Studio Introduction */}
      <StudioIntro />

      {/* 4. Solutions Preview */}
      <SolutionsPreview />

      {/* 5. Featured Work Showcase */}
      <section
        id="featured-work"
        className="relative overflow-hidden bg-bg-primary py-24 transition-colors sm:py-32"
      >
        <div
          aria-hidden
          className="animate-accent-drift pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full opacity-[0.07] blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" className="mx-auto max-w-3xl text-center">
            <Eyebrow className="justify-center">Portfolio</Eyebrow>
            <StaggeredText
              as="h2"
              text="Selected Works & Case Studies"
              segmentBy="words"
              staggerDirection="center"
              delay={40}
              className="mt-5 justify-center text-center font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] text-text-primary sm:text-5xl"
            />
            <p className="mt-5 text-base text-text-muted">
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
      <section className="bg-bg-primary py-24 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <SpotlightCard className="bg-bg-surface" lift={false}>
              <div className="grid grid-cols-1 items-center gap-10 p-8 sm:p-12 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <div className="relative mx-auto aspect-[4/5] w-full max-w-[20rem] overflow-hidden rounded-xl border border-border-subtle bg-bg-elevated">
                    <Image
                      src="/stefan-jobe.jpg"
                      alt={`${siteContent.founder}, founder and director of ${siteContent.name}`}
                      fill
                      sizes="(min-width: 1024px) 320px, 80vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover/spot:scale-105"
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="font-display text-base font-semibold text-white">
                        {siteContent.founder}
                      </p>
                      <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                        Founder &amp; Director
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <Eyebrow rule>Founder-Led Commitment</Eyebrow>
                  <h3 className="mt-5 font-display text-2xl font-semibold leading-[1.18] tracking-[-0.03em] text-text-primary sm:text-4xl">
                    “When clients hire Conté, they get direct creative alignment with the founder.”
                  </h3>
                  <p className="mt-5 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
                    {siteContent.founder} brings over a decade of visual craft to every production,
                    balancing fashion editorial standards with reliable technical execution.
                  </p>
                  <Button
                    href="/about"
                    variant="secondary"
                    className="mt-8"
                    icon={<ArrowUpRight className="h-4 w-4" />}
                  >
                    Read the Conté story
                  </Button>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>

      {/* 9. Final CTA */}
      <CTASection />
    </div>
  );
}
