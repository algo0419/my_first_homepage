import Link from "next/link";
import type { ReactNode } from "react";
import { siteNav, socialLinks } from "@/lib/site-content";

type RetroFrameProps = {
  current: "home" | "music" | "writing" | "research";
  eyebrow: string;
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function RetroFrame({
  current,
  eyebrow,
  title,
  subtitle,
  children,
}: RetroFrameProps) {
  return (
    <main className="retro-page">
      <div className="ticker">
        <span>Updated for 2026</span>
        <span>Handmade index of records, notes, figures, and photographs</span>
        <span>Best viewed with curiosity</span>
      </div>

      <div className="site-shell">
        <header className="masthead">
          <aside className="mast-card mast-new">
            <p>New!</p>
            <strong>Full site reset</strong>
            <span>bright colors, old links, loose archive energy</span>
          </aside>

          <Link href="/" className="mast-logo" aria-label="Go to homepage">
            <span>Junhyung</span>
            <strong>Cho</strong>
            <em>music / writing / research</em>
          </Link>

          <aside className="mast-card mast-contact">
            <p>Contact</p>
            <a href="mailto:junhyungcho@kaist.ac.kr">junhyungcho@kaist.ac.kr</a>
            <span>KAIST / Daejeon</span>
          </aside>
        </header>

        <nav className="nav-strip" aria-label="Main navigation">
          {siteNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={current === item.key ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <section className="page-heading">
          <p>{eyebrow}</p>
          <h1>{title}</h1>
          <span>{subtitle}</span>
        </section>

        {children}

        <footer className="footer-board">
          <div>
            <strong>Leaving already?</strong>
            <p>This page keeps the links noisy and the images useful.</p>
          </div>
          <div className="footer-links">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}
