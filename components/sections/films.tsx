import { films, filmsTitle, site } from "@/lib/content";
import { Reveal } from "@/components/reveal";

/* One scrollable row of film posters — Ian's "you should watch these" picks.
   Same muted-at-rest / alive-on-hover treatment as the bookshelf. The row
   bleeds to the section padding edge so a cut-off poster hints at scroll. */
export function FilmsSection() {
  if (films.length === 0) return null;
  return (
    <section
      id="watching"
      className="mx-auto max-w-wide scroll-mt-16 px-6 py-24 sm:py-32"
    >
      <Reveal>
        <div className="flex items-baseline justify-between gap-4">
          <p className="meta">{filmsTitle}</p>
          <a
            href={site.letterboxdListUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link meta"
          >
            My watchlist on Letterboxd →
          </a>
        </div>
      </Reveal>
      <Reveal>
        <ul className="film-row -mx-6 mt-10 flex gap-5 overflow-x-auto px-6 pb-2">
          {films.map((film) => (
            <li key={film.poster} className="shrink-0">
              <a
                href={film.href}
                target="_blank"
                rel="noopener noreferrer"
                title={film.title}
                className="book-cover block"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/films/${film.poster}.jpg`}
                  alt={film.title}
                  height={200}
                  loading="lazy"
                  className="h-[176px] w-auto rounded-[3px] sm:h-[200px]"
                />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
