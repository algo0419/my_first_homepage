import { RetroFrame } from "@/components/retro-frame";
import { writingNotes } from "@/lib/site-content";

export default function WritingPage() {
  return (
    <RetroFrame
      current="writing"
      eyebrow="writing desk"
      title="Books, essays, fragments, and detours"
      subtitle="Blog posts and reading notes arranged like a small shelf."
    >
      <section className="page-grid">
        <article className="retro-box wide-panel pink">
          <img src="/collage/bolano-detectives.jpg" alt="The Savage Detectives cover" />
          <div>
            <p className="box-kicker">Blog door</p>
            <h2>The long notes live elsewhere, but the index starts here.</h2>
            <p>
              These entries point toward essays, reviews, language notes, and
              unfinished questions that keep coming back through different
              books.
            </p>
            <a
              href="https://blog.naver.com/algo7112"
              target="_blank"
              rel="noreferrer"
            >
              Open the Naver blog
            </a>
          </div>
        </article>

        <div className="writing-list">
          {writingNotes.map((note) => (
            <a
              key={`${note.year}-${note.title}`}
              className="retro-box writing-card"
              href={note.href}
              target="_blank"
              rel="noreferrer"
            >
              <img src={note.image} alt={note.title} />
              <div>
                <p>{note.year} / {note.kind}</p>
                <h2>{note.title}</h2>
                <span>{note.note}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </RetroFrame>
  );
}
