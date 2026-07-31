"use client";

import { type ReactNode, useState } from "react";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface Features9Item {
  key: string;
  label: string;
  Icon: LucideIcon;
  ctaTitle: string;
  buttonLabel: string;
  buttonHref?: string;
  blocks: { title: string; desc: string }[];
}

export interface Features9Props {
  eyebrow?: string;
  headline: ReactNode;
  items: Features9Item[];
  defaultActive?: string;
  className?: string;
  id?: string;
}

export default function Features9({
  eyebrow,
  headline,
  items,
  defaultActive,
  className,
  id,
}: Features9Props) {
  const reduce = useReducedMotion();
  const initial =
    defaultActive && items.some((item) => item.key === defaultActive)
      ? defaultActive
      : items[0]?.key ?? "";
  const [active, setActive] = useState(initial);
  const data = items.find((item) => item.key === active) ?? items[0];

  if (!data) return null;

  return (
    <section
      id={id}
      className={cn(
        "flex w-full items-start bg-bg-primary px-4 py-16 transition-colors sm:px-6 sm:py-20 lg:px-8 lg:py-24",
        className
      )}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          {eyebrow ? (
            <motion.p
              initial={{ opacity: 0, y: reduce ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-bronze"
            >
              {eyebrow}
            </motion.p>
          ) : null}
          <motion.h2
            initial={{ opacity: 0, y: reduce ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl font-medium leading-tight tracking-tight text-text-primary sm:text-5xl"
          >
            {headline}
          </motion.h2>
        </div>

        <div
          className={cn(
            "mt-10 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-14 sm:grid sm:gap-3 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden",
            items.length <= 5
              ? "sm:grid-cols-5"
              : "sm:grid-cols-3 lg:grid-cols-6"
          )}
        >
          {items.map((p) => {
            const isActive = active === p.key;
            const Icon = p.Icon;
            return (
              <button
                key={p.key}
                type="button"
                onClick={() => setActive(p.key)}
                className={cn(
                  "group relative flex shrink-0 cursor-pointer items-center justify-start gap-2 rounded-xl border px-3 py-2.5 text-center transition-colors sm:shrink sm:flex-col sm:justify-center sm:gap-4 sm:px-4 sm:py-8",
                  isActive
                    ? "border-border-medium bg-bg-surface shadow-sm"
                    : "border-transparent bg-bg-surface/60 hover:bg-bg-surface"
                )}
              >
                <div
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full sm:h-14 sm:w-14",
                    isActive ? "bg-accent-bronze/15" : "bg-bg-primary"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-3.5 w-3.5 sm:h-7 sm:w-7",
                      isActive
                        ? "text-accent-bronze"
                        : "text-text-muted"
                    )}
                    strokeWidth={1.5}
                  />
                </div>
                <span
                  className={cn(
                    "whitespace-nowrap text-xs font-medium sm:whitespace-normal sm:text-sm",
                    isActive ? "text-text-primary" : "text-text-muted"
                  )}
                >
                  {p.label}
                </span>
                {isActive ? (
                  <motion.div
                    layoutId="features9-accent"
                    className="pointer-events-none absolute inset-0 -z-10 rounded-xl"
                    style={{
                      background:
                        "radial-gradient(circle at 70% 40%, color-mix(in srgb, var(--accent-bronze) 22%, transparent), transparent 65%)",
                    }}
                  />
                ) : null}
              </button>
            );
          })}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: reduce ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-10 grid grid-cols-1 gap-8 border-t border-border-subtle pt-8 md:grid-cols-2 lg:gap-12"
        >
          <div className="flex flex-col gap-5">
            <h3 className="font-serif text-2xl font-medium leading-tight tracking-tight text-text-primary sm:text-3xl md:text-4xl">
              {data.ctaTitle}
            </h3>
            <Button
              href={data.buttonHref ?? "/contact"}
              size="md"
              className="self-start"
              icon={<ArrowUpRight className="h-3.5 w-3.5" />}
            >
              {data.buttonLabel}
            </Button>
          </div>
          <div className="flex flex-col gap-8">
            {data.blocks.map((b, i) => (
              <div key={i} className="flex flex-col gap-2">
                <h4 className="text-base font-semibold text-text-primary sm:text-lg">
                  {b.title}
                </h4>
                <p className="text-sm leading-relaxed text-text-muted sm:text-base">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
