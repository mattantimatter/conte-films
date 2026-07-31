export interface Project {
  slug: string;
  client: string;
  title: string;
  category: "corporate" | "real-estate" | "events";
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
    slug: "atlanta-humane-society-brand-story",
    client: "Atlanta Humane Society",
    title: "Mission-Driven Brand Documentary",
    category: "corporate",
    categoryLabel: "Nonprofit & Brand Story",
    services: [
      "Brand Documentary Film",
      "Executive & Staff Interviews",
      "On-Location Photography",
      "Campaign Cutdowns",
    ],
    summary:
      "A moving brand story illuminating the human-animal bond and operational impact of Atlanta Humane Society across Metro Atlanta.",
    fullDescription:
      "Through authentic narrative interviews and atmospheric operational footage, Conté Films captured the heart of the organization’s mission, providing assets for annual galas, donor campaigns, and digital channels.",
    posterImage: "/images/projects/atlanta-humane-poster.jpg",
    videoSource: {
      type: "mp4",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", // Replace with final asset per ASSET_GUIDE.md
      aspectRatio: "16:9",
    },
    featured: true,
    altText:
      "Heartwarming moment between staff and rescued animal at Atlanta Humane Society facility",
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
    slug: "larkly-suncare-brand-campaign",
    client: "Larkly Suncare",
    title: "Editorial Product & Brand Launch Film",
    category: "corporate",
    categoryLabel: "Commercial Brand",
    services: [
      "Commercial Product Cinematography",
      "Fashion & Beauty Direction",
      "Social-First Vertical Edits",
      "E-Commerce Photography",
    ],
    summary:
      "Dynamic, sunshine-lit commercial production highlighting the luxury texture and portable design of Larkly Suncare.",
    fullDescription:
      "Leveraging Stefan Jobe’s fashion and beauty background, Conté Films developed high-energy, sunlit visuals that elevated Larkly’s premium placement in retail and direct-to-consumer digital campaigns.",
    posterImage: "/images/projects/larkly-suncare-poster.jpg",
    videoSource: {
      type: "mp4",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", // Replace with final asset per ASSET_GUIDE.md
      aspectRatio: "16:9",
    },
    featured: true,
    altText:
      "Editorial sunlit lifestyle shot of model applying Larkly Suncare product",
    year: "2023",
    location: "Atlanta, GA",
  },
  {
    slug: "dr-daniel-berant-educational-keynotes",
    client: "Dr. Daniel Berant",
    title: "Keynote & Executive Thought Leadership Series",
    category: "events",
    categoryLabel: "Events & Executive",
    services: [
      "Multi-Camera Keynote Capture",
      "Executive Interview Production",
      "Rapid Social Cutdowns",
      "Stage & Audience Photography",
    ],
    summary:
      "Polished multi-camera event capture and polished thought-leadership content engineered for professional distribution.",
    fullDescription:
      "High-definition multi-angle production capturing live keynote delivery, audience engagement, and post-session breakdown interviews designed for syndication and institutional presentation.",
    posterImage: "/images/projects/dr-berant-event-poster.jpg",
    videoSource: {
      type: "mp4",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", // Replace with final asset per ASSET_GUIDE.md
      aspectRatio: "16:9",
    },
    featured: true,
    altText:
      "Dr. Daniel Berant presenting on stage with dramatic keylighting and conference screen",
    year: "2024",
    location: "Atlanta, GA",
  },
  {
    slug: "caesars-palace-las-vegas-experience",
    client: "Caesars Palace Las Vegas",
    title: "Luxury Event & Hospitality Experience Film",
    category: "events",
    categoryLabel: "High-End Hospitality",
    services: [
      "Large-Scale Event Production",
      "Atmospheric Videography",
      "VIP Experience Coverage",
      "Highlight Reel Assembly",
    ],
    summary:
      "High-energy, cinematic event coverage detailing premier hospitality activations and private brand experiences.",
    fullDescription:
      "Capturing the grandeur and exclusivity of premier resort events, Conté Films delivered rapid highlight edits and rich archival photography for corporate leadership and venue marketing.",
    posterImage: "/images/projects/caesars-palace-poster.jpg",
    videoSource: {
      type: "mp4",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4", // Replace with final asset per ASSET_GUIDE.md
      aspectRatio: "16:9",
    },
    featured: false,
    altText:
      "Grand ballroom lighting setup during luxury corporate gala at Caesars Palace",
    year: "2022",
    location: "Las Vegas, NV",
  },
  {
    slug: "buckhead-art-company-gallery-film",
    client: "Buckhead Art & Company",
    title: "Fine Art Exhibition & Gallery Feature",
    category: "real-estate",
    categoryLabel: "Architecture & Fine Art",
    services: [
      "Architectural Interior Capture",
      "Art Gallery Videography",
      "Artist Interview Series",
      "Exhibition Catalog Photography",
    ],
    summary:
      "An artfully paced gallery walkthrough highlighting contemporary art installations and architectural lighting in Buckhead.",
    fullDescription:
      "Conté Films produced a tranquil, color-calibrated exhibition showcase capturing the texture of canvas works, space proportions, and opening night energy.",
    posterImage: "/images/projects/buckhead-art-poster.jpg",
    videoSource: {
      type: "mp4",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4", // Replace with final asset per ASSET_GUIDE.md
      aspectRatio: "16:9",
    },
    featured: true,
    altText:
      "Contemporary art gallery interior with museum-grade track lighting and large modern paintings",
    year: "2023",
    location: "Buckhead, Atlanta, GA",
  },
  {
    slug: "metro-atlanta-aerial-architecture-reel",
    client: "Conté Films Aerial",
    title: "FAA Aerial Architecture & Site Cinema",
    category: "real-estate",
    categoryLabel: "Aerial & Architecture",
    services: [
      "FAA Part 107 Aerial Cinema",
      "Lot-to-Roofline Context Passes",
      "High-Resolution Aerial Stills",
      "Listing & Portfolio Cutdowns",
    ],
    summary:
      "Cinematic drone coverage articulating scale, site context, and architectural form across Metro Atlanta residential and commercial properties.",
    fullDescription:
      "Produced entirely under FAA Part 107 operations, this aerial architecture reel combines smooth orbiting passes, establishing approaches, and high-resolution stills that give builders, brokers, and architects the site context their ground films can’t capture alone.",
    posterImage:
      "https://image.mux.com/5BUMdA7REN28y02fC6kW1yoy02DYeWeMrSFYjpSm3Mu02I/thumbnail.webp?time=2&width=1280",
    videoSource: {
      type: "mux",
      url: "5BUMdA7REN28y02fC6kW1yoy02DYeWeMrSFYjpSm3Mu02I",
      aspectRatio: "16:9",
    },
    featured: true,
    altText:
      "Aerial drone cinema of luxury residential architecture and landscaped sites across Metro Atlanta",
    year: "2024",
    location: "Metro Atlanta, GA",
  },
  {
    slug: "buckhead-business-association-event-recap",
    client: "Buckhead Business Association",
    title: "Member Event Recap Film",
    category: "events",
    categoryLabel: "Association & Community",
    services: [
      "Event Recap Film",
      "Multi-Camera Coverage",
      "Rapid Social Cutdowns",
      "Speaker & Networking Highlights",
    ],
    summary:
      "A polished event recap capturing networking energy, speaker moments, and community leadership for the Buckhead Business Association.",
    fullDescription:
      "Conté Films documented a signature BBA gathering with unobtrusive multi-camera coverage, delivering a cinematic recap film and same-week social cutdowns for member engagement and association marketing.",
    posterImage: "/images/projects/buckhead-business-association-poster.jpg",
    videoSource: {
      type: "mp4",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4", // Replace with final asset per ASSET_GUIDE.md
      aspectRatio: "16:9",
    },
    featured: true,
    altText:
      "Buckhead Business Association networking event with speakers and members in a modern Atlanta venue",
    year: "2024",
    location: "Buckhead, Atlanta, GA",
  },
];
