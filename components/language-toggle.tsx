"use client";

import { useLocale } from "@/components/locale-provider";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1 text-xs font-medium uppercase tracking-[0.24em] text-white/45 backdrop-blur-xl">
      {(["ko", "en"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLocale(option)}
          className={`rounded-full px-3 py-1.5 transition duration-300 ${
            locale === option
              ? "bg-white text-black shadow-[0_8px_20px_rgba(255,255,255,0.08)]"
              : "text-white/45 hover:bg-white/10 hover:text-white/80"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
