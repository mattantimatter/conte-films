export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  category: "corporate" | "real-estate" | "events";
  quote: string;
  highlight?: string;
  avatarImage?: string;
  projectSlug?: string;
}

export const testimonialsContent: Testimonial[] = [
  {
    id: "kalos-construction",
    author: "Michael Kopanski",
    role: "Principal Builder & Founder",
    company: "Kalos Construction Group",
    category: "real-estate",
    quote:
      "Stefan and the Conté Films team transformed how our luxury architectural builds are perceived online. The level of care, lighting accuracy, and drone movement they brought to our flagship residence was remarkable. Their work direct-contributed to our reputation among high-end architects and homebuyers.",
    highlight: "Transformed how our luxury architectural builds are perceived online.",
    avatarImage: "/testimonials/michael-kopanski.jpg",
    projectSlug: "kalos-construction-multimillion-residence",
  },
  {
    id: "dr-daniel-berant",
    author: "Dr. Daniel Berant",
    role: "Dental Specialist & Speaker",
    company: "Smile Design NYC",
    category: "events",
    quote:
      "Working with Conté is seamless. On event days, they operate with quiet efficiency without disrupting attendees, while capturing footage that looks like a high-budget documentary feature. They understand how to extract real value from live sessions.",
    highlight: "Operate with quiet efficiency... footage looks like a high-budget documentary feature.",
    avatarImage: "/testimonials/dan-berant.jpg",
    projectSlug: "dr-daniel-berant-educational-keynotes",
  },
  {
    id: "tremedy-integrative",
    author: "Simran Keshwani",
    role: "Executive Director",
    company: "Tremedy Integrative Health Center",
    category: "corporate",
    quote:
      "Conté Films captured the exact warmth and medical credibility our practice stands for. Patients routinely mention seeing our video before booking their first appointment. Stefan's creative direction made our whole team feel comfortable on camera.",
    highlight: "Patients routinely mention seeing our video before booking their first appointment.",
    avatarImage: "/testimonials/simran-keshwani.jpg",
  },
  {
    id: "larkly-suncare",
    author: "Dr. Sarah Wilkie",
    role: "Co-Founder",
    company: "Larkly Suncare",
    category: "corporate",
    quote:
      "Stefan’s fashion background gave our product launch campaign an instant editorial edge. Conté delivered commercial-grade videos and social cutdowns that outperformed every visual asset we had previously commissioned.",
    highlight: "Gave our product launch campaign an instant editorial edge.",
    avatarImage: "/testimonials/sarah-wilkie.jpg",
    projectSlug: "larkly-suncare-brand-campaign",
  },
];
