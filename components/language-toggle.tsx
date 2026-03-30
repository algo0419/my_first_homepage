"use client";

import { useLocale } from "@/components/locale-provider";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="inline-flex rounded-full border border-black/8 bg-white/75 p-1 text-xs font-medium uppercase tracking-[0.24em] text-black/45 backdrop-blur-xl">
      {(["ko", "en"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLocale(option)}
          className={`rounded-full px-3 py-1.5 transition duration-300 ${
            locale === option
              ? "bg-black text-white shadow-[0_8px_20px_rgba(17,17,17,0.16)]"
              : "text-black/45 hover:bg-white hover:text-black/80"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
