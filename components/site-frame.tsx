"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { LanguageToggle } from "@/components/language-toggle";
import { ScrollProgress } from "@/components/scroll-progress";

type SiteFrameProps = {
  current?: "home" | "music" | "writing" | "research";
  fullBleed?: boolean;
  children: ReactNode;
};

export function SiteFrame({
  current = "home",
  fullBleed = false,
  children,
}: SiteFrameProps) {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-white selection:text-black">
      <ScrollProgress />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(255,94,58,0.10),_rgba(0,0,0,0))]" />

      <div className="fixed bottom-4 right-4 z-30 flex items-center gap-2">
        {current !== "home" ? (
          <Link
            href="/"
            className="rounded-full border border-[var(--line)] bg-[var(--panel-strong)] px-3.5 py-2 text-xs uppercase tracking-[0.2em] text-white/72 backdrop-blur-xl transition hover:bg-white hover:text-black"
          >
            Home
          </Link>
        ) : null}
        <LanguageToggle />
      </div>

      <div
        className={
          fullBleed
            ? "relative z-10 min-h-screen"
            : "relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8"
        }
      >
        {children}
      </div>
    </main>
  );
}
