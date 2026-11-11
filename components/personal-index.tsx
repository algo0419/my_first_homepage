"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  Pause,
  Play,
  RotateCcw,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { useState } from "react";
import { books, outsideLinks, posts, records } from "@/lib/site-content";
import { InteractiveStudio } from "@/components/interactive-studio";
import { FloatingArtifact } from "@/components/floating-artifact";

export function PersonalIndex() {
  const [motion, setMotion] = useState(true);
  const [recordIndex, setRecordIndex] = useState(0);
  const [spinning, setSpinning] = useState(true);
  const [objectVersion, setObjectVersion] = useState(0);
  const record = records[recordIndex];

  const changeRecord = (direction: number) => {
    setRecordIndex(
      (current) => (current + direction + records.length) % records.length,
    );
  };

  return (
    <main className={"personal-index" + (motion ? "" : " movement-stopped")}>
      <header className="index-header">
        <div className="index-meta">
          <a className="home-mark" href="#top">
            J.C. / PERSONAL INDEX
          </a>
          <span>
            DAEJEON, KR <i className="online-dot" /> STILL HERE
          </span>
          <div className="meta-actions">
            <a href="mailto:junhyungcho@kaist.ac.kr">
              Get in touch <ArrowUpRight size={13} />
            </a>
            <button
              className="icon-control"
              type="button"
              onClick={() => setMotion((current) => !current)}
              aria-label={motion ? "Pause animations" : "Resume animations"}
              title={motion ? "Pause animations" : "Resume animations"}
              aria-pressed={!motion}
            >
              {motion ? <Pause size={14} /> : <Play size={14} />}
            </button>
          </div>
        </div>
        <div className="nameplate" id="top">
          <h1>
            Junhyung <em>Cho</em>
            <span className="name-period">.</span>
          </h1>
          <FloatingArtifact kind="knot" />
        </div>
        <div className="index-colophon">
          <span>Some things I do. Some things I keep coming back to.</span>
          <a href="#desk">
            An open desk <ArrowDownRight size={15} />
          </a>
          <span>VOL. 02 &nbsp; / &nbsp; NOVEMBER 2026</span>
        </div>
      </header>

      <div className="interference-strip" aria-hidden="true">
        <div>
          {[0, 1, 2, 3].map((copy) => (
            <span key={copy}>
              SOME ASSEMBLY REQUIRED <i>////</i> EVERYTHING IS CONNECTED{" "}
              <i>////</i> PLEASE DISTURB <i>////</i>{" "}
            </span>
          ))}
        </div>
      </div>

      <div className="index-spread">
        <div className="hello-fragment">
          <span className="micro-label">HELLO, YOU FOUND ME.</span>
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
            A longer version, somewhere else <ArrowUpRight size={13} />
          </a>
        </div>

        <div className="loose-notes" id="notes">
          <div className="fragment-label">
            <span>RECENT MARGINALIA</span>
            <span>01 &mdash; 05</span>
          </div>
          {posts.map((post, index) => (
            <a
              href={post.href}
              key={post.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="note-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{post.title}</span>
              <ArrowUpRight size={16} />
            </a>
          ))}
        </div>

        <div className="monitor-fragment">
          <FloatingArtifact kind="monitor" />
        </div>

        <figure className="stage-fragment photograph">
          <img
            src="/portraits/portrait-stage.jpg"
            width={1210}
            height={1210}
            alt="Junhyung playing guitar under stage lights"
            fetchPriority="high"
          />
          <figcaption>
            <span>01 / OUTSIDE THE LAB</span>
            <span>TURN IT UP.</span>
          </figcaption>
          <span className="photo-handwriting">
            a little louder,
            <br />
            please.
          </span>
          <FloatingArtifact kind="guitar" />
        </figure>

        <InteractiveStudio />
        <div className="crossing-type" aria-hidden="true">
          off the <em>record</em>
        </div>

        <div className="record-fragment" id="desk">
          <div className="fragment-label">
            <span>IN CONSTANT ROTATION</span>
            <span>{String(recordIndex + 1).padStart(2, "0")} / 04</span>
          </div>
          <div className="record-artwork">
            <a
              className="record-sleeve"
              key={record.title}
              href={record.href}
              target="_blank"
              rel="noreferrer"
              aria-label={"Listen to " + record.title + " by " + record.artist}
            >
              <img
                src={record.image}
                width={record.width}
                height={record.height}
                alt={record.title + " album cover"}
              />
            </a>
            <div
              className={"vinyl-disc" + (spinning ? "" : " rotation-paused")}
              aria-hidden="true"
            >
              <div className="vinyl-label">
                <img src={record.image} alt="" />
              </div>
            </div>
            <span className="record-speed">
              33 1/3 RPM
              <br />
              SIDE A, AGAIN
            </span>
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
                  spinning ? "Pause record rotation" : "Resume record rotation"
                }
                title={
                  spinning ? "Pause record rotation" : "Resume record rotation"
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
          <div className="fragment-label">
            <span>AN UNFINISHED THOUGHT</span>
            <span>J.C. / 2026</span>
          </div>
          <h2>
            What happens
            <br />
            <em>between things?</em>
          </h2>
          <p>
            A photograph of a performance leaves out the wait before the first
            note. A clean trace leaves out the hands adjusting the apparatus. A
            book on a shelf conceals the hundred times it has been moved,
            opened, abandoned.
          </p>
          <p>
            These intervals interest me. In an exhibition, the distance between
            two objects can carry as much meaning as either object. In a room,
            that distance becomes ordinary life: a cable across the floor, music
            from the next desk, a sentence written on the back of a receipt.
          </p>
          <p>
            Perhaps a personal archive should keep a little of that friction.
            Things placed together without being made to agree.
          </p>
          <span className="paper-footnote">A NOTE, NOT A CONCLUSION.</span>
        </article>

        <button
          type="button"
          className="object-fragment"
          onClick={() => setObjectVersion((current) => current + 1)}
          aria-label="Turn the sculpture"
          title="Turn the sculpture"
        >
          <picture
            style={{ transform: `rotate(${objectVersion * 90 - 9}deg)` }}
          >
            <source
              media="(prefers-reduced-motion: reduce)"
              srcSet="/generated/prism-playground.png"
            />
            <img
              src={
                motion
                  ? "/generated/prism-spin.gif"
                  : "/generated/prism-playground.png"
              }
              width={390}
              height={390}
              alt="A rotating chrome, glass and colored plastic sculpture"
            />
          </picture>
          <span className="object-caption">
            AN OBJECT WITH NO JOB <RotateCcw size={13} />
          </span>
        </button>

        <aside className="pink-fragment">
          <span className="micro-label">STUDIO NOTE / 02</span>
          <p>
            The room
            <br />
            is a <em>score.</em>
          </p>
          <span>
            Move a chair. Change the listening position. The same record becomes
            a different record.
          </span>
        </aside>

        <figure className="city-fragment photograph">
          <img
            src="/portraits/portrait-city.jpg"
            width={1080}
            height={1080}
            alt="Junhyung smiling beside a mural"
            loading="lazy"
          />
          <figcaption>
            <span>02 / A CHANGE OF SCENE</span>
            <span>OFFLINE, MOSTLY.</span>
          </figcaption>
        </figure>

        <div className="book-fragment">
          <span className="micro-label">OPEN AT THE SAME TIME</span>
          <p className="book-intro">
            A few books
            <br />
            <em>that never leave.</em>
          </p>
          {books.map((book, index) => (
            <div className="book-line" key={book.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <i>{book.title}</i>
                <small>{book.author}</small>
              </div>
            </div>
          ))}
          <span className="book-annotation">
            Especially the one about the labyrinth.
          </span>
        </div>

        <figure className="night-fragment photograph">
          <img
            src="/portraits/portrait-night.jpg"
            width={1027}
            height={1976}
            alt="Junhyung at night, away from the desk"
            loading="lazy"
          />
          <figcaption>
            <span>03 / AFTER HOURS</span>
            <span>NO FIELD NOTES.</span>
          </figcaption>
        </figure>

        <article className="closing-fragment">
          <span className="micro-label">ON LIGHT, AND LOOKING</span>
          <h2>
            Not everything
            <br />
            needs a <em>frame.</em>
          </h2>
          <div className="closing-columns">
            <p>
              Working with light involves learning to look at what is almost
              invisible. The beam is easy to photograph; the alignment is not.
              The important adjustment might be a fraction of a turn, followed
              by another hour of waiting. At KAIST, electrical engineering gives
              these observations a technical vocabulary.
            </p>
            <p>
              Outside the laboratory, I keep finding versions of the same
              problem. A stage rearranges our attention. A record changes the
              atmosphere of a room. A sentence makes something familiar briefly
              strange. I am interested in the apparatus, but also in the person
              standing beside it.
            </p>
          </div>
          <a
            className="small-link"
            href="https://github.com/algo0419"
            target="_blank"
            rel="noreferrer"
          >
            Some of the work behind it <ArrowUpRight size={13} />
          </a>
        </article>
        <span className="margin-word" aria-hidden="true">
          to be continued
        </span>
        <div className="paper-object-fragment">
          <FloatingArtifact kind="book" />
        </div>
      </div>

      <footer className="index-footer">
        <a className="footer-email" href="mailto:junhyungcho@kaist.ac.kr">
          Let's talk.
          <ArrowUpRight size={40} />
        </a>
        <div className="footer-links">
          {outsideLinks
            .filter((link) => !link.href.startsWith("mailto:"))
            .map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
                <ArrowUpRight size={12} />
              </a>
            ))}
        </div>
        <div className="footer-colophon">
          <span>JUNHYUNG CHO / 2026</span>
          <a href="#top">
            Back to the beginning <ArrowUpRight size={12} />
          </a>
          <span>END OF PAGE. NOT THE END OF IT.</span>
        </div>
      </footer>
    </main>
  );
}
