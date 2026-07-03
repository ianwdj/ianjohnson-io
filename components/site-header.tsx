import Link from "next/link";
import { site } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-content items-baseline justify-between px-6 pt-10">
      <Link
        href="/"
        className="font-serif text-[17px] font-medium text-ink-strong no-underline"
      >
        {site.name}
      </Link>
      <nav className="flex items-baseline gap-6 text-[15px]">
        <a href="/#work" className="link">
          Work
        </a>
        <a href="/#writing" className="link">
          Writing
        </a>
        <a
          href={site.substackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Substack
        </a>
      </nav>
    </header>
  );
}
