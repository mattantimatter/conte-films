"use client";

import FAQ9 from "@/components/blocks/faq-9";

const corporateFaqs = [
  {
    question: "What kinds of corporate films do you produce?",
    answer:
      "Brand and origin films, executive and staff interviews, customer or patient testimonials, product and educational overviews, and social cutdowns. We scope the mix to your audience and distribution channels — not a fixed package.",
  },
  {
    question: "How long does a typical corporate production take?",
    answer:
      "Most brand films move from discovery to final masters in a few weeks, depending on locations, talent availability, and review rounds. Multi-day or multi-location campaigns are scheduled after a clear pre-production plan.",
  },
  {
    question: "Will our leadership feel comfortable on camera?",
    answer:
      "Yes. Stefan leads interviews with a calm, guided approach so executives and staff deliver authentic soundbites — not stiff talking points. We prepare prompts in advance and keep the set efficient and low-pressure.",
  },
  {
    question: "Do you work with healthcare and regulated brands?",
    answer:
      "Frequently. We’ve produced patient testimonials, clinic overviews, and physician spotlights with attention to tone, consent, and credibility. We’ll align messaging with your compliance needs during creative planning.",
  },
  {
    question: "What deliverables should we expect?",
    answer:
      "Deliverables are configured to your goals — master films, vertical cutdowns, stills, hero loops, and accessible masters as needed. Nothing is bundled by default; we build the asset set your campaign actually requires.",
  },
  {
    question: "Can assets be reused across campaigns?",
    answer:
      "That’s the point of modular delivery. We organize masters and cutdowns so marketing can remix them for LinkedIn, websites, sales decks, and ongoing campaigns long after the shoot.",
  },
  {
    question: "How do we get started on a corporate project?",
    answer:
      "Share brand goals, key audiences, and any hard deadlines through the contact form. We’ll reply with next steps and a clear production outline before anything is locked in.",
  },
  {
    question: "Do you travel for corporate shoots?",
    answer:
      "Yes. We’re Atlanta-based and regularly travel for multi-site brands, offsites, and national campaigns when the story requires it.",
  },
];

const realEstateFaqs = [
  {
    question: "How does real estate pricing work?",
    answer:
      "Property video is the base. Pricing scales with square footage from 3,000 to 15,000 sq ft, and you can add drone coverage, photography, or vertical social cuts. Homes above 15,000 sq ft and multi-structure estates are quoted separately.",
  },
  {
    question: "Is drone coverage included?",
    answer:
      "No — drone is an optional add-on. When selected, flights are flown by Part 107 certified pilots with lot, neighborhood, and roofline coverage integrated into the edit.",
  },
  {
    question: "What’s the difference between video, drone, and photography?",
    answer:
      "Property video is the cinematic walkthrough. Drone adds aerial scale and context. Photography delivers twilight and daylight stills for listings, MLS, and print. Vertical social cuts repackage highlights for Reels and Stories.",
  },
  {
    question: "How should we prepare a luxury residence for the shoot?",
    answer:
      "We’ll share a light prep guide covering staging, access, lighting preferences, and timing for golden hour or twilight. Builders and brokers typically coordinate keys, alarms, and any HOA or gate access in advance.",
  },
  {
    question: "How long until we receive final assets?",
    answer:
      "Ground-video-only packages typically deliver in about 7–10 days. Adding drone or photography often lands closer to 10–14 days, depending on review rounds and weather for aerials.",
  },
  {
    question: "Do you shoot for builders, architects, and brokers?",
    answer:
      "Yes. We produce architectural cinema and stills for custom builders, architects, interior designers, and luxury brokers who need publication-ready visuals for portfolios and listings.",
  },
  {
    question: "Can you cover properties outside Atlanta?",
    answer:
      "Absolutely. We’re based in Atlanta and travel for destination estates and multi-property campaigns when the project warrants it.",
  },
  {
    question: "How do we book a property production?",
    answer:
      "Use the estimator on this page to sketch scope, then contact us to confirm dates, access, and final deliverables. We’ll lock a clear outline before the shoot day.",
  },
];

const eventsFaqs = [
  {
    question: "What types of events do you cover?",
    answer:
      "Conferences, keynotes, galas, brand activations, and sponsor-forward experiences. We specialize in multi-camera stage recording, highlight films, and rapid social delivery without disrupting the room.",
  },
  {
    question: "How do you stay unobtrusive on site?",
    answer:
      "We plan camera positions, audio board taps, and crew movement against your run-of-show in advance. On the day, coverage stays efficient and quiet so speakers and attendees aren’t distracted.",
  },
  {
    question: "Can you deliver social cutdowns within 24 hours?",
    answer:
      "Yes, when scoped that way. We prioritize ingest and same-day or next-day vertical and square edits for press, sponsors, and social channels while the longer highlight film follows a fuller post schedule.",
  },
  {
    question: "Do you record full stage presentations?",
    answer:
      "We can. Full keynote and stage recordings with clean board audio are available as a scoped deliverable for replay, sponsor packages, and archives.",
  },
  {
    question: "What about photography and testimonials?",
    answer:
      "Event photo galleries and attendee or sponsor testimonial selects are available when you need them. They’re configured to the event — not included in every coverage model by default.",
  },
  {
    question: "How early should we book?",
    answer:
      "As soon as dates and venue are firm. Larger multi-camera or multi-day events benefit from earlier AV coordination and shot planning, especially when board audio and sponsor deliverables are required.",
  },
  {
    question: "Can you cover out-of-town conferences?",
    answer:
      "Yes. We’re Atlanta-based and travel for destination conferences and brand experiences when the production needs Conté on site.",
  },
  {
    question: "How do we get started for an upcoming event?",
    answer:
      "Share the date, venue, run-of-show overview, and must-have deliverables through the contact form. We’ll confirm crew plan, audio needs, and turnaround before the event week.",
  },
];

export function SiteFaq() {
  return (
    <FAQ9
      headline="Questions before you start?"
      description="Here are the basics on process, travel, deliverables, and how we work. For anything specific to your project, reach out — a real person replies."
      faqs={[
        {
          question: "Where is Conté Films based, and do you travel?",
          answer:
            "We’re an Atlanta-based studio serving Metro Atlanta and traveling nationwide. Most corporate, real estate, and event productions begin locally, with travel arranged for destination shoots and multi-city campaigns.",
        },
        {
          question: "What’s a typical production timeline?",
          answer:
            "After discovery, most projects move from creative planning to delivery within a few weeks depending on scope, locations, and approval cycles. Event social cutdowns can turn around in 24 hours when scoped that way; larger brand films follow a staged review process.",
        },
        {
          question: "Are drone flights included automatically?",
          answer:
            "Aerial coverage is available as an add-on or scoped line item — not automatic in every package. All commercial drone work is flown by Part 107 certified pilots with airspace planning built into pre-production.",
        },
        {
          question: "Who will I work with on set?",
          answer:
            "You’ll have direct creative alignment with founder Stefan Jobe. Crew size scales to the project — from lean two-person teams to productions of up to 10 specialists when the scope calls for it.",
        },
        {
          question: "How does pricing work?",
          answer:
            "We price from scope: property size, shoot days, deliverables, and add-ons like drone, photography, or social cutdowns. Real estate packages have transparent starting ranges; corporate and events are quoted after a short discovery call.",
        },
        {
          question: "What kinds of projects do you take on?",
          answer:
            "Corporate brand films and testimonials, luxury real estate and architectural media, and conferences or keynote events. If the work needs cinematic craft and clear creative direction, it’s usually a fit.",
        },
        {
          question: "What do we need to prepare before the shoot?",
          answer:
            "We’ll guide location access, talent availability, wardrobe notes, and any brand assets. For events, we map run-of-show and AV board taps in advance so coverage stays unobtrusive and complete.",
        },
        {
          question: "How do we get started?",
          answer:
            "Share a brief overview through the contact form or book a discovery call. We’ll confirm goals, timeline, and budget range, then send a clear production outline before anything is locked in.",
        },
      ]}
      stats={[
        { value: "24h", label: "Business-hour reply" },
        { value: "10+", label: "Years Serving Atlanta" },
      ]}
      ctaLabel="Contact the Studio"
      ctaHref="/contact"
      ctaNote="Weekdays · Metro Atlanta & traveling worldwide"
      className="border-t border-border-subtle"
    />
  );
}

export function CorporateFaq() {
  return (
    <FAQ9
      headline="Corporate production questions?"
      description="Specific answers for brand films, interviews, healthcare content, and campaign deliverables. Need a custom scope — contact the studio."
      faqs={corporateFaqs}
      stats={[
        { value: "4K", label: "Cinema delivery" },
        { value: "10+", label: "Years of experience" },
      ]}
      ctaLabel="Start Corporate Project"
      ctaHref="/contact"
      ctaNote="Brand films · interviews · testimonials · social cuts"
      className="border-t border-border-subtle"
    />
  );
}

export function RealEstateFaq() {
  return (
    <FAQ9
      headline="Property production questions?"
      description="Pricing, drone add-ons, stills, and timelines for luxury residences and architectural builds — ask us anything we missed."
      faqs={realEstateFaqs}
      stats={[
        { value: "48h", label: "Rush edits available" },
        { value: "107", label: "FAA Part certified" },
      ]}
      ctaLabel="Book Architectural Shoot"
      ctaHref="/contact"
      ctaNote="Video · drone · photography · social cuts"
      className="border-t border-border-subtle"
    />
  );
}

export function EventsFaq() {
  return (
    <FAQ9
      headline="Event coverage questions?"
      description="Multi-camera keynotes, highlight films, and rapid social delivery — here’s how Conté runs live productions."
      faqs={eventsFaqs}
      stats={[
        { value: "24h", label: "Social cut option" },
        { value: "Live", label: "Unobtrusive coverage" },
      ]}
      ctaLabel="Book Event Coverage"
      ctaHref="/contact"
      ctaNote="Conferences · keynotes · galas · activations"
      className="border-t border-border-subtle"
    />
  );
}
