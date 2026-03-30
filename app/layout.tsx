import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk } from "next/font/google";
import { LocaleProvider } from "@/components/locale-provider";
import "./globals.css";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Junhyung Cho",
  description:
    "A bilingual personal website for music, writing, and research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={sans.variable}>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
