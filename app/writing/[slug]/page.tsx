import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { essays, site } from "@/lib/content";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function generateStaticParams() {
  return essays.map((essay) => ({ slug: essay.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const essay = essays.find((e) => e.slug === params.slug);
  if (!essay) return {};
  return {
    title: essay.title,
    description: essay.summary,
    alternates: essay.canonicalUrl ? { canonical: essay.canonicalUrl } : undefined,
  };
}

export default async function EssayPage({
  params,
}: {
  params: { slug: string };
}) {
  const essay = essays.find((e) => e.slug === params.slug);
  if (!essay) notFound();

  let Body: React.ComponentType;
  try {
    Body = (await import(`@/content/essays/${params.slug}.mdx`)).default;
  } catch {
    notFound();
  }

  return (
    <div className="relative z-10">
      <SiteHeader />
      <main className="mx-auto max-w-content px-6 pb-24 pt-20 sm:pb-32">
        <p className="meta">
          <time dateTime={essay.date}>{essay.displayDate}</time>
        </p>
        <h1 className="mt-4 font-serif text-[clamp(30px,5vw,40px)] leading-[1.2] tracking-tight">
          {essay.title}
        </h1>
        <div className="prose-letter mt-10">
          <Body />
        </div>
        <p className="mt-14 border-t border-hairline pt-8 text-[15px] text-putty">
          {essay.canonicalUrl && (
            <>
              Originally published on{" "}
              <a
                href={essay.canonicalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Substack
              </a>
              {" · "}
            </>
          )}
          <Link href="/#writing" className="link">
            More writing
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
