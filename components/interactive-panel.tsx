"use client";

import { Slot } from "@radix-ui/react-slot";
import type { ComponentPropsWithoutRef } from "react";

type InteractivePanelProps = ComponentPropsWithoutRef<"div"> & {
  asChild?: boolean;
};

export function InteractivePanel({
  asChild,
  className = "",
  onMouseMove,
  onMouseLeave,
  ...props
}: InteractivePanelProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={`interactive-panel ${className}`.trim()}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        event.currentTarget.style.setProperty("--mx", `${x}%`);
        event.currentTarget.style.setProperty("--my", `${y}%`);
        onMouseMove?.(event);
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.setProperty("--mx", "50%");
        event.currentTarget.style.setProperty("--my", "50%");
        onMouseLeave?.(event);
      }}
      {...props}
    />
  );
}
