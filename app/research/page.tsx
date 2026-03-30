"use client";

import { ArrowUpRight } from "lucide-react";
import { InteractivePanel } from "@/components/interactive-panel";
import { SiteFrame } from "@/components/site-frame";
import { useLocale } from "@/components/locale-provider";
import { researchPage } from "@/lib/site-content";

const figureCards = [
  {
    image:
      "https://cdn.ncbi.nlm.nih.gov/pmc/blobs/42f6/7823554/203299e8686a/micromachines-12-00036-g003.jpg",
    title: {
      ko: "Diamond nanopillars and nanowires",
      en: "Diamond nanopillars and nanowires",
    },
    caption: {
      ko: "\uB2E4\uC774\uC544\uBAAC\uB4DC \uB098\uB178\uD544\uB7EC / \uB098\uB178\uC640\uC774\uC5B4 \uAD6C\uC870.",
      en: "Diamond nanopillar and nanowire structures.",
    },
    sourceLabel: "Single Crystal Diamond Device Fabrication",
    sourceHref: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7823554/",
    layout: "lg:col-span-2",
  },
  {
    image:
      "https://cdn.ncbi.nlm.nih.gov/pmc/blobs/42f6/7823554/f7b3a3e99af9/micromachines-12-00036-g004.jpg",
    title: {
      ko: "Diamond photonic structures",
      en: "Diamond photonic structures",
    },
    caption: {
      ko: "\uC5ED\uC0BC\uAC01 \uAD6C\uC870\uC640 nanophotonic device.",
      en: "Inverted nano-cones and nanophotonic devices.",
    },
    sourceLabel: "Single Crystal Diamond Device Fabrication",
    sourceHref: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7823554/",
    layout: "lg:col-span-1",
  },
  {
    image:
      "https://cdn.ncbi.nlm.nih.gov/pmc/blobs/81d1/8230192/dc07422edad7/micromachines-12-00625-g006.jpg",
    title: {
      ko: "BTO / Si phase shifter",
      en: "BTO / Si phase shifter",
    },
    caption: {
      ko: "BTO / Si optical phase shifter \uB2E8\uBA74.",
      en: "BTO / Si optical phase shifter cross-section.",
    },
    sourceLabel: "Integrated Optical Phase Shifters Review",
    sourceHref: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8230192/",
    layout: "lg:col-span-1",
  },
  {
    image:
      "https://cdn.ncbi.nlm.nih.gov/pmc/blobs/81d1/8230192/3c1d2b93384b/micromachines-12-00625-g008.jpg",
    title: {
      ko: "Hybrid modulator map",
      en: "Hybrid modulator map",
    },
    caption: {
      ko: "Hybrid / silicon phase shifter \uC131\uB2A5 \uBE44\uAD50.",
      en: "Performance comparison of hybrid and silicon phase shifters.",
    },
    sourceLabel: "Integrated Optical Phase Shifters Review",
    sourceHref: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8230192/",
    layout: "lg:col-span-2",
  },
] as const;

const topicNotes = [
  "diamond photonic crystal",
  "BTO modulation",
  "hybrid integration",
] as const;

export default function ResearchPage() {
  const { locale } = useLocale();

  return (
    <SiteFrame current="research">
      <section className="fade-up grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="soft-card p-7 sm:p-10">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
            {researchPage.description[locale]}
          </p>
          <h1 className="mt-5 whitespace-pre-line text-5xl font-semibold leading-[0.92] tracking-[-0.065em] text-[var(--text)] sm:text-6xl">
            {researchPage.title[locale]}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">
            {researchPage.intro[locale]}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {topicNotes.map((note) => (
            <InteractivePanel key={note} className="soft-card lift-card p-5 text-sm tracking-[0.08em] text-[var(--muted)]">
              {note}
            </InteractivePanel>
          ))}
        </div>
      </section>

      <section className="mt-8 fade-up">
        <div className="mb-4">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
            {locale === "ko" ? "Figures" : "Figures"}
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {figureCards.map((card) => (
            <InteractivePanel key={`${card.sourceLabel}-${card.title.en}`} className={`soft-card lift-card overflow-hidden ${card.layout}`}>
              <article>
                <div className="aspect-[4/3] overflow-hidden border-b border-[var(--line)] bg-[var(--surface)]">
                  <img
                    src={card.image}
                    alt={card.title.en}
                    className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-medium tracking-[-0.04em] text-[var(--text)]">
                    {card.title[locale]}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {card.caption[locale]}
                  </p>
                  <a
                    href={card.sourceHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm text-[var(--text)] underline underline-offset-4"
                  >
                    {card.sourceLabel}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            </InteractivePanel>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
