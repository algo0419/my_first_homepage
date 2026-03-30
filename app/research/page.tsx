"use client";

import { ArrowUpRight } from "lucide-react";
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
      ko: "단결정 다이아몬드 나노필러와 나노와이어의 형상, 그리고 관련 가공 흐름을 보여 주는 figure.",
      en: "A figure showing single-crystal diamond nanopillars, nanowires, and the fabrication flow around them.",
    },
    sourceLabel: "Recent Advances in Single Crystal Diamond Device Fabrication",
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
      ko: "inverted nano-cone와 waveguide 기반 diamond nanophotonic device 쪽 이미지를 담고 있습니다.",
      en: "This figure includes inverted nano-cones and a waveguide-based diamond nanophotonic device.",
    },
    sourceLabel: "Recent Advances in Single Crystal Diamond Device Fabrication",
    sourceHref: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7823554/",
    layout: "lg:col-span-1",
  },
  {
    image:
      "https://cdn.ncbi.nlm.nih.gov/pmc/blobs/81d1/8230192/dc07422edad7/micromachines-12-00625-g006.jpg",
    title: {
      ko: "BTO / Si phase shifter cross-sections",
      en: "BTO / Si phase shifter cross-sections",
    },
    caption: {
      ko: "LN/Si와 BTO/Si optical phase shifter 단면 비교가 포함된 review figure.",
      en: "A review figure comparing LN/Si and BTO/Si optical phase shifter cross-sections.",
    },
    sourceLabel: "Heterogeneously-Integrated Optical Phase Shifters: A Review",
    sourceHref: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8230192/",
    layout: "lg:col-span-1",
  },
  {
    image:
      "https://cdn.ncbi.nlm.nih.gov/pmc/blobs/81d1/8230192/3c1d2b93384b/micromachines-12-00625-g008.jpg",
    title: {
      ko: "Hybrid modulator performance map",
      en: "Hybrid modulator performance map",
    },
    caption: {
      ko: "hybrid phase shifter와 silicon phase shifter의 성능 비교를 시각적으로 정리한 figure.",
      en: "A performance comparison figure for hybrid and silicon phase shifters.",
    },
    sourceLabel: "Heterogeneously-Integrated Optical Phase Shifters: A Review",
    sourceHref: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8230192/",
    layout: "lg:col-span-2",
  },
] as const;

const topicNotes = [
  {
    ko: "diamond photonic crystal",
    en: "diamond photonic crystal",
  },
  {
    ko: "BTO modulation",
    en: "BTO modulation",
  },
  {
    ko: "hybrid integration",
    en: "hybrid integration",
  },
] as const;

export default function ResearchPage() {
  const { locale } = useLocale();

  return (
    <SiteFrame current="research">
      <section className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8">
          <p className="text-sm text-[var(--muted)]">{researchPage.description[locale]}</p>
          <h1 className="mt-4 whitespace-pre-line text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-black sm:text-6xl">
            {researchPage.title[locale]}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--muted)]">
            {researchPage.intro[locale]}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {topicNotes.map((note) => (
            <div
              key={note.en}
              className="border border-[var(--line)] bg-white p-5 text-sm tracking-[0.08em] text-[var(--muted)]"
            >
              {note[locale]}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-medium tracking-[-0.03em] text-black">
              {locale === "ko" ? "Reference figures" : "Reference figures"}
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {locale === "ko"
                ? "현재는 리뷰 논문 이미지로 페이지를 채워 두었고, 이후에는 직접 만든 시뮬레이션 결과로 교체할 수 있습니다."
                : "The current board is filled with review-paper figures and can later be replaced with original simulation outputs."}
            </p>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {figureCards.map((card) => (
            <article
              key={`${card.sourceLabel}-${card.title.en}`}
              className={`overflow-hidden border border-[var(--line)] bg-white ${card.layout}`}
            >
              <div className="aspect-[4/3] overflow-hidden border-b border-[var(--line)] bg-[var(--surface)]">
                <img
                  src={card.image}
                  alt={card.title.en}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-medium tracking-[-0.03em] text-black">
                  {card.title[locale]}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {card.caption[locale]}
                </p>
                <a
                  href={card.sourceHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-black underline underline-offset-4"
                >
                  {card.sourceLabel}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
