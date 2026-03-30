"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

type FloatingCard = {
  href: string;
  src: string;
  alt: string;
  x: number;
  y: number;
  w: number;
  h: number;
  rotate: number;
  depth: number;
  phase: number;
  fit?: "cover" | "contain";
  bg?: string;
};

const cards: FloatingCard[] = [
  { href: "/music", src: "/collage/off-the-wall.jpg", alt: "Off the Wall", x: 4, y: 10, w: 12, h: 17, rotate: -9, depth: 1.1, phase: 0.2 },
  { href: "/music", src: "/collage/yeezus.jpg", alt: "Yeezus", x: 15, y: 31, w: 10, h: 13, rotate: 11, depth: 0.9, phase: 0.5 },
  { href: "/music", src: "/collage/for-lovers.jpg", alt: "For Lovers", x: 27, y: 8, w: 11, h: 15, rotate: -6, depth: 0.95, phase: 0.8 },
  { href: "/writing", src: "/collage/borges-ficciones.jpg", alt: "Ficciones", x: 41, y: 9, w: 12, h: 18, rotate: 8, depth: 1.05, phase: 1.1 },
  { href: "/writing", src: "/collage/camus-sisyphus.jpg", alt: "The Myth of Sisyphus", x: 55, y: 14, w: 10, h: 15, rotate: -12, depth: 0.92, phase: 1.5 },
  { href: "/research", src: "/collage/kaist-ee-logo.png", alt: "KAIST EE Logo", x: 67, y: 9, w: 20, h: 8, rotate: 3, depth: 0.8, phase: 1.9, fit: "contain", bg: "linear-gradient(135deg, rgba(12,18,48,0.96), rgba(6,8,18,0.98))" },
  { href: "/research", src: "/collage/loncar-fig1.jpg", alt: "Loncar fig1", x: 75, y: 22, w: 14, h: 12, rotate: -4, depth: 0.88, phase: 2.2, fit: "contain", bg: "linear-gradient(135deg, rgba(20,9,29,0.96), rgba(8,18,39,0.98))" },
  { href: "/research", src: "/collage/loncar-fig2.jpg", alt: "Loncar fig2", x: 7, y: 53, w: 13, h: 12, rotate: 7, depth: 0.86, phase: 2.4, fit: "contain", bg: "linear-gradient(135deg, rgba(12,28,26,0.96), rgba(23,10,35,0.96))" },
  { href: "/research", src: "/collage/loncar-fig3.jpg", alt: "Loncar fig3", x: 21, y: 48, w: 14, h: 12, rotate: -5, depth: 0.84, phase: 2.7, fit: "contain", bg: "linear-gradient(135deg, rgba(31,12,14,0.96), rgba(10,16,34,0.96))" },
  { href: "/research", src: "/collage/loncar-diamond-circuit.jpg", alt: "Loncar circuit", x: 37, y: 42, w: 19, h: 13, rotate: 4, depth: 0.9, phase: 3.0, fit: "contain", bg: "linear-gradient(135deg, rgba(23,13,9,0.96), rgba(11,14,30,0.98))" },
  { href: "/research", src: "/collage/bto-phase.jpg", alt: "BTO phase", x: 59, y: 37, w: 18, h: 13, rotate: -3, depth: 0.83, phase: 3.2, fit: "contain", bg: "linear-gradient(135deg, rgba(8,20,43,0.96), rgba(20,7,35,0.98))" },
  { href: "/research", src: "/collage/bto-fig1.jpg", alt: "BTO fig1", x: 74, y: 43, w: 13, h: 12, rotate: 9, depth: 0.82, phase: 3.4, fit: "contain", bg: "linear-gradient(135deg, rgba(10,28,44,0.96), rgba(22,10,31,0.98))" },
  { href: "/research", src: "/collage/bto-fig3.jpg", alt: "BTO fig3", x: 46, y: 58, w: 14, h: 12, rotate: -8, depth: 0.85, phase: 3.7, fit: "contain", bg: "linear-gradient(135deg, rgba(13,32,29,0.96), rgba(16,11,39,0.98))" },
  { href: "/research", src: "/collage/bto-fig5.jpg", alt: "BTO fig5", x: 63, y: 56, w: 14, h: 12, rotate: 5, depth: 0.84, phase: 4.0, fit: "contain", bg: "linear-gradient(135deg, rgba(35,14,14,0.96), rgba(11,14,40,0.98))" },
  { href: "/research", src: "/collage/diamond-structures.jpg", alt: "Diamond structures", x: 77, y: 58, w: 16, h: 13, rotate: -5, depth: 0.9, phase: 4.3, fit: "contain", bg: "linear-gradient(135deg, rgba(12,28,28,0.98), rgba(28,8,32,0.98))" },
  { href: "/research", src: "/collage/fab-fig1.jpg", alt: "Fabrication fig1", x: 5, y: 71, w: 14, h: 11, rotate: 8, depth: 0.85, phase: 4.5, fit: "contain", bg: "linear-gradient(135deg, rgba(29,14,9,0.96), rgba(9,14,30,0.98))" },
  { href: "/research", src: "/collage/fab-fig2.jpg", alt: "Fabrication fig2", x: 22, y: 71, w: 14, h: 11, rotate: -6, depth: 0.83, phase: 4.8, fit: "contain", bg: "linear-gradient(135deg, rgba(16,10,35,0.96), rgba(6,20,34,0.98))" },
  { href: "/research", src: "/collage/fab-fig5.jpg", alt: "Fabrication fig5", x: 39, y: 73, w: 14, h: 11, rotate: 4, depth: 0.82, phase: 5.0, fit: "contain", bg: "linear-gradient(135deg, rgba(10,27,31,0.98), rgba(18,10,31,0.98))" },
  { href: "/research", src: "/collage/nihms-f1.jpg", alt: "NIHMS fig1", x: 56, y: 73, w: 13, h: 11, rotate: -9, depth: 0.86, phase: 5.2, fit: "contain", bg: "linear-gradient(135deg, rgba(26,10,16,0.98), rgba(9,17,36,0.98))" },
  { href: "/research", src: "/collage/nihms-f2.jpg", alt: "NIHMS fig2", x: 71, y: 72, w: 12, h: 11, rotate: 7, depth: 0.81, phase: 5.4, fit: "contain", bg: "linear-gradient(135deg, rgba(10,18,42,0.96), rgba(15,9,28,0.98))" },
  { href: "/research", src: "/collage/nihms-f3.jpg", alt: "NIHMS fig3", x: 84, y: 74, w: 11, h: 10, rotate: -4, depth: 0.78, phase: 5.6, fit: "contain", bg: "linear-gradient(135deg, rgba(12,28,26,0.98), rgba(28,10,22,0.98))" },
  { href: "/research", src: "/collage/nihms-f4.jpg", alt: "NIHMS fig4", x: 31, y: 26, w: 11, h: 10, rotate: 5, depth: 0.76, phase: 5.8, fit: "contain", bg: "linear-gradient(135deg, rgba(32,13,11,0.98), rgba(10,20,34,0.98))" },
  { href: "/research", src: "/collage/nat25-fig1.jpg", alt: "Nature 2025 fig1", x: 53, y: 28, w: 11, h: 9, rotate: -6, depth: 0.74, phase: 6.0, fit: "contain", bg: "linear-gradient(135deg, rgba(11,33,32,0.98), rgba(18,8,28,0.98))" },
  { href: "/research", src: "/collage/nat25-fig2.jpg", alt: "Nature 2025 fig2", x: 65, y: 29, w: 11, h: 9, rotate: 6, depth: 0.72, phase: 6.2, fit: "contain", bg: "linear-gradient(135deg, rgba(28,9,18,0.98), rgba(9,16,38,0.98))" },
  { href: "/research", src: "/collage/nat20-fig1.jpg", alt: "Nature 2020 fig1", x: 13, y: 21, w: 10, h: 10, rotate: -8, depth: 0.75, phase: 6.4, fit: "contain", bg: "linear-gradient(135deg, rgba(12,22,42,0.98), rgba(23,9,33,0.98))" },
  { href: "/research", src: "/collage/nat20-fig2.jpg", alt: "Nature 2020 fig2", x: 86, y: 30, w: 10, h: 10, rotate: 8, depth: 0.73, phase: 6.6, fit: "contain", bg: "linear-gradient(135deg, rgba(11,32,29,0.98), rgba(18,8,28,0.98))" },
  { href: "/research", src: "/collage/srep-f1.jpg", alt: "Scientific Reports fig1", x: 2, y: 37, w: 10, h: 10, rotate: 6, depth: 0.78, phase: 6.8, fit: "contain", bg: "linear-gradient(135deg, rgba(26,8,24,0.98), rgba(8,18,36,0.98))" },
  { href: "/research", src: "/collage/srep-f2.jpg", alt: "Scientific Reports fig2", x: 89, y: 52, w: 9, h: 10, rotate: -7, depth: 0.76, phase: 7.0, fit: "contain", bg: "linear-gradient(135deg, rgba(10,18,40,0.98), rgba(29,12,14,0.98))" },
  { href: "/research", src: "/portraits/portrait-night.jpg", alt: "Junhyung portrait", x: 44, y: 33, w: 13, h: 22, rotate: 2, depth: 1.2, phase: 7.2 },
  { href: "/music", src: "/portraits/portrait-stage.jpg", alt: "Junhyung stage portrait", x: 90, y: 8, w: 8, h: 11, rotate: 12, depth: 0.98, phase: 7.4 },
  { href: "/writing", src: "/portraits/portrait-city.jpg", alt: "Junhyung city portrait", x: 22, y: 2, w: 9, h: 12, rotate: -12, depth: 0.92, phase: 7.6 },
] as const;

const SCALE = 1.32;

type State = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotate: number;
  hx: number[];
  hy: number[];
};

export function FloatingCollage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const trailRefs = useRef<Array<Array<HTMLDivElement | null>>>([]);
  const stateRef = useRef<State[]>([]);
  const pointerRef = useRef({
    x: 0.5,
    y: 0.5,
    active: false,
    dragging: -1,
    dx: 0,
    dy: 0,
  });

  useEffect(() => {
    trailRefs.current = cards.map(() => [null, null, null]);
    stateRef.current = cards.map((card) => ({
      x: card.x,
      y: card.y,
      vx: 0,
      vy: 0,
      rotate: card.rotate,
      hx: Array(3).fill(card.x),
      hy: Array(3).fill(card.y),
    }));

    let frame = 0;

    const animate = (time: number) => {
      const pointer = pointerRef.current;
      const centers = cards.map(() => ({ x: 0, y: 0 }));

      for (let index = 0; index < cards.length; index += 1) {
        const card = cards[index];
        const state = stateRef.current[index];
        const node = cardRefs.current[index];

        if (!state || !node) {
          continue;
        }

        if (pointer.dragging === index && pointer.active) {
          state.x = pointer.x * 100 - pointer.dx;
          state.y = pointer.y * 100 - pointer.dy;
          state.vx = 0;
          state.vy = 0;
        } else {
          const floatX = Math.sin(time / 1500 + card.phase) * 1.4 * card.depth;
          const floatY = Math.cos(time / 1900 + card.phase) * 1.1 * card.depth;
          state.vx += Math.sin(time / 2900 + card.phase) * 0.0025;
          state.vy += Math.cos(time / 3400 + card.phase) * 0.0022;

          if (pointer.active) {
            const cx = state.x + (card.w * SCALE) / 2;
            const cy = state.y + (card.h * SCALE) / 2;
            const dx = cx / 100 - pointer.x;
            const dy = cy / 100 - pointer.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 0.22) {
              const force = (0.22 - dist) * 0.055;
              state.vx += (dx / Math.max(dist, 0.001)) * force;
              state.vy += (dy / Math.max(dist, 0.001)) * force;
            }
          }

          state.vx *= 0.985;
          state.vy *= 0.985;
          state.x += state.vx + floatX * 0.04;
          state.y += state.vy + floatY * 0.04;
        }
      }

      for (let i = 0; i < cards.length; i += 1) {
        for (let j = i + 1; j < cards.length; j += 1) {
          const a = cards[i];
          const b = cards[j];
          const sa = stateRef.current[i];
          const sb = stateRef.current[j];

          const ax = sa.x + (a.w * SCALE) / 2;
          const ay = sa.y + (a.h * SCALE) / 2;
          const bx = sb.x + (b.w * SCALE) / 2;
          const by = sb.y + (b.h * SCALE) / 2;

          const dx = bx - ax;
          const dy = by - ay;
          const minDist = (a.w * SCALE + b.w * SCALE) * 0.24;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist > 0 && dist < minDist) {
            const push = (minDist - dist) * 0.012;
            const nx = dx / dist;
            const ny = dy / dist;
            sa.vx -= nx * push;
            sa.vy -= ny * push;
            sb.vx += nx * push;
            sb.vy += ny * push;
          }
        }
      }

      cards.forEach((card, index) => {
        const node = cardRefs.current[index];
        const state = stateRef.current[index];

        if (!node || !state) {
          return;
        }

        const minX = 1;
        const maxX = 99 - card.w * SCALE;
        const minY = 1;
        const maxY = 99 - card.h * SCALE;

        if (state.x < minX || state.x > maxX) {
          state.vx *= -0.9;
          state.x = Math.max(minX, Math.min(maxX, state.x));
        }
        if (state.y < minY || state.y > maxY) {
          state.vy *= -0.9;
          state.y = Math.max(minY, Math.min(maxY, state.y));
        }

        state.hx.unshift(state.x);
        state.hy.unshift(state.y);
        state.hx = state.hx.slice(0, 3);
        state.hy = state.hy.slice(0, 3);

        const rotate = state.rotate + Math.sin(time / 2400 + card.phase) * 2.8;
        centers[index] = {
          x: state.x + (card.w * SCALE) / 2,
          y: state.y + (card.h * SCALE) / 2,
        };

        node.style.left = `${state.x}%`;
        node.style.top = `${state.y}%`;
        node.style.width = `${card.w * SCALE}%`;
        node.style.height = `${card.h * SCALE}%`;
        node.style.transform = `rotate(${rotate}deg)`;
        node.style.zIndex = String(index + 20 + (pointer.dragging === index ? 200 : 0));

        const trails = trailRefs.current[index];
        trails?.forEach((trail, trailIndex) => {
          if (!trail) {
            return;
          }
          trail.style.left = `${state.hx[trailIndex] ?? state.x}%`;
          trail.style.top = `${state.hy[trailIndex] ?? state.y}%`;
          trail.style.width = `${card.w * SCALE}%`;
          trail.style.height = `${card.h * SCALE}%`;
          trail.style.transform = `rotate(${rotate - trailIndex * 2}deg)`;
          trail.style.opacity = String(0.16 - trailIndex * 0.04);
        });
      });

      frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[1940px] overflow-hidden md:h-[1420px]"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointerRef.current.x = (event.clientX - rect.left) / rect.width;
        pointerRef.current.y = (event.clientY - rect.top) / rect.height;
        pointerRef.current.active = true;
      }}
      onPointerUp={() => {
        pointerRef.current.dragging = -1;
      }}
      onPointerLeave={() => {
        pointerRef.current.active = false;
        pointerRef.current.dragging = -1;
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,18,0.08),rgba(7,7,12,0.02)),radial-gradient(circle_at_14%_18%,rgba(255,80,44,0.36),transparent_20%),radial-gradient(circle_at_84%_16%,rgba(89,97,255,0.3),transparent_22%),radial-gradient(circle_at_50%_70%,rgba(0,238,196,0.24),transparent_24%),radial-gradient(circle_at_72%_62%,rgba(255,214,20,0.24),transparent_16%),radial-gradient(circle_at_30%_54%,rgba(255,40,143,0.24),transparent_18%),radial-gradient(circle_at_60%_28%,rgba(0,168,255,0.22),transparent_20%)] mix-blend-screen" />

      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="picGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff5b36" />
            <stop offset="30%" stopColor="#ffd43a" />
            <stop offset="55%" stopColor="#4fffe2" />
            <stop offset="80%" stopColor="#5d6bff" />
            <stop offset="100%" stopColor="#ff37a8" />
          </linearGradient>
          <filter id="picGlow">
            <feGaussianBlur stdDeviation="0.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {Array.from({ length: cards.length - 1 }).map((_, index) => (
          <line
            key={`line-a-${index}`}
            x1={`${cards[index].x + cards[index].w / 2}%`}
            y1={`${cards[index].y + cards[index].h / 2}%`}
            x2={`${cards[index + 1].x + cards[index + 1].w / 2}%`}
            y2={`${cards[index + 1].y + cards[index + 1].h / 2}%`}
            stroke="url(#picGradient)"
            strokeOpacity="0.48"
            strokeWidth="0.18"
            filter="url(#picGlow)"
          />
        ))}
      </svg>

      {cards.map((card, index) => (
        <div key={`trail-wrap-${index}`}>
          {[0, 1, 2].map((trailIndex) => (
            <div
              key={`trail-${index}-${trailIndex}`}
              ref={(node) => {
                if (!trailRefs.current[index]) {
                  trailRefs.current[index] = [null, null, null];
                }
                trailRefs.current[index][trailIndex] = node;
              }}
              className="pointer-events-none absolute mix-blend-screen blur-[2px]"
            >
              <img
                src={card.src}
                alt=""
                className={`h-full w-full ${card.fit === "contain" ? "object-contain p-2" : "object-cover"}`}
              />
            </div>
          ))}

          <Link
            ref={(node) => {
              cardRefs.current[index] = node;
            }}
            href={card.href}
            onPointerDown={(event) => {
              event.preventDefault();
              const rect = containerRef.current?.getBoundingClientRect();
              if (!rect) {
                return;
              }
              const state = stateRef.current[index];
              if (!state) {
                return;
              }
              pointerRef.current.dragging = index;
              pointerRef.current.active = true;
              pointerRef.current.dx = (event.clientX - rect.left) / rect.width * 100 - state.x;
              pointerRef.current.dy = (event.clientY - rect.top) / rect.height * 100 - state.y;
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerUp={(event) => {
              pointerRef.current.dragging = -1;
              event.currentTarget.releasePointerCapture(event.pointerId);
            }}
            className="absolute block cursor-grab overflow-hidden border border-white/6 bg-[var(--panel-strong)] shadow-[0_30px_110px_rgba(0,0,0,0.56)] transition duration-150 active:cursor-grabbing"
            style={card.bg ? { background: card.bg } : undefined}
          >
            <img
              src={card.src}
              alt={card.alt}
              className={`h-full w-full ${card.fit === "contain" ? "object-contain p-2" : "object-cover"}`}
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0)),linear-gradient(0deg,rgba(0,0,0,0.22),rgba(0,0,0,0))]" />
          </Link>
        </div>
      ))}
    </div>
  );
}
