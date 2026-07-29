import React from "react";
import { siteContent } from "@/content/site";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://contefilms.com/#organization",
        name: siteContent.name,
        url: "https://contefilms.com",
        telephone: siteContent.contact.phoneFormatted,
        email: siteContent.contact.email,
        founder: {
          "@type": "Person",
          name: siteContent.founder,
          jobTitle: "Founder & Creative Director",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Atlanta",
          addressRegion: "GA",
          postalCode: "30305",
          addressCountry: "US",
        },
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "Metro Atlanta",
          },
          {
            "@type": "AdministrativeArea",
            name: "Buckhead",
          },
          {
            "@type": "State",
            name: "Georgia",
          },
        ],
        description: siteContent.description,
        knowsAbout: [
          "Commercial Video Production",
          "Luxury Real Estate Photography",
          "FAA Part 107 Aerial Drone Videography",
          "Corporate Brand Storytelling",
          "Event Videography",
        ],
        memberOf: {
          "@type": "Organization",
          name: "Buckhead Business Association",
        },
        sameAs: [siteContent.social.instagram, siteContent.social.facebook],
      },
      {
        "@type": "WebSite",
        "@id": "https://contefilms.com/#website",
        url: "https://contefilms.com",
        name: siteContent.name,
        description: siteContent.description,
        publisher: {
          "@id": "https://contefilms.com/#organization",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
