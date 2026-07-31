"use client";

import { Award, Compass, ShieldCheck, Users } from "lucide-react";
import Features6 from "@/components/blocks/features-6";

const items = [
  {
    title: "10 Years Experience",
    desc: "Decade of professional production across fashion, healthcare, real estate, and corporate commercial work.",
    icon: Award,
  },
  {
    title: "FAA Part 107 Certified",
    desc: "Fully licensed and insured remote drone pilots for aerial videography and architectural photography.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable Crewing",
    desc: "Ability to deploy lean solo operators or full production crews of up to 10 specialists.",
    icon: Users,
  },
  {
    title: "Atlanta Since 2016",
    desc: "Based in Atlanta and working with Georgia businesses since 2016 — local partnership with statewide and national reach.",
    icon: Compass,
  },
];

export function AboutExperience() {
  return (
    <Features6
      eyebrow="Verified Experience"
      headline="A track record of excellence in Metro Atlanta & beyond."
      items={items}
    />
  );
}
