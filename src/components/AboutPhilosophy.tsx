"use client";

import HowItWorks8, { howItWorks8Visuals } from "@/components/blocks/how-it-works-8";

const steps = [
  {
    title: "See What Others Miss",
    copy: "We look beyond basic coverage to discover the spatial harmony, human emotion, and subtle textures that make a story unforgettable.",
    visual: howItWorks8Visuals.discovery,
  },
  {
    title: "Plan With Intention",
    copy: "Great films don't happen by accident. Rigorous pre-production, precise shot lists, and clear communication ensure shoot days run flawlessly.",
    visual: howItWorks8Visuals.planning,
  },
  {
    title: "Execute With Precision",
    copy: "Deploying cinema cameras, custom lighting, and drone aerials with scaled crews of up to 10 professionals tailored to project scope.",
    visual: howItWorks8Visuals.execute,
  },
];

export function AboutPhilosophy() {
  return (
    <HowItWorks8
      eyebrow="Visual Philosophy"
      headline="Three pillars that guide every production."
      steps={steps}
    />
  );
}
