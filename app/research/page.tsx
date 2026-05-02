import { RetroFrame } from "@/components/retro-frame";
import { researchFigures } from "@/lib/site-content";

export default function ResearchPage() {
  return (
    <RetroFrame
      current="research"
      eyebrow="research shelf"
      title="Diamond photonics, BTO, and device figures"
      subtitle="A compact board for lab references and visual anchors."
    >
      <section className="page-grid">
        <article className="retro-box wide-panel cyan">
          <img
            className="logo-fit"
            src="/collage/kaist-ee-logo.png"
            alt="KAIST Electrical Engineering"
          />
          <div>
            <p className="box-kicker">Lab shelf</p>
            <h2>Figures first, explanation second.</h2>
            <p>
              This shelf keeps the recurring visual material close: diamond
              structures, hybrid modulation, fabrication sequences, and the
              device diagrams that make the papers easier to re-enter.
            </p>
          </div>
        </article>

        <div className="figure-grid">
          {researchFigures.map((figure) => (
            <a
              key={figure.title}
              className="retro-box figure-card"
              href={figure.href}
              target="_blank"
              rel="noreferrer"
            >
              <img src={figure.image} alt={figure.title} />
              <div>
                <p>Figure link</p>
                <h2>{figure.title}</h2>
                <span>{figure.note}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </RetroFrame>
  );
}
