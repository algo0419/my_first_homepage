import Link from "next/link";
import { RetroFrame } from "@/components/retro-frame";
import {
  bulletinItems,
  homePanels,
  musicRecords,
  portraitStrip,
  researchFigures,
  socialLinks,
  writingNotes,
} from "@/lib/site-content";

export default function HomePage() {
  return (
    <RetroFrame
      current="home"
      eyebrow="personal front page"
      title="Hello, thanks for finding this page!"
      subtitle="A handmade index for records, essays, lab figures, and photographs."
    >
      <section className="home-board">
        <article className="retro-box intro-box span-7">
          <div>
            <p className="box-kicker">Main notice</p>
            <h2>Music, writing, and research in one noisy directory.</h2>
            <p>
              This version throws away the polished dark layout and keeps the
              archive feeling: colored cells, obvious links, real images, and
              a personal-site density that rewards wandering.
            </p>
          </div>
          <img
            src="/portraits/portrait-archive-4.jpg"
            alt="Junhyung Cho portrait"
          />
        </article>

        <aside className="retro-box tiny-news span-5">
          <p className="box-kicker">Site bulletin</p>
          <ul>
            {bulletinItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>

        {homePanels.map((panel) => (
          <Link
            key={panel.href}
            href={panel.href}
            className={`retro-box feature-box ${panel.tone} span-4`}
          >
            <img src={panel.image} alt={panel.alt} />
            <div>
              <p className="box-kicker">Click through</p>
              <h2>{panel.label}</h2>
              <p>{panel.body}</p>
            </div>
          </Link>
        ))}

        <article className="retro-box shelf-box span-6">
          <p className="box-kicker">Record pile</p>
          <div className="mini-shelf">
            {musicRecords.slice(0, 4).map((record) => (
              <a
                key={record.title}
                href={record.href}
                target="_blank"
                rel="noreferrer"
              >
                <img src={record.image} alt={`${record.artist} - ${record.title}`} />
                <span>{record.title}</span>
              </a>
            ))}
          </div>
        </article>

        <article className="retro-box links-box span-3">
          <p className="box-kicker">External links</p>
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </article>

        <article className="retro-box photo-stack span-3">
          <p className="box-kicker">Photo strip</p>
          <div>
            {portraitStrip.map((photo) => (
              <figure key={photo.src}>
                <img src={photo.src} alt={photo.alt} />
                <figcaption>{photo.label}</figcaption>
              </figure>
            ))}
          </div>
        </article>

        <article className="retro-box writing-preview span-5">
          <p className="box-kicker">Recent writing</p>
          <h2>{writingNotes[0].title}</h2>
          <p>{writingNotes[0].note}</p>
          <Link href="/writing">Open the writing desk</Link>
        </article>

        <article className="retro-box research-preview span-7">
          <img
            src={researchFigures[0].image}
            alt={researchFigures[0].title}
          />
          <div>
            <p className="box-kicker">Research shelf</p>
            <h2>{researchFigures[0].title}</h2>
            <p>{researchFigures[0].note}</p>
            <Link href="/research">See the figures</Link>
          </div>
        </article>
      </section>
    </RetroFrame>
  );
}
