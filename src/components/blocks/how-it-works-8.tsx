"use client";

import type { ReactNode } from "react";
import { Check, Clapperboard, MoveRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export interface HowItWorks8Step {
  title: string;
  copy: string;
  visual: () => ReactNode;
}

export interface HowItWorks8Props {
  eyebrow?: string;
  headline: string;
  description?: string;
  steps: HowItWorks8Step[];
  className?: string;
  id?: string;
}

function DiscoveryVisual() {
  const cues = [
    { code: "SP", name: "Spatial harmony", meta: "Framing" },
    { code: "EM", name: "Human emotion", meta: "Interview" },
    { code: "TX", name: "Material texture", meta: "Detail" },
  ];

  return (
    <div className="flex h-full flex-col justify-center gap-2.5">
      {cues.map((cue) => (
        <div
          key={cue.code}
          className="flex items-center gap-3 rounded-xl border border-border-medium bg-bg-primary px-3.5 py-2.5"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-bronze/15 font-mono text-[10px] font-semibold tracking-wide text-accent-bronze">
            {cue.code}
          </span>
          <span className="min-w-0 flex-1 truncate text-sm">
            <span className="font-medium text-text-primary">{cue.name}</span>
            <span className="text-text-muted"> · {cue.meta}</span>
          </span>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-bg-surface px-2.5 py-1 text-[11px] font-medium text-text-muted">
            <Check className="h-3 w-3 text-accent-bronze" />
            Noted
          </span>
        </div>
      ))}
    </div>
  );
}

function PlanningVisual() {
  const shots = [
    ["01", "Wide establishing"],
    ["02", "Tracking interior"],
    ["03", "Twilight exterior"],
  ];

  return (
    <div className="flex h-full flex-col justify-center gap-2.5">
      {shots.map(([num, label]) => (
        <div
          key={num}
          className="grid grid-cols-[auto_1fr_auto] items-center gap-2"
        >
          <span className="rounded-lg border border-border-medium bg-bg-primary px-2.5 py-2 font-mono text-xs text-accent-bronze">
            {num}
          </span>
          <span className="truncate rounded-lg border border-border-medium bg-bg-primary px-2.5 py-2 text-xs text-text-primary">
            {label}
          </span>
          <MoveRight className="h-3.5 w-3.5 text-text-muted" />
        </div>
      ))}
    </div>
  );
}

function ExecuteVisual() {
  const reduce = useReducedMotion();
  const stats = [
    ["Crew", "Up to 10"],
    ["Capture", "4K cinema"],
    ["Aerial", "Drone ready"],
  ];

  return (
    <div className="flex h-full flex-col justify-center gap-3">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium text-text-primary">
          <Clapperboard className="h-3.5 w-3.5 text-accent-bronze" strokeWidth={1.75} />
          Production day
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-bg-primary px-2.5 py-1 text-[11px] font-medium text-text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-bronze" />
          On set
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-border-subtle">
        <motion.div
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 1.15, ease: EASE }}
          className="h-full origin-left rounded-full bg-accent-gradient"
        />
      </div>
      <dl className="flex flex-col gap-1.5">
        {stats.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between text-xs">
            <dt className="text-text-muted">{label}</dt>
            <dd className="font-mono text-text-primary">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export const howItWorks8Visuals = {
  discovery: DiscoveryVisual,
  planning: PlanningVisual,
  execute: ExecuteVisual,
};

export default function HowItWorks8({
  eyebrow,
  headline,
  description,
  steps,
  className,
  id,
}: HowItWorks8Props) {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: EASE },
    },
  };

  return (
    <section
      id={id}
      aria-labelledby="hiw8-heading"
      className={cn(
        "w-full border-y border-border-subtle bg-bg-surface px-4 py-16 transition-colors sm:px-6 sm:py-20 lg:px-8 lg:py-24",
        className
      )}
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          {eyebrow ? (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent-bronze">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id="hiw8-heading"
            className="font-serif text-3xl font-medium leading-[1.1] tracking-tight text-balance text-text-primary sm:text-4xl lg:text-5xl"
          >
            {headline}
          </h2>
          {description ? (
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
              {description}
            </p>
          ) : null}
        </motion.div>

        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid list-none grid-cols-1 gap-12 sm:mt-16 lg:mt-20 lg:grid-cols-3 lg:gap-x-12"
        >
          {steps.map((step, index) => {
            const Visual = step.visual;
            const segment =
              index === 0
                ? "left-0 -right-6"
                : index === steps.length - 1
                  ? "-left-6 right-0"
                  : "-left-6 -right-6";
            return (
              <motion.li
                key={step.title}
                variants={item}
                className="border-t border-border-subtle pt-10 first:border-t-0 first:pt-0 lg:border-t-0 lg:pt-0"
              >
                <div
                  aria-hidden="true"
                  className="rounded-2xl border border-border-medium bg-bg-primary p-4 lg:h-56"
                >
                  <Visual />
                </div>
                <div className="relative mt-8 flex h-10 items-center">
                  <div
                    aria-hidden="true"
                    className={cn(
                      "absolute top-1/2 hidden h-px -translate-y-1/2 bg-border-subtle lg:block",
                      segment
                    )}
                  />
                  <motion.div
                    aria-hidden="true"
                    initial={reduce ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.35,
                      delay: 0.3 + index * 0.35,
                      ease: "linear",
                    }}
                    className={cn(
                      "absolute top-1/2 hidden h-px origin-left -translate-y-1/2 bg-accent-bronze lg:block",
                      segment
                    )}
                  />
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-accent-gradient font-mono text-sm font-medium text-accent-fg">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold tracking-tight text-balance text-text-primary sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-text-muted sm:text-[15px]">
                  {step.copy}
                </p>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}
