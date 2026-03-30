"use client";

import Link from "next/link";
import { type PointerEvent, useRef } from "react";

type FloatingCard = {
  href: string;
  src: string;
  alt: string;
  external?: boolean;
  x: number;
  y: number;
  w: number;
  h: number;
  rotate: number;
  fit?: "cover" | "contain";
};

const cards: FloatingCard[] = [
  { href: "/music", src: "/collage/off-the-wall.jpg", alt: "Off the Wall", x: 4, y: 8, w: 15, h: 21, rotate: -8 },
  { href: "/music", src: "/collage/yeezus.jpg", alt: "Yeezus", x: 18, y: 26, w: 12, h: 15, rotate: 9 },
  { href: "/music", src: "/collage/for-lovers.jpg", alt: "For Lovers", x: 29, y: 6, w: 13, h: 18, rotate: -7 },
  { href: "/music", src: "/collage/blonde.jpg", alt: "Blonde", x: 42, y: 5, w: 13, h: 17, rotate: 6 },
  { href: "/music", src: "/collage/loveless.jpg", alt: "Loveless", x: 55, y: 12, w: 12, h: 15, rotate: -9 },
  { href: "/music", src: "/collage/discovery.jpg", alt: "Discovery", x: 67, y: 5, w: 13, h: 17, rotate: 7 },
  { href: "/music", src: "/collage/kind-of-blue.jpg", alt: "Kind of Blue", x: 80, y: 10, w: 12, h: 15, rotate: -6 },
  { href: "/writing", src: "/collage/borges-ficciones.jpg", alt: "Ficciones", x: 7, y: 31, w: 14, h: 20, rotate: 5 },
  { href: "/writing", src: "/collage/calvino-winter.jpg", alt: "If on a winter's night a traveler", x: 21, y: 18, w: 13, h: 18, rotate: -10 },
  { href: "/writing", src: "/collage/bolano-detectives.jpg", alt: "The Savage Detectives", x: 34, y: 24, w: 12, h: 17, rotate: 8 },
  { href: "/writing", src: "/collage/sartre-nausea.jpg", alt: "Nausea", x: 47, y: 18, w: 13, h: 18, rotate: -7 },
  { href: "/writing", src: "/collage/kafka-trial.jpg", alt: "The Trial", x: 60, y: 24, w: 13, h: 18, rotate: 9 },
  { href: "/writing", src: "/collage/fight-club.jpg", alt: "Fight Club", x: 74, y: 24, w: 13, h: 18, rotate: -5 },
  { href: "/writing", src: "/collage/pulp-fiction.jpg", alt: "Pulp Fiction", x: 85, y: 35, w: 12, h: 17, rotate: 6 },
  { href: "https://www.kaist.ac.kr/en/", external: true, src: "/collage/kaist-ee-logo.png", alt: "KAIST EE Logo", x: 70, y: 2, w: 21, h: 9, rotate: 2, fit: "contain" },
  { href: "/research", src: "/collage/loncar-fig1.jpg", alt: "Loncar fig1", x: 76, y: 51, w: 16, h: 13, rotate: -4, fit: "contain" },
  { href: "/research", src: "/collage/loncar-fig2.jpg", alt: "Loncar fig2", x: 4, y: 53, w: 15, h: 13, rotate: 7, fit: "contain" },
  { href: "/research", src: "/collage/loncar-fig3.jpg", alt: "Loncar fig3", x: 19, y: 47, w: 16, h: 13, rotate: -5, fit: "contain" },
  { href: "/research", src: "/collage/loncar-diamond-circuit.jpg", alt: "Loncar circuit", x: 34, y: 43, w: 21, h: 14, rotate: 4, fit: "contain" },
  { href: "/research", src: "/collage/bto-phase.jpg", alt: "BTO phase", x: 55, y: 39, w: 20, h: 14, rotate: -3, fit: "contain" },
  { href: "/research", src: "/collage/bto-fig1.jpg", alt: "BTO fig1", x: 73, y: 64, w: 15, h: 13, rotate: 8, fit: "contain" },
  { href: "/research", src: "/collage/bto-fig3.jpg", alt: "BTO fig3", x: 45, y: 58, w: 16, h: 13, rotate: -7, fit: "contain" },
  { href: "/research", src: "/collage/bto-fig5.jpg", alt: "BTO fig5", x: 61, y: 56, w: 16, h: 13, rotate: 5, fit: "contain" },
  { href: "/research", src: "/collage/diamond-structures.jpg", alt: "Diamond structures", x: 83, y: 57, w: 16, h: 14, rotate: -4, fit: "contain" },
  { href: "/research", src: "/collage/fab-fig1.jpg", alt: "Fabrication fig1", x: 8, y: 70, w: 16, h: 12, rotate: 7, fit: "contain" },
  { href: "/research", src: "/collage/fab-fig2.jpg", alt: "Fabrication fig2", x: 24, y: 70, w: 16, h: 12, rotate: -5, fit: "contain" },
  { href: "/research", src: "/collage/fab-fig5.jpg", alt: "Fabrication fig5", x: 40, y: 72, w: 16, h: 12, rotate: 4, fit: "contain" },
  { href: "/research", src: "/collage/nihms-f1.jpg", alt: "NIHMS fig1", x: 56, y: 72, w: 15, h: 12, rotate: -8, fit: "contain" },
  { href: "/research", src: "/collage/nihms-f2.jpg", alt: "NIHMS fig2", x: 70, y: 72, w: 14, h: 12, rotate: 6, fit: "contain" },
  { href: "/research", src: "/collage/nihms-f3.jpg", alt: "NIHMS fig3", x: 83, y: 73, w: 13, h: 11, rotate: -4, fit: "contain" },
  { href: "/research", src: "/collage/nihms-f4.jpg", alt: "NIHMS fig4", x: 32, y: 33, w: 12, h: 11, rotate: 4, fit: "contain" },
  { href: "/research", src: "/collage/nat25-fig1.jpg", alt: "Nature 2025 fig1", x: 53, y: 31, w: 12, h: 10, rotate: -5, fit: "contain" },
  { href: "/research", src: "/collage/nat25-fig2.jpg", alt: "Nature 2025 fig2", x: 64, y: 32, w: 12, h: 10, rotate: 5, fit: "contain" },
  { href: "/research", src: "/collage/nat20-fig1.jpg", alt: "Nature 2020 fig1", x: 13, y: 18, w: 11, h: 11, rotate: -7, fit: "contain" },
  { href: "/research", src: "/collage/nat20-fig2.jpg", alt: "Nature 2020 fig2", x: 87, y: 23, w: 11, h: 11, rotate: 7, fit: "contain" },
  { href: "/research", src: "/collage/srep-f1.jpg", alt: "Scientific Reports fig1", x: 2, y: 42, w: 11, h: 11, rotate: 5, fit: "contain" },
  { href: "/research", src: "/collage/srep-f2.jpg", alt: "Scientific Reports fig2", x: 89, y: 53, w: 10, h: 11, rotate: -6, fit: "contain" },
  { href: "/research", src: "/portraits/portrait-night.jpg", alt: "Junhyung portrait", x: 42, y: 34, w: 14, h: 23, rotate: 2 },
  { href: "/music", src: "/portraits/portrait-stage.jpg", alt: "Junhyung stage portrait", x: 91, y: 5, w: 9, h: 12, rotate: 11 },
  { href: "/writing", src: "/portraits/portrait-city.jpg", alt: "Junhyung city portrait", x: 23, y: 1, w: 10, h: 13, rotate: -11 },
  { href: "/music", src: "/portraits/portrait-archive-1.jpg", alt: "Junhyung portrait archive 1", x: 2, y: 80, w: 10, h: 14, rotate: -10 },
  { href: "/writing", src: "/portraits/portrait-archive-2.jpg", alt: "Junhyung portrait archive 2", x: 13, y: 80, w: 11, h: 14, rotate: 7 },
  { href: "/music", src: "/portraits/portrait-archive-3.jpg", alt: "Junhyung portrait archive 3", x: 26, y: 79, w: 10, h: 13, rotate: -5 },
  { href: "/research", src: "/portraits/portrait-archive-4.jpg", alt: "Junhyung portrait archive 4", x: 37, y: 80, w: 11, h: 14, rotate: 9 },
  { href: "/writing", src: "/portraits/portrait-archive-5.jpg", alt: "Junhyung portrait archive 5", x: 50, y: 80, w: 10, h: 14, rotate: -8 },
  { href: "/music", src: "/portraits/portrait-archive-6.jpg", alt: "Junhyung portrait archive 6", x: 62, y: 79, w: 11, h: 15, rotate: 6 },
  { href: "/research", src: "/portraits/portrait-archive-7.jpg", alt: "Junhyung portrait archive 7", x: 75, y: 80, w: 10, h: 14, rotate: -7 },
  { href: "/music", src: "/portraits/portrait-archive-8.jpg", alt: "Junhyung portrait archive 8", x: 86, y: 80, w: 11, h: 14, rotate: 8 },
];

const SCALE = 1.18;

export function FloatingCollage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef<{
    index: number;
    dx: number;
    dy: number;
  } | null>(null);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const dragging = draggingRef.current;
    const rect = containerRef.current?.getBoundingClientRect();

    if (!dragging || !rect) {
      return;
    }

    const node = containerRef.current?.querySelector<HTMLElement>(`[data-card-index="${dragging.index}"]`);
    const card = cards[dragging.index];

    if (!node || !card) {
      return;
    }

    const nextX = ((event.clientX - rect.left) / rect.width) * 100 - dragging.dx;
    const nextY = ((event.clientY - rect.top) / rect.height) * 100 - dragging.dy;
    const maxX = 99 - card.w * SCALE;
    const maxY = 99 - card.h * SCALE;
    const clampedX = Math.max(1, Math.min(maxX, nextX));
    const clampedY = Math.max(1, Math.min(maxY, nextY));

    node.style.left = `${clampedX}%`;
    node.style.top = `${clampedY}%`;
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[1860px] overflow-hidden md:h-[1380px]"
      onPointerMove={handlePointerMove}
      onPointerUp={() => {
        draggingRef.current = null;
      }}
      onPointerLeave={() => {
        draggingRef.current = null;
      }}
    >
      {cards.map((card, index) => (
        <Link
          key={card.src}
          data-card-index={index}
          href={card.href}
          target={card.external ? "_blank" : undefined}
          rel={card.external ? "noreferrer" : undefined}
          onPointerDown={(event) => {
            event.preventDefault();
            const rect = containerRef.current?.getBoundingClientRect();

            if (!rect) {
              return;
            }

            draggingRef.current = {
              index,
              dx: ((event.clientX - rect.left) / rect.width) * 100 - card.x,
              dy: ((event.clientY - rect.top) / rect.height) * 100 - card.y,
            };

            event.currentTarget.setPointerCapture(event.pointerId);
            event.currentTarget.style.zIndex = "500";
          }}
          onPointerUp={(event) => {
            draggingRef.current = null;
            event.currentTarget.releasePointerCapture(event.pointerId);
            event.currentTarget.style.zIndex = String(index + 10);
          }}
          className="absolute block cursor-grab overflow-hidden active:cursor-grabbing"
          style={{
            left: `${card.x}%`,
            top: `${card.y}%`,
            width: `${card.w * SCALE}%`,
            height: `${card.h * SCALE}%`,
            transform: `rotate(${card.rotate}deg)`,
            zIndex: index + 10,
            boxShadow: "0 18px 40px rgba(0,0,0,0.28)",
          }}
        >
          <img
            src={card.src}
            alt={card.alt}
            className={`h-full w-full ${card.fit === "contain" ? "object-contain" : "object-cover"}`}
            draggable={false}
          />
        </Link>
      ))}
    </div>
  );
}
