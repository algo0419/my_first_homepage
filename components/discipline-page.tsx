"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { disciplines, links, type DisciplinePageData } from "@/lib/site-content";

type DisciplinePageProps = {
  page: DisciplinePageData;
};

export function DisciplinePage({ page }: DisciplinePageProps) {
  const siblings = disciplines.filter((item) => item.key !== page.key);
  const Icon = page.icon;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--accent)] selection:text-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,106,0,0.15),transparent_26%),radial-gradient(circle_at_84%_18%,rgba(255,255,255,0.12),transparent_24%),radial-gradient(circle_at_65%_80%,rgba(218,255,78,0.12),transparent_30%),linear-gradient(160deg,#090a0d_10%,#14161b_52%,#090a0d_100%)]" />
        <div className="grain absolute inset-0 opacity-35" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-5 sm:px-8 lg:px-10">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="flex flex-col gap-5 border border-white/10 bg-black/20 px-5 py-5 backdrop-blur-md sm:flex-row sm:items-end sm:justify-between sm:px-7"
        >
          <div className="space-y-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/58 transition hover:text-[var(--accent)]"
            >
              <ArrowLeft className="h-4 w-4" />
              Home
            </Link>
            <div className="flex items-center gap-3">
              <Icon className="h-5 w-5 text-[var(--accent)]" />
              <p className="text-[10px] uppercase tracking-[0.45em] text-white/50">
                {page.title}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
            {siblings.map((item) => (
              <Link
                key={item.key}
                href={item.path}
                className="border border-white/15 px-4 py-2 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </motion.header>

        <section className="grid gap-6 py-6 lg:grid-cols-[1.22fr_0.78fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.7 }}
            className="flex min-h-[30rem] flex-col justify-between border border-white/10 bg-black/20 p-5 backdrop-blur-md sm:p-8"
          >
            <div className="inline-flex w-fit items-center gap-2 border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/72">
              <Icon className="h-4 w-4 text-[var(--accent)]" />
              {page.description}
            </div>

            <div className="space-y-7">
              <div>
                <p className="mb-4 text-[11px] uppercase tracking-[0.5em] text-[var(--accent)]">
                  {page.note}
                </p>
                <h1 className="max-w-5xl text-6xl font-semibold uppercase leading-[0.88] tracking-[-0.06em] text-white sm:text-7xl lg:text-[7rem]">
                  {page.title}
                  <br />
                  as practice,
                  <br />
                  not category.
                </h1>
              </div>

              <p className="max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
                {page.intro}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/70">
              {page.accents.map((accent) => (
                <span key={accent} className="border border-white/15 px-3 py-2">
                  {accent}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.7 }}
            className="grid gap-6"
          >
            <div className="flex min-h-56 flex-col justify-between bg-[var(--accent)] p-6 text-black">
              <div className="text-[10px] uppercase tracking-[0.35em]">Statement</div>
              <p className="text-2xl font-semibold leading-tight sm:text-[2rem]">
                {page.manifesto}
              </p>
            </div>

            <div className="border border-white/10 bg-black/30 p-6 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/40">
                Move between pages
              </p>
              <div className="mt-5 grid gap-3">
                {siblings.map((item) => (
                  <Link
                    key={item.key}
                    href={item.path}
                    className="group flex items-center justify-between border border-white/12 bg-white/[0.03] p-4 transition hover:border-[var(--accent)] hover:bg-white/[0.06]"
                  >
                    <div>
                      <div className="text-lg font-medium text-white">{item.title}</div>
                      <div className="mt-1 text-sm text-white/55">{item.description}</div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-white/55 transition group-hover:text-[var(--accent)]" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.aside>
        </section>

        <section className="grid gap-5 py-4 lg:grid-cols-3">
          {page.sections.map((section, index) => (
            <motion.article
              key={section.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * index, duration: 0.65 }}
              className="border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="text-[10px] uppercase tracking-[0.35em] text-[var(--accent)]">
                {section.eyebrow}
              </div>
              <h2 className="mt-5 text-3xl font-semibold uppercase tracking-[-0.05em] text-white">
                {section.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/68">{section.body}</p>
            </motion.article>
          ))}
        </section>

        <section className="grid gap-6 py-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="border border-white/10 bg-black/25 p-6 backdrop-blur-md sm:p-8">
            <p className="text-[10px] uppercase tracking-[0.45em] text-white/40">
              Selected notes
            </p>
            <h2 className="mt-5 text-4xl font-semibold uppercase leading-none tracking-[-0.05em] text-white sm:text-5xl">
              A dedicated page gives each practice enough room to breathe.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/68">
              Instead of compressing everything into one landing page, each section can now hold its own notes, projects, and future updates.
            </p>
          </div>

          <div className="grid gap-4">
            {page.entries.map((entry, index) => (
              <motion.div
                key={entry.title}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * index, duration: 0.65 }}
                className="grid gap-5 border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:p-6"
              >
                <div className="text-[10px] uppercase tracking-[0.38em] text-[var(--accent)]">
                  {entry.type}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                    {entry.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/68">
                    {entry.description}
                  </p>
                </div>
                <span className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-white/75">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 border border-white/10 bg-black/25 p-6 backdrop-blur-md sm:p-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.45em] text-white/40">
              Contact
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold uppercase leading-none tracking-[-0.05em] text-white sm:text-5xl">
              Keep the visual pressure high, even when the content gets technical.
            </h2>
          </div>

          <div className="grid gap-3 sm:min-w-80">
            {links.map((link) => {
              const IconLink = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid gap-2 border border-white/12 bg-white/[0.03] p-4 transition hover:border-[var(--accent)] hover:bg-white/[0.06]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-white">{link.label}</span>
                    <IconLink className="h-4 w-4 text-white/60 transition group-hover:text-[var(--accent)]" />
                  </div>
                  <span className="text-sm text-white/55">{link.meta}</span>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
