import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/hero";
import { WorkSection } from "@/components/sections/work";
import { ThinkingSection } from "@/components/sections/thinking";
import { WritingSection } from "@/components/sections/writing";
import { ElsewhereSection } from "@/components/sections/elsewhere";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="relative z-10">
      <SiteHeader />
      <main>
        <Hero />
        <WorkSection />
        <ThinkingSection />
        <WritingSection />
        <ElsewhereSection />
      </main>
      <SiteFooter />
    </div>
  );
}
