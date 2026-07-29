import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, Calendar } from "lucide-react";
import { siteContent } from "@/content/site";
import { Reveal } from "@/components/Reveal";

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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-bronze/10 via-transparent to-transparent opacity-60 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <Reveal direction="up" className="space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-accent-bronze">
            Ready to Begin?
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-text-primary max-w-4xl mx-auto leading-tight">
            {headline}
          </h2>
          <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            {subheadline}
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent-bronze text-white font-semibold text-xs uppercase tracking-widest hover:bg-accent-bronze-hover transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2 focus-ring"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href={siteContent.contact.bookingUrl}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-bg-elevated text-text-primary border border-border-medium hover:border-accent-bronze transition-all flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest focus-ring"
          >
            <Calendar className="w-4 h-4 text-accent-bronze" />
            <span>Book a Discovery Call</span>
          </a>
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
