"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { LanguageToggle } from "@/components/language-toggle";
import { useLocale } from "@/components/locale-provider";
import { disciplines } from "@/lib/site-content";

type SiteFrameProps = {
  current?: "home" | "music" | "writing" | "research";
  children: ReactNode;
};

export function SiteFrame({ current = "home", children }: SiteFrameProps) {
  const { locale } = useLocale();

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-black selection:text-white">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <header className="mb-8 border border-[var(--line)] bg-[var(--surface)] px-4 py-4 backdrop-blur-sm sm:px-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <Link href="/" className="text-sm font-medium tracking-[-0.02em]">
                Junhyung Jo
              </Link>
              <p className="text-sm text-[var(--muted)]">
                {locale === "ko"
                  ? "music, writing, research"
                  : "music, writing, research"}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <nav className="flex flex-wrap gap-2 text-sm text-[var(--muted)]">
                <Link
                  href="/"
                  className={`rounded-full border px-3 py-1.5 transition ${
                    current === "home"
                      ? "border-black bg-black text-white"
                      : "border-[var(--line)] bg-white"
                  }`}
                >
                  {locale === "ko" ? "홈" : "Home"}
                </Link>
                {disciplines.map((item) => (
                  <Link
                    key={item.key}
                    href={item.path}
                    className={`rounded-full border px-3 py-1.5 transition ${
                      current === item.key
                        ? "border-black bg-black text-white"
                        : "border-[var(--line)] bg-white"
                    }`}
                  >
                    {item.title[locale]}
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
