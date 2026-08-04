"use client";

import { useEffect, useRef, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { useSkipScrollMotion } from "@/lib/use-skip-scroll-motion";

export interface Features3Item {
  icon: LucideIcon;
  title?: string;
  description: string;
}

export interface Features3Image {
  src: string;
  alt: string;
}

export interface Features3Props {
  eyebrow?: string;
  headline: ReactNode;
  description?: string;
  features: Features3Item[];
  images: Features3Image[];
  className?: string;
  id?: string;
}

export default function Features3({
  eyebrow,
  headline,
  description,
  features,
  images,
  className,
  id,
}: Features3Props) {
  const marquee1Ref = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const skip = useSkipScrollMotion() || Boolean(reduce);

  const columnA = images.filter((_, i) => i % 2 === 0);
  const columnB = images.filter((_, i) => i % 2 === 1);
  const loopA = [...columnA, ...columnA];
  const loopB = [...columnB, ...columnB];

  useEffect(() => {
    if (reduce) return;

    const marquee1 = marquee1Ref.current;
    const marquee2 = marquee2Ref.current;
    if (!marquee1 || !marquee2) return;

    const SPEED_PX_PER_SEC = 18; // shared visual speed for both columns
    let offset1 = 0;
    let offset2 = 0;
    let animationId = 0;
    let lastTime = performance.now();

    const halfHeight = (el: HTMLElement) => el.scrollHeight / 2;

    // Seed column B mid-loop so it scrolls the opposite direction from a different start
    offset2 = halfHeight(marquee2);

    const animate = (now: number) => {
      const delta = Math.min((now - lastTime) / 1000, 0.064);
      lastTime = now;

      const step = SPEED_PX_PER_SEC * delta;
      const half1 = halfHeight(marquee1);
      const half2 = halfHeight(marquee2);

      if (half1 > 0) {
        offset1 = (offset1 + step) % half1;
        marquee1.style.transform = `translateY(-${offset1}px)`;
      }

      if (half2 > 0) {
        offset2 -= step;
        if (offset2 <= 0) offset2 += half2;
        marquee2.style.transform = `translateY(-${offset2}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [reduce]);

  return (
    <section
      id={id}
      className={cn(
        "w-full bg-bg-primary px-4 py-16 transition-colors sm:px-6 sm:py-20 lg:px-8 lg:py-24",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-3 lg:gap-14">
          <div className="flex flex-col lg:col-span-2">
            <div className="mb-8 md:mb-12">
              {eyebrow ? (
                <motion.p
                  initial={skip ? false : {opacity: 0, y: reduce ? 0 : 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent-bronze"
                >
                  {eyebrow}
                </motion.p>
              ) : null}

              <motion.h2
                initial={skip ? false : {opacity: 0, y: reduce ? 0 : 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="mb-6 font-serif text-3xl font-medium tracking-tight text-text-primary sm:text-4xl md:text-5xl"
              >
                {headline}
              </motion.h2>

              {description ? (
                <motion.p
                  initial={skip ? false : {opacity: 0, y: reduce ? 0 : 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg"
                >
                  {description}
                </motion.p>
              ) : null}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title ?? feature.description}
                    initial={skip ? false : {opacity: 0, y: reduce ? 0 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-medium bg-bg-surface shadow-sm sm:h-12 sm:w-12">
                      <Icon
                        className="h-5 w-5 text-accent-bronze sm:h-6 sm:w-6"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      {feature.title ? (
                        <p className="mb-1 text-sm font-semibold text-text-primary sm:text-base">
                          {feature.title}
                        </p>
                      ) : null}
                      <p className="max-w-[28ch] text-sm leading-relaxed text-text-muted sm:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative h-[280px] sm:h-[360px] lg:col-span-1 lg:h-[640px]">
            <div className="relative grid h-full grid-cols-2 gap-3 overflow-hidden rounded-2xl sm:gap-4">
              <div className="pointer-events-none absolute inset-0 z-10">
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-bg-primary to-transparent sm:h-24" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-bg-primary to-transparent sm:h-24" />
              </div>

              <div className="relative overflow-hidden">
                <motion.div
                  initial={skip ? false : {opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  ref={marquee1Ref}
                  className="flex flex-col gap-3 sm:gap-4"
                >
                  {loopA.map((image, index) => (
                    <div
                      key={`a-${index}`}
                      className="aspect-square w-full overflow-hidden rounded-xl border border-border-subtle bg-bg-surface"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>

              <div className="relative overflow-hidden">
                <motion.div
                  initial={skip ? false : {opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  ref={marquee2Ref}
                  className="flex flex-col gap-3 sm:gap-4"
                  style={reduce ? undefined : { transform: "translateY(-50%)" }}
                >
                  {loopB.map((image, index) => (
                    <div
                      key={`b-${index}`}
                      className="aspect-square w-full overflow-hidden rounded-xl border border-border-subtle bg-bg-surface"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
