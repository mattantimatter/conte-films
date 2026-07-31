"use client";

import {
  Captions,
  Film,
  Images,
  Layers,
  MonitorPlay,
  Smartphone,
} from "lucide-react";
import Features1, { type Features1Item } from "@/components/blocks/features-1";

const deliverables: Features1Item[] = [
  {
    icon: Film,
    title: "Master Brand Film",
    description: "Cinema-grade 4K 16:9 master cut ready for websites, events, and presentations.",
  },
  {
    icon: Smartphone,
    title: "Executive Spotlight Cutdowns",
    description:
      "Square and vertical edits (1:1 & 9:16) built for LinkedIn, Reels, and paid ads — pulled from the same executive interviews as your master film.",
  },
  {
    icon: MonitorPlay,
    title: "Website Hero Loops",
    description: "Seamless background video loops engineered for homepage and landing-page heroes.",
  },
  {
    icon: Images,
    title: "Color-Graded Stills Library",
    description: "High-resolution stills calibrated to match your film grade and brand palette.",
  },
  {
    icon: Captions,
    title: "Accessible Master Edits",
    description: "Subtitled and accessibility-formatted masters for inclusive, multi-channel use.",
  },
  {
    icon: Layers,
    title: "Modular Asset Library",
    description: "Organized deliverables you can remix for campaigns long after the shoot wraps.",
  },
];

export function CorporateDeliverables() {
  return (
    <Features1
      eyebrow="Deliverables"
      headline="Corporate deliverables, configured to your goals."
      description="Build the asset set your campaign needs — brand films, cutdowns, stills, and more are available based on project scope, not bundled into every package by default."
      items={deliverables}
      className="border-y border-border-subtle"
    />
  );
}
