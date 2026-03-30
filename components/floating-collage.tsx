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
};

const cards: FloatingCard[] = [
  {
    href: "/music",
    src: "/collage/off-the-wall.jpg",
    alt: "Off the Wall cover",
    x: 6,
    y: 12,
    w: 18,
    h: 23,
    rotate: -7,
    depth: 1.1,
    phase: 0.2,
  },
  {
    href: "/music",
    src: "/collage/yeezus.jpg",
    alt: "Yeezus cover",
    x: 23,
    y: 36,
    w: 15,
    h: 19,
    rotate: 8,
    depth: 0.8,
    phase: 0.7,
  },
  {
    href: "/music",
    src: "/collage/for-lovers.jpg",
    alt: "For Lovers cover",
    x: 42,
    y: 18,
    w: 18,
    h: 23,
    rotate: -5,
    depth: 1,
    phase: 1.2,
  },
  {
    href: "/writing",
    src: "/collage/borges-ficciones.jpg",
    alt: "Ficciones cover",
    x: 59,
    y: 10,
    w: 17,
    h: 25,
    rotate: 7,
    depth: 1.2,
    phase: 1.7,
  },
  {
    href: "/writing",
    src: "/collage/camus-sisyphus.jpg",
    alt: "The Myth of Sisyphus cover",
    x: 76,
    y: 32,
    w: 15,
    h: 22,
    rotate: -8,
    depth: 0.9,
    phase: 2.1,
  },
  {
    href: "/writing",
    src: "/collage/wittgenstein-investigations.jpg",
    alt: "Philosophical Investigations cover",
    x: 8,
    y: 63,
    w: 17,
    h: 24,
    rotate: 6,
    depth: 1.1,
    phase: 2.6,
  },
  {
    href: "/research",
    src: "/collage/bto-phase.jpg",
    alt: "BTO phase shifter figure",
    x: 33,
    y: 58,
    w: 28,
    h: 21,
    rotate: -4,
    depth: 0.85,
    phase: 3.1,
  },
  {
    href: "/research",
    src: "/collage/diamond-structures.jpg",
    alt: "Diamond structures figure",
    x: 64,
    y: 57,
    w: 25,
    h: 21,
    rotate: 5,
    depth: 1,
    phase: 3.5,
  },
  {
    href: "/research",
    src: "/portraits/portrait-night.jpg",
    alt: "Junhyung Cho portrait at night",
    x: 48,
    y: 40,
    w: 17,
    h: 30,
    rotate: 3,
    depth: 1.35,
    phase: 4,
  },
  {
    href: "/music",
    src: "/portraits/portrait-stage.jpg",
    alt: "Junhyung Cho performing on stage",
    x: 76,
    y: 8,
    w: 14,
    h: 18,
    rotate: 9,
    depth: 1.15,
    phase: 4.6,
  },
  {
    href: "/writing",
    src: "/portraits/portrait-city.jpg",
    alt: "Junhyung Cho near mural",
    x: 24,
    y: 7,
    w: 14,
    h: 18,
    rotate: -10,
    depth: 0.95,
    phase: 5.1,
  },
] as const;

type State = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotate: number;
};

export function FloatingCollage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const stateRef = useRef<State[]>([]);
  const pointerRef = useRef({ x: 0.5, y: 0.5, active: false });

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

      cards.forEach((card, index) => {
        const node = cardRefs.current[index];
        const state = stateRef.current[index];

        if (!node || !state) {
          return;
        }

        const floatX = Math.sin(time / 1700 + card.phase) * 0.9 * card.depth;
        const floatY = Math.cos(time / 2100 + card.phase) * 0.7 * card.depth;

        const centerX = state.x + card.w / 2;
        const centerY = state.y + card.h / 2;

        if (pointer.active) {
          const dx = centerX / 100 - pointer.x;
          const dy = centerY / 100 - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 0.28) {
            const force = (0.28 - dist) * 0.045;
            state.vx += (dx / Math.max(dist, 0.001)) * force;
            state.vy += (dy / Math.max(dist, 0.001)) * force;
          }
        }

        state.vx += Math.sin(time / 3000 + card.phase) * 0.0022;
        state.vy += Math.cos(time / 3400 + card.phase) * 0.0018;
        state.vx *= 0.985;
        state.vy *= 0.985;
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
        const rotate = state.rotate + Math.sin(time / 2500 + card.phase) * 1.8;

        node.style.left = `${translateX}%`;
        node.style.top = `${translateY}%`;
        node.style.width = `${card.w}%`;
        node.style.height = `${card.h}%`;
        node.style.transform = `translate3d(0, 0, 0) rotate(${rotate}deg)`;
        node.style.zIndex = String(index + 1);
      });

      frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[1320px] overflow-hidden rounded-[36px] md:h-[980px]"
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,110,64,0.24),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(122,92,255,0.22),transparent_24%),radial-gradient(circle_at_45%_72%,rgba(49,201,180,0.18),transparent_26%),radial-gradient(circle_at_72%_68%,rgba(255,214,10,0.14),transparent_20%)]" />

      {cards.map((card, index) => (
        <Link
          key={`${card.src}-${index}`}
          ref={(node) => {
            cardRefs.current[index] = node;
          }}
          href={card.href}
          className="absolute block overflow-hidden rounded-[28px] border border-white/10 bg-[var(--panel-strong)] shadow-[0_24px_70px_rgba(0,0,0,0.42)] transition duration-300 hover:shadow-[0_30px_90px_rgba(0,0,0,0.56)]"
        >
          <img src={card.src} alt={card.alt} className="h-full w-full object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0)),linear-gradient(0deg,rgba(0,0,0,0.18),rgba(0,0,0,0))]" />
        </Link>
      ))}
    </div>
  );
}
