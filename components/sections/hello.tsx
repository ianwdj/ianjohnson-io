import { bookmarks, cover } from "@/lib/content";

const PENCIL_TONE: Record<string, string> = {
  blue: "text-pencil-blue",
  orange: "text-pencil-orange",
  green: "text-pencil-green",
  red: "text-pencil-red",
};

function BookmarkGlyph({ name }: { name: string }) {
  // small hand-drawn pencil marks, color inherited (currentColor)
  switch (name) {
    case "Letterboxd":
      return (
        <svg className="sketch h-3.5 w-7" viewBox="0 0 60 24" aria-hidden="true">
          <g filter="url(#rough-soft)" data-stroke strokeWidth="1.7">
            <circle cx="12" cy="12" r="8" />
            <circle cx="30" cy="12" r="8" />
            <circle cx="48" cy="12" r="8" />
          </g>
        </svg>
      );
    case "Substack":
      return (
        <svg className="sketch h-3.5 w-3.5" viewBox="0 0 24 24" aria-hidden="true">
          <g filter="url(#rough-soft)" data-stroke strokeWidth="1.8">
            <path d="M4 6 H20 M4 12 H20 M4 12 L12 20 L20 12" />
          </g>
        </svg>
      );
    case "LinkedIn":
      return (
        <svg className="sketch h-3.5 w-3.5" viewBox="0 0 24 24" aria-hidden="true">
          <g filter="url(#rough-soft)" data-stroke strokeWidth="1.7">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <line x1="8" y1="11" x2="8" y2="17" />
            <circle cx="8" cy="7.4" r="0.6" />
            <path d="M12 17 V11 M12 13 Q12.5 11 15 11 Q17 11 17 14 V17" />
          </g>
        </svg>
      );
    default: // volt.fm
      return (
        <svg className="sketch h-3.5 w-3.5" viewBox="0 0 24 24" aria-hidden="true">
          <g filter="url(#rough-soft)" data-stroke strokeWidth="1.8">
            <path d="M14 2 L5 13 H11 L9 22 L19 9 H13 L14 2 Z" />
          </g>
        </svg>
      );
  }
}

export function Hello() {
  return (
    <div className="flex min-h-[592px] flex-col">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
        {cover.volume}
      </p>

      <div className="mt-auto">
        <h1 className="font-serif text-[clamp(46px,9vw,76px)] font-normal leading-[1.02] tracking-[-0.02em] text-ink">
          {cover.name}
        </h1>
        <p className="mt-3 font-serif text-lg italic text-ink-soft">
          {cover.location}
        </p>
      </div>

      <div className="mt-auto pt-12">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute">
          Elsewhere
        </p>
        <ul className="flex flex-wrap gap-x-7 gap-y-3">
          {bookmarks.map((b) => (
            <li key={b.label}>
              <a
                href={b.href}
                className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft transition-colors duration-150 hover:text-ink"
              >
                <span className={PENCIL_TONE[b.color]}>
                  <BookmarkGlyph name={b.label} />
                </span>
                <span className="border-b border-dotted border-ink-mute/60 pb-px group-hover:border-ink">
                  {b.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* quiet annotation pointing up at the tabs */}
      <div className="pointer-events-none absolute -top-2 right-2 hidden rotate-2 items-center gap-1 text-pencil-graphite sm:flex">
        <span className="font-hand text-[22px] leading-none">start here</span>
        <svg className="sketch h-8 w-9" viewBox="0 0 40 34" aria-hidden="true">
          <g filter="url(#rough)" data-stroke stroke="currentColor" strokeWidth="1.3">
            <path d="M4 30 Q 10 14 24 8 Q 30 6 36 5" />
            <path d="M36 5 L29 4 M36 5 L33 12" />
          </g>
        </svg>
      </div>

      {/* embossed monogram, bottom-right */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 flex h-10 w-10 items-center justify-center rounded-full"
        style={{
          boxShadow:
            "inset 0 1px 2px rgba(0,0,0,0.16), inset 0 -1px 1px rgba(255,255,255,0.35)",
        }}
      >
        <span className="font-serif text-sm text-ink-mute/70">
          {cover.monogram}
        </span>
      </div>
    </div>
  );
}
