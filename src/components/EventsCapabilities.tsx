"use client";

import {
  Camera,
  Clapperboard,
  Handshake,
  Mic2,
  Smartphone,
  Video,
} from "lucide-react";
import Features9, { type Features9Item } from "@/components/blocks/features-9";

const capabilities: Features9Item[] = [
  {
    key: "stage",
    label: "Stage Capture",
    Icon: Video,
    ctaTitle: "Multi-camera coverage that holds the room.",
    buttonLabel: "Plan stage recording",
    buttonHref: "/contact",
    blocks: [
      {
        title: "Multi-Camera Stage & Keynote Recording",
        desc: "Synchronized multi-angle 4K recording with crystal-clear board audio capture.",
      },
      {
        title: "Built for replay",
        desc: "Clean angles and board audio so keynotes, panels, and presentations travel beyond the live room.",
      },
    ],
  },
  {
    key: "highlights",
    label: "Highlight Films",
    Icon: Clapperboard,
    ctaTitle: "The energy of the day, distilled.",
    buttonLabel: "Brief a recap film",
    buttonHref: "/contact",
    blocks: [
      {
        title: "Cinematic Highlight & Event Recap Films",
        desc: "Dynamic, music-driven recap films distilling multi-day events into powerful visual highlights.",
      },
      {
        title: "Story over coverage",
        desc: "We cut for emotion and momentum — ideal for sponsors, member engagement, and next-year registration.",
      },
    ],
  },
  {
    key: "social",
    label: "Social Cuts",
    Icon: Smartphone,
    ctaTitle: "Same-day clips while the buzz is live.",
    buttonLabel: "Request rapid cuts",
    buttonHref: "/contact",
    blocks: [
      {
        title: "Rapid-Turnaround Social Highlights",
        desc: "Same-day or next-day vertical clips ready for live event promotion and social media buzz.",
      },
      {
        title: "Feed-native pacing",
        desc: "9:16 and 1:1 edits that feel native to Instagram, LinkedIn, and Stories — not cropped afterthoughts.",
      },
    ],
  },
  {
    key: "interviews",
    label: "Interviews",
    Icon: Mic2,
    ctaTitle: "Voices from the floor, captured cleanly.",
    buttonLabel: "Add interview coverage",
    buttonHref: "/contact",
    blocks: [
      {
        title: "On-Site Attendee & Speaker Interviews",
        desc: "Spontaneous or scheduled testimonial captures with professional lighting and wireless audio.",
      },
      {
        title: "Quiet efficiency",
        desc: "We work around the run of show so interviews feel natural — never like a disruption to the program.",
      },
    ],
  },
  {
    key: "photography",
    label: "Photography",
    Icon: Camera,
    ctaTitle: "Still frames that document the moment.",
    buttonLabel: "Book event photography",
    buttonHref: "/contact",
    blocks: [
      {
        title: "Event Photography & Photojournalism",
        desc: "Candid attendee moments, stage presentations, sponsor branding, and venue atmosphere.",
      },
      {
        title: "Gallery-ready delivery",
        desc: "Curated selects for recaps, press, and sponsor packages — not a dump of every frame.",
      },
    ],
  },
  {
    key: "sponsors",
    label: "Sponsors",
    Icon: Handshake,
    ctaTitle: "Assets partners can actually use.",
    buttonLabel: "Scope sponsor content",
    buttonHref: "/contact",
    blocks: [
      {
        title: "Sponsor Package Content",
        desc: "Dedicated visual assets highlighting sponsor placements, booth activations, and VIP access.",
      },
      {
        title: "ROI they can show",
        desc: "Clear, branded moments that help organizers prove value and help sponsors report impact.",
      },
    ],
  },
];

export function EventsCapabilities() {
  return (
    <Features9
      eyebrow="Coverage Models"
      headline="Multi-camera & rapid social delivery."
      items={capabilities}
      defaultActive="stage"
      className="bg-bg-surface"
    />
  );
}
