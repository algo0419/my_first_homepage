"use client";

import { ArrowUpRight, Plus, X } from "lucide-react";
import { useRef, useState } from "react";
import type { CSSProperties } from "react";

const zones = [
  {
    id: "records",
    label: "Records",
    x: 14,
    y: 61,
    title: "The room remembers.",
    subtitle: "REPETITION / A LISTENING POSITION",
    color: "#ffaad5",
    notes: [
      "A shelf of records is a portrait made slowly. The order changes with the room, the season, and what somebody played last. The archive lives in that rearrangement.",
      "Remove the sleeve, cross the room, lower the needle. Listening has a choreography. The record begins before the music does, in the little preparations of the body.",
      "Repetition does not make an experience identical. The same phrase arrives in a different afternoon. After enough returns, a room becomes difficult to separate from its soundtrack.",
    ],
  },
  {
    id: "synth",
    label: "Synth",
    x: 37,
    y: 51,
    title: "A useful accident.",
    subtitle: "CONTROL / THE SOUND OF GETTING LOST",
    color: "#d9ff43",
    notes: [
      "A patch cable makes a proposition: this should connect to that. The result might be a melody, an unpleasant sound, or something that suggests a completely different question.",
      "The instrument offers control in small increments. Turn a knob and listen. Turn it back and discover that returning to a position is not the same as returning to a moment.",
      "A good session can end with nothing saved. What survives is a new habit of hearing, and the suspicion that the mistake was more interesting than the plan.",
    ],
  },
  {
    id: "crt",
    label: "Screen",
    x: 61,
    y: 34,
    title: "Looking at looking.",
    subtitle: "A DISPLAY / A CERTAIN DISTANCE",
    color: "#a6f1ff",
    notes: [
      "A waveform turns time into something the eye can follow. It also makes an editorial choice. Scale, color, and the edges of a screen decide how uncertainty will appear.",
      "In an exhibition, a monitor is an object before it is an image. Its weight, hum, and small pool of light change the position of the viewer. The display has a body.",
      "Here, the old screen stands for a familiar temptation: to mistake a beautiful representation for an explanation. Sometimes it is enough to keep that distinction in view.",
    ],
  },
  {
    id: "light",
    label: "Light",
    x: 82,
    y: 48,
    title: "Almost invisible.",
    subtitle: "LIGHT / THE WORK BEFORE THE IMAGE",
    color: "#ffb65c",
    notes: [
      "Light reaches an instrument after a series of small negotiations. A lens is moved, a surface cleaned, a cable checked. None of this appears in the elegance of the final trace.",
      "The optical table is a stage with an exceptionally patient audience. A fraction of a turn changes the result. The gesture is tiny; the attention it demands is not.",
      "To show the apparatus is to admit that seeing takes work. The image does not arrive alone. It arrives with the room, the instrument, and the person leaning over the table.",
    ],
  },
] as const;

export function InteractiveStudio() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [lastIndex, setLastIndex] = useState(0);
  const pointerType = useRef("mouse");
  const shownZone = zones[activeIndex ?? lastIndex];
  const open = (index: number) => {
    setLastIndex(index);
    setActiveIndex(index);
  };
  const close = () => setActiveIndex(null);

  return (
    <figure
      className={"room-fragment" + (activeIndex !== null ? " room-active" : "")}
      id="room"
      onKeyDown={(event) => {
        if (event.key === "Escape") close();
      }}
    >
      <div className="room-image">
        <img
          src="/generated/studio-diorama.png"
          width={1536}
          height={1024}
          alt="An imagined studio filled with records, a synthesizer, a CRT monitor and an optical table"
        />
        {zones.map((zone, index) => (
          <button
            key={zone.id}
            type="button"
            className="room-spot"
            style={{ left: zone.x + "%", top: zone.y + "%" }}
            aria-label={"Inspect " + zone.label.toLowerCase()}
            aria-expanded={activeIndex === index}
            aria-controls="room-popup"
            data-active={activeIndex === index}
            onPointerEnter={(event) => {
              if (event.pointerType !== "touch") open(index);
            }}
            onPointerLeave={(event) => {
              if (event.pointerType !== "touch") close();
            }}
            onPointerDown={(event) => {
              pointerType.current = event.pointerType;
            }}
            onFocus={(event) => {
              if (event.currentTarget.matches(":focus-visible")) open(index);
            }}
            onBlur={close}
            onClick={() => {
              if (pointerType.current === "touch" && activeIndex === index)
                close();
              else open(index);
            }}
          >
            <Plus size={19} strokeWidth={1.5} />
            <span>{zone.label}</span>
          </button>
        ))}
      </div>
      <figcaption>
        <span>AN IMAGINED ROOM / A REAL SET OF PREOCCUPATIONS</span>
        <span>
          04 OBJECTS <ArrowUpRight size={13} />
        </span>
      </figcaption>
      <span className="room-handwriting">
        make yourself
        <br />
        <em>at home.</em>
      </span>
      <div
        className={"room-popup" + (activeIndex !== null ? " popup-open" : "")}
        id="room-popup"
        role="region"
        aria-label={shownZone.title}
        aria-hidden={activeIndex === null}
        style={{ "--popup-color": shownZone.color } as CSSProperties}
      >
        <div className="popup-metadata">
          <span>{shownZone.subtitle}</span>
          <span>
            {String((activeIndex ?? lastIndex) + 1).padStart(2, "0")} / 04
          </span>
        </div>
        <h2>{shownZone.title}</h2>
        <div className="popup-columns">
          {shownZone.notes.map((note, index) => (
            <p key={note}>
              <span>({String(index + 1).padStart(2, "0")})</span>
              {note}
            </p>
          ))}
        </div>
        <div className="popup-checker" aria-hidden="true" />
      </div>
      {activeIndex !== null && (
        <button
          type="button"
          className="room-dismiss icon-control"
          onClick={close}
          aria-label="Close room note"
          title="Close room note"
        >
          <X size={16} />
        </button>
      )}
      <span className="room-live-status" aria-live="polite">
        {activeIndex === null ? "" : shownZone.title}
      </span>
    </figure>
  );
}
