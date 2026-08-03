export interface Project {
  slug: string;
  client: string;
  title: string;
  category: "corporate" | "real-estate" | "events";
  /** Extra categories this project should appear under (in addition to `category`). */
  categories?: Array<"corporate" | "real-estate" | "events">;
  categoryLabel: string;
  services: string[];
  summary: string;
  fullDescription?: string;
  posterImage: string;
  gallery?: string[];
  videoSource?: {
    type: "mp4" | "vimeo" | "youtube" | "mux";
    /** For mux, this is the Mux playback ID */
    url: string;
    aspectRatio?: "16:9" | "9:16" | "4:3";
  };
  featured: boolean;
  altText: string;
  year?: string;
  location?: string;
}

export function projectCategories(
  project: Project
): Array<"corporate" | "real-estate" | "events"> {
  const set = new Set<"corporate" | "real-estate" | "events">([
    project.category,
    ...(project.categories ?? []),
  ]);
  return [...set];
}

export function projectMatchesCategory(
  project: Project,
  filter: "all" | "corporate" | "real-estate" | "events"
) {
  if (filter === "all") return true;
  return projectCategories(project).includes(filter);
}

export const projectsContent: Project[] = [
  {
    slug: "kalos-construction-multimillion-residence",
    client: "Kalos Construction Group",
    title: "Multimillion-Dollar Custom Architectural Residence",
    category: "real-estate",
    categoryLabel: "Luxury Real Estate",
    services: [
      "Cinematic Architectural Film",
      "FAA-Certified Aerial Media",
      "Interior & Twilight Photography",
      "Vertical Social Edits",
    ],
    summary:
      "Full-scale visual production documenting a landmark custom estate in Metro Atlanta, capturing intricate craftsmanship, material textures, and natural lighting transitions.",
    fullDescription:
      "Designed specifically for high-stakes builder reputation and architectural publication, this production combined ground-based cinema cameras with smooth FAA-certified aerial passes to articulate the scale, spatial harmony, and bespoke detailing of Kalos Construction's flag residence.",
    posterImage:
      "https://image.mux.com/cZ8Qdmz3KK4402Pk27GveJbUdr7ve1t64sMXxWj8OmT8/thumbnail.webp?time=1&width=1280",
    videoSource: {
      type: "mux",
      url: "cZ8Qdmz3KK4402Pk27GveJbUdr7ve1t64sMXxWj8OmT8",
      aspectRatio: "16:9",
    },
    featured: true,
    altText:
      "Exterior dusk twilight view of a luxury multimillion-dollar custom architectural residence in Atlanta",
    year: "2024",
    location: "Buckhead, Atlanta, GA",
  },
  {
    slug: "pergament-properties-alpharetta-aerial",
    client: "Pergament Properties",
    title: "Commercial Drone Film — Alpharetta Property Portfolio",
    category: "real-estate",
    categoryLabel: "Commercial Aerial",
    services: [
      "FAA Part 107 Aerial Cinema",
      "Commercial Property Overview",
      "Site Context & Scale Passes",
      "Listing & Marketing Cutdowns",
    ],
    summary:
      "Commercial drone cinematography for Pergament Properties in Alpharetta, GA — capturing site scale, access, and architectural presence from the air.",
    fullDescription:
      "Conté Films produced FAA-certified aerial cinema for Pergament Properties’ Alpharetta holdings, using smooth commercial drone passes to communicate lot context, building massing, and neighborhood positioning for leasing, investor, and marketing audiences.",
    posterImage:
      "https://image.mux.com/kyzbTO1MsQQWFrWO5PmxIoqr3uqIxu8vK01pzyacdYA00/thumbnail.webp?time=1&width=1280",
    videoSource: {
      type: "mux",
      url: "kyzbTO1MsQQWFrWO5PmxIoqr3uqIxu8vK01pzyacdYA00",
      aspectRatio: "16:9",
    },
    featured: true,
    altText:
      "Aerial drone cinematography of commercial property for Pergament Properties in Alpharetta, Georgia",
    year: "2024",
    location: "Alpharetta, GA",
  },
  {
    slug: "atlanta-humane-society-brand-story",
    client: "Atlanta Humane Society",
    title: "The Boromir Story — Documentary Commercial",
    category: "corporate",
    categoryLabel: "Nonprofit & Brand Story",
    services: [
      "Documentary Commercial Film",
      "Rescue & Adoption Storytelling",
      "On-Location Photography",
      "Campaign Cutdowns",
    ],
    summary:
      "A documentary commercial for Atlanta Humane Society telling The Boromir Story — a moving portrait of rescue, care, and the human-animal bond.",
    fullDescription:
      "Conté Films produced The Boromir Story as a documentary commercial for Atlanta Humane Society, capturing the emotional arc of rescue and rehabilitation with cinematic intimacy — built for donor campaigns, digital channels, and brand storytelling that advances the organization’s mission across Metro Atlanta.",
    posterImage:
      "https://image.mux.com/Obdqkow01zfSdaWpL2xXidWofa3iopgxKTun500MfvKcQ/thumbnail.webp?time=1&width=1280",
    videoSource: {
      type: "mux",
      url: "Obdqkow01zfSdaWpL2xXidWofa3iopgxKTun500MfvKcQ",
      aspectRatio: "16:9",
    },
    featured: true,
    altText:
      "Atlanta Humane Society documentary commercial The Boromir Story — rescue and adoption storytelling",
    year: "2023",
    location: "Atlanta, GA",
  },
  {
    slug: "tremedy-integrative-health",
    client: "Tremedy Integrative Health Center",
    title: "Comprehensive Healthcare Visual Ecosystem",
    category: "corporate",
    categoryLabel: "Healthcare & Corporate",
    services: [
      "Promotional Center Overview",
      "Staff Profile Videos",
      "Patient Educational Series",
      "Facility & Practice Photography",
    ],
    summary:
      "A cohesive visual suite highlighting patient experience, integrative medical care, and clinical expertise.",
    fullDescription:
      "Tremedy required an elevated aesthetic that balanced clinical credibility with warm human connection. We produced center overview films, practitioner spotlights, and website imagery designed to build patient trust prior to consultation.",
    posterImage: "/images/projects/tremedy-health-poster.jpg",
    videoSource: {
      type: "mp4",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", // Replace with final asset per ASSET_GUIDE.md
      aspectRatio: "16:9",
    },
    featured: true,
    altText:
      "Modern integrative health therapy suite with warm natural lighting and physician consultation",
    year: "2024",
    location: "Atlanta, GA",
  },
  {
    slug: "legend-apparel-product-shoot",
    client: "Legend Apparel",
    title: "Product Shoot",
    category: "corporate",
    categoryLabel: "Fashion & Brand",
    services: [
      "Product Shoot",
      "Apparel Cinematography",
      "E-Commerce & Campaign Stills",
      "Social-First Vertical Edits",
    ],
    summary:
      "A product shoot for Legend Apparel — an Atlanta-based premium basics company — capturing fabric quality, fit, and everyday wear for digital and retail campaigns.",
    fullDescription:
      "Conté Films produced a product shoot for Legend Apparel, an Atlanta-based premium basics company. The work highlights material quality, silhouette, and understated brand presence through clean product cinematography and stills built for e-commerce, website, and social distribution.",
    posterImage:
      "https://image.mux.com/S8UC8qtUQKBTNwjOjLuPAP00N00KmbradSB7800K6mZkJA/thumbnail.webp?time=1&width=1280",
    videoSource: {
      type: "mux",
      url: "S8UC8qtUQKBTNwjOjLuPAP00N00KmbradSB7800K6mZkJA",
      aspectRatio: "16:9",
    },
    featured: true,
    altText:
      "Legend Apparel product shoot for Atlanta-based premium basics brand",
    year: "2024",
    location: "Atlanta, GA",
  },
  {
    slug: "zara-product-fashion-shoot",
    client: "Zara",
    title: "Spec Product & Fashion Shoot",
    category: "corporate",
    categoryLabel: "Fashion & Product",
    services: [
      "Spec Product Shoot",
      "Fashion Cinematography",
      "Apparel & Lookbook Stills",
      "Social-First Vertical Edits",
    ],
    summary:
      "A speculative product and fashion shoot for Zara — elevating garment texture, silhouette, and campaign energy for digital and brand storytelling.",
    fullDescription:
      "Conté Films produced a speculative product and fashion shoot for Zara, combining precise apparel cinematography with editorial pacing to highlight fabric, fit, and brand attitude — built as a portfolio piece for fashion and product campaigns.",
    posterImage:
      "https://image.mux.com/rkqBYEPYz7QUCkc00ZlTqOn1RYpgdaXiVG2QKYdwV2TM/thumbnail.webp?time=1&width=1280",
    videoSource: {
      type: "mux",
      url: "rkqBYEPYz7QUCkc00ZlTqOn1RYpgdaXiVG2QKYdwV2TM",
      aspectRatio: "16:9",
    },
    featured: true,
    altText:
      "Zara speculative product and fashion shoot by Conté Films",
    year: "2024",
    location: "Atlanta, GA",
  },
  {
    slug: "larkly-suncare-brand-campaign",
    client: "Larkly Suncare",
    title: "Commercial Product Demonstration & Explainer",
    category: "corporate",
    categoryLabel: "Commercial Brand",
    services: [
      "Commercial Product Video",
      "Product Demonstration",
      "Brand Explainer Film",
      "Social-First Vertical Edits",
    ],
    summary:
      "A commercial product demonstration and explainer for Larkly Suncare — showcasing texture, portability, and brand story for retail and digital campaigns.",
    fullDescription:
      "Conté Films produced a commercial product demonstration and explainer for Larkly Suncare, combining sunlit product cinematography with clear brand storytelling so shoppers understand the formula, feel, and everyday use — built for website, retail, and social distribution.",
    posterImage:
      "https://image.mux.com/pRM7Wco4zdDaunVl8ENuhdK7YtZcNxRK02NGVeSSn7R00/thumbnail.webp?time=1&width=1280",
    videoSource: {
      type: "mux",
      url: "pRM7Wco4zdDaunVl8ENuhdK7YtZcNxRK02NGVeSSn7R00",
      aspectRatio: "16:9",
    },
    featured: true,
    altText:
      "Larkly Suncare commercial product demonstration and brand explainer film",
    year: "2023",
    location: "Atlanta, GA",
  },
  {
    slug: "see-and-be-seen-grand-opening",
    client: "See & Be Seen",
    title: "Grand Opening Video",
    category: "events",
    categories: ["events", "corporate"],
    categoryLabel: "Healthcare & Events",
    services: [
      "Grand Opening Film",
      "Healthcare Brand Storytelling",
      "Event Highlight Coverage",
      "Social & Website Cuts",
    ],
    summary:
      "A grand opening film for See & Be Seen — capturing the launch energy of a healthcare brand event with cinematic event coverage and brand presence.",
    fullDescription:
      "Conté Films produced the See & Be Seen Grand Opening Video, documenting the launch of this healthcare brand experience with polished event cinema — guest energy, space reveal, and brand moments engineered for website, social, and ongoing patient outreach.",
    posterImage:
      "https://image.mux.com/5ZnUMQAGjkrIL8alJ2NraW01XCpwjNlpB31FN00iRyhdM/thumbnail.webp?time=1&width=1280",
    videoSource: {
      type: "mux",
      url: "5ZnUMQAGjkrIL8alJ2NraW01XCpwjNlpB31FN00iRyhdM",
      aspectRatio: "16:9",
    },
    featured: true,
    altText:
      "See & Be Seen healthcare brand grand opening event film by Conté Films",
    year: "2024",
    location: "Atlanta, GA",
  },
  {
    slug: "clinix-ai-brand-faq-series",
    client: "Clinix AI",
    title: "Customer Testimonials & FAQ Video Series",
    category: "corporate",
    categoryLabel: "Technology & Brand",
    services: [
      "Customer Testimonial Films",
      "FAQ Talking-Head Series",
      "On-Location Clinical Capture",
      "Social-First Vertical Cuts",
    ],
    summary:
      "On-site customer testimonials and FAQ videos for Clinix AI, filmed at Big Apple Spine and Orthopedics in New York.",
    fullDescription:
      "Conté Films produced customer testimonials and modular FAQ talking-head videos for Clinix AI on location at Big Apple Spine and Orthopedics in New York, NY — capturing authentic clinical context, patient and practitioner voices, and product clarity for website, sales, and support channels.",
    posterImage:
      "https://image.mux.com/JGXRuZQd3017bT5O02QN42ArO6RJebiKDQcFR1rkbfUl00/thumbnail.webp?time=1&width=1280",
    videoSource: {
      type: "mux",
      url: "JGXRuZQd3017bT5O02QN42ArO6RJebiKDQcFR1rkbfUl00",
      aspectRatio: "16:9",
    },
    featured: true,
    altText:
      "Clinix AI customer testimonials and FAQ video production filmed onsite at Big Apple Spine and Orthopedics in New York",
    year: "2024",
    location: "New York, NY",
  },
  {
    slug: "dr-daniel-berant-educational-keynotes",
    client: "Dr. Daniel Berant",
    title: "Thrive Live Keynote — Holistic Dentistry & Whole-Body Health",
    category: "events",
    categoryLabel: "Events & Executive",
    services: [
      "Multi-Camera Keynote Capture",
      "Stage & Audience Coverage",
      "Thought-Leadership Cutdowns",
      "Social-First Vertical Edits",
    ],
    summary:
      "Dr. Dan Berant speaking at Thrive Live on holistic dentistry and how dentistry correlates to whole-body health.",
    fullDescription:
      "Conté Films captured Dr. Daniel Berant’s Thrive Live keynote on holistic dentistry — articulating how oral health connects to whole-body wellness for a live audience and post-event distribution across educational and practice channels.",
    posterImage:
      "https://image.mux.com/bGIYj00wffw02bWARMpoE8rmZCoYXc0001azcwXDQlzwjn00/thumbnail.webp?time=1&width=1280",
    videoSource: {
      type: "mux",
      url: "bGIYj00wffw02bWARMpoE8rmZCoYXc0001azcwXDQlzwjn00",
      aspectRatio: "16:9",
    },
    featured: true,
    altText:
      "Dr. Daniel Berant presenting at Thrive Live on holistic dentistry and whole-body health",
    year: "2024",
    location: "Thrive Live",
  },
  {
    slug: "pergament-properties-atlanta-commercial-drone",
    client: "Pergament Properties",
    title: "Commercial Drone Project",
    category: "real-estate",
    categoryLabel: "Commercial Aerial",
    services: [
      "FAA Part 107 Aerial Cinema",
      "Commercial Property Overview",
      "Site Context & Scale Passes",
      "Listing & Marketing Cutdowns",
    ],
    summary:
      "Commercial drone cinematography for Pergament Properties in Atlanta, GA — capturing site scale, access, and architectural presence from the air.",
    fullDescription:
      "Conté Films produced FAA-certified commercial drone cinema for Pergament Properties in Atlanta, using smooth aerial passes to communicate lot context, building massing, and neighborhood positioning for leasing, investor, and marketing audiences.",
    posterImage:
      "https://image.mux.com/5BUMdA7REN28y02fC6kW1yoy02DYeWeMrSFYjpSm3Mu02I/thumbnail.webp?time=2&width=1280",
    videoSource: {
      type: "mux",
      url: "5BUMdA7REN28y02fC6kW1yoy02DYeWeMrSFYjpSm3Mu02I",
      aspectRatio: "16:9",
    },
    featured: true,
    altText:
      "Commercial drone cinematography of Atlanta property for Pergament Properties",
    year: "2024",
    location: "Atlanta, GA",
  },
];
