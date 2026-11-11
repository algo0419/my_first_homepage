import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./artifacts.css";
import "./object-play.css";

export const metadata: Metadata = {
  title: "Junhyung Cho | Elsewhere, Meanwhile",
  description:
    "A person in several places at once. Notes, music, photographs and unfinished thoughts by Junhyung Cho.",
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
