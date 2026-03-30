"use client";

import Link from "next/link";
import { type PointerEvent, useEffect, useRef, useState } from "react";

type FloatingCard = {
  src: string;
  alt: string;
  x: number;
  y: number;
  w: number;
  h: number;
  rotate: number;
  fit?: "cover" | "contain";
};

type HiddenTarget = {
  href: string;
  label: string;
  sublabel: string;
  x: number;
  y: number;
  w: number;
  h: number;
  rotate: number;
  external?: boolean;
  palette: string;
};

const cards: FloatingCard[] = [
  { src: "/collage/off-the-wall.jpg", alt: "Off the Wall", x: 4, y: 8, w: 15, h: 21, rotate: -8 },
  { src: "/collage/yeezus.jpg", alt: "Yeezus", x: 18, y: 26, w: 12, h: 15, rotate: 9 },
  { src: "/collage/for-lovers.jpg", alt: "For Lovers", x: 29, y: 6, w: 13, h: 18, rotate: -7 },
  { src: "/collage/blonde.jpg", alt: "Blonde", x: 42, y: 5, w: 13, h: 17, rotate: 6 },
  { src: "/collage/loveless.jpg", alt: "Loveless", x: 55, y: 12, w: 12, h: 15, rotate: -9 },
  { src: "/collage/discovery.jpg", alt: "Discovery", x: 67, y: 5, w: 13, h: 17, rotate: 7 },
  { src: "/collage/kind-of-blue.jpg", alt: "Kind of Blue", x: 80, y: 10, w: 12, h: 15, rotate: -6 },
  { src: "/collage/borges-ficciones.jpg", alt: "Ficciones", x: 7, y: 31, w: 14, h: 20, rotate: 5 },
  { src: "/collage/calvino-winter.jpg", alt: "If on a winter's night a traveler", x: 21, y: 18, w: 13, h: 18, rotate: -10 },
  { src: "/collage/bolano-detectives.jpg", alt: "The Savage Detectives", x: 34, y: 24, w: 12, h: 17, rotate: 8 },
  { src: "/collage/sartre-nausea.jpg", alt: "Nausea", x: 47, y: 18, w: 13, h: 18, rotate: -7 },
  { src: "/collage/kafka-trial.jpg", alt: "The Trial", x: 60, y: 24, w: 13, h: 18, rotate: 9 },
  { src: "/collage/fight-club.jpg", alt: "Fight Club", x: 74, y: 24, w: 13, h: 18, rotate: -5 },
  { src: "/collage/pulp-fiction.jpg", alt: "Pulp Fiction", x: 85, y: 35, w: 12, h: 17, rotate: 6 },
  { src: "/collage/kaist-ee-logo.png", alt: "KAIST EE Logo", x: 70, y: 2, w: 21, h: 9, rotate: 2, fit: "contain" },
  { src: "/collage/loncar-fig1.jpg", alt: "Loncar fig1", x: 76, y: 51, w: 16, h: 13, rotate: -4, fit: "contain" },
  { src: "/collage/loncar-fig2.jpg", alt: "Loncar fig2", x: 4, y: 53, w: 15, h: 13, rotate: 7, fit: "contain" },
  { src: "/collage/loncar-fig3.jpg", alt: "Loncar fig3", x: 19, y: 47, w: 16, h: 13, rotate: -5, fit: "contain" },
  { src: "/collage/loncar-diamond-circuit.jpg", alt: "Loncar circuit", x: 34, y: 43, w: 21, h: 14, rotate: 4, fit: "contain" },
  { src: "/collage/bto-phase.jpg", alt: "BTO phase", x: 55, y: 39, w: 20, h: 14, rotate: -3, fit: "contain" },
  { src: "/collage/bto-fig1.jpg", alt: "BTO fig1", x: 73, y: 64, w: 15, h: 13, rotate: 8, fit: "contain" },
  { src: "/collage/bto-fig3.jpg", alt: "BTO fig3", x: 45, y: 58, w: 16, h: 13, rotate: -7, fit: "contain" },
  { src: "/collage/bto-fig5.jpg", alt: "BTO fig5", x: 61, y: 56, w: 16, h: 13, rotate: 5, fit: "contain" },
  { src: "/collage/diamond-structures.jpg", alt: "Diamond structures", x: 83, y: 57, w: 16, h: 14, rotate: -4, fit: "contain" },
  { src: "/collage/fab-fig1.jpg", alt: "Fabrication fig1", x: 8, y: 70, w: 16, h: 12, rotate: 7, fit: "contain" },
  { src: "/collage/fab-fig2.jpg", alt: "Fabrication fig2", x: 24, y: 70, w: 16, h: 12, rotate: -5, fit: "contain" },
  { src: "/collage/fab-fig5.jpg", alt: "Fabrication fig5", x: 40, y: 72, w: 16, h: 12, rotate: 4, fit: "contain" },
  { src: "/collage/nihms-f1.jpg", alt: "NIHMS fig1", x: 56, y: 72, w: 15, h: 12, rotate: -8, fit: "contain" },
  { src: "/collage/nihms-f2.jpg", alt: "NIHMS fig2", x: 70, y: 72, w: 14, h: 12, rotate: 6, fit: "contain" },
  { src: "/collage/nihms-f3.jpg", alt: "NIHMS fig3", x: 83, y: 73, w: 13, h: 11, rotate: -4, fit: "contain" },
  { src: "/collage/nihms-f4.jpg", alt: "NIHMS fig4", x: 32, y: 33, w: 12, h: 11, rotate: 4, fit: "contain" },
  { src: "/collage/nat25-fig1.jpg", alt: "Nature 2025 fig1", x: 53, y: 31, w: 12, h: 10, rotate: -5, fit: "contain" },
  { src: "/collage/nat25-fig2.jpg", alt: "Nature 2025 fig2", x: 64, y: 32, w: 12, h: 10, rotate: 5, fit: "contain" },
  { src: "/collage/nat20-fig1.jpg", alt: "Nature 2020 fig1", x: 13, y: 18, w: 11, h: 11, rotate: -7, fit: "contain" },
  { src: "/collage/nat20-fig2.jpg", alt: "Nature 2020 fig2", x: 87, y: 23, w: 11, h: 11, rotate: 7, fit: "contain" },
  { src: "/collage/srep-f1.jpg", alt: "Scientific Reports fig1", x: 2, y: 42, w: 11, h: 11, rotate: 5, fit: "contain" },
  { src: "/collage/srep-f2.jpg", alt: "Scientific Reports fig2", x: 89, y: 53, w: 10, h: 11, rotate: -6, fit: "contain" },
  { src: "/portraits/portrait-night.jpg", alt: "Junhyung portrait", x: 42, y: 34, w: 14, h: 23, rotate: 2 },
  { src: "/portraits/portrait-stage.jpg", alt: "Junhyung stage portrait", x: 91, y: 5, w: 9, h: 12, rotate: 11 },
  { src: "/portraits/portrait-city.jpg", alt: "Junhyung city portrait", x: 23, y: 1, w: 10, h: 13, rotate: -11 },
  { src: "/portraits/portrait-archive-1.jpg", alt: "Junhyung portrait archive 1", x: 2, y: 80, w: 10, h: 14, rotate: -10 },
  { src: "/portraits/portrait-archive-2.jpg", alt: "Junhyung portrait archive 2", x: 13, y: 80, w: 11, h: 14, rotate: 7 },
  { src: "/portraits/portrait-archive-3.jpg", alt: "Junhyung portrait archive 3", x: 26, y: 79, w: 10, h: 13, rotate: -5 },
  { src: "/portraits/portrait-archive-4.jpg", alt: "Junhyung portrait archive 4", x: 37, y: 80, w: 11, h: 14, rotate: 9 },
  { src: "/portraits/portrait-archive-5.jpg", alt: "Junhyung portrait archive 5", x: 50, y: 80, w: 10, h: 14, rotate: -8 },
  { src: "/portraits/portrait-archive-6.jpg", alt: "Junhyung portrait archive 6", x: 62, y: 79, w: 11, h: 15, rotate: 6 },
  { src: "/portraits/portrait-archive-7.jpg", alt: "Junhyung portrait archive 7", x: 75, y: 80, w: 10, h: 14, rotate: -7 },
  { src: "/portraits/portrait-archive-8.jpg", alt: "Junhyung portrait archive 8", x: 86, y: 80, w: 11, h: 14, rotate: 8 },
];

const hiddenTargets: HiddenTarget[] = [
  { href: "/music", label: "MUSIC", sublabel: "live, records, archive", x: 8, y: 14, w: 30, h: 18, rotate: -4, palette: "linear-gradient(135deg, rgba(255,40,124,0.96), rgba(255,172,34,0.96) 45%, rgba(255,247,92,0.96))" },
  { href: "/writing", label: "WRITING", sublabel: "notes, books, blog", x: 53, y: 17, w: 29, h: 19, rotate: 3, palette: "linear-gradient(135deg, rgba(92,81,255,0.96), rgba(0,214,255,0.96) 48%, rgba(73,255,180,0.96))" },
  { href: "/research", label: "RESEARCH", sublabel: "diamond, bto, photonics", x: 14, y: 58, w: 38, h: 20, rotate: -2, palette: "linear-gradient(135deg, rgba(255,98,30,0.96), rgba(255,0,210,0.94) 50%, rgba(120,50,255,0.96))" },
  { href: "https://www.kaist.ac.kr/en/", label: "KAIST", sublabel: "official site", x: 62, y: 62, w: 23, h: 14, rotate: 4, external: true, palette: "linear-gradient(135deg, rgba(0,116,255,0.96), rgba(66,255,220,0.96) 52%, rgba(255,255,255,0.92))" },
];

export function FloatingCollage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef<{
    index: number;
    dx: number;
    dy: number;
  } | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const sync = () => {
      setIsMobile(window.innerWidth < 768);
    };

    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  const scale = isMobile ? 0.9 : 1.3;

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
    const maxX = 99 - card.w * scale;
    const maxY = 99 - card.h * scale;
    const clampedX = Math.max(1, Math.min(maxX, nextX));
    const clampedY = Math.max(1, Math.min(maxY, nextY));

    node.style.left = `${clampedX}%`;
    node.style.top = `${clampedY}%`;
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[100svh] min-h-[100svh] overflow-hidden md:h-[100dvh] md:min-h-[100dvh]"
      onPointerMove={handlePointerMove}
      onPointerUp={() => {
        draggingRef.current = null;
      }}
      onPointerLeave={() => {
        draggingRef.current = null;
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,#ff4f5e_0%,#ff9a1f_16%,#ffe74c_30%,#61ffca_45%,#3db7ff_58%,#7856ff_73%,#ff42c4_87%,#ff4f5e_100%)] opacity-95" />
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.2)_0,rgba(255,255,255,0.2)_2px,transparent_2px,transparent_88px)] opacity-25 mix-blend-soft-light" />
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_2px,transparent_2px,transparent_108px)] opacity-20 mix-blend-soft-light" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.4),transparent_18%),radial-gradient(circle_at_85%_24%,rgba(255,255,255,0.22),transparent_16%),radial-gradient(circle_at_45%_68%,rgba(255,255,255,0.22),transparent_18%),radial-gradient(circle_at_72%_74%,rgba(255,255,255,0.24),transparent_14%)] mix-blend-screen" />
      <div className="pointer-events-none absolute inset-x-0 top-[6%] flex justify-center text-[18vw] font-black uppercase tracking-[-0.08em] text-white/14 blur-[2px] md:text-[11vw]">
        777
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-[42%] flex justify-center text-[16vw] font-black uppercase tracking-[-0.08em] text-white/10 blur-[2px] md:text-[10vw]">
        JACKPOT
      </div>

      {hiddenTargets.map((target) => (
        <Link
          key={target.label}
          href={target.href}
          target={target.external ? "_blank" : undefined}
          rel={target.external ? "noreferrer" : undefined}
          className="absolute flex items-center justify-center overflow-hidden border border-white/40 shadow-[0_0_38px_rgba(255,255,255,0.26)] backdrop-blur-[1px] transition duration-200 hover:scale-[1.02]"
          style={{
            left: `${target.x}%`,
            top: `${target.y}%`,
            width: `${target.w}%`,
            height: `${target.h}%`,
            transform: `rotate(${target.rotate}deg)`,
            background: target.palette,
            zIndex: 1,
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,255,255,0.04)_26%,rgba(0,0,0,0.18)_100%)]" />
          <div className="relative text-center text-black">
            <div className="text-[clamp(2.4rem,5vw,6rem)] font-black uppercase tracking-[-0.06em]">
              {target.label}
            </div>
            <div className="text-[0.68rem] uppercase tracking-[0.45em] text-black/72 md:text-[0.86rem]">
              {target.sublabel}
            </div>
          </div>
        </Link>
      ))}

      {cards.map((card, index) => (
        <div
          key={card.src}
          data-card-index={index}
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
            width: `${card.w * scale}%`,
            height: `${card.h * scale}%`,
            transform: `rotate(${card.rotate}deg)`,
            zIndex: index + 10,
            boxShadow: isMobile
              ? "0 10px 22px rgba(0,0,0,0.24)"
              : "0 18px 42px rgba(0,0,0,0.3)",
          }}
        >
          <img
            src={card.src}
            alt={card.alt}
            className={`h-full w-full ${card.fit === "contain" ? "object-contain" : "object-cover"}`}
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}
