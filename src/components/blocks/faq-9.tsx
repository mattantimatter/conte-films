"use client";

import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface FAQ9Item {
  question: string;
  answer: string;
}

export interface FAQ9Stat {
  value: string;
  label: string;
}

export interface FAQ9Props {
  headline?: string;
  description?: string;
  faqs: FAQ9Item[];
  stats?: FAQ9Stat[];
  ctaLabel?: string;
  ctaHref?: string;
  ctaNote?: string;
  className?: string;
  id?: string;
}

export default function FAQ9({
  headline = "Questions that need a human?",
  description = "The answers here cover the basics. For scoping, timelines, or creative direction, send us the context — a real person replies.",
  faqs,
  stats = [
    { value: "24h", label: "Typical response" },
    { value: "10+", label: "Years producing" },
  ],
  ctaLabel = "Start a Project",
  ctaHref = "/contact",
  ctaNote = "Weekdays, Metro Atlanta & traveling worldwide.",
  className,
  id,
}: FAQ9Props) {
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState(0);
  const mid = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, mid), faqs.slice(mid)];

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id={id}
      className={cn(
        "w-full bg-bg-primary px-4 py-16 transition-colors sm:px-6 sm:py-20 lg:px-8 lg:py-24",
        className
      )}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12">
          <motion.aside
            initial={{ opacity: 0, y: reduce ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between gap-12 rounded-3xl bg-neutral-950 p-7 ring-1 ring-border-subtle sm:p-10 lg:sticky lg:top-24 lg:self-start"
          >
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent-bronze">
                FAQ
              </p>
              <h2 className="font-serif text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                {headline}
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/60">
                {description}
              </p>
            </div>
            <div>
              <div className="grid grid-cols-2 divide-x divide-white/10">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={cn("py-5", index === 0 ? "pr-6" : "pl-6")}
                  >
                    <p className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-white/55">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Button
                href={ctaHref}
                size="lg"
                className="mt-8 w-full sm:w-auto"
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                {ctaLabel}
              </Button>
              <p className="mt-4 text-sm text-white/45">{ctaNote}</p>
            </div>
          </motion.aside>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2"
          >
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-4">
                {column.map((faq, indexInColumn) => {
                  const index =
                    columns
                      .slice(0, columnIndex)
                      .reduce((sum, col) => sum + col.length, 0) + indexInColumn;
                  const isOpen = openIndex === index;
                  return (
                    <motion.div
                      key={faq.question}
                      variants={item}
                      className={cn(
                        "rounded-2xl border transition-colors duration-200",
                        isOpen
                          ? "border-accent-bronze/40 bg-bg-surface"
                          : "border-border-subtle bg-bg-surface/60 hover:border-border-medium"
                      )}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`faq9-answer-${index}`}
                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                        className="group flex w-full cursor-pointer items-start justify-between gap-4 rounded-2xl p-5 text-left focus-ring sm:p-6"
                      >
                        <span className="flex-1 text-base font-medium leading-snug text-text-primary">
                          {faq.question}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="mt-0.5 shrink-0 text-text-muted transition-colors duration-200 group-hover:text-accent-bronze"
                        >
                          <Plus className="h-4 w-4" />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`faq9-answer-${index}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              height: {
                                duration: 0.4,
                                ease: [0.22, 1, 0.36, 1],
                              },
                              opacity: {
                                duration: 0.3,
                                ease: [0.22, 1, 0.36, 1],
                              },
                            }}
                            className="overflow-hidden"
                          >
                            <p className="px-5 pb-5 text-sm leading-relaxed text-text-muted sm:px-6 sm:pb-6">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
