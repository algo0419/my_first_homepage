"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { LanguageToggle } from "@/components/language-toggle";
import { useLocale } from "@/components/locale-provider";
import { ScrollProgress } from "@/components/scroll-progress";

type SiteFrameProps = {
  current?: "home" | "music" | "writing" | "research";
  children: ReactNode;
};

const labels = {
  home: {
    ko: "\uD648",
    en: "Home",
  },
  music: {
    ko: "\uC74C\uC545",
    en: "Music",
  },
  writing: {
    ko: "\uB3C5\uC11C / \uAE00",
    en: "Reading / Writing",
  },
  research: {
    ko: "\uC5F0\uAD6C",
    en: "Research",
  },
} as const;

export function SiteFrame({ current = "home", children }: SiteFrameProps) {
  const { locale } = useLocale();

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-white selection:text-black">
      <ScrollProgress />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(120,120,180,0.18),_rgba(0,0,0,0))]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-20 mb-10">
          <div className="glass-panel flex flex-col gap-5 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-1">
              <Link href="/" className="text-sm font-medium tracking-[-0.02em] text-[var(--text)]">
                Junhyung Cho
              </Link>
              <p className="text-sm text-[var(--muted)]">music, writing, research</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <nav className="flex flex-wrap gap-2 text-sm text-[var(--muted)]">
                {(["home", "music", "writing", "research"] as const).map((key) => (
                  <Link
                    key={key}
                    href={key === "home" ? "/" : `/${key}`}
                    className={`rounded-full border px-3.5 py-2 transition duration-300 ${
                      current === key
                        ? "border-white bg-white text-black shadow-[0_12px_30px_rgba(255,255,255,0.08)]"
                        : "border-[var(--line)] bg-white/5 text-white/70 hover:-translate-y-0.5 hover:bg-white/10"
                    }`}
                  >
                    {labels[key][locale]}
                  </Link>
                ))}
              </nav>
              <LanguageToggle />
            </div>
          </div>
        </header>

        {children}
      </div>
    </main>
  );
}
