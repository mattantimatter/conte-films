import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://contefilms.com"),
  title: {
    default: `${siteContent.name} | Atlanta Video Production, Photography & Drone Studio`,
    template: `%s | ${siteContent.name}`,
  },
  description: siteContent.description,
  keywords: [
    "Atlanta video production",
    "Atlanta real estate photography",
    "Atlanta commercial videographer",
    "Luxury architectural photography Atlanta",
    "FAA drone video Atlanta",
    "Buckhead production studio",
    "Corporate video Atlanta",
    "Stefan Jobe filmmaker",
  ],
  authors: [{ name: siteContent.founder }],
  creator: siteContent.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://contefilms.com",
    siteName: siteContent.name,
    title: `${siteContent.name} | Atlanta Visual Production Studio`,
    description: siteContent.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Conté Films — Atlanta Visual Production Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.name} | Atlanta Visual Production Studio`,
    description: siteContent.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className="font-sans antialiased min-h-screen bg-bg-primary text-text-primary flex flex-col justify-between">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
