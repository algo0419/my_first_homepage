"use client";

import { useLocale } from "@/components/locale-provider";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="inline-flex rounded-full border border-black/10 bg-white p-1 text-xs font-medium uppercase tracking-[0.24em] text-black/45">
      {(["ko", "en"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLocale(option)}
          className={`rounded-full px-3 py-1.5 transition ${
            locale === option ? "bg-black text-white" : "text-black/45"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
