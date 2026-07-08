import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  return (
    <div className="relative z-10">
      <SiteHeader />
      <main className="mx-auto max-w-content px-6 pb-24 pt-20 sm:pb-32">
        <p className="meta">404</p>
        <h1 className="mt-4 font-serif text-[clamp(30px,5vw,40px)] leading-[1.2] tracking-tight">
          Nothing here.
        </h1>
        <p className="mt-6 max-w-[480px] text-[17px] leading-[1.65] text-ink">
          Wrong link, or a page that moved. Either way, not this one.
        </p>
        <p className="mt-10 border-t border-hairline pt-8 text-[15px]">
          <Link href="/" className="link">
            Back home
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
