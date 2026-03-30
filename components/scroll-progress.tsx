"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const height = doc.scrollHeight - doc.clientHeight;
      const next = height > 0 ? (window.scrollY / height) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, next)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-30 h-px bg-white/8">
      <div
        className="h-full bg-white transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
