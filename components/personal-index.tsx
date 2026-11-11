"use client";

import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Mail,
  Minus,
  Pause,
  Play,
  Plus,
  Search,
  Shuffle,
  SkipBack,
  SkipForward,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ArtifactMotionContext, FloatingArtifact } from "./floating-artifact";
import { InteractiveStudio } from "./interactive-studio";
import {
  sphereItems,
  indexItems,
  spherePosition,
} from "@/lib/spherical-content";
import type { SphereItem } from "@/lib/spherical-content";
import type { SphereController } from "@/lib/spherical-scene";
import { outsideLinks, records } from "@/lib/site-content";

function initialStyle(item: SphereItem, index: number): React.CSSProperties {
  const [x, y, z] = spherePosition(item.lon, item.lat);
  const [mx, my, mz] = spherePosition(...(item.mobile ?? [item.lon, item.lat]));
  return {
    width: item.width,
    height: item.height,
    zIndex:
      item.kind === "artifact"
        ? 20
        : item.kind === "photo"
          ? 2
          : item.kind === "room"
            ? 5
            : item.kind === "word"
              ? 35
              : 30,
    "--delay": `${-index * 0.37}s`,
    "--boot-angle": `${item.tilt}deg`,
    "--boot-x": `${x}px`,
    "--boot-y": `${-y}px`,
    "--boot-depth": `${-z}px`,
    "--boot-visible": z < -100 ? "visible" : "hidden",
    "--boot-mobile-x": `${mx}px`,
    "--boot-mobile-y": `${-my}px`,
    "--boot-mobile-depth": `${-mz}px`,
    "--boot-mobile-visible": mz < -100 ? "visible" : "hidden",
  } as React.CSSProperties;
}

function RecordObject() {
  const [index, setIndex] = useState(0);
  const record = records[index];
  return (
    <div className="record-object">
      <a
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
        />
      </a>
      <div className="record-caption">
        <span aria-live="polite">
          {record.title}
          <small>{record.artist}</small>
        </span>
        <button
          type="button"
          aria-label="Previous record"
          title="Previous record"
          onClick={() =>
            setIndex((index + records.length - 1) % records.length)
          }
        >
          <SkipBack size={17} />
        </button>
        <button
          type="button"
          aria-label="Next record"
          title="Next record"
          onClick={() => setIndex((index + 1) % records.length)}
        >
          <SkipForward size={17} />
        </button>
      </div>
    </div>
  );
}

export function PersonalIndex() {
  const root = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const controller = useRef<SphereController | null>(null);
  const latestMotion = useRef(false);
  const userChoseMotion = useRef(false);
  const [motion, setMotion] = useState(false);
  const [indexOpen, setIndexOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<SphereItem | null>(null);
  const indexDialog = useRef<HTMLDialogElement>(null);
  const readingDialog = useRef<HTMLDialogElement>(null);
  const [engineError, setEngineError] = useState(false);

  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (!userChoseMotion.current) setMotion(!preference.matches);
    };
    sync();
    preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    let cancelled = false;
    import("@/lib/spherical-scene")
      .then(({ createSphericalScene }) => {
        if (cancelled || !root.current || !canvas.current) return;
        controller.current = createSphericalScene(root.current, canvas.current);
        controller.current.setMotion(latestMotion.current);
        const hash = location.hash.slice(1);
        if (hash && hash !== "top")
          controller.current.focus(
            ({ notes: "post-0", daytime: "between" } as Record<string, string>)[
              hash
            ] ?? hash,
          );
      })
      .catch(() => {
        if (!cancelled) {
          setEngineError(true);
          setIndexOpen(true);
        }
      });
    return () => {
      cancelled = true;
      controller.current?.dispose();
      controller.current = null;
    };
  }, []);

  useEffect(() => {
    latestMotion.current = motion;
    controller.current?.setMotion(motion);
  }, [motion]);
  useEffect(() => {
    controller.current?.setSuspended(indexOpen || !!selected);
    if (indexOpen && !indexDialog.current?.open)
      indexDialog.current?.showModal();
    if (!indexOpen) indexDialog.current?.close();
    if (selected && !readingDialog.current?.open)
      readingDialog.current?.showModal();
    if (!selected) readingDialog.current?.close();
  }, [indexOpen, selected]);

  const openItem = (item: SphereItem) => setSelected(item);
  const focusItem = (item: SphereItem) => {
    setIndexOpen(false);
    if (engineError) {
      setSelected(item);
      return;
    }
    controller.current?.focus(item.id);
  };
  const filtered = indexItems.filter((item) =>
    `${item.title} ${item.body ?? ""}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );

  return (
    <ArtifactMotionContext.Provider value={motion}>
      <main className="sphere-app" data-motion={motion}>
        <h1 className="sr-only">Junhyung Cho</h1>
        <div
          className="sphere-world"
          ref={root}
          tabIndex={0}
          aria-label="Junhyung Cho's spherical personal archive"
          aria-roledescription="interactive spatial archive"
        >
          <canvas ref={canvas} className="sphere-canvas" aria-hidden="true" />
          {sphereItems.map((item, index) => (
            <div
              key={item.id}
              className={`world-node node-${item.kind} tone-${item.color ?? "ink"}`}
              data-node={item.id}
              style={initialStyle(item, index)}
            >
              {item.kind === "artifact" && (
                <FloatingArtifact
                  kind={item.artifact!}
                  eager={index < 40}
                  onActivate={() =>
                    controller.current?.turn(index % 2 ? 0.12 : -0.12, 0.05)
                  }
                />
              )}
              {item.kind === "room" && <InteractiveStudio />}
              {item.kind === "photo" && (
                <button
                  className="photo-hit"
                  type="button"
                  onClick={() => openItem(item)}
                  aria-label={`View photograph: ${item.title}`}
                  title={item.title}
                >
                  <img
                    className="photo-fallback"
                    src={item.image}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                    loading={index < 10 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </button>
              )}
              {item.kind === "word" && (
                <button
                  className={`word-fragment word-${item.id}`}
                  type="button"
                  onClick={() => openItem(item)}
                >
                  {item.title}
                </button>
              )}
              {item.kind === "note" && (
                <button
                  className={`text-fragment ${item.id.startsWith("about-") ? "personal-sentence" : ""}`}
                  type="button"
                  onClick={() => openItem(item)}
                >
                  <span>{item.title}</span>
                  {item.body && !item.id.startsWith("about-") && (
                    <p>{item.body}</p>
                  )}
                </button>
              )}
              {item.kind === "post" && (
                <a
                  className="post-fragment"
                  href={item.href}
                  target={
                    item.href?.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel="noreferrer"
                >
                  {item.title}
                  <ArrowUpRight size={20} />
                </a>
              )}
              {item.kind === "record" && <RecordObject />}
            </div>
          ))}
        </div>

        <nav className="scene-dock" aria-label="Archive controls">
          <button
            type="button"
            className="signature"
            title="Return to the opening view"
            aria-label="Return to the opening view"
            onClick={() => controller.current?.reset()}
          >
            J.C.
          </button>
          <button
            type="button"
            title="Find something"
            aria-label="Find something"
            onClick={() => setIndexOpen(true)}
          >
            <Search size={18} />
          </button>
          <span className="dock-rule" />
          <button
            type="button"
            title="Turn left"
            aria-label="Turn left"
            onClick={() => controller.current?.turn(0.2, 0)}
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            title="Turn right"
            aria-label="Turn right"
            onClick={() => controller.current?.turn(-0.2, 0)}
          >
            <ArrowRight size={18} />
          </button>
          <button
            type="button"
            className="desktop-control"
            title="Look up"
            aria-label="Look up"
            onClick={() => controller.current?.turn(0, 0.2)}
          >
            <ArrowUp size={18} />
          </button>
          <button
            type="button"
            className="desktop-control"
            title="Look down"
            aria-label="Look down"
            onClick={() => controller.current?.turn(0, -0.2)}
          >
            <ArrowDown size={18} />
          </button>
          <button
            type="button"
            title="Zoom out"
            aria-label="Zoom out"
            onClick={() => controller.current?.zoom(8)}
          >
            <Minus size={18} />
          </button>
          <button
            type="button"
            title="Zoom in"
            aria-label="Zoom in"
            onClick={() => controller.current?.zoom(-8)}
          >
            <Plus size={18} />
          </button>
          <button
            type="button"
            title="Another direction"
            aria-label="Another direction"
            onClick={() => controller.current?.shuffle()}
          >
            <Shuffle size={18} />
          </button>
          <button
            type="button"
            aria-label={motion ? "Pause motion" : "Resume motion"}
            title={motion ? "Pause motion" : "Resume motion"}
            aria-pressed={!motion}
            onClick={() => {
              userChoseMotion.current = true;
              setMotion((value) => !value);
            }}
          >
            {motion ? <Pause size={17} /> : <Play size={17} />}
          </button>
          <a
            href="mailto:junhyungcho@kaist.ac.kr"
            aria-label="Email Junhyung"
            title="Email Junhyung"
          >
            <Mail size={18} />
          </a>
        </nav>
        <a
          className="location-stamp"
          href="https://blog.naver.com/algo7112"
          target="_blank"
          rel="noreferrer"
        >
          DAEJEON, KR / STILL HERE <ArrowUpRight size={11} />
        </a>

        <dialog
          ref={indexDialog}
          className="archive-dialog"
          aria-labelledby="find-heading"
          onCancel={(event) => {
            event.preventDefault();
            setIndexOpen(false);
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) setIndexOpen(false);
          }}
        >
          <div className="dialog-topline">
            <h2 id="find-heading">Something in mind?</h2>
            <button
              type="button"
              aria-label="Close index"
              title="Close index"
              onClick={() => setIndexOpen(false)}
            >
              <X size={22} />
            </button>
          </div>
          <input
            type="search"
            aria-label="Search the archive"
            placeholder="A word, a record, a thought..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <div className="index-results">
            {filtered.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => focusItem(item)}
              >
                <span>{item.title}</span>
                <ArrowUpRight size={16} />
              </button>
            ))}
            {!filtered.length && <p>No matches.</p>}
          </div>
          <div className="outside-links">
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
        </dialog>

        <dialog
          ref={readingDialog}
          className={`reading-dialog${selected?.kind === "photo" ? " photo-dialog" : ""}`}
          aria-labelledby="reading-heading"
          onCancel={(event) => {
            event.preventDefault();
            setSelected(null);
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <div className="dialog-topline">
            <span>J.C. / A CLOSER LOOK</span>
            <button
              type="button"
              aria-label="Close reading"
              title="Close reading"
              onClick={() => setSelected(null)}
            >
              <X size={22} />
            </button>
          </div>
          {selected && (
            <>
              <h2 id="reading-heading">{selected.title}</h2>
              {selected.image ? (
                <img src={selected.image} alt={selected.title} />
              ) : (
                <p>{selected.body ?? selected.title}</p>
              )}
              {selected.href && (
                <a
                  className="reading-link"
                  href={selected.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the original <ArrowUpRight size={17} />
                </a>
              )}
            </>
          )}
        </dialog>
        <noscript>
          <div className="no-script">
            <h2>Junhyung Cho</h2>
            <p>
              Electrical engineering at KAIST. Performing, listening, and
              writing things down.
            </p>
            {outsideLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </noscript>
      </main>
    </ArtifactMotionContext.Provider>
  );
}
