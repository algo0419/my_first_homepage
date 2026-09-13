"use client";

import type {
  CSSProperties,
  PointerEvent as ReactPointerEvent,
} from "react";
import { useState } from "react";

const phases = [
  {
    number: "01 / 03",
    title: "REFRACTION IS A SOCIAL EVENT",
    note: "The beam changes because the room, the instrument, and the observer have already entered the result.",
    status: "WHITE CUBE OVERRIDDEN",
    action: "DISLOCATE THE FIELD",
  },
  {
    number: "02 / 03",
    title: "THE APPARATUS LOOKS BACK",
    note: "No observation is one-way. Every measurement quietly redraws the position from which it was made.",
    status: "VIEWER INSIDE SIGNAL PATH",
    action: "MISALIGN EVERYTHING",
  },
  {
    number: "03 / 03",
    title: "MEASUREMENT NEEDS A COSTUME",
    note: "Graphs, labels, and polished traces do not remove uncertainty; they give it an outfit suitable for public appearance.",
    status: "CALIBRATION BECOMES STAGECRAFT",
    action: "OVEREXPOSE AGAIN",
  },
];

const criticism = [
  {
    kicker: "CURATORIAL POSITION / A",
    title: "AN ARCHIVE THAT WILL NOT SIT STILL",
    body: "The interface behaves less like an archive than an exhibition under permanent installation. Every label is provisional; every border is a piece of tape pretending to be architecture.",
  },
  {
    kicker: "OPTICAL NOTE / B",
    title: "LIGHT ENTERS DISGUISED AS EVIDENCE",
    body: "It crosses lenses, monitors, stage photographs, and the polished fiction of a room, yet never settles into a neutral medium. Illumination is already an edit.",
  },
  {
    kicker: "METHOD / C",
    title: "MEASUREMENT IS CHOREOGRAPHY",
    body: "Alignment becomes posture; calibration becomes rehearsal; noise moves from technical remainder to atmospheric material. Precision has timing, fatigue, and a body.",
  },
  {
    kicker: "DISPLAY LOGIC / D",
    title: "CONTAMINATION IS THE ORGANIZING PRINCIPLE",
    body: "Research, listening, writing, and performance are allowed to alter one another here. The refusal of tidy categories is a claim about how attention is actually lived.",
  },
  {
    kicker: "SPATIAL CLAIM / E",
    title: "AGAINST THE EMPTY WHITE ROOM",
    body: "Excess interrupts the fantasy of a neutral container. Instead of guiding one clean look, the surface splits attention, reflects it, and returns it marked by use.",
  },
  {
    kicker: "VIEWER STUDY / F",
    title: "YOU ARE ALREADY IN THE CIRCUIT",
    body: "A cursor becomes another lens. A click becomes a cut in the sequence. Looking is not outside the apparatus; it is one of the apparatuses on display.",
  },
];

export function CriticalLightField() {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [burst, setBurst] = useState(0);
  const phase = phases[phaseIndex];

  const trackPointer = (event: ReactPointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    event.currentTarget.style.setProperty("--pointer-x", x.toFixed(2) + "%");
    event.currentTarget.style.setProperty("--pointer-y", y.toFixed(2) + "%");
  };

  const resetPointer = (event: ReactPointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--pointer-x", "52%");
    event.currentTarget.style.setProperty("--pointer-y", "48%");
  };

  const reconfigure = () => {
    setPhaseIndex((current) => (current + 1) % phases.length);
    setBurst((current) => current + 1);
  };

  return (
    <section
      className={"critical-light-field phase-" + phaseIndex}
      aria-label="Interactive light and criticism field"
      onPointerMove={trackPointer}
      onPointerLeave={resetPointer}
      style={
        {
          "--pointer-x": "52%",
          "--pointer-y": "48%",
        } as CSSProperties
      }
    >
      <div className="light-flash-grid" aria-hidden="true">
        {Array.from({ length: 16 }, (_, index) => (
          <i key={index} />
        ))}
      </div>

      <div className="light-ray-bank" aria-hidden="true">
        {Array.from({ length: 9 }, (_, index) => (
          <i key={index} />
        ))}
      </div>

      <div className="light-aperture" aria-hidden="true">
        <span />
      </div>

      <header className="light-field-heading">
        <div>
          <small>LIVE CRITICAL APPARATUS / {phase.number}</small>
          <h3>{phase.title}</h3>
          <p>{phase.note}</p>
        </div>
        <button type="button" onClick={reconfigure}>
          <span aria-hidden="true">++</span>
          {phase.action}
        </button>
      </header>

      <div className="light-axis-words" aria-hidden="true">
        <span>AFTERIMAGE</span>
        <span>REFRACT</span>
        <span>NOISE</span>
        <span>LOOK / LOOK AGAIN</span>
        <span>UNSTABLE EVIDENCE</span>
      </div>

      <div className="light-critical-panels" key={burst}>
        {criticism.map((panel, index) => (
          <article
            className={
              "field-panel field-panel-" + String.fromCharCode(97 + index)
            }
            key={panel.title}
          >
            <small>{panel.kicker}</small>
            <h4>{panel.title}</h4>
            <p>{panel.body}</p>
          </article>
        ))}
      </div>

      <footer className="light-field-status">
        <b className="blink">LIVE</b>
        <span aria-live="polite">{phase.status}</span>
        <span>POINTER = AUXILIARY LENS</span>
      </footer>
    </section>
  );
}
