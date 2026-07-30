import React from "react";
import { siteContent } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function ClientStrip() {
  return (
    <section className="py-12 border-y border-border-subtle bg-bg-surface/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <Eyebrow className="justify-center">Trusted Production Partner For Notable Organizations & Leaders</Eyebrow>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center opacity-75 hover:opacity-100 transition-opacity">
          {siteContent.clientList.map((client, idx) => (
            <div
              key={idx}
              className="text-center px-3 py-2 rounded-sm text-xs font-serif tracking-wider uppercase text-text-muted hover:text-text-primary transition-colors border border-transparent hover:border-border-subtle"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
