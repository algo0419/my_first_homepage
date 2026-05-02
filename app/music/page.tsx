import { RetroFrame } from "@/components/retro-frame";
import { musicRecords } from "@/lib/site-content";

export default function MusicPage() {
  return (
    <RetroFrame
      current="music"
      eyebrow="listening room"
      title="Records, stage photos, and repeat plays"
      subtitle="A loud shelf of albums and live fragments."
    >
      <section className="page-grid">
        <article className="retro-box wide-panel yellow">
          <img src="/portraits/portrait-stage.jpg" alt="Junhyung on stage" />
          <div>
            <p className="box-kicker">Live room</p>
            <h2>Performance photos sit next to the records.</h2>
            <p>
              The page treats music as a messy archive: album covers, live
              documents, and the kind of notes that only make sense after one
              more listen.
            </p>
          </div>
        </article>

        <div className="record-grid">
          {musicRecords.map((record) => (
            <a
              key={`${record.artist}-${record.title}`}
              className="retro-box record-card"
              href={record.href}
              target="_blank"
              rel="noreferrer"
            >
              <img src={record.image} alt={`${record.artist} - ${record.title}`} />
              <div>
                <p>{record.year}</p>
                <h2>{record.title}</h2>
                <strong>{record.artist}</strong>
                <span>{record.note}</span>
              </div>
            </a>
          ))}
        </div>

        <article className="retro-box link-directory cyan">
          <p className="box-kicker">Jump out</p>
          <a
            href="https://rateyourmusic.com/~jHyung"
            target="_blank"
            rel="noreferrer"
          >
            Rate Your Music archive
          </a>
          <a
            href="https://open.spotify.com/"
            target="_blank"
            rel="noreferrer"
          >
            Spotify
          </a>
        </article>
      </section>
    </RetroFrame>
  );
}
