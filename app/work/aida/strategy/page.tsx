import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AidaNav } from "@/components/aida-nav";
import { AidaDiagram } from "@/components/aida-diagram";
import { aidaStrategy, aidaPortfolio, aidaDiagrams } from "@/lib/content";

export const metadata: Metadata = { title: aidaStrategy.title, description: aidaStrategy.introduction, alternates: { canonical: "/work/aida/strategy" } };

export default function AidaStrategy() {
  return <div className="relative z-10">
    <SiteHeader />
    <main className="mx-auto max-w-wide px-6 pb-24 pt-10">
      <Link href="/#work" className="link text-[14px]">Back to work</Link>
      <AidaNav current="/work/aida/strategy" />
      <h1 className="text-[clamp(28px,4vw,36px)] leading-[1.18] tracking-tight">{aidaStrategy.title}</h1>
      <p className="mt-4 max-w-[65ch] text-[16px] leading-[1.7] text-[#655F55]">{aidaPortfolio.ownership}</p>
      <dl className="my-8 grid gap-6 border-y border-hairline py-7 sm:grid-cols-2 sm:gap-10">
        <div><dt className="text-[14px] font-semibold">Vision</dt><dd className="mt-2 text-[23px] font-medium leading-[1.4]">{aidaStrategy.vision}</dd></div>
        <div><dt className="text-[14px] font-semibold">Mission</dt><dd className="mt-2 text-[18px] leading-[1.6]">{aidaStrategy.mission}</dd></div>
      </dl>
      <nav aria-label="On this page" className="mb-9 flex flex-wrap gap-x-5 gap-y-3 text-[13px]">
        {aidaStrategy.sections.map(section => <a key={section.id} href={`#${section.id}`} className="link">{section.title}</a>)}
      </nav>
      {aidaStrategy.sections.map(section => <section key={section.id} id={section.id} className="my-10 scroll-mt-8">
        <h2 className="text-[23px] font-medium leading-[1.35]">{section.title}</h2>
        {section.paragraphs.map(p => <p key={p} className="mt-4 max-w-[68ch] text-[16px] leading-[1.8]">{p}</p>)}
        {section.id === "advantage" && <AidaDiagram diagram={aidaDiagrams.context} />}
        {section.id === "customer" && <p className="mt-4 text-[14px]"><Link href="/work/aida" className="link">Explore the sales meeting workflow →</Link></p>}
        {section.id === "advantage" && <figure className="my-7 flex flex-col gap-6 rounded-lg border border-hairline bg-[radial-gradient(#DCD6CB_0.8px,transparent_0.8px)] bg-[size:20px_20px] p-6 sm:flex-row sm:items-center">
          <Image src="/work/aida/thumbnails/strategy.svg" alt="Shared context supports several workflows" width={336} height={228} className="w-[168px] rounded" />
          <figcaption><p className="font-medium">Help the rep → Align the team → Get work done</p><p className="mt-3 text-[14px] leading-[1.7] text-[#655F55]">{aidaStrategy.note}</p></figcaption>
        </figure>}
        {section.id === "success" && <p className="mt-4 text-[14px]"><a href="/work/aida/comparison.html" className="link">Read the product comparison →</a></p>}
      </section>)}
      <AidaNav current="/work/aida/strategy" />
    </main>
    <SiteFooter />
  </div>;
}
