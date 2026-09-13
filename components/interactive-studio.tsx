"use client";

import type { CSSProperties } from "react";
import { useState } from "react";

type StudioZone = {
  id: string;
  label: string;
  title: string;
  note: string;
  criticism: {
    kicker: string;
    title: string;
    body: string;
  }[];
  x: number;
  y: number;
  scale: number;
};

const zones: StudioZone[] = [
  {
    id: "records",
    label: "RECORDS",
    title: "THE REPEAT-OFFENDER SHELF",
    note: "Records migrate from the shelf to the floor and rarely make the return trip.",
    criticism: [
      {
        kicker: "DISPLAY NOTE 01",
        title: "THE ARCHIVE PERFORMS INTIMACY",
        body: "A shelf is never neutral storage. It is a portrait assembled through recurrence, omission, and the soft coercion of taste.",
      },
      {
        kicker: "FORMAT / FETISH",
        title: "OWNERSHIP BECOMES CHOREOGRAPHY",
        body: "The hand removes a sleeve, crosses the room, lowers a needle, and briefly mistakes ritual for control.",
      },
      {
        kicker: "LISTENING POSITION",
        title: "REPETITION PRODUCES A ROOM",
        body: "The same record returns until architecture and memory become impossible to separate.",
      },
    ],
    x: 14,
    y: 61,
    scale: 1.42,
  },
  {
    id: "synth",
    label: "SYNTH",
    title: "PATCH-CABLE WEATHER SYSTEM",
    note: "A knob gets turned. Three hours disappear. Nothing is saved.",
    criticism: [
      {
        kicker: "CONTROL SURFACE",
        title: "AGENCY, WITH PATCH CABLES",
        body: "The instrument promises command while continuously rerouting intention into accident, delay, and audible residue.",
      },
      {
        kicker: "TEMPORAL STUDY",
        title: "A KNOB IS A SMALL CLOCK",
        body: "Every adjustment divides before from after. The composition emerges as a pile of irreversible decisions.",
      },
      {
        kicker: "FAILURE MODE: USEFUL",
        title: "NOISE REFUSES THE SUPPORTING ROLE",
        body: "What calibration names as error returns here as texture, argument, and occasionally the entire point.",
      },
    ],
    x: 37,
    y: 51,
    scale: 1.48,
  },
  {
    id: "screen",
    label: "CRT",
    title: "GREEN SIGNAL DETECTED",
    note: "The screen insists this waveform is important. I choose to believe it.",
    criticism: [
      {
        kicker: "LIVE FEED / DEAD MEDIA",
        title: "THE AFTERIMAGE CLOCKS IN",
        body: "The obsolete display does not retrieve the past; it recruits nostalgia as an active production technology.",
      },
      {
        kicker: "SIGNAL POLITICS",
        title: "LEGIBILITY IS STAGED",
        body: "A waveform behaves less like evidence than a costume worn by uncertainty for the duration of the exhibition.",
      },
      {
        kicker: "VIEWING DISTANCE",
        title: "THE SCREEN LOOKS BACK GREEN",
        body: "Attention becomes measurable only after the body has already leaned toward the glow.",
      },
    ],
    x: 61,
    y: 34,
    scale: 1.52,
  },
  {
    id: "optics",
    label: "LIGHT",
    title: "PHOTONS, ALLEGEDLY",
    note: "Tiny lenses, large tables, and a suspicious amount of alignment.",
    criticism: [
      {
        kicker: "APPARATUS / WITNESS",
        title: "LIGHT ARRIVES WITH CONDITIONS",
        body: "It is routed, filtered, delayed, and only then permitted to appear as if it had simply revealed itself.",
      },
      {
        kicker: "CALIBRATION THEATRE",
        title: "PRECISION HAS A BACKSTAGE",
        body: "Alignment is a performance of patience whose labor disappears inside the elegance of the final trace.",
      },
      {
        kicker: "MATERIAL PROPOSITION",
        title: "THE BEAM IS ALSO A BORDER",
        body: "It separates visible from inferred, event from instrument, and the measured world from the story told about it.",
      },
    ],
    x: 82,
    y: 48,
    scale: 1.46,
  },
];

export function InteractiveStudio() {
  const [selected, setSelected] = useState<StudioZone | null>(null);
  const [preview, setPreview] = useState<StudioZone | null>(null);
  const active = preview ?? selected;

  const focusStyle = {
    "--focus-x": (active?.x ?? 50) + "%",
    "--focus-y": (active?.y ?? 50) + "%",
    "--focus-scale": String(active?.scale ?? 1),
  } as CSSProperties;

  return (
    <figure
      className={"studio-diorama" + (active ? " is-focused" : "")}
      id="room"
      style={focusStyle}
    >
      <div className="studio-viewport">
        <img
          src="/generated/studio-diorama.png"
          alt="A colorful computer-generated music and photonics studio"
          width={1536}
          height={1024}
          loading="lazy"
        />
        <div className="studio-scanline" aria-hidden="true" />
        <div className="studio-chatter" aria-hidden="true">
          <span>APERTURE / MEMORY</span>
          <span>SIGNAL SEEKS BODY</span>
          <span>OBJECTS REFUSE LABELS</span>
          <span>ROOM TONE: UNSTABLE</span>
          <span>ARCHIVE IN PROGRESS</span>
          <span>LOOK AGAIN / LOOK WRONG</span>
        </div>
        {zones.map((zone) => (
          <button
            className="studio-hotspot"
            key={zone.id}
            style={{ left: zone.x + "%", top: zone.y + "%" }}
            type="button"
            aria-label={"Inspect " + zone.label.toLowerCase()}
            aria-pressed={selected?.id === zone.id}
            data-active={active?.id === zone.id ? "true" : "false"}
            onMouseEnter={() => setPreview(zone)}
            onMouseLeave={() => setPreview(null)}
            onFocus={() => setPreview(zone)}
            onBlur={() => setPreview(null)}
            onClick={() =>
              setSelected((current) => (current?.id === zone.id ? null : zone))
            }
          >
            <span aria-hidden="true">+</span>
            <b>{zone.label}</b>
          </button>
        ))}
      </div>

      {active && (
        <div className="studio-panel-burst" key={active.id}>
          {active.criticism.map((fragment, index) => (
            <article
              className={"studio-essay-panel studio-essay-" + (index + 1)}
              key={fragment.title}
            >
              <small>{fragment.kicker}</small>
              <h3>{fragment.title}</h3>
              <p>{fragment.body}</p>
            </article>
          ))}
        </div>
      )}

      <figcaption key={active?.id ?? "overview"}>
        <b>{active?.title ?? "A COMPUTER-GENERATED LIE ABOUT MY DESK"}</b>
        <span>
          {active?.note ??
            "This room does not exist. The mess is emotionally accurate."}
        </span>
        {selected && (
          <button type="button" onClick={() => setSelected(null)}>
            RESET VIEW
          </button>
        )}
      </figcaption>

      <div className="room-sticker">
        {active ? "FOCUS: " + active.label : "SYNTHS + BOOKS + LASERS"}
      </div>
      <div className="studio-mode" aria-hidden="true">
        {active ? "LOCK / " + active.id.toUpperCase() : "HOVER OR CLICK THE +"}
      </div>
    </figure>
  );
}
