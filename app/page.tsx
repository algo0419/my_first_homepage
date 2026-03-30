"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InteractivePanel } from "@/components/interactive-panel";
import { SiteFrame } from "@/components/site-frame";
import { useLocale } from "@/components/locale-provider";
import { homeContent, links } from "@/lib/site-content";

export default function HomePage() {
  const { locale } = useLocale();

  return (
    <SiteFrame current="home">
      <section className="fade-up">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">
            {homeContent.introLabel[locale]}
          </p>
          <p className="text-sm text-[var(--muted)]">{homeContent.location}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-12 md:auto-rows-[92px]">
          <InteractivePanel className="soft-card lift-card md:col-span-7 md:row-span-4 md:rotate-[-1.2deg]">
            <div className="flex h-full flex-col justify-between p-7 sm:p-9">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full border border-[var(--line)] bg-white/6 px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                  {homeContent.badge[locale]}
                </span>
                <span className="text-xs uppercase tracking-[0.18em] text-white/35">
                  {locale === "ko" ? "\uD648" : "Index"}
                </span>
              </div>

              <div>
                <h1 className="max-w-4xl whitespace-pre-line text-[3.2rem] font-semibold leading-[0.9] tracking-[-0.075em] text-[var(--text)] sm:text-[5.2rem]">
                  {homeContent.title[locale]}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">
                  {homeContent.description[locale]}
                </p>
              </div>
            </div>
          </InteractivePanel>

          <InteractivePanel className="soft-card lift-card overflow-hidden md:col-span-5 md:row-span-5 md:translate-y-6 md:rotate-[1.6deg]">
            <div className="relative h-full min-h-[320px]">
              <img
                src="/portraits/portrait-night.jpg"
                alt="Junhyung Cho portrait"
                className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/48 via-black/8 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs uppercase tracking-[0.22em] text-white/65">
                  Junhyung Cho
                </p>
                <p className="mt-2 text-lg tracking-[-0.03em] text-white/90">
                  {locale === "ko"
                    ? "\uC5F0\uAD6C, \uB9AC\uC2A4\uB2DD, \uAE00\uC4F0\uAE30"
                    : "Research, listening, writing"}
                </p>
              </div>
            </div>
          </InteractivePanel>

          <InteractivePanel asChild className="soft-card lift-card overflow-hidden md:col-span-4 md:row-span-4 md:rotate-[-1.4deg]">
            <Link href="/music" className="group h-full">
              <div className="grid h-full grid-cols-[1fr_1fr]">
                <img
                  src="https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022b74bf21c7e4f56758610949"
                  alt="Off the Wall cover"
                  className="h-full w-full object-cover"
                />
                <img
                  src="https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021dacfbc31cc873d132958af9"
                  alt="Yeezus cover"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="border-t border-[var(--line)] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                      {locale === "ko" ? "\uC74C\uC545" : "Music"}
                    </p>
                    <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em] text-[var(--text)]">
                      {locale === "ko" ? "\uB4E3\uB294 \uAC83\uB4E4" : "Listening"}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {locale === "ko"
                        ? "RYM, Spotify, live clips."
                        : "RYM, Spotify, live clips."}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-white/45 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </div>
              </div>
            </Link>
          </InteractivePanel>

          <InteractivePanel asChild className="soft-card lift-card md:col-span-4 md:row-span-3 md:translate-y-5 md:rotate-[1.2deg]">
            <Link href="/writing" className="group flex h-full flex-col justify-between p-7">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                  {locale === "ko" ? "\uB3C5\uC11C / \uAE00" : "Writing"}
                </p>
                <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-[var(--text)]">
                  {locale === "ko"
                    ? "\uBB38\uD559, \uC5B8\uC5B4,\n\uC5D0\uC138\uC774"
                    : "Literature,\nlanguage,\nessays"}
                </h2>
              </div>
              <div className="mt-8">
                <p className="text-sm leading-7 text-[var(--muted)]">
                  {locale === "ko"
                    ? "\u2018\uBAA8\uB974\uB294 \uB9CC\uD07C \uBCF4\uC778\uB2E4\u2019,\n\u2018\uD53D\uC158\uB4E4\u2019, \uC9E7\uC740 \uB9AC\uBDF0 \uB4F1."
                    : "'You See More by Knowing Less',\n'Ficciones', short reviews."}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm text-white/70">
                  <span>{locale === "ko" ? "\uBCF4\uAE30" : "View"}</span>
                  <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          </InteractivePanel>

          <InteractivePanel asChild className="soft-card lift-card overflow-hidden md:col-span-4 md:row-span-4 md:rotate-[-1deg]">
            <Link href="/research" className="group h-full">
              <div className="aspect-[4/3] overflow-hidden border-b border-[var(--line)]">
                <img
                  src="https://cdn.ncbi.nlm.nih.gov/pmc/blobs/81d1/8230192/dc07422edad7/micromachines-12-00625-g006.jpg"
                  alt="BTO Si phase shifter figure"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                      {locale === "ko" ? "\uC5F0\uAD6C" : "Research"}
                    </p>
                    <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em] text-[var(--text)]">
                      Diamond / BTO
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {locale === "ko"
                        ? "photonic crystal,\nhybrid integration,\nreference figures."
                        : "photonic crystal,\nhybrid integration,\nreference figures."}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-white/45 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </div>
              </div>
            </Link>
          </InteractivePanel>

          <InteractivePanel className="soft-card lift-card md:col-span-4 md:row-span-2 md:translate-y-2 md:rotate-[0.8deg]">
            <div className="flex h-full flex-col justify-between p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                {locale === "ko" ? "\uD750\uB984" : "Flow"}
              </p>
              <p className="text-2xl font-medium leading-tight tracking-[-0.05em] text-[var(--text)] sm:text-3xl">
                {locale === "ko"
                  ? "\uC74C\uC545, \uAE00, \uC5F0\uAD6C\uAC00 \uC11E\uC778 \uD55C \uD654\uBA74."
                  : "One surface where music, writing, and research overlap."}
              </p>
            </div>
          </InteractivePanel>
        </div>
      </section>

      <section className="mt-10 fade-up">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {links.map((link, index) => (
            <InteractivePanel
              key={link.label}
              asChild
              className={`soft-card lift-card ${index % 2 === 0 ? "md:rotate-[-0.8deg]" : "md:rotate-[0.8deg]"}`}
            >
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between px-5 py-5"
              >
                <div>
                  <p className="text-base font-medium">{link.label}</p>
                <p className="mt-1 text-sm text-white/55">{link.meta[locale]}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/45 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </a>
            </InteractivePanel>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
