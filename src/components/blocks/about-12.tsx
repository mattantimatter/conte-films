"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSkipScrollMotion } from "@/lib/use-skip-scroll-motion";

export interface About12Item {
  index: string;
  title: string;
  text: string;
  icon: LucideIcon;
}

export interface About12Props {
  eyebrow?: string;
  quote: string;
  attributionName: string;
  attributionRole: string;
  attributionImage?: string;
  description?: string;
  items: About12Item[];
  className?: string;
  id?: string;
}

export default function About12({
  eyebrow = "Who We Serve",
  quote,
  attributionName,
  attributionRole,
  attributionImage,
  description,
  items,
  className,
  id,
}: About12Props) {
  const reduce = useReducedMotion();
  const skip = useSkipScrollMotion() || Boolean(reduce);

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const item: Variants = {
    hidden: { opacity: skip ? 1 : 0, y: reduce ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id={id}
      className={cn(
        "flex w-full items-start bg-bg-surface px-4 py-16 transition-colors sm:px-6 sm:py-20 lg:items-center lg:px-8 lg:py-24",
        className
      )}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-24">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.p
                variants={item}
                className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-bronze"
              >
                {eyebrow}
              </motion.p>
              <motion.figure
                variants={item}
                className="mt-6 rounded-3xl bg-neutral-950 p-8 sm:p-10 dark:bg-white"
              >
                <blockquote className="text-balance font-display text-2xl font-semibold leading-[1.15] tracking-tight text-white dark:text-neutral-950 sm:text-3xl lg:text-4xl">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  {attributionImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={attributionImage}
                      alt=""
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-gradient text-xs font-semibold text-accent-fg"
                    >
                      {attributionName
                        .split(" ")
                        .slice(0, 2)
                        .map((part) => part[0])
                        .join("")}
                    </span>
                  )}
                  <span>
                    <span className="block text-sm font-medium text-white dark:text-neutral-950">
                      {attributionName}
                    </span>
                    <span className="block text-xs text-neutral-400 dark:text-neutral-600">
                      {attributionRole}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
              {description && (
                <motion.p
                  variants={item}
                  className="mt-8 max-w-md text-pretty text-base leading-relaxed text-text-muted sm:text-lg"
                >
                  {description}
                </motion.p>
              )}
            </motion.div>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="divide-y divide-border-subtle"
          >
            {items.map((value) => {
              const Icon = value.icon;
              return (
                <motion.article
                  key={value.index}
                  variants={item}
                  className="grid grid-cols-[3.5rem_1fr] gap-4 py-8 sm:grid-cols-[5rem_1fr] sm:gap-6 sm:py-10"
                >
                  <p className="pt-1 font-mono text-sm text-text-muted">{value.index}</p>
                  <div>
                    <div className="flex items-start justify-between gap-6">
                      <h3 className="font-display text-xl font-semibold tracking-tight text-text-primary sm:text-2xl">
                        {value.title}
                      </h3>
                      <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-medium bg-bg-primary text-accent-bronze">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                    </div>
                    <p className="mt-3 max-w-lg text-pretty text-base leading-relaxed text-text-muted">
                      {value.text}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
