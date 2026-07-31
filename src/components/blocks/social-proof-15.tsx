"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SocialProofStory {
  quote: string;
  name: string;
  role: string;
  metric: string;
  avatar?: string;
}

const ROTATE_MS = 6000;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function InitialsAvatar({ name, className }: { name: string; className?: string }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-accent-soft font-mono text-xs font-semibold uppercase tracking-wider text-accent-bronze",
        className
      )}
    >
      {initials}
    </span>
  );
}

function StoryAvatar({
  name,
  avatar,
  className,
}: {
  name: string;
  avatar?: string;
  className?: string;
}) {
  if (avatar) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={avatar} alt="" className={cn("rounded-full object-cover", className)} />;
  }

  return <InitialsAvatar name={name} className={className} />;
}

export interface SocialProof15Props {
  stories: SocialProofStory[];
  headline?: string;
  className?: string;
  id?: string;
}

export default function SocialProof15({
  stories,
  headline = "Better heard in their own words.",
  className,
  id = "testimonials",
}: SocialProof15Props) {
  const shouldReduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const pausedRef = useRef(false);

  const safeStories = stories.length > 0 ? stories : [];
  const story = safeStories[Math.min(active, Math.max(safeStories.length - 1, 0))];

  useEffect(() => {
    setActive(0);
    setProgress(0);
  }, [stories]);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    if (shouldReduceMotion || safeStories.length < 2) return;
    let raf = 0;
    let elapsed = 0;
    let last = performance.now();
    const loop = (now: number) => {
      const delta = now - last;
      last = now;
      if (!pausedRef.current) {
        elapsed += delta;
        const value = Math.min(elapsed / ROTATE_MS, 1);
        if (value >= 1) {
          setProgress(0);
          setActive((current) => (current + 1) % safeStories.length);
          return;
        }
        setProgress(value);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [active, shouldReduceMotion, safeStories.length]);

  if (!story) return null;

  const previous = () => {
    setProgress(0);
    setActive((current) => (current - 1 + safeStories.length) % safeStories.length);
  };
  const next = () => {
    setProgress(0);
    setActive((current) => (current + 1) % safeStories.length);
  };

  return (
    <section
      id={id}
      className={cn(
        "w-full bg-bg-surface px-4 py-16 transition-colors sm:px-6 sm:py-20 lg:px-8 lg:py-24",
        className
      )}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto w-full max-w-7xl"
      >
        <motion.div
          variants={item}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <h2 className="max-w-2xl text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              {headline}
            </h2>
          </div>
          {safeStories.length > 1 && (
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous story"
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-border-medium text-text-primary transition-colors hover:border-accent-bronze hover:text-accent-bronze focus-ring"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next story"
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-accent-gradient text-accent-fg transition-opacity hover:opacity-90 focus-ring"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </motion.div>

        <motion.div variants={item} className="mt-10 lg:mt-12" aria-hidden />

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          className="mt-10 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-12 lg:gap-16"
        >
          <motion.div variants={item} className="lg:col-span-7 xl:col-span-8">
            <span
              aria-hidden="true"
              className="block font-serif text-6xl leading-none text-accent-bronze/25 sm:text-7xl"
            >
              &ldquo;
            </span>
            <div className="relative mt-2 min-h-[280px] overflow-hidden sm:min-h-[340px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.figure
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <blockquote className="max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight text-text-primary sm:text-3xl lg:text-4xl">
                    {story.quote}
                  </blockquote>
                  <figcaption className="mt-8">
                    <div className="flex items-center gap-4">
                      <StoryAvatar name={story.name} avatar={story.avatar} className="h-12 w-12" />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-text-primary">{story.name}</p>
                        <p className="text-sm text-text-muted">{story.role}</p>
                        {story.metric && (
                          <p className="mt-2 text-xs font-medium leading-relaxed text-accent-bronze">
                            {story.metric}
                          </p>
                        )}
                      </div>
                    </div>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div variants={item} className="flex flex-col lg:col-span-5 xl:col-span-4">
            {safeStories.map((entry, index) => {
              const isActive = index === active;
              return (
                <button
                  key={`${entry.name}-${index}`}
                  type="button"
                  onClick={() => {
                    setProgress(0);
                    setActive(index);
                  }}
                  aria-pressed={isActive}
                  aria-label={`Show story from ${entry.name}`}
                  className="group cursor-pointer rounded-xl py-5 text-left focus-ring"
                >
                  <span className="flex items-center gap-4">
                    <StoryAvatar name={entry.name} avatar={entry.avatar} className="h-11 w-11" />
                    <span className="min-w-0 flex-1">
                      <span
                        className={cn(
                          "block text-sm font-semibold transition-colors",
                          isActive
                            ? "text-text-primary"
                            : "text-text-muted group-hover:text-text-primary"
                        )}
                      >
                        {entry.name}
                      </span>
                      <span
                        className={cn(
                          "block text-xs transition-colors",
                          isActive ? "text-text-muted" : "text-text-muted/70"
                        )}
                      >
                        {entry.role}
                      </span>
                    </span>
                  </span>
                  <span className="mt-5 block h-px overflow-hidden rounded-full bg-border-subtle">
                    <span
                      className="block h-full w-full origin-left bg-accent-gradient"
                      style={{
                        transform: `scaleX(${isActive ? (shouldReduceMotion ? 1 : progress) : 0})`,
                      }}
                    />
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
