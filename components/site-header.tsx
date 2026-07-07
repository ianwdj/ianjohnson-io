import Link from "next/link";
import { site } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-wide items-baseline justify-between px-6 pt-10">
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
        <a href={`mailto:${site.email}`} className="link">
          Say hello
        </a>
      </nav>
    </header>
  );
}
