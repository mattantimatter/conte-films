import React from "react";
import Image from "next/image";
import { Aperture, Clapperboard, Plane, Quote, Users } from "lucide-react";
import StaggeredText from "@/components/react-bits/staggered-text";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteContent } from "@/content/site";

const STATS = [
  {
    icon: Clapperboard,
    value: `${siteContent.experienceYears}+`,
    unit: "Years",
    label: "Professional production",
  },
  {
    icon: Plane,
    value: "Part 107",
    unit: "FAA",
    label: "Certified drone pilots",
  },
  {
    icon: Users,
    value: "Up to 10",
    unit: "Crew",
    label: "Production professionals",
  },
];

export function StudioIntro() {
  return (
    <section id="studio-intro" className="relative overflow-hidden bg-bg-primary py-24 transition-colors sm:py-32">
      {/* Ambient accent wash anchored behind the headline */}
      <div
        aria-hidden
        className="animate-accent-drift pointer-events-none absolute -left-40 top-1/4 h-[28rem] w-[28rem] rounded-full opacity-[0.07] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Editorial column */}
          <div className="lg:col-span-7">
            <Reveal direction="up">
              <Eyebrow icon={<Aperture className="h-3.5 w-3.5" />} rule className="max-w-md">
                Strategic Visual Craft
              </Eyebrow>
            </Reveal>

            <StaggeredText
              as="h2"
              text="We don’t just record footage. We identify what makes your work valuable."
              segmentBy="words"
              direction="bottom"
              delay={26}
              duration={0.7}
              className="mt-6 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] text-text-primary sm:text-5xl lg:text-[3.35rem]"
            />

            <Reveal direction="up" delay={0.2} className="mt-7 max-w-xl space-y-4 text-base leading-relaxed text-text-muted">
              <p>
                Most production vendors treat videography like a commodity. At Conté Films, every project is
                anchored in creative direction, organized pre-production, and precise visual pacing.
              </p>
              <p>
                Led by founder {siteContent.founder}, our studio combines a decade of commercial experience with
                international fashion work and FAA drone certification to elevate how enterprise organizations,
                luxury home builders, and brand leaders present themselves to the world.
              </p>
            </Reveal>

            {/* Credential stats */}
            <Reveal direction="up" delay={0.3} className="mt-10">
              <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle sm:grid-cols-3">
                {STATS.map(({ icon: Icon, value, unit, label }) => (
                  <div
                    key={label}
                    className="group/stat relative bg-bg-primary p-5 transition-colors duration-300 hover:bg-bg-surface"
                  >
                    <span
                      aria-hidden
                      className="rule-gradient-accent absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/stat:scale-x-100"
                    />
                    <div className="flex items-center gap-2 text-text-muted">
                      <Icon className="h-3.5 w-3.5 transition-colors duration-300 group-hover/stat:text-accent-bronze" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em]">{unit}</span>
                    </div>
                    <dt className="text-gradient-accent mt-2 font-display text-2xl font-semibold tracking-tight">
                      {value}
                    </dt>
                    <dd className="mt-1 text-xs leading-relaxed text-text-muted">{label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Founder card */}
          <div className="lg:col-span-5">
            <Reveal direction="left">
              <FounderCard />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderCard() {
  return (
    <figure className="accent-on-dark group/spot relative isolate overflow-hidden rounded-[1.75rem] bg-neutral-950 p-8 shadow-2xl sm:p-10">
      {/* Gradient hairline */}
      <span
        aria-hidden
        className="accent-hairline opacity-60 transition-opacity duration-500 group-hover/spot:opacity-100"
      />

      {/* Accent bloom */}
      <span
        aria-hidden
        className="animate-accent-drift pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-30 blur-[80px]"
      />

      <div className="relative flex min-h-[20rem] flex-col justify-between gap-8">
        <div className="flex items-start justify-between gap-4">
          <span className="bg-accent-gradient rounded-full px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-fg">
            Founder-Led Studio
          </span>
          <Quote className="h-6 w-6 shrink-0 text-white/25" aria-hidden />
        </div>

        <div>
          <p className="text-gradient-accent font-mono text-[10px] uppercase tracking-[0.28em]">
            Creative Direction
          </p>
          <blockquote className="mt-4 font-display text-[1.6rem] font-medium leading-[1.25] tracking-[-0.02em] text-white sm:text-[1.85rem]">
            “Production capabilities of a large studio with the intimacy of a partner.”
          </blockquote>
        </div>

        <figcaption className="border-t border-white/10 pt-6">
          <div className="flex items-center gap-4">
            <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-1 ring-white/20">
              <Image
                src="/stefan-jobe.jpg"
                alt={`${siteContent.founder}, founder and executive creative director of ${siteContent.name}`}
                fill
                sizes="48px"
                className="object-cover object-center"
              />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">{siteContent.founder}</p>
              <p className="truncate text-xs text-white/55">Founder and Executive Creative Director</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
            <span>Est. {siteContent.foundedYear}</span>
            <span aria-hidden className="h-3 w-px bg-white/15" />
            <span>
              {siteContent.location.city}, {siteContent.location.state}
            </span>
            <span aria-hidden className="h-3 w-px bg-white/15" />
            <span>FAA Part 107</span>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}
