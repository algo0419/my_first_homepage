"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InteractivePanel } from "@/components/interactive-panel";
import { SiteFrame } from "@/components/site-frame";
import { useLocale } from "@/components/locale-provider";

const collageCards = [
  {
    kind: "text",
    href: "/music",
    label: {
      ko: "\uC74C\uC545",
      en: "Music",
    },
    sublabel: "RYM / Spotify / Live",
    body: {
      ko: "\uB4E3\uB294 \uAC83\uB4E4",
      en: "Listening",
    },
    className: "md:col-span-4 md:row-span-2 md:rotate-[-2deg]",
  },
  {
    kind: "image",
    href: "/music",
    image:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022b74bf21c7e4f56758610949",
    alt: "Michael Jackson Off the Wall album cover",
    className: "md:col-span-2 md:row-span-2 md:translate-y-3 md:rotate-[3deg]",
  },
  {
    kind: "image",
    href: "/music",
    image:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021dacfbc31cc873d132958af9",
    alt: "Kanye West Yeezus album cover",
    className: "md:col-span-2 md:row-span-2 md:translate-y-8 md:rotate-[-3deg]",
  },
  {
    kind: "image",
    href: "/writing",
    image: "https://covers.openlibrary.org/b/olid/OL16707410M-L.jpg",
    alt: "Jorge Luis Borges Ficciones cover",
    className: "md:col-span-2 md:row-span-3 md:rotate-[2.4deg]",
  },
  {
    kind: "text",
    href: "/writing",
    label: {
      ko: "\uB3C5\uC11C / \uAE00",
      en: "Writing",
    },
    sublabel: "Borges / Camus / Wittgenstein",
    body: {
      ko: "\uBB38\uD559, \uC5B8\uC5B4,\n\uC5D0\uC138\uC774",
      en: "Literature,\nlanguage,\nessays",
    },
    className: "md:col-span-4 md:row-span-2 md:translate-y-4 md:rotate-[1.6deg]",
  },
  {
    kind: "image",
    href: "/writing",
    image: "https://covers.openlibrary.org/b/olid/OL24214908M-L.jpg",
    alt: "Albert Camus The Myth of Sisyphus cover",
    className: "md:col-span-2 md:row-span-2 md:rotate-[-2deg]",
  },
  {
    kind: "image",
    href: "/writing",
    image: "https://covers.openlibrary.org/b/olid/OL19947003M-L.jpg",
    alt: "Ludwig Wittgenstein Philosophical Investigations cover",
    className: "md:col-span-2 md:row-span-2 md:translate-y-6 md:rotate-[2deg]",
  },
  {
    kind: "image",
    href: "/research",
    image:
      "https://cdn.ncbi.nlm.nih.gov/pmc/blobs/81d1/8230192/dc07422edad7/micromachines-12-00625-g006.jpg",
    alt: "BTO Si phase shifter figure",
    className: "md:col-span-3 md:row-span-3 md:rotate-[-1.6deg]",
  },
  {
    kind: "text",
    href: "/research",
    label: {
      ko: "\uC5F0\uAD6C",
      en: "Research",
    },
    sublabel: "Diamond / BTO / Hybrid",
    body: {
      ko: "Diamond photonic crystal\nBTO modulation",
      en: "Diamond photonic crystal\nBTO modulation",
    },
    className: "md:col-span-3 md:row-span-2 md:translate-y-3 md:rotate-[1.2deg]",
  },
  {
    kind: "portrait",
    href: "/research",
    image: "/portraits/portrait-night.jpg",
    alt: "Junhyung Cho portrait",
    caption: {
      ko: "Junhyung Cho",
      en: "Junhyung Cho",
    },
    className: "md:col-span-3 md:row-span-4 md:translate-y-8 md:rotate-[3deg]",
  },
  {
    kind: "quote",
    href: "/writing",
    body: {
      ko: "\u2018Ficciones\u2019 / \u2018Le Mythe de Sisyphe\u2019 /\n\u2018Philosophical Investigations\u2019",
      en: "'Ficciones' / 'The Myth of Sisyphus' /\n'Philosophical Investigations'",
    },
    className: "md:col-span-4 md:row-span-2 md:rotate-[-1deg]",
  },
  {
    kind: "quote",
    href: "/music",
    body: {
      ko: "Off the Wall / Yeezus /\nFor Lovers / Pet Sounds",
      en: "Off the Wall / Yeezus /\nFor Lovers / Pet Sounds",
    },
    className: "md:col-span-4 md:row-span-2 md:translate-y-4 md:rotate-[1.4deg]",
  },
] as const;

export default function HomePage() {
  const { locale } = useLocale();

  return (
    <SiteFrame current="home">
      <section className="fade-up">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">Junhyung Cho</p>
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
            music / writing / research
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-12 md:auto-rows-[88px]">
          {collageCards.map((card, index) => (
            <InteractivePanel
              key={`${card.kind}-${index}`}
              asChild
              className={`soft-card lift-card overflow-hidden ${card.className}`}
            >
              <Link href={card.href} className="group h-full">
                {card.kind === "image" ? (
                  <div className="relative h-full min-h-[220px]">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-transparent to-transparent" />
                  </div>
                ) : null}

                {card.kind === "portrait" ? (
                  <div className="relative h-full min-h-[340px]">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/8 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/68">
                        {card.caption[locale]}
                      </p>
                    </div>
                  </div>
                ) : null}

                {card.kind === "text" ? (
                  <div className="flex h-full flex-col justify-between p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-white/38">
                          {card.label[locale]}
                        </p>
                        <h2 className="mt-3 whitespace-pre-line text-3xl font-medium leading-[0.96] tracking-[-0.055em] text-[var(--text)] sm:text-4xl">
                          {card.body[locale]}
                        </h2>
                      </div>
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-white/46 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                    </div>
                    <p className="mt-8 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
                      {card.sublabel}
                    </p>
                  </div>
                ) : null}

                {card.kind === "quote" ? (
                  <div className="flex h-full items-end p-6 sm:p-7">
                    <p className="whitespace-pre-line text-2xl font-medium leading-[1.02] tracking-[-0.045em] text-[var(--text)] sm:text-3xl">
                      {card.body[locale]}
                    </p>
                  </div>
                ) : null}
              </Link>
            </InteractivePanel>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
