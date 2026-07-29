import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { siteContent } from "@/content/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-bg-surface text-text-primary pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-border-subtle">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <Logo />
            <p className="text-sm text-text-muted leading-relaxed max-w-sm">
              {siteContent.description}
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-bronze">
              <MapPin className="w-3.5 h-3.5" />
              <span>{siteContent.location.region}</span>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a
                href={siteContent.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border-medium hover:border-accent-bronze hover:text-accent-bronze transition-colors focus-ring"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteContent.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border-medium hover:border-accent-bronze hover:text-accent-bronze transition-colors focus-ring"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-text-muted">
              Capabilities & Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/solutions/corporate"
                  className="text-text-primary hover:text-accent-bronze transition-colors focus-ring rounded-sm"
                >
                  Corporate & Brand Films
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/real-estate"
                  className="text-text-primary hover:text-accent-bronze transition-colors focus-ring rounded-sm"
                >
                  Luxury Real Estate & Architecture
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/real-estate#drone"
                  className="text-text-primary hover:text-accent-bronze transition-colors focus-ring rounded-sm"
                >
                  FAA-Certified Drone Media
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/events"
                  className="text-text-primary hover:text-accent-bronze transition-colors focus-ring rounded-sm"
                >
                  Events & Experiences
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-text-muted">
              Studio
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/#featured-work"
                  className="text-text-primary hover:text-accent-bronze transition-colors focus-ring rounded-sm"
                >
                  Featured Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-text-primary hover:text-accent-bronze transition-colors focus-ring rounded-sm"
                >
                  About Stefan Jobe
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-text-primary hover:text-accent-bronze transition-colors focus-ring rounded-sm"
                >
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Inquiries */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-text-muted">
              Direct Contact
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${siteContent.contact.phone}`}
                className="flex items-center gap-2 text-text-primary hover:text-accent-bronze transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-accent-bronze" />
                <span>{siteContent.contact.phoneFormatted}</span>
              </a>
              <a
                href={`mailto:${siteContent.contact.email}`}
                className="flex items-center gap-2 text-text-primary hover:text-accent-bronze transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-accent-bronze" />
                <span>{siteContent.contact.email}</span>
              </a>
              <p className="text-xs text-text-muted pt-2">
                Buckhead Business Association Member
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted gap-4">
          <p>© {currentYear} {siteContent.name}. All rights reserved. Atlanta Visual Production Studio.</p>
          <div className="flex items-center gap-6">
            <span>Atlanta • Buckhead • Nationwide</span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-accent-bronze hover:underline"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
