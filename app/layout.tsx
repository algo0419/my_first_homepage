import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Junhyung Cho",
  description:
    "Personal website of Junhyung Cho — music, writing, research, and selected work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
