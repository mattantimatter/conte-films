"use client";

import {
  Building2,
  HeartHandshake,
  Mic2,
  PartyPopper,
  Sparkles,
} from "lucide-react";
import About12 from "@/components/blocks/about-12";
import { siteContent } from "@/content/site";

const audiences = [
  {
    index: "01",
    title: "Corporate conferences & executive summits",
    icon: Building2,
    text: "Organizers who need multi-camera keynote recording, polished stage capture, and highlight films that extend the event far past the ballroom.",
  },
  {
    index: "02",
    title: "Brand activation & marketing teams",
    icon: Sparkles,
    text: "Campaign leads producing experiential moments, product launches, and sponsor activations that demand cinematic coverage and same-day social edits.",
  },
  {
    index: "03",
    title: "Nonprofit galas & fundraising committees",
    icon: HeartHandshake,
    text: "Mission-driven teams capturing donor energy, speaker moments, and emotional storytelling that fuels year-round giving.",
  },
  {
    index: "04",
    title: "Associations & keynote presenters",
    icon: Mic2,
    text: "Professional associations and thought leaders who need broadcast-ready stage recordings and interview content for members and media.",
  },
  {
    index: "05",
    title: "Hospitality venues & luxury planners",
    icon: PartyPopper,
    text: "Venues and planners documenting premier hospitality experiences with unobtrusive coverage that honors the atmosphere of the night.",
  },
];

export function EventsWhoWeServe() {
  return (
    <About12
      eyebrow="Who We Serve"
      quote="Built for events where the room — and the replay — have to land."
      attributionName={siteContent.founder}
      attributionRole="Founder and Executive Creative Director"
      attributionImage="/stefan-jobe.jpg"
      description="Conté partners with organizers, brand teams, and planners for multi-camera coverage, rapid social edits, and highlight films that keep working after the lights go down."
      items={audiences}
      className="border-y border-border-subtle"
    />
  );
}
