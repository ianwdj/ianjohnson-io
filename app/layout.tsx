import type { Metadata } from "next";
import { Newsreader, JetBrains_Mono } from "next/font/google";
import { site, hero, socialLinks } from "@/lib/content";
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
    default: site.name,
    template: `%s · ${site.name}`,
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
    // og:image comes from app/opengraph-image.tsx (1200×630, brand-set)
  },
  twitter: {
    card: "summary_large_image",
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
  image: `${site.url}/portrait.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
  },
  sameAs: socialLinks.map((l) => l.href),
  knowsAbout: [
    "AI product management",
    "Agentic workflows",
    "GTM systems",
    "Commerce infrastructure",
    "Customer data platforms",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Aida",
    url: "https://getaida.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable}`}>
      <body className="antialiased">
        {/* below-the-fold sections render opacity-0 until JS reveals them;
            without JS they must simply be visible */}
        <noscript>
          <style>{`.reveal-pending{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
