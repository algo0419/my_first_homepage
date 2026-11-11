"use client";

import { useContext, useLayoutEffect, useRef, useState } from "react";
import {
  ArtifactMotionContext,
  FloatingArtifact,
  type ArtifactKind,
} from "./floating-artifact";

const initialOrder: ArtifactKind[] = [
  "piano",
  "cursor",
  "megaphone",
  "dice",
  "camera",
  "stairs",
  "plane",
  "pencil",
  "floppy",
  "hourglass",
];

export function ObjectParade() {
  const [order, setOrder] = useState(initialOrder);
  const root = useRef<HTMLDivElement>(null);
  const previous = useRef(new Map<string, DOMRect>());
  const motion = useContext(ArtifactMotionContext);

  const shuffle = () => {
    root.current
      ?.querySelectorAll<HTMLElement>("[data-object]")
      .forEach((element) => {
        previous.current.set(
          element.dataset.object!,
          element.getBoundingClientRect(),
        );
        element.getAnimations().forEach((animation) => animation.cancel());
      });
    setOrder((current) => [...current.slice(3), ...current.slice(0, 3)]);
  };

  useLayoutEffect(() => {
    if (!motion) {
      previous.current.clear();
      return;
    }
    // FLIP keeps each object and its focus while the grid order changes beneath it.
    root.current
      ?.querySelectorAll<HTMLElement>("[data-object]")
      .forEach((element, index) => {
        const from = previous.current.get(element.dataset.object!);
        if (!from) return;
        const to = element.getBoundingClientRect();
        element.animate(
          [
            {
              transform: `translate(${from.left - to.left}px, ${from.top - to.top}px) rotate(${index % 2 ? -16 : 16}deg)`,
            },
            { transform: "translate(0, 0) rotate(0deg)" },
          ],
          { duration: 650 + index * 18, easing: "cubic-bezier(.18,.8,.25,1)" },
        );
      });
    previous.current.clear();
    return () => {
      root.current
        ?.querySelectorAll<HTMLElement>("[data-object]")
        .forEach((element) =>
          element.getAnimations().forEach((animation) => animation.cancel()),
        );
    };
  }, [order, motion]);

  return (
    <div className="object-parade" ref={root}>
      {order.map((kind) => (
        <div className="parade-slot" data-object={kind} key={kind}>
          <FloatingArtifact kind={kind} compact onActivate={shuffle} />
        </div>
      ))}
    </div>
  );
}
