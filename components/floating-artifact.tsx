"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties, PointerEvent } from "react";

type ArtifactKind = "knot" | "guitar" | "monitor" | "book";

const artifacts = {
  knot: {
    image: "chrome-knot",
    label: "Twist the chrome knot",
    caption: "A TANGLED THOUGHT",
    alt: "Inflatable chrome knot threaded with a red cable",
  },
  guitar: {
    image: "folded-guitar",
    label: "Bend the guitar",
    caption: "BENT OUT OF SHAPE",
    alt: "Cobalt resin guitar with an impossible zigzag neck",
  },
  monitor: {
    image: "signal-monitor",
    label: "Change the channel",
    caption: "STAY TUNED",
    alt: "Hot pink CRT showing a spiraling checkerboard",
  },
  book: {
    image: "exploded-book",
    label: "Turn the paper sculpture",
    caption: "LOOSE LEAVES",
    alt: "Red book with pages unfolding into a paper turbine",
  },
};

export function FloatingArtifact({ kind }: { kind: ArtifactKind }) {
  const [turn, setTurn] = useState(0);
  const artifact = artifacts[kind];

  const followPointer = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--lean-x",
      `${((event.clientX - bounds.left) / bounds.width - 0.5) * 18}px`,
    );
    event.currentTarget.style.setProperty(
      "--lean-y",
      `${((event.clientY - bounds.top) / bounds.height - 0.5) * 18}px`,
    );
  };

  return (
    <button
      type="button"
      className={`floating-artifact artifact-${kind}`}
      aria-label={artifact.label}
      title={artifact.label}
      data-phase={turn % 3}
      style={
        {
          "--artifact-turn": `${kind === "monitor" ? [0, -8, 8][turn % 3] : turn * (kind === "book" ? 90 : 35)}deg`,
        } as CSSProperties
      }
      onClick={() => setTurn((current) => current + 1)}
      onPointerMove={followPointer}
      onPointerLeave={(event) => {
        event.currentTarget.style.setProperty("--lean-x", "0px");
        event.currentTarget.style.setProperty("--lean-y", "0px");
      }}
    >
      <span className="artifact-drift">
        <span className="artifact-turn">
          <Image
            src={`/generated/${artifact.image}.png`}
            alt={artifact.alt}
            width={1254}
            height={1254}
            sizes="(max-width: 760px) 200px, 340px"
            priority={kind === "knot" || kind === "monitor"}
            draggable={false}
          />
        </span>
      </span>
      <span className="artifact-caption">
        {kind === "monitor"
          ? `CHANNEL ${String((turn % 3) + 1).padStart(2, "0")} / ${artifact.caption}`
          : artifact.caption}
      </span>
    </button>
  );
}
