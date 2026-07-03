import { site } from "@/lib/content";

const elsewhere = [
  { label: "Substack", href: site.substackUrl },
  { label: "LinkedIn", href: site.linkedinUrl },
  { label: "Letterboxd", href: site.letterboxdUrl },
].filter((l) => l.href !== "#");

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-content px-6 py-16">
        <p className="font-serif text-[20px]">
          Say hello —{" "}
          <a href={`mailto:${site.email}`} className="link">
            {site.email}
          </a>
        </p>
        <div className="mt-6 flex gap-6 text-[15px]">
          {elsewhere.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {l.label}
            </a>
          ))}
        </div>
        <p className="meta mt-12">
          Set in Newsreader · Built with Next.js · {site.location}
        </p>
      </div>
    </footer>
  );
}
