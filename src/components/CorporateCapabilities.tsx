"use client";

import {
  BookOpen,
  Camera,
  Clapperboard,
  MessageCircleHeart,
  Mic2,
  Smartphone,
} from "lucide-react";
import Features9, { type Features9Item } from "@/components/blocks/features-9";

const capabilities: Features9Item[] = [
  {
    key: "brand-films",
    label: "Brand Films",
    Icon: Clapperboard,
    ctaTitle: "Cinematic films that define who you are.",
    buttonLabel: "Start a brand film",
    buttonHref: "/contact",
    blocks: [
      {
        title: "Brand & Origin Films",
        desc: "Cinematic narrative films defining mission, core values, and market differentiation.",
      },
      {
        title: "Story before spectacle",
        desc: "We build narrative arcs that feel premium on first watch — and still hold up as evergreen brand assets.",
      },
    ],
  },
  {
    key: "interviews",
    label: "Interviews",
    Icon: Mic2,
    ctaTitle: "Leadership that sounds like leadership.",
    buttonLabel: "Plan interviews",
    buttonHref: "/contact",
    blocks: [
      {
        title: "Executive & Staff Interviews",
        desc: "Thought-leadership sessions and team spotlights conducted with relaxed, expert interviewing.",
      },
      {
        title: "Comfort on camera",
        desc: "Guided prompts and a calm set so executives and staff deliver authentic, usable soundbites — not stiff talking points.",
      },
    ],
  },
  {
    key: "testimonials",
    label: "Testimonials",
    Icon: MessageCircleHeart,
    ctaTitle: "Proof that earns the next appointment.",
    buttonLabel: "Capture testimonials",
    buttonHref: "/contact",
    blocks: [
      {
        title: "Customer & Patient Testimonials",
        desc: "Authentic narrative case studies capturing real customer impact and clinical trust.",
      },
      {
        title: "Trust, not scripts",
        desc: "Documentary-style sessions that let real outcomes speak — ideal for healthcare, services, and growth brands.",
      },
    ],
  },
  {
    key: "education",
    label: "Education",
    Icon: BookOpen,
    ctaTitle: "Complex offerings, clearly told.",
    buttonLabel: "Brief a walkthrough",
    buttonHref: "/contact",
    blocks: [
      {
        title: "Educational & Product Overviews",
        desc: "Clear, engaging visual walkthroughs for technical, medical, or complex service offerings.",
      },
      {
        title: "Clarity at pace",
        desc: "Structured storytelling that educates without drowning viewers in jargon — ready for sites, sales, and onboarding.",
      },
    ],
  },
  {
    key: "photography",
    label: "Photography",
    Icon: Camera,
    ctaTitle: "A visual system your team can share.",
    buttonLabel: "Book photography",
    buttonHref: "/contact",
    blocks: [
      {
        title: "Corporate Headshots & Commercial Photography",
        desc: "Unified, color-calibrated team portraits and ambient workplace photography.",
      },
      {
        title: "Consistent, campaign-ready",
        desc: "Matched lighting and grading so every headshot and still feels like one brand — not a patchwork of phone photos.",
      },
    ],
  },
  {
    key: "social",
    label: "Social Cuts",
    Icon: Smartphone,
    ctaTitle: "Master edits that travel further.",
    buttonLabel: "Request cutdowns",
    buttonHref: "/contact",
    blocks: [
      {
        title: "Social Cutdowns & Campaign Edits",
        desc: "High-impact vertical and short-form cuts tailored for LinkedIn, Instagram, and digital ads.",
      },
      {
        title: "Built for the feed",
        desc: "Platform-native aspect ratios and pacing so your strongest moments perform where attention actually lives.",
      },
    ],
  },
];

export function CorporateCapabilities() {
  return (
    <Features9
      eyebrow="Production Capabilities"
      headline="Comprehensive corporate visual services."
      items={capabilities}
      defaultActive="brand-films"
    />
  );
}
