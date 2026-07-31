"use client";

import {
  Camera,
  Clapperboard,
  ClipboardList,
  Mic2,
  PenLine,
  Plane,
  Scissors,
  Smartphone,
} from "lucide-react";
import Features1, { type Features1Item } from "@/components/blocks/features-1";

const capabilities: Features1Item[] = [
  {
    icon: Clapperboard,
    title: "Cinematography",
    description:
      "4K cinema-grade digital filming, multi-camera setups, and custom lighting direction.",
  },
  {
    icon: Camera,
    title: "Architectural Photography",
    description:
      "Interior, exterior, and twilight photography tailored for publication and builder portfolios.",
  },
  {
    icon: Plane,
    title: "Aerial Drone Production",
    description:
      "Part 107 certified drone flight ops for cinematic property overviews and site context.",
  },
  {
    icon: PenLine,
    title: "Creative Direction",
    description:
      "Concept development, narrative arc structuring, storyboard design, and visual pacing.",
  },
  {
    icon: ClipboardList,
    title: "Production Planning",
    description:
      "Location scouting, schedule logistics, talent direction, and crew coordination.",
  },
  {
    icon: Scissors,
    title: "Editing & Post-Production",
    description:
      "Color grading, sound design, dialogue cleanup, and multi-ratio web exports.",
  },
  {
    icon: Smartphone,
    title: "Social Cutdowns",
    description:
      "High-impact vertical edits optimized for Instagram, LinkedIn, and ad campaigns.",
  },
  {
    icon: Mic2,
    title: "Interview Direction",
    description:
      "Relaxed, expert interviewing for executives, patients, and speakers that yields usable soundbites.",
  },
];

export function AboutCapabilities() {
  return (
    <Features1
      eyebrow="Capabilities Breakdown"
      headline="Full-service visual production from concept to final master."
      description="A modular capability set we draw from based on your goals — engage the disciplines your project needs, not a fixed all-in package."
      items={capabilities}
      className="border-t border-border-subtle"
    />
  );
}
