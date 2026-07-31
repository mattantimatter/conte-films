"use client";

import {
  BriefcaseBusiness,
  Building2,
  HeartHandshake,
  HeartPulse,
  Rocket,
} from "lucide-react";
import About12 from "@/components/blocks/about-12";
import { siteContent } from "@/content/site";

const industries = [
  {
    index: "01",
    title: "Mid-market & enterprise leadership",
    icon: Building2,
    text: "Executive teams that need brand films, thought leadership, and internal communications with the polish of a national agency.",
  },
  {
    index: "02",
    title: "Healthcare institutions & medical practices",
    icon: HeartPulse,
    text: "Clinics, centers, and practices seeking patient trust through authentic testimonials, facility films, and physician spotlights.",
  },
  {
    index: "03",
    title: "Founders & growth-stage brand leaders",
    icon: Rocket,
    text: "Emerging brands ready for commercial-grade origin stories, product launches, and social-first campaign cutdowns.",
  },
  {
    index: "04",
    title: "Professional services & asset managers",
    icon: BriefcaseBusiness,
    text: "Firms where credibility is currency — clear, restrained visual systems for partners, clients, and stakeholders.",
  },
  {
    index: "05",
    title: "Nonprofits seeking mission clarity",
    icon: HeartHandshake,
    text: "Mission-driven organizations that need documentary storytelling donors and communities can feel and remember.",
  },
];

export function CorporateWhoWeServe() {
  return (
    <About12
      eyebrow="Who We Serve"
      quote="Built for organizations where credibility is paramount."
      attributionName={siteContent.founder}
      attributionRole="Founder and Executive Creative Director"
      attributionImage="/stefan-jobe.jpg"
      description="Conté partners with leadership teams across corporate, healthcare, and professional services to produce visual assets that earn trust before the first conversation."
      items={industries}
    />
  );
}
