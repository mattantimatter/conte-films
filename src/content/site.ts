export interface StudioMeta {
  name: string;
  tagline: string;
  description: string;
  founder: string;
  foundedYear: number;
  experienceYears: number;
  location: {
    city: string;
    state: string;
    region: string;
    fullAddress: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    email: string;
    bookingUrl: string; // TODO: Confirm client final calendar scheduling URL (e.g. Calendly/SavvyCal)
  };
  social: {
    instagram: string;
    facebook: string;
    vimeo?: string;
    linkedin?: string;
  };
  credentials: string[];
  clientList: string[];
}

export const siteContent: StudioMeta = {
  name: "Conté Films",
  tagline: "Films that make the work impossible to overlook.",
  description:
    "Atlanta-based visual production studio creating cinematic photography, film, and aerial media for corporate brands, luxury real estate, and defining experiences.",
  founder: "Stefan Jobe",
  foundedYear: 2016,
  experienceYears: 10,
  location: {
    city: "Atlanta",
    state: "GA",
    region: "Metro Atlanta & Surrounding Areas",
    fullAddress: "Buckhead, Atlanta, GA 30305",
  },
  contact: {
    phone: "6784440034",
    phoneFormatted: "(678) 444-0034",
    email: "hello@contefilms.com",
    bookingUrl: "https://contefilms.com/contact", // TODO: Update to direct scheduling software link upon client confirmation
  },
  social: {
    instagram: "https://www.instagram.com/contefilms", // TODO: Confirm exact handle if updated
    facebook: "https://www.facebook.com/contefilms",
  },
  credentials: [
    "FAA-Certified Remote Drone Operators (Part 107)",
    "Crew Scales up to 10 Production Professionals",
    "Internationally Published Fashion & Beauty Portfolio",
    "Member of Buckhead Business Association",
    "Decade of High-End Commercial & Luxury Production",
  ],
  clientList: [
    "Atlanta Humane Society",
    "Caesars Palace Las Vegas",
    "Larkly Suncare",
    "Tremedy Integrative Health Center",
    "Buckhead Art & Company",
    "Dr. Daniel Berant",
    "Kalos Construction Group",
  ],
};
