"use client";

import Image from "next/image";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { CSSProperties, PointerEvent } from "react";

export const ArtifactMotionContext = createContext(true);

const artifacts = {
  star: {
    image: "mechanical-star",
    label: "Spin the mechanical star",
    caption: "A DIFFERENT ANGLE",
    alt: "Intersecting silver, cobalt and pink stars with a square mechanical hub",
  },
  prism: {
    image: "angular-prism",
    label: "Turn the glass prisms",
    caption: "LIGHT, REARRANGED",
    alt: "Angular cyan glass prisms crossed by blue, yellow and pink plates",
  },
  chair: {
    image: "checker-chair",
    label: "Tilt the checkerboard chair",
    caption: "TAKE A DIFFERENT SEAT",
    alt: "Folded checkerboard chair with blue and yellow slab legs",
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
  piano: {
    image: "folded-piano",
    label: "Spin the folded piano",
    caption: "OFF KEY",
    alt: "Cobalt piano with a folded keyboard and pink lid",
  },
  megaphone: {
    image: "yellow-megaphone",
    label: "Spin the megaphone",
    caption: "A LITTLE LOUDER",
    alt: "Yellow angular megaphone with a checkerboard horn",
  },
  camera: {
    image: "prism-camera",
    label: "Spin the glass camera",
    caption: "ANOTHER EXPOSURE",
    alt: "Transparent blue camera with a faceted lens and pink viewfinder",
  },
  cursor: {
    image: "chrome-cursor",
    label: "Spin the chrome cursor",
    caption: "POINT TAKEN",
    alt: "Pixelated silver mouse pointer with a pink edge",
  },
  stairs: {
    image: "checker-stairs",
    label: "Spin the impossible stairs",
    caption: "TAKE THE LONG WAY",
    alt: "Crossing checkerboard staircases with colored slab supports",
  },
  pencil: {
    image: "zigzag-pencil",
    label: "Spin the folded pencil",
    caption: "A CHANGE OF DIRECTION",
    alt: "Yellow pencil folded into sharp right angles",
  },
  dice: {
    image: "glass-dice",
    label: "Roll the glass dice",
    caption: "ANOTHER POSSIBILITY",
    alt: "Three translucent colorful dice balanced corner to corner",
  },
  floppy: {
    image: "floppy-totem",
    label: "Spin the floppy disks",
    caption: "SAVE SOMETHING",
    alt: "A tilted stack of pink, cyan and yellow floppy disks",
  },
  hourglass: {
    image: "pixel-hourglass",
    label: "Turn the pixel hourglass",
    caption: "GIVE IT A MOMENT",
    alt: "Angular glass hourglass with yellow pixel grains",
  },
  plane: {
    image: "folded-plane",
    label: "Launch the folded plane",
    caption: "ELSEWHERE, PLEASE",
    alt: "Folded metallic paper plane with blue and pink panels",
  },
};

export type ArtifactKind = keyof typeof artifacts;
type Preview = { left: number; top: number; size: number; src: string };

export function FloatingArtifact({
  kind,
  compact = false,
  onActivate,
}: {
  kind: ArtifactKind;
  compact?: boolean;
  onActivate?: () => void;
}) {
  const [turn, setTurn] = useState(0);
  const [preview, setPreview] = useState<Preview | null>(null);
  const motion = useContext(ArtifactMotionContext);
  const previewRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLSpanElement>(null);
  const artifact = artifacts[kind];
  const rotation = turn * 756;
  const caption =
    kind === "monitor"
      ? `CHANNEL ${String((turn % 3) + 1).padStart(2, "0")} / ${artifact.caption}`
      : artifact.caption;

  useEffect(() => {
    if (motion) return;
    impactRef.current
      ?.getAnimations()
      .forEach((animation) => animation.cancel());
    previewRef.current
      ?.querySelector(".artifact-impact")
      ?.getAnimations()
      .forEach((animation) => animation.cancel());
  }, [motion]);

  useEffect(() => {
    if (!preview) return;
    const close = () => setPreview(null);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("scroll", close, true);
    window.addEventListener("resize", close);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
      window.removeEventListener("keydown", onKey);
    };
  }, [preview]);

  const openPreview = (button: HTMLButtonElement) => {
    const image = button.querySelector("img");
    if (!image?.complete || !image.naturalWidth) return;
    const bounds = button.getBoundingClientRect();
    const size = Math.min(
      Math.max(bounds.width * 2.1, 330),
      570,
      window.innerWidth - 40,
      window.innerHeight - 64,
    );
    setPreview({
      size,
      left: Math.max(
        20,
        Math.min(
          bounds.left + bounds.width / 2 - size / 2,
          window.innerWidth - size - 20,
        ),
      ),
      top: Math.max(
        24,
        Math.min(
          bounds.top + bounds.height / 2 - size / 2,
          window.innerHeight - size - 40,
        ),
      ),
      src: image.currentSrc || image.src,
    });
  };

  const activate = () => {
    setTurn((current) => current + 1);
    if (motion) {
      const target =
        previewRef.current?.querySelector(".artifact-impact") ??
        impactRef.current;
      target?.getAnimations().forEach((animation) => animation.cancel());
      target?.animate(
        [{ scale: "1" }, { scale: "1.14", offset: 0.2 }, { scale: "1" }],
        { duration: 520, easing: "cubic-bezier(.15,.8,.25,1)" },
      );
    }
    onActivate?.();
  };

  const followPointer = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const target = previewRef.current ?? event.currentTarget;
    target.style.setProperty(
      "--lean-x",
      `${((event.clientX - bounds.left) / bounds.width - 0.5) * 32}px`,
    );
    target.style.setProperty(
      "--lean-y",
      `${((event.clientY - bounds.top) / bounds.height - 0.5) * 32}px`,
    );
  };

  return (
    <>
      <button
        type="button"
        className={`floating-artifact artifact-${kind}`}
        aria-label={artifact.label}
        title={artifact.label}
        data-phase={turn % 3}
        data-preview={Boolean(preview)}
        data-turn={turn}
        data-compact={compact}
        style={
          {
            "--artifact-turn": `${rotation}deg`,
          } as CSSProperties
        }
        onClick={activate}
        onPointerEnter={(event) => {
          if (event.pointerType !== "touch") openPreview(event.currentTarget);
        }}
        onFocus={(event) => {
          if (event.currentTarget.matches(":focus-visible"))
            openPreview(event.currentTarget);
        }}
        onBlur={() => setPreview(null)}
        onPointerMove={followPointer}
        onPointerLeave={(event) => {
          setPreview(null);
          event.currentTarget.style.setProperty("--lean-x", "0px");
          event.currentTarget.style.setProperty("--lean-y", "0px");
        }}
      >
        <span className="artifact-drift">
          <span className="artifact-turn">
            <span className="artifact-impact" ref={impactRef}>
              <Image
                src={`/generated/${artifact.image}.png`}
                alt={artifact.alt}
                width={1254}
                height={1254}
                sizes={compact ? "340px" : "(max-width: 760px) 200px, 340px"}
                priority={kind === "star" || kind === "monitor"}
                draggable={false}
              />
            </span>
          </span>
        </span>
        <span className="artifact-caption">{caption}</span>
      </button>
      {preview &&
        createPortal(
          <div
            ref={previewRef}
            className="artifact-preview"
            data-motion={motion}
            data-kind={kind}
            data-phase={turn % 3}
            aria-hidden="true"
            style={
              {
                left: preview.left,
                top: preview.top,
                width: preview.size,
                height: preview.size,
                "--artifact-turn": `${rotation}deg`,
              } as CSSProperties
            }
          >
            <div className="artifact-preview-reveal">
              <div className="artifact-preview-lean">
                <div className="artifact-preview-turn">
                  <span className="artifact-impact">
                    <img src={preview.src} alt="" draggable={false} />
                  </span>
                </div>
              </div>
              <span className="artifact-preview-caption">{caption}</span>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
