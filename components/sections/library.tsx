import { library, libraryTitle, site } from "@/lib/content";
import { Reveal } from "@/components/reveal";

/* A shelf of book covers from Ian's Goodreads "read" list. Covers are
   self-hosted (public/library/), muted at rest and full color on hover,
   aligned on their bottom edge so they read as a real shelf. */
export function LibrarySection() {
  if (library.length === 0) return null;
  return (
    <section
      id="reading"
      className="mx-auto max-w-wide scroll-mt-16 px-6 py-24 sm:py-32"
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
      <Reveal>
        <ul className="mt-10 flex flex-wrap items-end gap-x-5 gap-y-8">
          {library.map((book) => (
            <li key={book.cover}>
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
                  height={132}
                  loading="lazy"
                  className="h-[116px] w-auto rounded-[3px] sm:h-[132px]"
                />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
