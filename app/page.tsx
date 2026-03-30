"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteFrame } from "@/components/site-frame";
import { useLocale } from "@/components/locale-provider";
import { disciplines, homeContent, links } from "@/lib/site-content";

const homePhotos = [
  {
    src: "/portraits/portrait-night.jpg",
    alt: "Junhyung Cho portrait at night",
    className: "row-span-2",
  },
  {
    src: "/portraits/portrait-stage.jpg",
    alt: "Junhyung Cho performing on stage",
    className: "",
  },
  {
    src: "/portraits/portrait-city.jpg",
    alt: "Junhyung Cho walking by mural art",
    className: "",
  },
] as const;

export default function HomePage() {
  const { locale } = useLocale();

  return (
    <SiteFrame current="home">
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="soft-card fade-up p-7 sm:p-10">
          <div className="mb-12 flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full border border-[var(--line)] bg-white/85 px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
              {homeContent.badge[locale]}
            </span>
            <span className="text-sm text-[var(--muted)]">{homeContent.location}</span>
          </div>

          <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
            {homeContent.introLabel[locale]}
          </p>
          <h1 className="mt-5 whitespace-pre-line text-6xl font-semibold leading-[0.9] tracking-[-0.07em] text-black sm:text-7xl">
            {homeContent.title[locale]}
          </h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-[var(--muted)]">
            {homeContent.description[locale]}
          </p>
        </div>

        <div className="grid auto-rows-[190px] gap-4 sm:grid-cols-2">
          {homePhotos.map((photo) => (
            <div
              key={photo.src}
              className={`soft-card lift-card fade-up overflow-hidden ${photo.className}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        {disciplines.map((item) => (
          <Link
            key={item.key}
            href={item.path}
            className="soft-card lift-card group fade-up p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-black/35">
                  {item.note[locale]}
                </p>
                <p className="mt-4 text-3xl font-medium tracking-[-0.05em] text-black">
                  {item.title[locale]}
                </p>
                <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                  {item.strap[locale]}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-black/45 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black" />
            </div>
          </Link>
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="soft-card fade-up p-7 sm:p-10">
          <p className="text-sm text-[var(--muted)]">{homeContent.profileLabel[locale]}</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.05em] text-black sm:text-4xl">
            {homeContent.profileTitle[locale]}
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-8 text-[var(--muted)]">
            {homeContent.profileBody[locale]}
          </p>
        </div>

        <div className="grid gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="soft-card lift-card group fade-up flex items-center justify-between px-5 py-4"
            >
              <div>
                <p className="text-base font-medium">{link.label}</p>
                <p className="mt-1 text-sm opacity-65">{link.meta[locale]}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-black/45 transition duration-300 group-hover:text-black" />
            </a>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
