"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InteractivePanel } from "@/components/interactive-panel";
import { SiteFrame } from "@/components/site-frame";
import { useLocale } from "@/components/locale-provider";
import { disciplines, homeContent, links } from "@/lib/site-content";

export default function HomePage() {
  const { locale } = useLocale();

  return (
    <SiteFrame current="home">
      <section className="fade-up grid gap-6 lg:grid-cols-[1.28fr_0.72fr]">
        <div className="soft-card p-7 sm:p-10">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
              {homeContent.badge[locale]}
            </span>
            <span className="text-sm text-[var(--muted)]">{homeContent.location}</span>
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
            {homeContent.introLabel[locale]}
          </p>
          <h1 className="mt-5 max-w-4xl whitespace-pre-line text-[3.6rem] font-semibold leading-[0.92] tracking-[-0.075em] text-black sm:text-[5.4rem]">
            {homeContent.title[locale]}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--muted)]">
            {homeContent.description[locale]}
          </p>
        </div>

        <InteractivePanel className="soft-card lift-card overflow-hidden">
          <div className="relative h-[320px] sm:h-[420px]">
            <img
              src="/portraits/portrait-night.jpg"
              alt="Junhyung Cho portrait at night"
              className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </InteractivePanel>
      </section>

      <section className="mt-10 fade-up">
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
            {locale === "ko" ? "\uC139\uC158" : "Sections"}
          </p>
        </div>

        <div className="grid gap-4">
          {disciplines.map((item, index) => (
            <InteractivePanel key={item.key} asChild className="soft-card lift-card group overflow-hidden">
              <Link href={item.path}>
                <div className="flex min-h-[220px] flex-col justify-between p-7 sm:p-9">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-black/35">
                      {String(index + 1).padStart(2, "0")} / {item.note[locale]}
                    </p>
                    <h2 className="mt-5 text-4xl font-medium tracking-[-0.06em] text-black sm:text-5xl">
                      {item.title[locale]}
                    </h2>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)]">
                      {item.strap[locale]}
                    </p>
                  </div>

                  <div className="mt-10 flex items-center gap-2 text-sm text-black/70">
                    <span>{locale === "ko" ? "\uBCF4\uAE30" : "View"}</span>
                    <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </InteractivePanel>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="soft-card fade-up p-7 sm:p-9">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
            {homeContent.profileLabel[locale]}
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.05em] text-black sm:text-4xl">
            {homeContent.profileTitle[locale]}
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-8 text-[var(--muted)]">
            {homeContent.profileBody[locale]}
          </p>
        </div>

        <div className="fade-up grid gap-3 sm:grid-cols-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="soft-card lift-card group flex items-center justify-between px-5 py-5"
            >
              <div>
                <p className="text-base font-medium">{link.label}</p>
                <p className="mt-1 text-sm text-black/55">{link.meta[locale]}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-black/45 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black" />
            </a>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
