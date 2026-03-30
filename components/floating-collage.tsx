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
  {
    href: "/music",
    src: "/collage/off-the-wall.jpg",
    alt: "Off the Wall cover",
    x: 4,
    y: 10,
    w: 16,
    h: 23,
    rotate: -8,
    depth: 1.1,
    phase: 0.2,
  },
  {
    href: "/music",
    src: "/collage/yeezus.jpg",
    alt: "Yeezus cover",
    x: 19,
    y: 30,
    w: 14,
    h: 18,
    rotate: 10,
    depth: 0.8,
    phase: 0.7,
  },
  {
    href: "/music",
    src: "/collage/for-lovers.jpg",
    alt: "For Lovers cover",
    x: 35,
    y: 12,
    w: 15,
    h: 20,
    rotate: -5,
    depth: 0.95,
    phase: 1.2,
  },
  {
    href: "/writing",
    src: "/collage/borges-ficciones.jpg",
    alt: "Ficciones cover",
    x: 55,
    y: 8,
    w: 16,
    h: 24,
    rotate: 7,
    depth: 1.15,
    phase: 1.7,
  },
  {
    href: "/writing",
    src: "/collage/camus-sisyphus.jpg",
    alt: "The Myth of Sisyphus cover",
    x: 72,
    y: 24,
    w: 14,
    h: 21,
    rotate: -9,
    depth: 0.9,
    phase: 2.1,
  },
  {
    href: "/writing",
    src: "/collage/wittgenstein-investigations.jpg",
    alt: "Philosophical Investigations cover",
    x: 8,
    y: 60,
    w: 15,
    h: 22,
    rotate: 6,
    depth: 1.05,
    phase: 2.6,
  },
  {
    href: "/research",
    src: "/collage/bto-phase.jpg",
    alt: "BTO phase shifter figure",
    x: 28,
    y: 56,
    w: 22,
    h: 17,
    rotate: -4,
    depth: 0.8,
    phase: 3.1,
    fit: "contain",
    bg: "linear-gradient(135deg, rgba(11,21,45,0.95), rgba(23,10,42,0.95))",
  },
  {
    href: "/research",
    src: "/collage/diamond-structures.jpg",
    alt: "Diamond structures figure",
    x: 59,
    y: 55,
    w: 20,
    h: 18,
    rotate: 4,
    depth: 0.9,
    phase: 3.5,
    fit: "contain",
    bg: "linear-gradient(135deg, rgba(10,28,34,0.96), rgba(24,10,32,0.96))",
  },
  {
    href: "/research",
    src: "/collage/loncar-diamond-circuit.jpg",
    alt: "Loncar diamond circuit figure",
    x: 70,
    y: 46,
    w: 22,
    h: 17,
    rotate: 3,
    depth: 0.92,
    phase: 3.9,
    fit: "contain",
    bg: "linear-gradient(135deg, rgba(28,12,12,0.96), rgba(16,16,30,0.96))",
  },
  {
    href: "/research",
    src: "/collage/kaist-ee-logo.png",
    alt: "KAIST Electrical Engineering logo",
    x: 38,
    y: 34,
    w: 24,
    h: 12,
    rotate: 2,
    depth: 0.7,
    phase: 4.2,
    fit: "contain",
    bg: "linear-gradient(135deg, rgba(8,16,38,0.98), rgba(5,7,18,0.98))",
  },
  {
    href: "/research",
    src: "/portraits/portrait-night.jpg",
    alt: "Junhyung Cho portrait at night",
    x: 48,
    y: 38,
    w: 16,
    h: 29,
    rotate: 4,
    depth: 1.25,
    phase: 4.7,
  },
  {
    href: "/music",
    src: "/portraits/portrait-stage.jpg",
    alt: "Junhyung Cho performing on stage",
    x: 82,
    y: 7,
    w: 12,
    h: 16,
    rotate: 11,
    depth: 1.08,
    phase: 5.2,
  },
  {
    href: "/writing",
    src: "/portraits/portrait-city.jpg",
    alt: "Junhyung Cho near mural",
    x: 23,
    y: 4,
    w: 12,
    h: 16,
    rotate: -11,
    depth: 0.9,
    phase: 5.7,
  },
] as const;

const links = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [5, 6],
  [6, 9],
  [9, 10],
  [10, 7],
  [7, 8],
  [8, 4],
  [11, 0],
  [12, 5],
] as const;

type State = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotate: number;
};

export function FloatingCollage() {
  const cardRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const stateRef = useRef<State[]>([]);
  const pointerRef = useRef({ x: 0.5, y: 0.5, active: false });
  const lineRefs = useRef<Array<SVGLineElement | null>>([]);
  const dotRefs = useRef<Array<SVGCircleElement | null>>([]);

  useEffect(() => {
    stateRef.current = cards.map((card) => ({
      x: card.x,
      y: card.y,
      vx: 0,
      vy: 0,
      rotate: card.rotate,
    }));

    let frame = 0;

    const animate = (time: number) => {
      const pointer = pointerRef.current;
      const centers = cards.map(() => ({ x: 0, y: 0 }));

      cards.forEach((card, index) => {
        const node = cardRefs.current[index];
        const state = stateRef.current[index];

        if (!node || !state) {
          return;
        }

        const floatX = Math.sin(time / 1700 + card.phase) * 1.2 * card.depth;
        const floatY = Math.cos(time / 2100 + card.phase) * 0.95 * card.depth;

        const centerX = state.x + card.w / 2;
        const centerY = state.y + card.h / 2;

        if (pointer.active) {
          const dx = centerX / 100 - pointer.x;
          const dy = centerY / 100 - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 0.24) {
            const force = (0.24 - dist) * 0.05;
            state.vx += (dx / Math.max(dist, 0.001)) * force;
            state.vy += (dy / Math.max(dist, 0.001)) * force;
          }
        }

        state.vx += Math.sin(time / 3200 + card.phase) * 0.0022;
        state.vy += Math.cos(time / 3600 + card.phase) * 0.0019;
        state.vx *= 0.987;
        state.vy *= 0.987;
        state.x += state.vx;
        state.y += state.vy;

        const minX = 2;
        const maxX = 98 - card.w;
        const minY = 2;
        const maxY = 98 - card.h;

        if (state.x < minX || state.x > maxX) {
          state.vx *= -0.92;
          state.x = Math.max(minX, Math.min(maxX, state.x));
        }

        if (state.y < minY || state.y > maxY) {
          state.vy *= -0.92;
          state.y = Math.max(minY, Math.min(maxY, state.y));
        }

        const translateX = state.x + floatX;
        const translateY = state.y + floatY;
        const rotate = state.rotate + Math.sin(time / 2500 + card.phase) * 2.2;

        centers[index] = {
          x: translateX + card.w / 2,
          y: translateY + card.h / 2,
        };

        node.style.left = `${translateX}%`;
        node.style.top = `${translateY}%`;
        node.style.width = `${card.w}%`;
        node.style.height = `${card.h}%`;
        node.style.transform = `translate3d(0, 0, 0) rotate(${rotate}deg)`;
        node.style.zIndex = String(index + 4);
      });

      links.forEach(([from, to], index) => {
        const line = lineRefs.current[index];
        if (!line) {
          return;
        }

        line.setAttribute("x1", `${centers[from].x}%`);
        line.setAttribute("y1", `${centers[from].y}%`);
        line.setAttribute("x2", `${centers[to].x}%`);
        line.setAttribute("y2", `${centers[to].y}%`);
      });

      centers.forEach((center, index) => {
        const dot = dotRefs.current[index];
        if (!dot) {
          return;
        }

        dot.setAttribute("cx", `${center.x}%`);
        dot.setAttribute("cy", `${center.y}%`);
      });

      frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className="relative h-[1360px] overflow-hidden rounded-[40px] md:h-[1020px]"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointerRef.current = {
          x: (event.clientX - rect.left) / rect.width,
          y: (event.clientY - rect.top) / rect.height,
          active: true,
        };
      }}
      onPointerLeave={() => {
        pointerRef.current.active = false;
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,110,64,0.26),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(122,92,255,0.24),transparent_24%),radial-gradient(circle_at_45%_72%,rgba(49,201,180,0.2),transparent_26%),radial-gradient(circle_at_72%_68%,rgba(255,214,10,0.16),transparent_20%),radial-gradient(circle_at_28%_52%,rgba(255,71,145,0.14),transparent_18%)]" />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,98,74,0.78)" />
            <stop offset="40%" stopColor="rgba(101,145,255,0.68)" />
            <stop offset="100%" stopColor="rgba(58,226,199,0.78)" />
          </linearGradient>
          <filter id="networkGlow">
            <feGaussianBlur stdDeviation="0.18" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {links.map((_, index) => (
          <line
            key={index}
            ref={(node) => {
              lineRefs.current[index] = node;
            }}
            stroke="url(#networkGradient)"
            strokeOpacity="0.62"
            strokeWidth="0.18"
            filter="url(#networkGlow)"
          />
        ))}

        {cards.map((_, index) => (
          <circle
            key={index}
            ref={(node) => {
              dotRefs.current[index] = node;
            }}
            r="0.42"
            fill="white"
            fillOpacity="0.82"
            filter="url(#networkGlow)"
          />
        ))}
      </svg>

      {cards.map((card, index) => (
        <Link
          key={`${card.src}-${index}`}
          ref={(node) => {
            cardRefs.current[index] = node;
          }}
          href={card.href}
          className="absolute block overflow-hidden rounded-[28px] border border-white/10 bg-[var(--panel-strong)] shadow-[0_24px_70px_rgba(0,0,0,0.42)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_30px_90px_rgba(0,0,0,0.56)]"
          style={card.bg ? { background: card.bg } : undefined}
        >
          <img
            src={card.src}
            alt={card.alt}
            className={`h-full w-full ${card.fit === "contain" ? "object-contain p-3" : "object-cover"}`}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0)),linear-gradient(0deg,rgba(0,0,0,0.18),rgba(0,0,0,0))]" />
        </Link>
      ))}
    </div>
  );
}
