"use client";

import { ArrowUpRight } from "lucide-react";
import { InteractivePanel } from "@/components/interactive-panel";
import { SiteFrame } from "@/components/site-frame";
import { useLocale } from "@/components/locale-provider";
import { writingPage } from "@/lib/site-content";

export default function WritingPage() {
  const { locale } = useLocale();

  return (
    <SiteFrame current="writing">
      <section className="fade-up grid gap-6 lg:grid-cols-[1.06fr_0.94fr]">
        <div className="soft-card p-7 sm:p-10">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
            {writingPage.description[locale]}
          </p>
          <h1 className="mt-5 whitespace-pre-line text-5xl font-semibold leading-[0.92] tracking-[-0.065em] text-black sm:text-6xl">
            {writingPage.title[locale]}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)]">
            {writingPage.intro[locale]}
          </p>
        </div>

        <InteractivePanel className="soft-card lift-card p-7 sm:p-9">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
            {writingPage.blogLabel[locale]}
          </p>
          <a
            href={writingPage.blogUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 flex items-center justify-between rounded-[28px] border border-[var(--line)] bg-white/70 px-5 py-5 transition hover:bg-white"
          >
            <span className="text-base font-medium">
              {locale === "ko" ? "\uBE14\uB85C\uADF8 \uC5F4\uAE30" : "Open blog"}
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </InteractivePanel>
      </section>

      <section className="mt-8 fade-up">
        <div className="mb-4">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
            {writingPage.entriesLabel[locale]}
          </p>
        </div>

        <div className="grid gap-4">
          {writingPage.entries.map((entry) => (
            <InteractivePanel key={`${entry.year}-${entry.title.en}`} className="soft-card lift-card">
              <article className="grid gap-5 p-7 sm:grid-cols-[90px_1fr] sm:p-9">
                <span className="text-sm text-[var(--muted)]">{entry.year}</span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-black/35">
                    {entry.category[locale]}
                  </p>
                  <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-black">
                    {entry.title[locale]}
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                    {entry.summary[locale]}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-black/35">
                      {locale === "ko" ? entry.title.en : entry.title.ko}
                    </p>
                    <a
                      href={entry.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-black underline underline-offset-4"
                    >
                      {locale === "ko" ? "\uC6D0\uBB38 \uBCF4\uAE30" : "Read original"}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            </InteractivePanel>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
