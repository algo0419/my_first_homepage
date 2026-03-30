"use client";

import { SiteFrame } from "@/components/site-frame";
import { useLocale } from "@/components/locale-provider";
import { researchPage } from "@/lib/site-content";

export default function ResearchPage() {
  const { locale } = useLocale();

  return (
    <SiteFrame current="research">
      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8">
          <p className="text-sm text-[var(--muted)]">{researchPage.description[locale]}</p>
          <h1 className="mt-4 whitespace-pre-line text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-black sm:text-6xl">
            {researchPage.title[locale]}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--muted)]">
            {researchPage.intro[locale]}
          </p>
        </div>

        <div className="border border-dashed border-[var(--line)] bg-white p-6 sm:p-8">
          <div className="flex aspect-[4/3] items-center justify-center bg-[var(--surface)]">
            <div className="text-center">
              <p className="text-lg font-medium text-black">
                {researchPage.placeholderTitle[locale]}
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {researchPage.placeholderBody[locale]}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-3">
        {researchPage.notes.map((note) => (
          <div
            key={note.en}
            className="border border-[var(--line)] bg-white p-6 text-sm leading-7 text-[var(--muted)]"
          >
            {note[locale]}
          </div>
        ))}
      </section>
    </SiteFrame>
  );
}
