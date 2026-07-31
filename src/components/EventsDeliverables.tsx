"use client";

import {
  Archive,
  Film,
  Images,
  MessageCircleHeart,
  Mic2,
  Smartphone,
} from "lucide-react";
import Features1, { type Features1Item } from "@/components/blocks/features-1";

const deliverables: Features1Item[] = [
  {
    icon: Film,
    title: "Event Highlight Film",
    description: "A 2–3 minute 4K highlight cut capturing the energy, speakers, and defining moments of the day.",
  },
  {
    icon: Mic2,
    title: "Stage Presentation Recordings",
    description: "Full stage and keynote recordings with clean board audio for replay, sponsors, and archives.",
  },
  {
    icon: Smartphone,
    title: "Rapid Social Cutdowns",
    description: "Same-day or 24-hour vertical and square edits (9:16 & 1:1) ready for social and press.",
  },
  {
    icon: Images,
    title: "Event Photo Gallery",
    description: "A curated digital gallery of attendee, stage, and ambient stills for marketing and recaps.",
  },
  {
    icon: MessageCircleHeart,
    title: "Testimonial Selects",
    description: "Attendee and sponsor interview selects that reinforce impact for follow-up campaigns.",
  },
  {
    icon: Archive,
    title: "Archival Asset Storage",
    description: "Organized raw and master asset storage options for long-term reuse and sponsorship packages.",
  },
];

export function EventsDeliverables() {
  return (
    <Features1
      eyebrow="Deliverables"
      headline="Event deliverables, configured to your run of show."
      description="Choose the assets your conference or activation needs — highlight films, stage recordings, social cuts, and galleries based on scope, not a one-size package."
      items={deliverables}
    />
  );
}
