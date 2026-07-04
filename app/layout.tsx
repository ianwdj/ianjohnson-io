import type { Metadata } from "next";
import { Newsreader, JetBrains_Mono } from "next/font/google";
import { site, hero } from "@/lib/content";
import "./globals.css";

// Newsreader is a variable font; the opsz axis gives a true display cut at
// hero sizes and a readable text cut at 18px from one family.
const serif = Newsreader({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-serif",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Product`,
    template: `%s — ${site.name}`,
  },
  description: `${hero.statement} ${hero.detail}`,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.name,
    description: hero.statement,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: site.name,
    description: hero.statement,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Founding Product Lead",
  email: `mailto:${site.email}`,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
  },
  sameAs: [site.substackUrl],
  knowsAbout: [
    "AI product management",
    "Agentic workflows",
    "GTM systems",
    "Commerce infrastructure",
    "Customer data platforms",
  ],
  worksFor: { "@type": "Organization", name: "Aida" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
