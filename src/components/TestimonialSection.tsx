"use client";

import React, { useMemo } from "react";
import SocialProof15, { type SocialProofStory } from "@/components/blocks/social-proof-15";
import { testimonialsContent } from "@/content/testimonials";

function toStories(categoryFilter?: string): SocialProofStory[] {
  const source = categoryFilter
    ? testimonialsContent.filter((item) => item.category === categoryFilter)
    : testimonialsContent;

  return source.map((item) => ({
    quote: item.quote,
    name: item.author,
    role: `${item.role} · ${item.company}`,
    metric: item.highlight ?? item.company,
    avatar: item.avatarImage,
  }));
}

export function TestimonialSection({ categoryFilter }: { categoryFilter?: string }) {
  const stories = useMemo(() => toStories(categoryFilter), [categoryFilter]);

  return (
    <SocialProof15
      stories={stories}
      headline="Trusted by founders, builders, and clinical leaders."
    />
  );
}
