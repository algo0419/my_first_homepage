"use client";

import type { CSSProperties } from "react";
import { useState } from "react";

type StudioZone = {
  id: string;
  label: string;
  title: string;
  note: string;
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
    x: 14,
    y: 61,
    scale: 1.42,
  },
  {
    id: "synth",
    label: "SYNTH",
    title: "PATCH-CABLE WEATHER SYSTEM",
    note: "A knob gets turned. Three hours disappear. Nothing is saved.",
    x: 37,
    y: 51,
    scale: 1.48,
  },
  {
    id: "screen",
    label: "CRT",
    title: "GREEN SIGNAL DETECTED",
    note: "The screen insists this waveform is important. I choose to believe it.",
    x: 61,
    y: 34,
    scale: 1.52,
  },
  {
    id: "optics",
    label: "LIGHT",
    title: "PHOTONS, ALLEGEDLY",
    note: "Tiny lenses, large tables, and a suspicious amount of alignment.",
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
