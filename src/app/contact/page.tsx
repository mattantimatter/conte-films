import React from "react";
import { Metadata } from "next";
import { Phone, Mail, MapPin, Calendar, Clock, Instagram, Facebook } from "lucide-react";
import { siteContent } from "@/content/site";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Start a Project | Conté Films",
  description:
    "Get in touch with Conté Films in Atlanta, GA. Submit project details for corporate video production, luxury real estate photography, or event media.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 space-y-0">
      <section className="py-16 bg-bg-primary transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 items-start">
            {/* Left Column: Direct Contact Info & Expectations */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal direction="up" className="space-y-4">
                <Eyebrow>Start a Project</Eyebrow>
                <h1 className="text-4xl sm:text-6xl font-serif font-medium text-text-primary tracking-tight leading-tight">
                  Tell us what you’re creating.
                </h1>
                <p className="text-base text-text-muted leading-relaxed font-light">
                  Whether planning a luxury architectural shoot, enterprise brand film, or multi-day conference coverage, we are ready to discuss your vision.
                </p>
              </Reveal>

              {/* Response Expectations Box */}
              <Reveal direction="up" delay={0.1} className="p-6 rounded-xl bg-bg-surface border border-border-medium space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-bronze">
                  <Clock className="w-4 h-4" />
                  <span>What Happens Next?</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Upon receiving your project inquiry, founder Stefan Jobe will review your requirements, confirm crew and timeline availability, and provide a tailored proposal or schedule a 15-minute discovery call within 24 business hours.
                </p>
              </Reveal>

              {/* Direct Info */}
              <Reveal direction="up" delay={0.2} className="space-y-4 pt-4 border-t border-border-subtle">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  Direct Studio Contacts
                </h3>

                <div className="space-y-3">
                  <a
                    href={`tel:${siteContent.contact.phone}`}
                    className="flex items-center gap-3 text-base text-text-primary hover:text-accent-bronze transition-colors"
                  >
                    <div className="p-2.5 rounded-md bg-bg-surface border border-border-subtle text-accent-bronze">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">Studio Phone</p>
                      <p className="font-serif font-medium">{siteContent.contact.phoneFormatted}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteContent.contact.email}`}
                    className="flex items-center gap-3 text-base text-text-primary hover:text-accent-bronze transition-colors"
                  >
                    <div className="p-2.5 rounded-md bg-bg-surface border border-border-subtle text-accent-bronze">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">Direct Email</p>
                      <p className="font-serif font-medium">{siteContent.contact.email}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 text-base text-text-primary">
                    <div className="p-2.5 rounded-md bg-bg-surface border border-border-subtle text-accent-bronze">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">Primary Studio Base</p>
                      <p className="font-serif font-medium">{siteContent.location.fullAddress}</p>
                    </div>
                  </div>
                </div>

                {/* Direct Calendar Booking Link */}
                <div className="pt-4">
                  <a
                    href={siteContent.contact.bookingUrl}
                    className="w-full py-3.5 px-6 rounded-md bg-bg-surface border border-border-medium hover:border-accent-bronze transition-colors flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-primary focus-ring"
                  >
                    <Calendar className="w-4 h-4 text-accent-bronze" />
                    <span>Prefer to Schedule a Call Directly?</span>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Embedded Zod Contact Form */}
            <div className="lg:col-span-7">
              <Reveal direction="left">
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
