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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {/* duotone filter for the portrait: greyscale, then map the tonal
            range onto the site palette (ink 3D3733 -> cream FAF5EE) */}
        <svg aria-hidden width="0" height="0" style={{ position: "absolute" }}>
          <filter id="warm-duotone" colorInterpolationFilters="sRGB">
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              {/* deeper shadow endpoint than ink text (#26211D) so the
                  photo keeps real contrast; highlights stay cream */}
              <feFuncR type="table" tableValues="0.149 0.980" />
              <feFuncG type="table" tableValues="0.129 0.961" />
              <feFuncB type="table" tableValues="0.114 0.933" />
            </feComponentTransfer>
          </filter>
        </svg>
        {children}
      </body>
    </html>
  );
}
