"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { ArrowUpRight, Camera, Check, Plane, Smartphone } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { buildRealEstateContactHref } from "@/lib/contact-prefill";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const SQFT_MIN = 3000;
const SQFT_MAX = 15000;
const SQFT_STEP = 500;

const VIDEO_PRICE = { min: 1999, max: 6999 };
const DRONE_PRICE = { min: 999, max: 1599 };
const PHOTO_PRICE = { min: 499, max: 1999 };
const SOCIAL_PRICE = { min: 399, max: 999 };

const BASE_FEATURES = [
  "Guided cinematic property walkthrough",
  "Interior & exterior ground coverage",
  "Color-graded 4K hero film",
  "Website-ready master delivery",
];

type AddonId = "drone" | "photo" | "social";

const ADDONS: {
  id: AddonId;
  name: string;
  tagline: string;
  badge?: string;
  icon: typeof Plane;
  features: string[];
  price: { min: number; max: number };
}[] = [
  {
    id: "drone",
    name: "Drone Coverage",
    tagline: "Aerial passes for lot scale, neighborhood context, and rooflines.",
    badge: "Most Popular",
    icon: Plane,
    price: DRONE_PRICE,
    features: [
      "Cinematic aerial video passes",
      "Lot, neighborhood, and roofline context",
      "Smooth drone tracking shots",
      "Integrated ground + aerial edit",
    ],
  },
  {
    id: "photo",
    name: "Photography Suite",
    tagline: "Twilight and daylight stills for listings, MLS, and marketing.",
    icon: Camera,
    price: PHOTO_PRICE,
    features: [
      "Twilight & daylight photo coverage",
      "Interior detail and lifestyle stills",
      "Publication-ready high-res exports",
      "MLS and marketing-ready bundles",
    ],
  },
  {
    id: "social",
    name: "Vertical Social Cuts",
    tagline: "Short-form 9:16 edits tailored for Reels, TikTok, and Stories.",
    icon: Smartphone,
    price: SOCIAL_PRICE,
    features: [
      "Multiple vertical cutdowns from the master",
      "Platform-native pacing and framing",
      "Caption-ready exports",
      "Ideal for broker and builder social channels",
    ],
  },
];

function priceForSqft(sqft: number, range: { min: number; max: number }) {
  const t = Math.min(1, Math.max(0, (sqft - SQFT_MIN) / (SQFT_MAX - SQFT_MIN)));
  return Math.round(range.min + t * (range.max - range.min));
}

function formatUsd(value: number) {
  return value.toLocaleString("en-US");
}

function formatSqft(value: number) {
  return value.toLocaleString("en-US");
}

export function RealEstatePricing() {
  const reduceMotion = useReducedMotion();
  const [sqft, setSqft] = useState(SQFT_MIN);
  const [addons, setAddons] = useState<Record<AddonId, boolean>>({
    drone: false,
    photo: false,
    social: false,
  });

  const videoPrice = priceForSqft(sqft, VIDEO_PRICE);
  const addonPrices = useMemo(
    () =>
      Object.fromEntries(
        ADDONS.map((addon) => [addon.id, priceForSqft(sqft, addon.price)])
      ) as Record<AddonId, number>,
    [sqft]
  );

  const selectedAddons = ADDONS.filter((addon) => addons[addon.id]);
  const addonsTotal = selectedAddons.reduce(
    (sum, addon) => sum + addonPrices[addon.id],
    0
  );
  const total = videoPrice + addonsTotal;

  const coverageParts = ["Ground video"];
  if (addons.drone) coverageParts.push("aerial");
  if (addons.photo) coverageParts.push("stills");
  if (addons.social) coverageParts.push("social");

  const meta = [
    { label: "Square footage", value: `${formatSqft(sqft)} sq ft` },
    { label: "Coverage", value: coverageParts.join(" + ") },
    {
      label: "Turnaround",
      value: addons.photo || addons.drone ? "10–14 days" : "7–10 days",
    },
  ];

  const includedFeatures = [
    ...BASE_FEATURES,
    ...selectedAddons.flatMap((addon) => addon.features),
    `Homes sized at ${formatSqft(sqft)} sq ft`,
  ];

  const contactHref = buildRealEstateContactHref({
    sqft,
    videoPrice,
    addons: Object.fromEntries(
      selectedAddons.map((addon) => [addon.id, addonPrices[addon.id]])
    ),
    total,
    coverage: coverageParts.join(" + "),
    turnaround: addons.photo || addons.drone ? "10–14 days" : "7–10 days",
  });

  const toggleAddon = (id: AddonId) => {
    setAddons((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const shift = reduceMotion ? 0 : 18;
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };
  const item = {
    hidden: { opacity: 0, y: shift },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  const sliderProgress = ((sqft - SQFT_MIN) / (SQFT_MAX - SQFT_MIN)) * 100;

  return (
    <section
      id="pricing"
      className="w-full bg-bg-primary px-4 py-16 transition-colors sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={container}
        className="mx-auto w-full max-w-7xl"
      >
        <motion.div variants={item} className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Property production packages.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
            Property video is included. Dial in square footage, then add drone coverage,
            photography, or vertical social cuts — pricing updates live.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <div className="space-y-3">
            {/* Square footage slider */}
            <motion.div
              variants={item}
              className="rounded-2xl border border-border-medium bg-bg-surface p-5 sm:p-6"
            >
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-bronze">
                    Property size
                  </p>
                  <p className="mt-1 font-display text-2xl font-semibold tracking-tight text-text-primary">
                    {formatSqft(sqft)}{" "}
                    <span className="text-base font-medium text-text-muted">sq ft</span>
                  </p>
                </div>
                <p className="text-xs text-text-muted">
                  {formatSqft(SQFT_MIN)} – {formatSqft(SQFT_MAX)} sq ft
                </p>
              </div>

              <label className="sr-only" htmlFor="property-sqft">
                Property square footage
              </label>
              <input
                id="property-sqft"
                type="range"
                min={SQFT_MIN}
                max={SQFT_MAX}
                step={SQFT_STEP}
                value={sqft}
                onChange={(event) => setSqft(Number(event.target.value))}
                className="pricing-sqft-slider mt-6 w-full cursor-pointer appearance-none bg-transparent"
                style={{ "--sqft-progress": `${sliderProgress}%` } as CSSProperties}
                aria-valuemin={SQFT_MIN}
                aria-valuemax={SQFT_MAX}
                aria-valuenow={sqft}
                aria-valuetext={`${formatSqft(sqft)} square feet`}
              />
              <div className="mt-2 flex justify-between text-[10px] font-mono uppercase tracking-[0.14em] text-text-muted">
                <span>{formatSqft(SQFT_MIN)}</span>
                <span>{formatSqft(SQFT_MAX)}</span>
              </div>
            </motion.div>

            {/* Base package — always selected */}
            <motion.div
              variants={item}
              className="relative w-full rounded-2xl border border-transparent p-5"
            >
              <span className="absolute -inset-px rounded-2xl bg-bg-surface ring-2 ring-inset ring-accent-bronze" />
              <span className="relative z-10 flex items-start gap-4">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 border-accent-bronze">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-bronze" />
                </span>
                <span className="flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="text-base font-semibold text-text-primary">
                      Property Video
                    </span>
                    <span className="rounded-full bg-accent-gradient px-2 py-0.5 text-[10px] font-semibold leading-none text-accent-fg">
                      Included
                    </span>
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-text-muted">
                    Cinematic architectural walkthrough sized to your property.
                  </span>
                </span>
                <span className="text-right">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                    Base
                  </span>
                  <span className="text-2xl font-semibold tracking-tight tabular-nums text-text-primary">
                    ${formatUsd(videoPrice)}
                  </span>
                </span>
              </span>
            </motion.div>

            {/* Add-ons */}
            <div role="group" aria-label="Select production add-ons" className="space-y-3">
              {ADDONS.map((addon) => {
                const selected = addons[addon.id];
                const Icon = addon.icon;
                const price = addonPrices[addon.id];
                return (
                  <motion.button
                    key={addon.id}
                    variants={item}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => toggleAddon(addon.id)}
                    className={cn(
                      "relative w-full cursor-pointer rounded-2xl border p-5 text-left transition-colors duration-200 focus-ring",
                      selected
                        ? "border-transparent"
                        : "border-border-medium hover:border-accent-bronze/50"
                    )}
                  >
                    {selected && (
                      <span className="absolute -inset-px rounded-2xl bg-bg-surface ring-2 ring-inset ring-accent-bronze" />
                    )}
                    <span className="relative z-10 flex items-start gap-4">
                      <span
                        className={cn(
                          "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 transition-colors duration-200",
                          selected ? "border-accent-bronze bg-accent-bronze" : "border-border-medium"
                        )}
                      >
                        <motion.span
                          initial={false}
                          animate={{ scale: selected ? 1 : 0 }}
                          transition={{ duration: reduceMotion ? 0 : 0.2, ease: EASE }}
                        >
                          <Check className="h-3 w-3 text-accent-fg" strokeWidth={3} />
                        </motion.span>
                      </span>
                      <span className="flex-1">
                        <span className="flex flex-wrap items-center gap-2">
                          <Icon
                            className={cn(
                              "h-3.5 w-3.5",
                              selected ? "text-accent-bronze" : "text-text-muted"
                            )}
                            strokeWidth={1.75}
                          />
                          <span className="text-base font-semibold text-text-primary">
                            {addon.name}
                          </span>
                          {addon.badge && (
                            <span className="rounded-full bg-accent-gradient px-2 py-0.5 text-[10px] font-semibold leading-none text-accent-fg">
                              {addon.badge}
                            </span>
                          )}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-text-muted">
                          {addon.tagline}
                        </span>
                      </span>
                      <span className="text-right">
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                          Add-on
                        </span>
                        <span className="text-2xl font-semibold tracking-tight tabular-nums text-text-primary">
                          ${formatUsd(price)}
                        </span>
                      </span>
                    </span>
                  </motion.button>
                );
              })}
            </div>

            <motion.p variants={item} className="mt-6 text-sm leading-relaxed text-text-muted">
              Homes above {formatSqft(SQFT_MAX)} sq ft, multi-structure estates, and extended
              builder documentaries are quoted separately.
            </motion.p>
          </div>

          {/* Summary panel */}
          <motion.div
            variants={item}
            className="rounded-3xl border border-border-medium bg-bg-surface p-6 sm:p-8 lg:sticky lg:top-28 lg:p-10"
          >
            <div className="flex flex-wrap items-center gap-2.5">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text-primary">
                Your production estimate
              </h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              Property Video
              {selectedAddons.length > 0
                ? ` + ${selectedAddons.map((addon) => addon.name.replace("FAA ", "").replace(" Suite", "").replace("Vertical ", "")).join(" + ")}`
                : " only"}{" "}
              for a {formatSqft(sqft)} sq ft residence.
            </p>

            <div className="mt-6 flex flex-wrap items-baseline gap-2">
              <span className="text-sm font-medium uppercase tracking-wider text-text-muted">
                Estimated total
              </span>
              <span className="text-xl font-medium text-text-muted">$</span>
              <span className="font-display text-5xl font-semibold tracking-tight tabular-nums text-text-primary sm:text-6xl">
                {formatUsd(total)}
              </span>
            </div>

            <div className="mt-4 space-y-1.5 border-b border-border-subtle pb-5 text-sm">
              <div className="flex justify-between gap-4 text-text-muted">
                <span>Property Video</span>
                <span className="tabular-nums text-text-primary">${formatUsd(videoPrice)}</span>
              </div>
              {selectedAddons.map((addon) => (
                <div key={addon.id} className="flex justify-between gap-4 text-text-muted">
                  <span>{addon.name}</span>
                  <span className="tabular-nums text-text-primary">
                    ${formatUsd(addonPrices[addon.id])}
                  </span>
                </div>
              ))}
            </div>

            <dl className="mt-5 grid grid-cols-3 gap-4 border-b border-border-subtle py-5">
              {meta.map(({ label, value }) => (
                <div key={label}>
                  <dt className="text-xs text-text-muted">{label}</dt>
                  <dd className="mt-1 text-sm font-medium text-text-primary">{value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 text-sm font-medium text-text-primary">What’s included:</p>
            <ul className="mt-4 space-y-3">
              {includedFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-relaxed text-text-muted"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-bronze" />
                  <span className="text-text-primary">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              href={contactHref}
              size="lg"
              fullWidth
              className="mt-8"
              icon={<ArrowUpRight className="h-4 w-4" />}
            >
              Book this production
            </Button>
            <p className="mt-3 text-center text-xs text-text-muted">
              Tell us about the property and we’ll confirm scope within one business day.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
