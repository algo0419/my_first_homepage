import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./artifacts.css";

export const metadata: Metadata = {
  title: "Junhyung Cho | Personal Index",
  description:
    "Notes, music, light, and the things in between. A personal index by Junhyung Cho.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
