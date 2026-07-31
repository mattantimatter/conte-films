"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export interface Features6Item {
  title: string;
  desc: string;
  icon: LucideIcon;
  blob?: string;
}

export interface Features6Props {
  eyebrow?: string;
  headline: ReactNode;
  items: Features6Item[];
  className?: string;
  id?: string;
}

const DEFAULT_BLOB = "rgba(215, 178, 120, 0.85)";

export default function Features6({
  eyebrow,
  headline,
  items,
  className,
  id,
}: Features6Props) {
  const reduce = useReducedMotion();

  return (
    <section
      id={id}
      className={cn(
        "flex w-full items-start bg-bg-primary px-4 py-16 transition-colors sm:px-6 sm:py-20 lg:px-8 lg:py-24",
        className
      )}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          {eyebrow ? (
            <motion.p
              initial={{ opacity: 0, y: reduce ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent-bronze"
            >
              {eyebrow}
            </motion.p>
          ) : null}
          <motion.h2
            initial={{ opacity: 0, y: reduce ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-serif text-3xl font-medium leading-[1.15] tracking-tight text-text-primary sm:text-4xl md:text-5xl"
          >
            {headline}
          </motion.h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Card
              key={item.title}
              item={item}
              index={i}
              blob={item.blob ?? DEFAULT_BLOB}
              reduce={!!reduce}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  item,
  index,
  blob,
  reduce,
}: {
  item: Features6Item;
  index: number;
  blob: string;
  reduce: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const Icon = item.icon;
  const words = item.desc.split(" ");
  const revealed = reduce || !canHover || hovered;

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: 0.05 * index }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl border border-border-subtle bg-bg-surface p-6 sm:min-h-[360px]"
    >
      <motion.div
        initial={false}
        animate={{ opacity: hovered ? 0.55 : 0, scale: hovered ? 1 : 0.75 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-64 rounded-full blur-md"
        style={{
          background: `radial-gradient(circle, ${blob} 0%, transparent 70%)`,
          x: "-50%",
        }}
      />

      <Icon className="relative h-5 w-5 text-accent-bronze" strokeWidth={1.5} />

      <p className="relative mt-3 max-w-[240px] text-xs leading-relaxed text-text-muted sm:text-sm">
        {words.map((w, wi) => (
          <motion.span
            key={`${w}-${wi}`}
            initial={false}
            animate={{
              opacity: revealed ? 1 : 0,
              y: revealed ? 0 : 4,
              filter: revealed ? "blur(0px)" : "blur(3px)",
            }}
            transition={{
              duration: 0.3,
              delay: revealed && canHover && !reduce ? wi * 0.03 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mr-[0.25em] inline-block"
          >
            {w}
          </motion.span>
        ))}
      </p>

      <div className="relative mt-auto flex items-center justify-between gap-3 pt-8">
        <span className="font-serif text-base font-semibold text-text-primary sm:text-lg">
          {item.title}
        </span>
        <motion.span
          initial={false}
          animate={{
            backgroundColor: hovered ? blob : "transparent",
            color: hovered ? "var(--accent-fg)" : "var(--text-muted)",
          }}
          transition={{ duration: 0.3 }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-medium"
        >
          <motion.span
            animate={{ x: hovered ? 2 : 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex"
          >
            <ArrowRight className="h-4 w-4" />
          </motion.span>
        </motion.span>
      </div>
    </motion.div>
  );
}
