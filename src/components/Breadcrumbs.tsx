import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://contefilms.com",
      },
      ...items.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 2,
        name: item.label,
        item: item.href ? `https://contefilms.com${item.href}` : undefined,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-2">
        <ol className="flex items-center gap-2 text-xs text-text-muted">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-accent-bronze transition-colors focus-ring rounded-sm"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <li aria-hidden="true" className="text-border-medium">
                <ChevronRight className="w-3 h-3" />
              </li>
              <li>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-accent-bronze transition-colors focus-ring rounded-sm"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-text-primary" aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            </React.Fragment>
          ))}
        </ol>
      </nav>
    </>
  );
}
