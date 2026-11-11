"use client";

import {
  ArrowUpRight,
  Pause,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { books, outsideLinks, posts, records } from "@/lib/site-content";
import { InteractiveStudio } from "@/components/interactive-studio";
import { CollageImage } from "@/components/collage-image";
import {
  ArtifactMotionContext,
  FloatingArtifact,
} from "@/components/floating-artifact";
import type { ArtifactKind } from "@/components/floating-artifact";

const objects: ArtifactKind[] = [
  "star",
  "piano",
  "cursor",
  "monitor",
  "pencil",
  "guitar",
  "dice",
  "megaphone",
  "camera",
  "prism",
  "floppy",
  "stairs",
  "chair",
  "book",
  "hourglass",
  "plane",
];

export function PersonalIndex() {
  const [motion, setMotion] = useState(false);
  const motionChosen = useRef(false);
  const [arrangement, setArrangement] = useState(0);
  const [recordIndex, setRecordIndex] = useState(0);
  const [spinning, setSpinning] = useState(true);
  const record = records[recordIndex];
  const shuffle = () => setArrangement((current) => (current + 1) % 3);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (!motionChosen.current) setMotion(!preference.matches);
    };
    sync();
    preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, []);

  const changeRecord = (direction: number) =>
    setRecordIndex(
      (current) => (current + direction + records.length) % records.length,
    );

  return (
    <ArtifactMotionContext.Provider value={motion}>
      <main
        data-motion={motion}
        data-arrangement={arrangement}
        className="personal-index"
        id="top"
      >
        <header className="index-meta">
          <a className="home-mark" href="#top">
            J.C. / ALWAYS IN THE MIDDLE OF SOMETHING
          </a>
          <span className="meta-location">
            DAEJEON, KR <i className="online-dot" /> STILL HERE
          </span>
          <div className="meta-actions">
            <a href="mailto:junhyungcho@kaist.ac.kr">
              Say hello <ArrowUpRight size={14} />
            </a>
            <button
              className="icon-control"
              type="button"
              onClick={shuffle}
              aria-label="Rearrange the objects"
              title="Rearrange the objects"
            >
              <Shuffle size={17} />
            </button>
            <button
              className="icon-control"
              type="button"
              onClick={() => {
                motionChosen.current = true;
                setMotion((current) => !current);
              }}
              aria-label={motion ? "Pause animations" : "Resume animations"}
              title={motion ? "Pause animations" : "Resume animations"}
              aria-pressed={!motion}
            >
              {motion ? <Pause size={16} /> : <Play size={16} />}
            </button>
          </div>
        </header>

        <div className="collage-field">
          <div className="identity-fragment">
            <span className="micro-label">
              A PERSON, IN SEVERAL PLACES AT ONCE.
            </span>
            <h1>
              Junhyung <em>Cho.</em>
            </h1>
          </div>
          <div className="hello-fragment">
            <p>
              I study electrical engineering at KAIST. I also perform, listen
              obsessively, and write things down. Most days these are the same
              activity, seen from different sides of a table.
            </p>
            <a
              className="small-link"
              href="https://blog.naver.com/algo7112"
              target="_blank"
              rel="noreferrer"
            >
              A longer version, elsewhere <ArrowUpRight size={13} />
            </a>
          </div>
          <InteractiveStudio />
          {posts.map((post, index) => (
            <a
              key={post.href}
              id={index === 0 ? "notes" : undefined}
              className={`loose-note note-${index}`}
              href={post.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="micro-label">
                {String(index + 1).padStart(2, "0")} / A MARGINAL NOTE /{" "}
                {post.year}
              </span>
              <span className="note-title">
                {post.title} <ArrowUpRight size={23} />
              </span>
            </a>
          ))}
          <figure className="stage-fragment photograph">
            <CollageImage
              name="portrait-stage"
              width={1210}
              height={1210}
              sizes="(max-width: 600px) 68vw, 44vw"
              alt="Junhyung playing guitar under stage lights"
              eager
            />
            <figcaption>01 / OUTSIDE THE LAB / TURN IT UP.</figcaption>
            <span className="photo-handwriting">
              a little louder,
              <br />
              <em>please.</em>
            </span>
          </figure>
          <span className="side-sentence" aria-hidden="true">
            THE THINGS BETWEEN THE THINGS BETWEEN THE THINGS
          </span>
          <div className="interrupt-type" aria-hidden="true">
            meanwhile,
            <br />
            <em>elsewhere.</em>
          </div>
          <div className="record-fragment" id="desk">
            <span className="micro-label">
              SIDE A, AGAIN. / {String(recordIndex + 1).padStart(2, "0")}
            </span>
            <div className="record-artwork">
              <a
                className="record-sleeve"
                href={record.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Listen to ${record.title} by ${record.artist}`}
              >
                <img
                  src={record.image}
                  width={record.width}
                  height={record.height}
                  alt={`${record.title} album cover`}
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <div
                className={`vinyl-disc${spinning ? "" : " rotation-paused"}`}
                aria-hidden="true"
              >
                <div className="vinyl-label">
                  <img
                    src={record.image}
                    alt=""
                    width={70}
                    height={70}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="record-information">
              <div aria-live="polite">
                <h2>{record.title}</h2>
                <p>{record.artist}</p>
              </div>
              <div className="record-controls">
                <button
                  className="icon-control"
                  onClick={() => changeRecord(-1)}
                  type="button"
                  aria-label="Previous record"
                  title="Previous record"
                >
                  <SkipBack size={17} />
                </button>
                <button
                  className="icon-control"
                  onClick={() => setSpinning((current) => !current)}
                  type="button"
                  aria-label={
                    spinning
                      ? "Pause record rotation"
                      : "Resume record rotation"
                  }
                  title={
                    spinning
                      ? "Pause record rotation"
                      : "Resume record rotation"
                  }
                >
                  {spinning ? <Pause size={17} /> : <Play size={17} />}
                </button>
                <button
                  className="icon-control"
                  onClick={() => changeRecord(1)}
                  type="button"
                  aria-label="Next record"
                  title="Next record"
                >
                  <SkipForward size={17} />
                </button>
              </div>
            </div>
            <a
              className="small-link"
              href="https://rateyourmusic.com/~jHyung"
              target="_blank"
              rel="noreferrer"
            >
              The listening log <ArrowUpRight size={13} />
            </a>
          </div>
          <article className="paper-fragment" id="daytime">
            <span className="micro-label">AN UNFINISHED THOUGHT / J.C.</span>
            <h2>
              What happens
              <br />
              <em>between things?</em>
            </h2>
            <p>
              A photograph of a performance leaves out the wait before the first
              note. A clean trace leaves out the hands adjusting the apparatus.
              A book on a shelf conceals the hundred times it has been moved,
              opened, abandoned.
            </p>
            <p>
              These intervals interest me. In an exhibition, the distance
              between two objects can carry as much meaning as either object. In
              a room, that distance becomes ordinary life: a cable across the
              floor, music from the next desk, a sentence on the back of a
              receipt.
            </p>
            <p>
              Perhaps an archive should keep a little of that friction. Things
              placed together without being made to agree.
            </p>
          </article>
          <aside className="pink-fragment">
            <span className="micro-label">NOT A CONCLUSION.</span>
            <p>
              The room
              <br />
              is a <em>score.</em>
            </p>
            <span>
              Move a chair. Change the listening position. The same record
              becomes a different record.
            </span>
          </aside>
          <figure className="city-fragment photograph">
            <CollageImage
              name="portrait-city"
              width={1080}
              height={1080}
              sizes="(max-width: 600px) 46vw, 25vw"
              alt="Junhyung smiling beside a mural"
            />
            <figcaption>02 / SOMEWHERE OUTSIDE</figcaption>
          </figure>
          <div className="book-fragment">
            <span className="micro-label">LEFT OPEN, SIMULTANEOUSLY</span>
            {books.map((book) => (
              <p key={book.title}>
                <i>{book.title}</i>
                <small>{book.author}</small>
              </p>
            ))}
            <span className="book-annotation">
              Especially the one about the labyrinth.
            </span>
          </div>
          <figure className="night-fragment photograph">
            <CollageImage
              name="portrait-night"
              width={1027}
              height={1976}
              sizes="(max-width: 600px) 45vw, 26vw"
              alt="Junhyung at night, away from the desk"
            />
            <figcaption>03 / AFTER HOURS. NO FIELD NOTES.</figcaption>
          </figure>
          <article className="closing-fragment">
            <span className="micro-label">ON LIGHT, AND LOOKING</span>
            <h2>
              Not everything
              <br />
              needs a <em>frame.</em>
            </h2>
            <p>
              Working with light involves learning to look at what is almost
              invisible. The beam is easy to photograph; the alignment is not.
              The important adjustment might be a fraction of a turn, followed
              by another hour of waiting. Electrical engineering gives these
              observations a technical vocabulary.
            </p>
            <p>
              Outside the laboratory, I keep finding versions of the same
              problem. A stage rearranges our attention. A record changes the
              atmosphere of a room. A sentence makes something familiar briefly
              strange. I am interested in the apparatus, but also in the person
              standing beside it.
            </p>
            <a
              className="small-link"
              href="https://github.com/algo0419"
              target="_blank"
              rel="noreferrer"
            >
              Some of the work behind it <ArrowUpRight size={13} />
            </a>
          </article>
          <div className="running-thought" aria-hidden="true">
            <span>
              NO FINAL ARRANGEMENT / NO FINAL ARRANGEMENT / NO FINAL ARRANGEMENT
              / NO FINAL ARRANGEMENT /{" "}
            </span>
          </div>
          <p className="receipt-fragment">
            The exhibition does not stop at the edge of the work. It continues
            in the angle of a chair, the conversation leaking through a wall,
            the decision to look again. An object is never only itself; it is
            also the company it keeps.
          </p>
          {objects.map((kind, index) => (
            <div
              className={`loose-object object-${kind}`}
              key={kind}
              data-object={kind}
              style={
                {
                  "--shift-x": `${arrangement === 0 ? 0 : ((index % 3) - 1) * (arrangement === 1 ? 42 : -34)}px`,
                  "--shift-y": `${arrangement === 0 ? 0 : (index % 2 ? 1 : -1) * (arrangement === 1 ? 24 : -18)}px`,
                  "--shift-angle": `${arrangement === 0 ? 0 : (index % 2 ? -14 : 16) * arrangement}deg`,
                  "--delay": `${index * -0.39}s`,
                } as CSSProperties
              }
            >
              <FloatingArtifact
                kind={kind}
                eager={index < 4}
                onActivate={shuffle}
              />
            </div>
          ))}
          <a
            className="farewell-fragment"
            href="mailto:junhyungcho@kaist.ac.kr"
          >
            Anyway,
            <br />
            <em>say hello.</em>
            <ArrowUpRight size={72} />
          </a>
          <span className="end-scribble">to be continued...</span>
        </div>
        <footer className="index-footer">
          <span>JUNHYUNG CHO / 2026</span>
          <div className="footer-links">
            {outsideLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
              >
                {link.label}
                <ArrowUpRight size={12} />
              </a>
            ))}
          </div>
          <a href="#top">
            Back into it <ArrowUpRight size={14} />
          </a>
        </footer>
      </main>
    </ArtifactMotionContext.Provider>
  );
}
