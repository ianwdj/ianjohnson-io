import { libraryGroups, libraryTitle, site } from "@/lib/content";
import { Reveal } from "@/components/reveal";

/* Two labeled shelves of book covers from Ian's Goodreads "read" list, each
   a horizontally scrolling row (same treatment as the film row). Covers are
   self-hosted (public/library/), muted at rest and full color on hover. */
export function LibrarySection() {
  if (libraryGroups.length === 0) return null;
  return (
    <section
      id="reading"
      className="mx-auto max-w-wide scroll-mt-16 px-6 py-10"
    >
      <Reveal>
        <div className="flex items-baseline justify-between gap-4">
          <p className="meta">{libraryTitle}</p>
          <a
            href={site.goodreadsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link meta"
          >
            Full shelf on Goodreads →
          </a>
        </div>
      </Reveal>
      {libraryGroups.map((group) => (
        <Reveal key={group.label}>
          <p className="mt-6 font-serif text-[17px] italic text-putty">
            {group.label}
          </p>
          <ul className="film-row -mx-6 mt-3 flex gap-5 overflow-x-auto px-6 pb-2">
            {group.books.map((book) => (
              <li key={book.cover} className="shrink-0">
                <a
                  href={book.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={book.title}
                  className="book-cover block"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/library/${book.cover}.jpg`}
                    alt={book.title}
                    height={160}
                    loading="lazy"
                    className="h-[140px] w-auto rounded-[3px] sm:h-[160px]"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </section>
  );
}
