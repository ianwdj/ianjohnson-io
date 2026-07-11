import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { meetingStack, meetingNodes } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: meetingStack.title,
  description: meetingStack.intro,
};

export default function MeetingStackCaseStudy() {
  return (
    <div className="relative z-10">
      <SiteHeader />
      <main className="mx-auto max-w-content px-6 pb-16 pt-12 sm:pb-24">
        <p className="meta">Case study · Aida · 2024–now</p>
        <h1 className="mt-4 font-serif text-[clamp(30px,5vw,40px)] leading-[1.2] tracking-tight">
          {meetingStack.title}
        </h1>
        <p className="mt-6 text-[19px] leading-[1.65] [text-wrap:pretty]">
          {meetingStack.intro}
        </p>

        <a
          href={meetingStack.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 block overflow-hidden rounded-lg border border-hairline no-underline transition-colors duration-300 ease-slow can-hover:hover:border-coral/40"
        >
          <Image
            src="/work/meeting-canvas.png"
            alt="The interactive canvas: the full sales meeting journey, with layers for the decisions and the architecture"
            width={1400}
            height={875}
            loading="eager"
            className="w-full"
          />
          <span className="flex items-baseline justify-between gap-4 border-t border-hairline bg-cream-deep px-6 py-4">
            <span className="font-serif text-[18px] transition-colors duration-300 group-hover:text-coral-deep">
              Explore the interactive version
              <span aria-hidden className="ml-2 text-[15px] text-putty">
                ↗
              </span>
            </span>
            <span className="meta hidden sm:inline">
              Three layers · journey · decisions · architecture
            </span>
          </span>
        </a>

        <div className="mt-16 flex flex-col gap-16">
          {meetingNodes.map((node) => (
            <section key={node.id}>
              <p className="meta">
                {String(node.index).padStart(2, "0")} · {node.kicker}
              </p>
              <h2 className="mt-2 font-serif text-[26px] leading-tight">
                {node.title}
              </h2>
              <p className="mt-3 text-[19px] leading-[1.65]">{node.problem}</p>
              {node.whyHard.map((para) => (
                <p key={para.slice(0, 24)} className="mt-4 leading-[1.65] text-ink">
                  {para}
                </p>
              ))}
              <div className="mt-6 grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="meta">What worked</p>
                  <ul className="mt-3 flex list-disc flex-col gap-2 pl-5">
                    {node.worked.map((item) => (
                      <li key={item.slice(0, 24)} className="leading-[1.6]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="meta">What failed</p>
                  <ul className="mt-3 flex list-disc flex-col gap-2 pl-5">
                    {node.failed.map((item) => (
                      <li key={item.slice(0, 24)} className="leading-[1.6]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-6 border-l-2 border-coral pl-5 font-serif text-[20px] leading-[1.5] text-ink-strong">
                {node.lesson}
              </p>
              <p className="meta mt-4 normal-case tracking-normal">
                Still open: {node.openQuestion}
              </p>
            </section>
          ))}
        </div>

        <p className="mt-16 border-t border-hairline pt-8 text-[15px] text-putty">
          <Link href="/#work" className="link">
            Back to work
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
