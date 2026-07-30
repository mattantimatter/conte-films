import React from "react";
import { testimonialsContent } from "@/content/testimonials";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";
import { Quote } from "lucide-react";

export function TestimonialSection({ categoryFilter }: { categoryFilter?: string }) {
  const testimonials = categoryFilter
    ? testimonialsContent.filter((t) => t.category === categoryFilter)
    : testimonialsContent;

  return (
    <section id="testimonials" className="py-24 bg-bg-surface border-y border-border-subtle transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Eyebrow className="justify-center">Verified Partner Perspective</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-text-primary">
            Trusted by founders, builders, and clinical leaders.
          </h2>
          <p className="text-base text-text-muted">
            Direct feedback from client partners across Metro Atlanta and nationwide.
          </p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <StaggerItem key={item.id}>
              <div className="relative h-full p-8 sm:p-10 rounded-xl bg-bg-primary border border-border-medium hover:border-accent-bronze/40 transition-colors flex flex-col justify-between space-y-6">
                <Quote className="w-8 h-8 text-accent-bronze opacity-40" />

                <blockquote className="space-y-4">
                  <p className="text-base sm:text-lg font-serif italic text-text-primary leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  {item.highlight && (
                    <p className="text-xs font-mono font-medium text-accent-bronze tracking-wide uppercase pt-2">
                      Key Takeaway: {item.highlight}
                    </p>
                  )}
                </blockquote>

                <div className="pt-6 border-t border-border-subtle flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-serif font-semibold text-text-primary">
                      {item.author}
                    </h4>
                    <p className="text-xs text-text-muted">
                      {item.role} • <span className="text-accent-bronze font-medium">{item.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
