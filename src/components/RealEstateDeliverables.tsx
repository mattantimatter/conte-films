"use client";

import { Camera, Film, Plane, Smartphone } from "lucide-react";
import Features3, {
  type Features3Image,
  type Features3Item,
} from "@/components/blocks/features-3";

const features: Features3Item[] = [
  {
    icon: Film,
    title: "Architectural tour film",
    description: "4K property walkthroughs that follow the spatial flow of the residence.",
  },
  {
    icon: Plane,
    title: "Aerial drone coverage",
    description: "Lot-to-roofline drone passes and high-res aerial stills for scale and context.",
  },
  {
    icon: Camera,
    title: "Twilight photo suite",
    description: "Interior and exterior stills calibrated for listings, portfolios, and print.",
  },
  {
    icon: Smartphone,
    title: "Vertical showcase reels",
    description: "Social-ready 9:16 edits plus MLS and web-optimized media bundles.",
  },
];

const images: Features3Image[] = Array.from({ length: 20 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/real-estate/kalos/kalos-${n}.jpg`,
    alt: `Luxury residence photography from Conté Films — frame ${i + 1}`,
  };
});

export function RealEstateDeliverables() {
  return (
    <Features3
      eyebrow="Deliverables"
      headline="Luxury property & builder deliverables."
      description="Build the visual suite your listing or builder portfolio needs — film, aerials, stills, and social cuts available as you configure the production."
      features={features}
      images={images}
      className="border-t border-border-subtle"
    />
  );
}
