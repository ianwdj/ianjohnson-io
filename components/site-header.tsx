import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";

/* No nav: the page is one tight column now, everything is a short scroll
   away. The portrait lives here at stamp size so the hero stays all text. */
export function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-wide items-center gap-3 px-6 pt-8">
      <Link href="/" className="flex items-center gap-3 no-underline">
        <Image
          src="/portrait.jpg"
          alt=""
          width={40}
          height={40}
          priority
          className="portrait-duotone rounded-full"
        />
        <span className="flex flex-col">
          <span className="font-serif text-[17px] font-medium leading-tight text-ink-strong">
            {site.name}
          </span>
          <span className="font-serif text-[13.5px] leading-tight text-putty">
            {site.tagline}
          </span>
        </span>
      </Link>
    </header>
  );
}
