"use client";

import { useEffect, useRef, useState } from "react";
import {
  Image as ImageIcon,
  Plane,
  Video,
} from "lucide-react";
import StaggeredText from "@/components/react-bits/staggered-text";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

const PLAYBACK_ID = "5BUMdA7REN28y02fC6kW1yoy02DYeWeMrSFYjpSm3Mu02I";

const STREAM_URL =
  `https://stream.mux.com/${PLAYBACK_ID}.m3u8` +
  `?min_resolution=720p` +
  `&max_resolution=1080p` +
  `&rendition_order=desc`;

const POSTER_URL = `https://image.mux.com/${PLAYBACK_ID}/thumbnail.webp?time=0&width=1920`;

const STATS = [
  {
    icon: Video,
    value: "4K",
    unit: "Video",
    label: "Smooth tracking passes",
  },
  {
    icon: ImageIcon,
    value: "Print",
    unit: "Stills",
    label: "Publication-ready resolution",
  },
  {
    icon: Plane,
    value: "Full site",
    unit: "Drone",
    label: "Lot to roofline coverage",
  },
];

export function RealEstateAerial() {
  return (
    <section
      id="drone"
      className="relative overflow-hidden bg-bg-primary py-24 transition-colors sm:py-32"
    >
      <div
        aria-hidden
        className="animate-accent-drift pointer-events-none absolute -left-40 top-1/4 h-[28rem] w-[28rem] rounded-full opacity-[0.07] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal direction="up">
              <Eyebrow icon={<Plane className="h-3.5 w-3.5" />} rule className="max-w-md">
                Aerial Drone Production
              </Eyebrow>
            </Reveal>

            <StaggeredText
              as="h2"
              text="Cinematic drone photography & video"
              segmentBy="words"
              direction="bottom"
              delay={26}
              duration={0.7}
              className="mt-6 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] text-text-primary sm:text-5xl lg:text-[3.35rem]"
            />

            <Reveal
              direction="up"
              delay={0.2}
              className="mt-7 max-w-xl space-y-4 text-base leading-relaxed text-text-muted"
            >
              <p>
                Drone shots that reveal lot boundaries, neighborhood context, architectural
                rooflines, and twilight vistas — with the smooth tracking and framing of a
                cinema camera, not a hobby flight.
              </p>
              <p>
                All commercial missions are flown by FAA Part 107 certified pilots across Metro
                Atlanta’s controlled airspace and residential zones.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3} className="mt-10">
              <ul className="clip-rounded grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle sm:grid-cols-3">
                {STATS.map(({ icon: Icon, value, unit, label }, index) => (
                  <li
                    key={label}
                    className={cn(
                      "group/stat relative bg-bg-primary p-5 transition-colors duration-300 hover:bg-bg-surface",
                      index === 0 && "rounded-t-2xl sm:rounded-t-none sm:rounded-l-2xl",
                      index === STATS.length - 1 && "rounded-b-2xl sm:rounded-b-none sm:rounded-r-2xl"
                    )}
                  >
                    <span
                      aria-hidden
                      className="rule-gradient-accent absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/stat:scale-x-100"
                    />
                    <div className="flex items-center gap-2 text-text-muted">
                      <Icon className="h-3.5 w-3.5 transition-colors duration-300 group-hover/stat:text-accent-bronze" aria-hidden />
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em]">{unit}</span>
                    </div>
                    <p className="text-gradient-accent mt-2 font-display text-2xl font-semibold tracking-tight">
                      {value}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-text-muted">{label}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal direction="left">
              <AerialVideoCard />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function AerialVideoCard() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    const startPlay = () => video.play().catch(() => {});
    const onPlaying = () => window.setTimeout(() => setPlaying(true), 500);
    video.addEventListener("playing", onPlaying);

    async function initHls() {
      if (video && video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = STREAM_URL;
        video.addEventListener("loadedmetadata", startPlay, { once: true });
        startPlay();
        return;
      }

      const { default: Hls } = await import("hls.js");
      if (!Hls.isSupported() || !video) return;

      const hls = new Hls({
        capLevelToPlayerSize: false,
        abrEwmaDefaultEstimate: 50_000_000,
        maxBufferLength: 60,
        maxMaxBufferLength: 120,
      });

      hls.loadSource(STREAM_URL);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        hls.startLevel = 0;
        hls.loadLevel = 0;
        hls.currentLevel = 0;
        startPlay();
      });

      return () => hls.destroy();
    }

    const cleanup = initHls();
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startPlay();
        else video.pause();
      },
      { threshold: 0.25 }
    );
    observer.observe(video);

    return () => {
      video.removeEventListener("playing", onPlaying);
      observer.disconnect();
      cleanup?.then((fn) => fn?.());
    };
  }, []);

  return (
    <figure className="accent-on-dark group/spot relative isolate clip-rounded overflow-hidden rounded-[1.75rem] bg-neutral-950 shadow-2xl">
      <span
        aria-hidden
        className="accent-hairline rounded-[1.75rem] opacity-60 transition-opacity duration-500 group-hover/spot:opacity-100"
      />

      <div className="relative aspect-video">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={POSTER_URL}
          alt=""
          aria-hidden
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            playing ? "opacity-0" : "opacity-100"
          )}
        />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            playing ? "opacity-100" : "opacity-0"
          )}
        >
          <track kind="captions" src="/captions/ambient.vtt" srcLang="en" label="English" />
        </video>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/35" />

        <div className="absolute left-5 top-5 z-10 sm:left-6 sm:top-6">
          <span className="bg-accent-gradient rounded-full px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-fg">
            Aerial Reel
          </span>
        </div>

        <figcaption className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
          <p className="text-gradient-accent font-mono text-[10px] uppercase tracking-[0.28em]">
            Aerial Cinema
          </p>
          <p className="mt-2 font-display text-lg font-medium tracking-tight text-white sm:text-xl">
            Drone shots across Metro Atlanta
          </p>
        </figcaption>
      </div>
    </figure>
  );
}
