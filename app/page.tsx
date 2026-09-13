import { books, outsideLinks, photos, posts, records } from "@/lib/site-content";

const tickerText =
  "MUSIC / BOOKS / PHOTONS / BAD JOKES / STAGE LIGHTS / OPEN TABS / ALWAYS UNDER CONSTRUCTION";

export default function HomePage() {
  return (
    <main className="chaos-site">
      <div className="status-ribbon">
        <b>JUNHYUNGCHO.NET</b>
        <span>LAST MUTATED: 12 SEP 2026</span>
        <span>FILE NO. 0419</span>
        <span className="blink">ONLINE!</span>
      </div>

      <div className="site-shell">
        <header className="masthead">
          <aside className="latest-transmission">
            <p>
              <b className="blink">NEW!</b> FROM THE BLOG
            </p>
            <a href={posts[0].href} target="_blank" rel="noreferrer">
              {posts[0].title}
            </a>
            <img
              src="/collage/wittgenstein-investigations.jpg"
              alt="Wittgenstein's Philosophical Investigations"
              width={500}
              height={386}
            />
          </aside>

          <div className="name-banner">
            <p>WELCOME TO THE INTERNET HOME OF</p>
            <h1>
              <span>JUNHYUNG</span>
              <span>CHO!</span>
            </h1>
            <small>MUSIC / NOTES / LIGHT / MISCELLANEOUS DEBRIS</small>
            <picture className="hero-object">
              <source
                media="(prefers-reduced-motion: reduce)"
                srcSet="/generated/prism-playground.png"
              />
              <img
                src="/generated/prism-spin.gif"
                alt="A spinning 3D sculpture made from colorful geometric objects"
                width={390}
                height={390}
              />
            </picture>
          </div>

          <aside className="location-box">
            <img
              src="/portraits/portrait-archive-3.jpg"
              alt="Portrait of Junhyung Cho"
              width={663}
              height={663}
            />
            <p>
              BROADCASTING FROM
              <b>DAEJEON, KOREA</b>
              <span>36.35 N / 127.38 E</span>
            </p>
          </aside>
        </header>

        <div className="ticker" aria-label={tickerText}>
          <div aria-hidden="true">
            <span>{tickerText}</span>
            <span>{tickerText}</span>
          </div>
        </div>

        <nav className="jump-links" aria-label="Jump around this page">
          <a href="#hello">HELLO</a>
          <a href="#notes">THINGS I WROTE</a>
          <a href="#room">THE FAKE ROOM</a>
          <a href="#shelf">REPEAT OFFENDERS</a>
          <a href="#day-job">DAY JOB</a>
          <a href="#proof">PHOTOGRAPHIC EVIDENCE</a>
        </nav>

        <section className="hello-grid" id="hello">
          <div className="hello-copy">
            <p className="eyebrow">YES, THIS IS A HOME PAGE.</p>
            <h2>Hello, stranger.</h2>
            <p>
              I&apos;m Junhyung Cho. I study electrical engineering at KAIST,
              perform whenever a stage appears, collect records faster than I
              can hear them, and write whenever an idea refuses to leave.
            </p>
            <p>
              This page is where those things collide. Nothing here has been
              sorted into a respectable professional category.
            </p>
          </div>

          <div className="right-now">
            <h2>RIGHT NOW:</h2>
            <dl>
              <dt>PLAYING</dt>
              <dd>Off the Wall</dd>
              <dt>READING</dt>
              <dd>Borges, again</dd>
              <dt>STARING AT</dt>
              <dd>Diamond photonics</dd>
              <dt>AVOIDING</dt>
              <dd>A reasonable bedtime</dd>
            </dl>
          </div>

          <picture className="signal-gif">
            <source
              media="(prefers-reduced-motion: reduce)"
              srcSet="/generated/signal-still.png"
            />
            <img
              src="/generated/signal-loop.gif"
              alt="Animated color bars marked signal"
              width={288}
              height={96}
            />
          </picture>
        </section>

        <section className="collision-grid" id="notes">
          <figure className="stage-panel">
            <img
              src="/portraits/portrait-stage.jpg"
              alt="Junhyung performing on stage"
              width={1210}
              height={1210}
            />
            <figcaption>
              <b>LOUD ENOUGH TO BECOME A MEMORY</b>
              <span>A photograph from somewhere under the stage lights.</span>
              <a
                href="https://rateyourmusic.com/~jHyung"
                target="_blank"
                rel="noreferrer"
              >
                ENTER THE RECORD LOG
              </a>
            </figcaption>
            <span className="live-stamp">LIVE?</span>
          </figure>

          <aside className="note-stack">
            <header>
              <span>WORDS FOUND BESIDE THE KEYBOARD</span>
              <h2>Things I wrote</h2>
            </header>
            <ol>
              {posts.map((post, index) => (
                <li key={post.href}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <a href={post.href} target="_blank" rel="noreferrer">
                    {post.title}
                  </a>
                  <small>{post.year}</small>
                </li>
              ))}
            </ol>
            <a
              className="all-notes"
              href="https://blog.naver.com/algo7112"
              target="_blank"
              rel="noreferrer"
            >
              THE LONGER, MESSIER ARCHIVE IS OVER HERE &gt;&gt;&gt;
            </a>
          </aside>
        </section>

        <div className="scream-strip" aria-hidden="true">
          <span>LISTEN</span>
          <span>LOOK</span>
          <span>READ</span>
          <span>REPEAT</span>
        </div>

        <figure className="studio-diorama" id="room">
          <img
            src="/generated/studio-diorama.png"
            alt="A colorful computer-generated music and photonics studio"
            width={1536}
            height={1024}
            loading="lazy"
          />
          <figcaption>
            <b>A COMPUTER-GENERATED LIE ABOUT MY DESK</b>
            <span>This room does not exist. The mess is emotionally accurate.</span>
          </figcaption>
          <div className="room-sticker">SYNTHS + BOOKS + LASERS</div>
        </figure>

        <section className="shelf-chaos" id="shelf">
          <div className="record-pile">
            <header>
              <small>STUCK IN THE PLAYER</small>
              <h2>Four repeat offenders</h2>
            </header>
            <div className="record-grid">
              {records.map((record) => (
                <a
                  key={record.title}
                  href={record.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={record.image}
                    alt={record.title + " by " + record.artist}
                    width={record.width}
                    height={record.height}
                    loading="lazy"
                  />
                  <b>{record.title}</b>
                  <small>{record.artist}</small>
                </a>
              ))}
            </div>
          </div>

          <div className="book-pile">
            <header>
              <small>PERMANENT RESIDENTS</small>
              <h2>Books I keep reopening</h2>
            </header>
            <div className="book-grid">
              {books.map((book) => (
                <figure key={book.title}>
                  <img
                    src={book.image}
                    alt={book.title + " by " + book.author}
                    width={book.width}
                    height={book.height}
                    loading="lazy"
                  />
                  <figcaption>
                    <b>{book.title}</b>
                    <small>{book.author}</small>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="day-job" id="day-job">
          <div className="day-job-copy">
            <p className="warning-label">DAY JOB INTERRUPTION</p>
            <img
              src="/collage/kaist-ee-logo.png"
              alt="KAIST Electrical Engineering"
              width={1920}
              height={418}
              loading="lazy"
            />
            <h2>Occasionally, the photons behave.</h2>
            <p>
              I study electrical engineering at KAIST. Lately I have been
              looking at diamond photonic circuits and BTO hybrid modulators.
              That is enough research vocabulary for one home page.
            </p>
          </div>
          <figure>
            <img
              src="/collage/loncar-diamond-circuit.jpg"
              alt="A diamond photonic circuit"
              width={750}
              height={404}
              loading="lazy"
            />
            <figcaption>ONE (1) SCIENTIFIC IMAGE, AS PROMISED.</figcaption>
          </figure>
          <div className="lab-arrow" aria-hidden="true">
            &lt;&lt;&lt; LIGHT GOES SOMEWHERE IN HERE
          </div>
        </section>

        <section className="photo-proof" id="proof">
          <header>
            <span>APPARENTLY I LEAVE THE DESK</span>
            <h2>Photographic evidence</h2>
          </header>
          <div>
            {photos.map((photo) => (
              <figure key={photo.label}>
                <img
                  src={photo.image}
                  alt={photo.label.toLowerCase()}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                />
                <figcaption>{photo.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <footer className="escape-hatches">
          <div>
            <small>ESCAPE HATCHES</small>
            <h2>The rest of the internet</h2>
          </div>
          <div className="outside-links">
            {outsideLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
          <p>
            BUILT BY HAND, THEN REBUILT AGAIN.
            <br />
            (C) 2026 JUNHYUNG CHO
          </p>
        </footer>
      </div>
    </main>
  );
}
