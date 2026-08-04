"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export interface PricingPlan {
  name: string;
  badge?: string | null;
  tagline: string;
  price: string;
  pricePrefix?: string;
  priceNote?: string;
  meta: { label: string; value: string }[];
  cta: string;
  ctaHref?: string;
  lead: string;
  features: string[];
}

export interface Pricing13Props {
  headline?: string;
  description?: string;
  footnote?: string;
  detailFootnote?: string;
  plans: PricingPlan[];
  defaultActive?: number;
  className?: string;
  id?: string;
}

export default function Pricing13({
  headline = "Production packages for luxury residences.",
  description = "Pricing for homes up to 10,000 sq ft. Select a package to compare coverage, deliverables, and what’s included.",
  footnote = "Homes above 10,000 sq ft and multi-day productions are quoted separately.",
  detailFootnote = "Custom scopes available for builders, brokers, and architects.",
  plans,
  defaultActive = 0,
  className,
  id = "pricing",
}: Pricing13Props) {
  const [active, setActive] = useState(defaultActive);
  const reduceMotion = useReducedMotion();
  const plan = plans[Math.min(active, plans.length - 1)];
  const shift = reduceMotion ? 0 : 18;

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };
  const item = {
    hidden: { opacity: 0, y: shift },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  if (!plan) return null;

  return (
    <section
      id={id}
      className={cn(
        "w-full bg-bg-primary px-4 py-16 transition-colors sm:px-6 sm:py-20 lg:px-8 lg:py-24",
        className
      )}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="mx-auto w-full max-w-7xl"
      >
        <motion.div variants={item} className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            {headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">{description}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <div>
            <div className="space-y-3" role="group" aria-label="Select a package">
              {plans.map((option, index) => {
                const selected = active === index;
                return (
                  <motion.button
                    key={option.name}
                    variants={item}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActive(index)}
                    className={cn(
                      "relative w-full cursor-pointer rounded-2xl border p-5 text-left transition-colors duration-200 focus-ring",
                      selected
                        ? "border-transparent"
                        : "border-border-medium hover:border-accent-bronze/50"
                    )}
                  >
                    {selected && (
                      <motion.span
                        layoutId="pricing13-selected"
                        transition={{ duration: reduceMotion ? 0 : 0.35, ease: EASE }}
                        className="absolute -inset-px rounded-2xl bg-bg-surface ring-2 ring-inset ring-accent-bronze"
                      />
                    )}
                    <span className="relative z-10 flex items-start gap-4">
                      <span
                        className={cn(
                          "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition-colors duration-200",
                          selected ? "border-accent-bronze" : "border-border-medium"
                        )}
                      >
                        <motion.span
                          initial={false}
                          animate={{ scale: selected ? 1 : 0 }}
                          transition={{ duration: reduceMotion ? 0 : 0.2, ease: EASE }}
                          className="h-2.5 w-2.5 rounded-full bg-accent-bronze"
                        />
                      </span>
                      <span className="flex-1">
                        <span className="flex flex-wrap items-center gap-2">
                          <span className="text-base font-semibold text-text-primary">{option.name}</span>
                          {option.badge && (
                            <span className="rounded-full bg-accent-gradient px-2 py-0.5 text-[10px] font-semibold leading-none text-accent-fg">
                              {option.badge}
                            </span>
                          )}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-text-muted">
                          {option.tagline}
                        </span>
                      </span>
                      <span className="text-right">
                        {option.pricePrefix && (
                          <span className="block text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                            {option.pricePrefix}
                          </span>
                        )}
                        <span className="text-2xl font-semibold tracking-tight tabular-nums text-text-primary">
                          ${option.price}
                        </span>
                      </span>
                    </span>
                  </motion.button>
                );
              })}
            </div>
            {footnote && (
              <motion.p variants={item} className="mt-6 text-sm leading-relaxed text-text-muted">
                {footnote}
              </motion.p>
            )}
          </div>

          <motion.div
            variants={item}
            className="rounded-3xl border border-border-medium bg-bg-surface p-6 sm:p-8 lg:p-10"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
                transition={{ duration: reduceMotion ? 0 : 0.25, ease: EASE }}
              >
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-text-primary">
                    {plan.name}
                  </h3>
                  {plan.badge && (
                    <span className="rounded-full bg-accent-gradient px-2 py-0.5 text-[10px] font-semibold leading-none text-accent-fg">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{plan.tagline}</p>

                <div className="mt-6 flex flex-wrap items-baseline gap-2">
                  {plan.pricePrefix && (
                    <span className="text-sm font-medium uppercase tracking-wider text-text-muted">
                      {plan.pricePrefix}
                    </span>
                  )}
                  <span className="text-xl font-medium text-text-muted">$</span>
                  <span className="font-display text-5xl font-semibold tracking-tight tabular-nums text-text-primary sm:text-6xl">
                    {plan.price}
                  </span>
                  {plan.priceNote && (
                    <span className="ml-1 text-sm text-text-muted">{plan.priceNote}</span>
                  )}
                </div>

                <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-border-subtle py-5">
                  {plan.meta.map(({ label, value }) => (
                    <div key={label}>
                      <dt className="text-xs text-text-muted">{label}</dt>
                      <dd className="mt-1 text-sm font-medium text-text-primary">{value}</dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-8 text-sm font-medium text-text-primary">{plan.lead}</p>
                <ul className="mt-4 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-relaxed text-text-muted"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-bronze" />
                      <span className="text-text-primary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaHref ?? "/contact"}
                  className="mt-8 flex w-full cursor-pointer items-center justify-center rounded-full bg-accent-gradient px-8 py-3.5 text-sm font-medium text-accent-fg transition-opacity duration-200 hover:opacity-90 focus-ring"
                >
                  {plan.cta}
                </Link>
                {detailFootnote && (
                  <p className="mt-3 text-center text-xs text-text-muted">{detailFootnote}</p>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
