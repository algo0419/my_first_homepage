"use client";

import { ArrowUpRight } from "lucide-react";
import { SiteFrame } from "@/components/site-frame";
import { useLocale } from "@/components/locale-provider";
import { writingPage } from "@/lib/site-content";

export default function WritingPage() {
  const { locale } = useLocale();
  const hasBlogLink = writingPage.blogUrl.length > 0;

  return (
    <SiteFrame current="writing">
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8">
          <p className="text-sm text-[var(--muted)]">{writingPage.description[locale]}</p>
          <h1 className="mt-4 whitespace-pre-line text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-black sm:text-6xl">
            {writingPage.title[locale]}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--muted)]">
            {writingPage.intro[locale]}
          </p>
        </div>

        <div className="border border-[var(--line)] bg-white p-6">
          <p className="text-sm text-[var(--muted)]">{writingPage.blogLabel[locale]}</p>
          {hasBlogLink ? (
            <a
              href={writingPage.blogUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center justify-between border border-[var(--line)] px-4 py-4 transition hover:bg-black hover:text-white"
            >
              <span>Open blog</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <div className="mt-4 border border-dashed border-[var(--line)] bg-[var(--surface)] px-4 py-6 text-sm leading-7 text-[var(--muted)]">
              {writingPage.blogPlaceholder[locale]}
            </div>
          )}
        </div>
      </section>

      <section className="mt-6 border border-[var(--line)] bg-white p-6 sm:p-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-xl font-medium tracking-[-0.03em] text-black">
            {writingPage.entriesLabel[locale]}
          </h2>
        </div>

        <div className="grid gap-4">
          {writingPage.entries.map((entry) => (
            <article
              key={`${entry.year}-${entry.title.en}`}
              className="grid gap-4 border-t border-[var(--line)] pt-4 first:border-t-0 first:pt-0 sm:grid-cols-[80px_1fr]"
            >
              <span className="text-sm text-[var(--muted)]">{entry.year}</span>
              <div>
                <h3 className="text-xl font-medium tracking-[-0.03em] text-black">
                  {entry.title[locale]}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {entry.summary[locale]}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-black/35">
                  {locale === "ko" ? entry.title.en : entry.title.ko}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
