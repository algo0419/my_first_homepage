"use client";

import { Play } from "lucide-react";
import { SiteFrame } from "@/components/site-frame";
import { useLocale } from "@/components/locale-provider";
import { musicPage } from "@/lib/site-content";

export default function MusicPage() {
  const { locale } = useLocale();

  return (
    <SiteFrame current="music">
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8">
          <p className="text-sm text-[var(--muted)]">{musicPage.description[locale]}</p>
          <h1 className="mt-4 whitespace-pre-line text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-black sm:text-6xl">
            {musicPage.title[locale]}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--muted)]">
            {musicPage.intro[locale]}
          </p>
        </div>

        <div className="grid gap-4">
          {musicPage.notes.map((note) => (
            <div
              key={note.en}
              className="border border-[var(--line)] bg-white p-6 text-sm leading-7 text-[var(--muted)]"
            >
              {note[locale]}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-medium tracking-[-0.03em] text-black">
            {musicPage.videosLabel[locale]}
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {musicPage.videos.map((video) => (
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
