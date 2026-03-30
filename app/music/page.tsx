"use client";

import { ArrowUpRight, Play } from "lucide-react";
import { InteractivePanel } from "@/components/interactive-panel";
import { SiteFrame } from "@/components/site-frame";
import { useLocale } from "@/components/locale-provider";

const archiveAlbums = [
  {
    artist: "Michael Jackson",
    title: "Off the Wall",
    rating: "10.0",
    year: "1979",
    href: "https://open.spotify.com/album/2ZytN2cY4Zjrr9ukb2rqTP",
    image:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022b74bf21c7e4f56758610949",
    note: {
      ko: "\uAC00\uC7A5 \uB192\uAC8C \uD45C\uC2DC\uB41C \uBCC4\uC810.",
      en: "Highest rating in the export.",
    },
    layout: "lg:col-span-2 lg:row-span-2",
  },
  {
    artist: "Kanye West",
    title: "Yeezus",
    rating: "9.0",
    year: "2013",
    href: "https://open.spotify.com/album/7D2NdGvBHIavgLhmcwhluK",
    image:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021dacfbc31cc873d132958af9",
    note: {
      ko: "\uC555\uB825\uAC10\uACFC \uC9C8\uAC10.",
      en: "Pressure and texture.",
    },
    layout: "lg:col-span-1 lg:row-span-1",
  },
  {
    artist: "The Avalanches",
    title: "Since I Left You",
    rating: "8.0",
    year: "2000",
    href: "https://open.spotify.com/album/4cSWbSVL31WoIcSBaSqyit",
    image:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0293c10818e418f39e3096b737",
    note: {
      ko: "\uC0D8\uD50C\uB9C1 \uAC10\uAC01.",
      en: "Sampling and lightness.",
    },
    layout: "lg:col-span-1 lg:row-span-1",
  },
  {
    artist: "Lamp",
    title: "For Lovers",
    rating: "9.0",
    year: "2004",
    href: "https://open.spotify.com/album/0gwS2D9sukMLXNvleEnYr2",
    image:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0258ebd661a51fcf2968db3ea1",
    note: {
      ko: "\uBD80\uB4DC\uB7EC\uC6B4 \uBC30\uC5F4.",
      en: "Soft precision.",
    },
    layout: "lg:col-span-1 lg:row-span-1",
  },
  {
    artist: "The Beach Boys",
    title: "Pet Sounds",
    rating: "8.0",
    year: "1966",
    href: "https://open.spotify.com/album/2CNEkSE8TADXRT2AzcEt1b",
    image:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0250eb0c521d2d3b2f599bff04",
    note: {
      ko: "\uBA5C\uB85C\uB514\uC640 \uBC30\uC5F4.",
      en: "Melody and arrangement.",
    },
    layout: "lg:col-span-1 lg:row-span-1",
  },
  {
    artist: "Kanye West",
    title: "Late Registration",
    rating: "9.0",
    year: "2005",
    href: "https://open.spotify.com/album/4GRDFQ9HRoO0by8H0r2a3I",
    image:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024c7dd2b7fc516356e037bf68",
    note: {
      ko: "\uC11C\uC0AC\uC640 \uD504\uB85C\uB355\uC158.",
      en: "Narrative and production.",
    },
    layout: "lg:col-span-2 lg:row-span-1",
  },
] as const;

const liveVideos = [
  {
    title: {
      ko: "\uACF5\uC5F0 \uC601\uC0C1 01",
      en: "Live video 01",
    },
    caption: {
      ko: "YouTube ID",
      en: "YouTube ID",
    },
    youtubeId: "",
  },
  {
    title: {
      ko: "\uACF5\uC5F0 \uC601\uC0C1 02",
      en: "Live video 02",
    },
    caption: {
      ko: "YouTube ID",
      en: "YouTube ID",
    },
    youtubeId: "",
  },
] as const;

export default function MusicPage() {
  const { locale } = useLocale();

  return (
    <SiteFrame current="music">
      <section className="fade-up grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="soft-card p-7 sm:p-10">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
            {locale === "ko" ? "\uB9AC\uC2A4\uB2DD" : "Listening"}
          </p>
          <h1 className="mt-5 whitespace-pre-line text-5xl font-semibold leading-[0.92] tracking-[-0.065em] text-[var(--text)] sm:text-6xl">
            {locale === "ko" ? "\uC74C\uC545 \uC544\uCE74\uC774\uBE0C" : "Music\narchive"}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)]">
            {locale === "ko"
              ? "RYM export, Spotify, live clips."
              : "RYM export, Spotify, live clips."}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {[
            "RYM export",
            "Spotify links",
            "Live room",
          ].map((item) => (
            <InteractivePanel key={item} className="soft-card lift-card p-5 text-sm tracking-[0.08em] text-[var(--muted)]">
              {item}
            </InteractivePanel>
          ))}
        </div>
      </section>

      <section className="mt-8 fade-up">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
              {locale === "ko" ? "\uBCC4\uC810 \uC74C\uBC18" : "Selected records"}
            </p>
          </div>
          <a
            href="https://rateyourmusic.com/~jHyung"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[var(--text)] underline underline-offset-4"
          >
            {locale === "ko" ? "Rate Your Music" : "Rate Your Music"}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid gap-4 lg:grid-cols-4 lg:auto-rows-[220px]">
          {archiveAlbums.map((album) => (
            <InteractivePanel key={`${album.artist}-${album.title}`} asChild className="soft-card lift-card group overflow-hidden">
              <a
                href={album.href}
                target="_blank"
                rel="noreferrer"
                className={`${album.layout} relative border border-transparent`}
              >
                <img
                  src={album.image}
                  alt={`${album.artist} - ${album.title}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/18 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-white/65">
                        {album.artist}
                      </p>
                      <p className="mt-1 text-lg font-medium leading-tight tracking-[-0.03em]">
                        {album.title}
                      </p>
                    </div>
                    <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs tracking-[0.16em] text-white/80">
                      {album.rating}
                    </span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/55">{album.year}</p>
                  <p className="mt-2 text-sm leading-6 text-white/72">{album.note[locale]}</p>
                </div>
              </a>
            </InteractivePanel>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
        <InteractivePanel className="soft-card lift-card p-7 sm:p-9">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
            {locale === "ko" ? "\uB9C1\uD06C" : "Links"}
          </p>
          <div className="mt-6 grid gap-3">
            <a
              href="https://rateyourmusic.com/~jHyung"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-[24px] border border-[var(--line)] bg-white/5 px-5 py-4 transition hover:bg-white/10"
            >
              <span className="text-sm font-medium">Rate Your Music</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://open.spotify.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-[24px] border border-[var(--line)] bg-white/5 px-5 py-4 transition hover:bg-white/10"
            >
              <span className="text-sm font-medium">Spotify</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </InteractivePanel>

        <div className="grid gap-4 lg:grid-cols-2">
          {liveVideos.map((video) => (
            <InteractivePanel key={video.title.en} className="soft-card lift-card p-4">
              {video.youtubeId ? (
                <div className="aspect-video overflow-hidden rounded-[24px] bg-black">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title[locale]}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="flex aspect-video items-center justify-center rounded-[24px] border border-dashed border-[var(--line)] bg-[var(--surface)]">
                  <div className="text-center">
                    <Play className="mx-auto h-6 w-6 text-white/35" />
                    <p className="mt-4 text-base font-medium text-[var(--text)]">{video.title[locale]}</p>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{video.caption[locale]}</p>
                  </div>
                </div>
              )}
            </InteractivePanel>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
