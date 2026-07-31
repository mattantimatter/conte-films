export interface SolutionDetail {
  slug: string;
  title: string;
  subtitle: string;
  heroHeadline: string;
  heroDescription: string;
  targetAudience: string[];
  capabilities: {
    title: string;
    description: string;
  }[];
  deliverables: string[];
  processSteps: {
    number: string;
    title: string;
    description: string;
  }[];
  heroImage: string;
}

export const solutionsContent: Record<string, SolutionDetail> = {
  corporate: {
    slug: "corporate",
    title: "Corporate & Brand Content",
    subtitle: "Strategic Visual Production for Enterprise & Growing Brands",
    heroHeadline: "Visual assets engineered to advance your brand authority.",
    heroDescription:
      "Brand films, executive interviews, and patient testimonials for corporate, healthcare, and professional-services organizations building lasting market credibility.",
    targetAudience: [
      "Mid-market and enterprise leadership teams",
      "Healthcare institutions & medical practices",
      "Founders and growth-stage brand leaders",
      "Professional service firms & asset managers",
      "Nonprofits seeking mission clarity",
    ],
    capabilities: [
      {
        title: "Brand & Origin Films",
        description: "Cinematic narrative films defining mission, core values, and market differentiation.",
      },
      {
        title: "Executive & Staff Interviews",
        description: "Thought-leadership sessions and team spotlights conducted with relaxed, expert interviewing.",
      },
      {
        title: "Customer & Patient Testimonials",
        description: "Authentic narrative case studies capturing real customer impact and clinical trust.",
      },
      {
        title: "Educational & Product Overviews",
        description: "Clear, engaging visual walkthroughs for technical, medical, or complex service offerings.",
      },
      {
        title: "Corporate Headshots & Commercial Photography",
        description: "Unified, color-calibrated team portraits and ambient workplace photography.",
      },
      {
        title: "Social Cutdowns & Campaign Edits",
        description: "High-impact vertical and short-form cuts tailored for LinkedIn, Instagram, and digital ads.",
      },
    ],
    deliverables: [
      "Master Brand Film (4K 16:9)",
      "Executive Spotlight Cutdowns (1:1 & 9:16)",
      "Website Hero Background Video Loops",
      "High-Resolution Color-Graded Stills Library",
      "Subtitled & Accessibility-Formatted Master Edits",
      "Modular Asset Library for Ongoing Campaigns",
    ],
    processSteps: [
      {
        number: "01",
        title: "Discovery & Alignment",
        description:
          "We analyze your brand strategy, key audiences, distribution channels, and messaging goals before touching a camera.",
      },
      {
        number: "02",
        title: "Creative Direction & Planning",
        description:
          "Developing storyboards, shot lists, interview prompts, schedule logistics, and crew allocation for zero shoot-day friction.",
      },
      {
        number: "03",
        title: "Precision Execution",
        description:
          "Deploying cinema-grade cameras, broadcast audio, and tailored lighting with an organized crew of up to 10 professionals.",
      },
      {
        number: "04",
        title: "Post-Production & Refinement",
        description:
          "Editorial cutting, custom color grading, sound design, music licensing, and multi-format delivery ready for deployment.",
      },
    ],
    heroImage: "/images/solutions/corporate-hero.jpg",
  },
  "real-estate": {
    slug: "real-estate",
    title: "Luxury Real Estate & Architecture",
    subtitle: "Cinematic Media for Bespoke Architecture & Custom Estates",
    heroHeadline: "Architectural cinema that honors exceptional design.",
    heroDescription:
      "Twilight photography, architectural walkthroughs, and FAA-certified aerial media for luxury builders, architects, and brokers across Metro Atlanta.",
    targetAudience: [
      "Luxury custom-home builders & general contractors",
      "Architectural firms & interior design studios",
      "Commercial & residential real estate developers",
      "High-end luxury real estate agents & brokers",
      "Bespoke hospitality and residential destination brands",
    ],
    capabilities: [
      {
        title: "Architectural Walkthrough Films",
        description: "Fluid, gimbal-stabilized interior and exterior film sequences matching architectural flow.",
      },
      {
        title: "FAA-Certified Aerial Media (Part 107)",
        description: "Smooth drone videography and high-res aerial stills articulating property context and lot scale.",
      },
      {
        title: "Twilight & Golden Hour Photography",
        description: "Multi-exposure flash ambient photography capturing exterior lighting features and warm interiors.",
      },
      {
        title: "Builder & Craftsmanship Brand Documentaries",
        description: "Behind-the-build visual stories highlighting architectural detail, rare materials, and site progress.",
      },
      {
        title: "Vertical Property Reels & Social Edits",
        description: "Paced, high-resolution vertical video reels designed for Instagram, TikTok, and MLS feature portals.",
      },
      {
        title: "Publication & Award Submission Libraries",
        description: "Color-calibrated photo suites curated for architectural magazines, competitions, and web portfolios.",
      },
    ],
    deliverables: [
      "4K Architectural Property Tour Film",
      "FAA-Certified Aerial Video Passes & 4K Stills",
      "Complete Interior & Exterior Twilight Photo Suite",
      "Vertical Property Showcase Reels (9:16)",
      "High-Resolution Print-Ready Architectural Assets",
      "Web-Optimized MLS & Social Media Media Bundles",
    ],
    processSteps: [
      {
        number: "01",
        title: "Site Walkthrough & Sun Mapping",
        description:
          "We analyze property orientation, natural light angles, ambient illumination, and key architectural highlights prior to filming.",
      },
      {
        number: "02",
        title: "Staging & Drone Flight Logistics",
        description:
          "Clearing flight paths, verifying FAA airspace approvals, coordinate staging, and timing golden-hour windows.",
      },
      {
        number: "03",
        title: "Targeted Architectural Capture",
        description:
          "Capturing spatial continuity, material close-ups, smooth tracking shots, and dusk lighting transitions with precision.",
      },
      {
        number: "04",
        title: "Color & Perspective Correction",
        description:
          "Correcting vertical lines, hand-blending exposures, sound designing natural ambiance, and delivering final assets.",
      },
    ],
    heroImage: "/images/solutions/real-estate-hero.jpg",
  },
  events: {
    slug: "events",
    title: "Events & Experiences",
    subtitle: "Capturing the Scale, Energy & Substance of Premier Events",
    heroHeadline: "Cinematic coverage for moments that shape brands.",
    heroDescription:
      "Multi-camera video, rapid social edits, and event photography for conferences, galas, and brand activations — extending ROI far beyond the live audience.",
    targetAudience: [
      "Corporate conference & executive summit organizers",
      "Brand activation teams & marketing directors",
      "Nonprofit organizations & gala committees",
      "Professional associations & keynote presenters",
      "Hospitality venues & luxury event planners",
    ],
    capabilities: [
      {
        title: "Multi-Camera Stage & Keynote Recording",
        description: "Synchronized multi-angle 4K recording with crystal-clear board audio capture.",
      },
      {
        title: "Cinematic Highlight & Event Recap Films",
        description: "Dynamic, music-driven recap films distilling multi-day events into powerful visual highlights.",
      },
      {
        title: "Rapid-Turnaround Social Highlights",
        description: "Same-day or next-day vertical clips ready for live event promotion and social media buzz.",
      },
      {
        title: "On-Site Attendee & Speaker Interviews",
        description: "Spontaneous or scheduled testimonial captures with professional lighting and wireless audio.",
      },
      {
        title: "Event Photography & Photojournalism",
        description: "Candid attendee moments, stage presentations, sponsor branding, and venue atmosphere.",
      },
      {
        title: "Sponsor Package Content",
        description: "Dedicated visual assets highlighting sponsor placements, booth activations, and VIP access.",
      },
    ],
    deliverables: [
      "Master Event Highlight Film (2-3 min 4K)",
      "Full Stage Presentation Recordings with Board Audio",
      "Rapid 24-Hour Social Cutdowns (9:16 & 1:1)",
      "Curated Digital Event Photo Gallery",
      "Attendee & Sponsor Testimonial Selects",
      "Archival Raw Asset Storage Options",
    ],
    processSteps: [
      {
        number: "01",
        title: "Event Blueprint & Audio Planning",
        description:
          "Mapping run-of-show schedules, AV board tap requirements, key speaker times, and camera positions.",
      },
      {
        number: "02",
        title: "Unobtrusive On-Site Execution",
        description:
          "Operating seamlessly within live environments without obstructing sightlines or distracting attendees.",
      },
      {
        number: "03",
        title: "Rapid Data Ingest & On-Site Edits",
        description:
          "Immediate field ingest for fast-turnaround social edits and press release asset generation.",
      },
      {
        number: "04",
        title: "Final Master Delivery",
        description:
          "Polished color grading, sound mixing, branded motion graphic lower-thirds, and multi-resolution web delivery.",
      },
    ],
    heroImage: "/images/solutions/events-hero.jpg",
  },
};
