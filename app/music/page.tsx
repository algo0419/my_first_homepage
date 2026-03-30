"use client";

import { ArrowUpRight, Play } from "lucide-react";
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
      ko: "RYM export에서 가장 높은 평점을 준 음반.",
      en: "The highest-rated record in the exported RYM list.",
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
      ko: "거칠고 밀도 높은 사운드 쪽 취향을 보여 주는 한 축.",
      en: "One axis of the archive that leans into abrasion and density.",
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
      ko: "샘플링 감각과 질감을 중심으로 남긴 선택.",
      en: "A pick that foregrounds sampling texture and lightness.",
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
      ko: "부드럽고 정교한 쪽으로 기울 때의 청취 결.",
      en: "The softer, more precise side of the listening map.",
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
      ko: "멜로디와 배열의 정교함을 확인하는 기준점.",
      en: "A reference point for arrangement and melodic detail.",
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
      ko: "서사와 프로덕션의 균형이 선명한 선택.",
      en: "A record where narrative and production stay in crisp balance.",
    },
    layout: "lg:col-span-2 lg:row-span-1",
  },
] as const;

const liveVideos = [
  {
    title: {
      ko: "공연 영상 01",
      en: "Live video 01",
    },
    caption: {
      ko: "나중에 YouTube 영상 ID를 넣으면 여기서 바로 재생됩니다.",
      en: "Add a YouTube video ID later and it will play directly here.",
    },
    youtubeId: "",
  },
  {
    title: {
      ko: "공연 영상 02",
      en: "Live video 02",
    },
    caption: {
      ko: "추가 라이브 클립이나 리허설 영상을 위한 슬롯.",
      en: "A second slot for another live clip or rehearsal video.",
    },
    youtubeId: "",
  },
] as const;

export default function MusicPage() {
  const { locale } = useLocale();

  return (
    <SiteFrame current="music">
      <section className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8">
          <p className="text-sm text-[var(--muted)]">
            {locale === "ko"
              ? "밴드 활동만 따로 떼어 두기보다, 평소 듣는 음반과 라이브 기록을 함께 두는 쪽에 가깝습니다."
              : "This page reads more like a listening archive than a band-only profile."}
          </p>
          <h1 className="mt-4 whitespace-pre-line text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-black sm:text-6xl">
            {locale === "ko"
              ? "듣는 음악과\n남겨 둔 라이브를\n같은 보드에 놓기."
              : "Keep favorite records\nand live documents\non the same board."}
          </h1>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            locale === "ko" ? "rym export" : "rym export",
            locale === "ko" ? "spotify links" : "spotify links",
            locale === "ko" ? "live room" : "live room",
          ].map((item) => (
            <div
              key={item}
              className="border border-[var(--line)] bg-white p-5 text-sm tracking-[0.08em] text-[var(--muted)]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-medium tracking-[-0.03em] text-black">
              {locale === "ko" ? "Listening archive" : "Listening archive"}
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {locale === "ko"
                ? "개인 RYM export에서 별점을 높게 준 음반 일부를 골라 Spotify로 연결했습니다."
                : "A small board of high-rated records selected from the personal RYM export, linked out to Spotify."}
            </p>
          </div>
          <a
            href="https://rateyourmusic.com/~jHyung"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-black underline underline-offset-4"
          >
            {locale === "ko" ? "RYM 프로필 보기" : "Open RYM profile"}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid gap-4 lg:grid-cols-4 lg:auto-rows-[220px]">
          {archiveAlbums.map((album) => (
            <a
              key={`${album.artist}-${album.title}`}
              href={album.href}
              target="_blank"
              rel="noreferrer"
              className={`group relative overflow-hidden border border-[var(--line)] bg-white ${album.layout}`}
            >
              <img
                src={album.image}
                alt={`${album.artist} - ${album.title}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/16 to-transparent" />
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
                <p className="mt-2 max-w-md text-sm leading-6 text-white/72">
                  {album.note[locale]}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[1.06fr_0.94fr]">
        <div className="border border-[var(--line)] bg-white p-6 sm:p-8">
          <p className="text-sm leading-7 text-[var(--muted)]">
            {locale === "ko"
              ? "음악 페이지는 장르별 설명을 길게 적기보다, 커버 이미지와 링크만으로 취향의 결이 먼저 보이도록 두었습니다."
              : "The page stays mostly visual, so the listening map appears through covers and links before long explanations do."}
          </p>
        </div>

        <div className="grid gap-4">
          <div className="border border-[var(--line)] bg-[var(--surface)] p-6 text-sm leading-7 text-[var(--muted)]">
            {locale === "ko"
              ? "현재 카드들은 export에서 추린 일부이고, 나중에 더 긴 별점 리스트나 디스크립션을 반영해 확장할 수 있습니다."
              : "The current board is a compact selection from the export and can later expand into a longer rating list if needed."}
          </div>
          <a
            href="https://open.spotify.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between border border-[var(--line)] bg-white px-5 py-4 transition hover:bg-black hover:text-white"
          >
            <span className="text-sm font-medium">
              {locale === "ko" ? "Spotify로 계속 듣기" : "Continue on Spotify"}
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="mt-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-medium tracking-[-0.03em] text-black">
            {locale === "ko" ? "Live room" : "Live room"}
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {liveVideos.map((video) => (
            <div key={video.title.en} className="border border-[var(--line)] bg-white p-4">
              {video.youtubeId ? (
                <div className="aspect-video overflow-hidden bg-black">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title[locale]}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="flex aspect-video items-center justify-center border border-dashed border-[var(--line)] bg-[var(--surface)]">
                  <div className="text-center">
                    <Play className="mx-auto h-6 w-6 text-black/35" />
                    <p className="mt-4 text-base font-medium text-black">
                      {video.title[locale]}
                    </p>
                    <p className="mt-2 px-6 text-sm leading-7 text-[var(--muted)]">
                      {video.caption[locale]}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
