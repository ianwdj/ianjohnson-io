import { aidaPortfolio } from "@/lib/content";

export function AidaNav({ current }: { current: string }) {
  return <nav aria-label="Aida portfolio" className="aida-nav">
    {aidaPortfolio.entries.map((entry) => <a key={entry.href} href={entry.href} aria-current={entry.href === current ? "page" : undefined}>
      {entry.title === "The Last Mile of Sales Coaching" ? "Sales coaching" : entry.title}
    </a>)}
  </nav>;
}
