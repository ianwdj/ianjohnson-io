import type { Metadata } from "next";
import { Source_Serif_4, JetBrains_Mono, Caveat } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const serif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-mono",
});
const hand = Caveat({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600"],
  variable: "--font-hand",
});

export const metadata: Metadata = {
  title: "Ian Johnson",
  description: "Ian Johnson — product, AI, San Francisco.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${serif.variable} ${mono.variable} ${hand.variable}`}
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
