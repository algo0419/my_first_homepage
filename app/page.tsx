"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteFrame } from "@/components/site-frame";
import { useLocale } from "@/components/locale-provider";
import { disciplines, homeContent, links } from "@/lib/site-content";

export default function HomePage() {
  const { locale } = useLocale();

  return (
    <SiteFrame current="home">
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
              {homeContent.badge[locale]}
            </span>
            <span className="text-sm text-[var(--muted)]">{homeContent.location}</span>
          </div>

          <p className="text-sm text-[var(--muted)]">{homeContent.introLabel[locale]}</p>
          <h1 className="mt-4 whitespace-pre-line text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-black sm:text-6xl">
            {homeContent.title[locale]}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--muted)]">
            {homeContent.description[locale]}
          </p>
        </div>

        <div className="grid gap-4">
          {homeContent.principles.map((item) => (
            <div
              key={item.en}
              className="border border-[var(--line)] bg-[var(--surface)] p-6"
            >
              <p className="text-sm text-[var(--muted)]">{item[locale]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-3">
        {disciplines.map((item) => (
          <Link
            key={item.key}
            href={item.path}
            className="group border border-[var(--line)] bg-white p-6 transition hover:-translate-y-0.5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-2xl font-medium tracking-[-0.04em] text-black">
                  {item.title[locale]}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {item.strap[locale]}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-black/45 transition group-hover:text-black" />
            </div>
          </Link>
        ))}
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8">
          <p className="text-sm text-[var(--muted)]">{homeContent.profileLabel[locale]}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] text-black sm:text-4xl">
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
              className="flex items-center justify-between border border-[var(--line)] bg-white px-5 py-4 transition hover:bg-black hover:text-white"
            >
              <div>
                <p className="text-base font-medium">{link.label}</p>
                <p className="mt-1 text-sm opacity-65">{link.meta[locale]}</p>
              </div>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
