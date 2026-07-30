import React from "react";
import { ArrowUpRight, Phone, Calendar } from "lucide-react";
import { siteContent } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function CTASection({
  headline = "Your next project deserves to be seen differently.",
  subheadline = "Whether launching a luxury custom build, producing corporate brand media, or capturing a defining event, let’s create something remarkable.",
}: {
  headline?: string;
  subheadline?: string;
}) {
  return (
    <section className="relative py-28 overflow-hidden bg-bg-surface border-t border-border-subtle transition-colors">
      {/* Subtle Background Glow */}
      <div
        aria-hidden
        className="animate-accent-drift pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.09] blur-[130px]"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <Reveal direction="up" className="space-y-5">
          <Eyebrow className="justify-center">Ready to Begin?</Eyebrow>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-text-primary max-w-4xl mx-auto leading-[1.05]">
            {headline}
          </h2>
          <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            {subheadline}
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button href="/contact" size="lg" className="w-full sm:w-auto" icon={<ArrowUpRight className="w-4 h-4" />}>
            Start a Project
          </Button>

          <Button
            href={siteContent.contact.bookingUrl}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
            leadingIcon={<Calendar className="w-4 h-4 text-accent-bronze" />}
          >
            Book a Discovery Call
          </Button>
        </Reveal>

        <Reveal direction="up" delay={0.3} className="pt-6 text-xs text-text-muted flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-accent-bronze" />
            Direct: {siteContent.contact.phoneFormatted}
          </span>
          <span>•</span>
          <span>Response within 24 business hours</span>
          <span>•</span>
          <span>Metro Atlanta & Traveling Worldwide</span>
        </Reveal>
      </div>
    </section>
  );
}
