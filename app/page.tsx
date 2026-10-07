import Image from "next/image";
import { books } from "../data/books";
import { site } from "../data/site";

// Used until a book has its own buyUrl in data/books.ts.
function amazonSearch(title: string) {
  const query = encodeURIComponent(`${title} ${site.author}`);
  return `https://www.amazon.co.uk/s?k=${query}`;
}

export default function Home() {
  return (
    <>
      <header className="hero">
        <nav className="nav" aria-label="Main">
          <a href="#about">About</a>
          <a href="#books">Books</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="hero-text">
          <h1>{site.author}</h1>
          <p>{site.tagline}</p>
        </div>

        <ul className="shelf">
          {books.map((book) => (
            <li key={book.slug}>
              <a href={`#${book.slug}`}>
                <Image
                  src={book.cover}
                  alt={`${book.title} cover`}
                  width={book.width}
                  height={book.height}
                  priority
                />
              </a>
            </li>
          ))}
        </ul>
      </header>

      <main>
        <section id="about" className="about">
          <div className="wrap about-grid">
            <Image
              className="portrait"
              src="/images/author.png"
              alt={`Illustrated portrait of ${site.author}`}
              width={1024}
              height={1024}
              sizes="(max-width: 720px) 60vw, 320px"
            />
            <div>
              <h2>About {site.author}</h2>
              {site.bio.length > 0 ? (
                site.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
              ) : (
                <p className="pending">Bio coming soon.</p>
              )}
            </div>
          </div>
        </section>

        <section id="books" className="books">
          <div className="wrap">
            <h2>Books</h2>
            <ul className="book-list">
              {books.map((book) => (
                <li key={book.slug} id={book.slug} className="book">
                  <Image
                    src={book.cover}
                    alt=""
                    width={book.width}
                    height={book.height}
                  />
                  <div>
                    <h3>{book.title}</h3>
                    <p className="meta">
                      {book.series ? `${book.series}, ${book.year}` : book.year}
                    </p>
                    {book.blurb ? (
                      book.blurb
                        .split(/\n\s*\n/)
                        .map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                    ) : (
                      <p className="pending">Blurb coming soon.</p>
                    )}
                    <div className="actions">
                      <a className="button" href={book.buyUrl || amazonSearch(book.title)}>
                        Buy {book.title}
                      </a>
                      {book.audiobookUrl && (
                        <a className="button secondary" href={book.audiobookUrl}>
                          Get the audiobook
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer id="contact" className="contact">
        <div className="wrap">
          <h2>Get in touch</h2>
          {site.email ? (
            <a className="email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          ) : (
            <p className="pending">Contact details coming soon.</p>
          )}
          {site.socials.length > 0 && (
            <ul className="socials">
              {site.socials.map((social) => (
                <li key={social.url}>
                  <a href={social.url}>{social.label}</a>
                </li>
              ))}
            </ul>
          )}
          <p className="copyright">
            © {new Date().getFullYear()} {site.author}
          </p>
        </div>
      </footer>
    </>
  );
}
