"use client";

import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export interface Features1Item {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Features1Props {
  eyebrow?: string;
  headline: string;
  description?: string;
  items: Features1Item[];
  className?: string;
  id?: string;
}

export default function Features1({
  eyebrow,
  headline,
  description,
  items,
  className,
  id,
}: Features1Props) {
  const reduce = useReducedMotion();

  return (
    <section
      id={id}
      className={cn(
        "w-full bg-bg-surface px-4 py-16 transition-colors sm:px-6 lg:px-8 lg:py-24",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl md:mb-16 lg:mb-20">
          {eyebrow ? (
            <motion.p
              initial={{ opacity: 0, y: reduce ? 0 : 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent-bronze"
            >
              {eyebrow}
            </motion.p>
          ) : null}

          <motion.h2
            initial={{ opacity: 0, y: reduce ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mb-6 font-serif text-3xl font-medium tracking-tight text-text-primary sm:text-4xl md:text-5xl"
          >
            {headline}
          </motion.h2>

          {description ? (
            <motion.p
              initial={{ opacity: 0, y: reduce ? 0 : 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="max-w-xl text-base leading-relaxed text-text-muted sm:text-lg"
            >
              {description}
            </motion.p>
          ) : null}
        </div>

        <div
          className={cn(
            "grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:gap-x-8 md:gap-y-12",
            items.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4"
          )}
        >
          {items.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: reduce ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-medium bg-bg-primary shadow-sm sm:h-12 sm:w-12">
                    <Icon
                      className="h-5 w-5 text-accent-bronze sm:h-6 sm:w-6"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-base font-medium tracking-tight text-text-primary">
                    {feature.title}
                  </h3>
                </div>
                <p className="max-w-[28ch] text-sm leading-relaxed text-text-muted sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
