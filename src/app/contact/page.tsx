import React from "react";
import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteContent } from "@/content/site";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { contactPrefillFromSearchParams } from "@/lib/contact-prefill";

export const metadata: Metadata = {
  title: "Start a Project | Conté Films",
  description:
    "Get in touch with Conté Films in Atlanta, GA. Submit project details for corporate video production, luxury real estate photography, or event media.",
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const initialPrefill = contactPrefillFromSearchParams(searchParams);
  return (
    <div className="space-y-0">
      <section className="relative flex min-h-screen items-start bg-bg-primary pb-16 pt-28 transition-colors sm:items-center sm:pb-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Left Column: Direct Contact Info & Expectations */}
            <div className="space-y-8 lg:col-span-5">
              <Reveal direction="up" className="space-y-4">
                <Eyebrow>Start a Project</Eyebrow>
                <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-text-primary sm:text-6xl">
                  Tell us what you’re creating.
                </h1>
                <p className="text-base font-light leading-relaxed text-text-muted">
                  Whether planning a luxury architectural shoot, enterprise brand film, or multi-day conference coverage, we are ready to discuss your vision.
                </p>
              </Reveal>

              <Reveal
                direction="up"
                delay={0.1}
                className="space-y-3 rounded-xl border border-border-medium bg-bg-surface p-6"
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-bronze">
                  <Clock className="h-4 w-4" />
                  <span>What Happens Next?</span>
                </div>
                <p className="text-xs leading-relaxed text-text-muted">
                  Upon receiving your project inquiry, founder Stefan Jobe will review your requirements, confirm crew and timeline availability, and provide a tailored proposal or schedule a 15-minute discovery call within 24 business hours.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.2} className="space-y-4 border-t border-border-subtle pt-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  Direct Studio Contacts
                </h3>

                <div className="space-y-3">
                  <a
                    href={`tel:${siteContent.contact.phone}`}
                    className="flex items-center gap-3 text-base text-text-primary transition-colors hover:text-accent-bronze"
                  >
                    <div className="rounded-md border border-border-subtle bg-bg-surface p-2.5 text-accent-bronze">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">Studio Phone</p>
                      <p className="font-serif font-medium">{siteContent.contact.phoneFormatted}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteContent.contact.email}`}
                    className="flex items-center gap-3 text-base text-text-primary transition-colors hover:text-accent-bronze"
                  >
                    <div className="rounded-md border border-border-subtle bg-bg-surface p-2.5 text-accent-bronze">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">Direct Email</p>
                      <p className="font-serif font-medium">{siteContent.contact.email}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 text-base text-text-primary">
                    <div className="rounded-md border border-border-subtle bg-bg-surface p-2.5 text-accent-bronze">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">Primary Studio Base</p>
                      <p className="font-serif font-medium">{siteContent.location.fullAddress}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <Reveal direction="left">
                <ContactForm
                  key={initialPrefill ? "re-pricing" : "default"}
                  initialPrefill={initialPrefill}
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
