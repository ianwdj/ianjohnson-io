import { Notebook } from "@/components/notebook/notebook";
import { SketchDefs } from "@/components/sketch-defs";
import { Hello } from "@/components/sections/hello";
import { Work } from "@/components/sections/work";
import { SectionStub } from "@/components/sections/stub";

export default function Page() {
  return (
    <main className="relative flex min-h-[100dvh] items-start justify-center px-4 py-12 sm:py-[7vh]">
      <SketchDefs />
      <Notebook
        sections={{
          hello: <Hello />,
          work: <Work />,
          words: <SectionStub num="02" title="Words & Notebooks" />,
          elsewhere: <SectionStub num="03" title="Elsewhere" />,
        }}
      />
    </main>
  );
}
