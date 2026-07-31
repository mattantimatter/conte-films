import React from "react";
import { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTASection } from "@/components/CTASection";
import { AboutPhilosophy } from "@/components/AboutPhilosophy";
import { AboutExperience } from "@/components/AboutExperience";
import { AboutCapabilities } from "@/components/AboutCapabilities";

export const metadata: Metadata = {
  title: "About Conté Films | Atlanta Visual Production Studio",
  description:
    "Learn about Conté Films and founder Stefan Jobe. Over a decade of professional cinematography, luxury real estate photography, and FAA drone production in Atlanta, GA.",
};

export default function AboutPage() {
  return (
    <div className="space-y-0">
      {/* Editorial Hero — full viewport */}
      <section className="relative flex min-h-screen items-center bg-bg-primary pb-16 pt-28 transition-colors sm:pb-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              <Reveal direction="up">
                <Eyebrow>The Conté Films Story</Eyebrow>
                <h1 className="mt-2 font-serif text-4xl font-medium leading-tight tracking-tight text-text-primary sm:text-6xl">
                  Founder-led visual craft with the scale of a commercial studio.
                </h1>
              </Reveal>

              <Reveal direction="up" delay={0.2} className="space-y-4 text-base font-light leading-relaxed text-text-muted sm:text-lg">
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
                <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-border-medium bg-bg-surface shadow-2xl lg:max-w-none">
                  <div className="relative aspect-[4/5] max-h-[min(48vh,22rem)] w-full overflow-hidden">
                    <img
                      src="/stefan-jobe.jpg"
                      alt="Stefan Jobe — Studio Founder, Conté Films"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-[14%] bg-gradient-to-t from-bg-surface to-transparent" />
                  </div>

                  <div className="space-y-3 p-5 sm:p-6">
                    <div className="space-y-1">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-accent-bronze">
                        Studio Founder
                      </span>
                      <h3 className="font-serif text-xl font-bold text-text-primary sm:text-2xl">
                        Stefan Jobe
                      </h3>
                      <p className="text-xs text-text-muted">
                        Founder and Executive Creative Director
                      </p>
                    </div>

                    <div className="border-t border-border-subtle pt-3">
                      <p className="text-xs italic leading-relaxed text-text-muted">
                        &ldquo;Every project we take on is an opportunity to elevate how our clients are perceived by their most valuable audiences.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <AboutPhilosophy />

      <AboutExperience />

      <AboutCapabilities />

      <CTASection />
    </div>
  );
}
