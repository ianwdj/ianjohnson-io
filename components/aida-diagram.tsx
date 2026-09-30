import Image from "next/image";

export function AidaDiagram({ diagram }: { diagram: { src: string; alt: string; caption: string } }) {
  return <figure className="my-8">
    <a href={diagram.src} aria-label={`Open full-size diagram: ${diagram.alt}`} className="block overflow-hidden rounded-lg border border-hairline focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink">
      <Image src={diagram.src} alt={diagram.alt} width={1440} height={900} loading="eager" className="h-auto w-full" />
    </a>
    <figcaption className="mt-3 text-[14px] leading-[1.65] text-[#655F55]">
      {diagram.caption}
      <a href={diagram.src} className="link mt-2 block">Open full-size diagram</a>
    </figcaption>
  </figure>;
}
