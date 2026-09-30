"use client";

import { useState } from "react";
import { aidaDemos } from "@/lib/content";

export function AidaDemo() {
  const [selected, setSelected] = useState(0);
  const clip = aidaDemos.clips[selected];
  return <figure id="product-demo" className="my-8 scroll-mt-8">
    <h3 className="mb-4 text-[20px] font-medium">{aidaDemos.title}</h3>
    <video key={clip.file} controls playsInline preload="metadata" poster={`/work/aida/demos/${clip.file}_poster.png`} className="block aspect-video w-full rounded-lg border border-hairline bg-cream-deep" aria-label={clip.description}>
      <source src={`/work/aida/demos/${clip.file}.mp4`} type="video/mp4" />
      <a href={`/work/aida/demos/${clip.file}.mp4`}>Watch the recording</a>
    </video>
    <div role="group" aria-label="Choose a demo recording" className="mt-3 flex flex-wrap gap-x-5 gap-y-2 border-b border-hairline">
      {aidaDemos.clips.map((item, index) => <button key={item.file} type="button" aria-pressed={index === selected} onClick={() => setSelected(index)} className={`min-h-[44px] border-b-2 py-2 text-[14px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink ${index === selected ? "border-ink text-ink" : "border-transparent text-[#655F55]"}`}>{item.label}</button>)}
    </div>
    <p aria-live="polite" className="mt-3 text-[14px] leading-[1.65]">{clip.description}</p>
    <figcaption className="mt-2 text-[14px] leading-[1.65] text-[#655F55]">{aidaDemos.caption}</figcaption>
  </figure>;
}
