"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { AudioLines, Sparkles } from "lucide-react";
import { currentSignals, disciplines, links } from "@/lib/site-content";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--accent)] selection:text-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,106,0,0.16),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.14),transparent_24%),radial-gradient(circle_at_72%_70%,rgba(218,255,78,0.14),transparent_28%),linear-gradient(140deg,#0e0f12_12%,#171920_45%,#0a0b0e_100%)]" />
        <div className="grain absolute inset-0 opacity-40" />
        <div className="absolute left-[7%] top-32 h-44 w-44 rounded-full bg-[#ff6a00]/20 blur-3xl" />
        <div className="absolute right-[8%] top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-16 left-1/3 h-52 w-52 rounded-full bg-[#daff4e]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-5 border border-white/10 bg-black/15 px-5 py-5 backdrop-blur-md sm:flex-row sm:items-end sm:justify-between sm:px-7"
        >
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.45em] text-white/55">
              Junhyung Jo
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/78">
              <span>engineer</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>writer</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>band member</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
            {disciplines.map((item) => (
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

        <section className="grid flex-1 gap-6 py-6 lg:grid-cols-[1.3fr_0.7fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.75 }}
            className="flex min-h-[34rem] flex-col justify-between border border-white/10 bg-black/20 p-5 backdrop-blur-md sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/74">
              <span className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-2">
                <Sparkles className="h-4 w-4" />
                personal archive / signal board
              </span>
              <span className="text-white/45">Seoul + Daejeon</span>
            </div>

            <div className="space-y-8">
              <div className="max-w-5xl">
                <p className="mb-4 text-[11px] uppercase tracking-[0.5em] text-[var(--accent)]">
                  Built as an index into three active practices
                </p>
                <h1 className="text-6xl font-semibold uppercase leading-[0.88] tracking-[-0.06em] text-white sm:text-7xl lg:text-[7.4rem]">
                  Build the page
                  <br />
                  like a poster,
                  <br />
                  not a brochure.
                </h1>
              </div>

              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <p className="max-w-md text-sm leading-7 text-white/68 sm:text-base">
                  This home page now works as a front door. Music, writing, and
                  research each have their own space, so the site can grow without
                  collapsing into one generic landing page.
                </p>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ["01", "Technical rigor"],
                    ["02", "Editorial instinct"],
                    ["03", "Live energy"],
                  ].map(([index, label]) => (
                    <div
                      key={index}
                      className="flex min-h-28 flex-col justify-between border border-white/10 bg-white/[0.04] p-4"
                    >
                      <span className="text-xs text-white/35">{index}</span>
                      <span className="text-lg leading-6 text-white">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/70">
              <span className="border border-white/15 px-3 py-2">photonics</span>
              <span className="border border-white/15 px-3 py-2">essays</span>
              <span className="border border-white/15 px-3 py-2">noise</span>
              <span className="border border-white/15 px-3 py-2">mood studies</span>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.75 }}
            className="grid gap-6"
          >
            <div className="flex min-h-60 flex-col justify-between bg-[var(--accent)] p-6 text-black">
              <div className="flex items-center justify-between">
                <AudioLines className="h-5 w-5" />
                <span className="text-[10px] uppercase tracking-[0.35em]">
                  manifesto
                </span>
              </div>
              <p className="text-2xl font-semibold leading-tight sm:text-[2rem]">
                Precision is not the opposite of personality.
              </p>
              <p className="max-w-xs text-sm leading-6 text-black/75">
                The visual system should feel engineered, but not sterilized.
              </p>
            </div>

            <div className="border border-white/10 bg-black/30 p-6 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/40">
                Right now
              </p>
              <div className="mt-5 space-y-5">
                {currentSignals.map((item, index) => (
                  <div
                    key={item}
                    className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                  >
                    <div className="mb-2 text-xs text-white/35">0{index + 1}</div>
                    <p className="text-sm leading-7 text-white/72">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </section>

        <section className="grid gap-5 py-4 lg:grid-cols-3">
          {disciplines.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.65 }}
              >
                <Link
                  href={item.path}
                  className="group relative block overflow-hidden border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.9),transparent)] opacity-50 transition group-hover:opacity-100" />
                  <div className="mb-16 flex items-center justify-between">
                    <Icon className="h-6 w-6 text-[var(--accent)]" />
                    <span className="text-[10px] uppercase tracking-[0.35em] text-white/35">
                      0{index + 1}
                    </span>
                  </div>
                  <h2 className="text-4xl font-semibold uppercase tracking-[-0.05em] text-white">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/68">{item.strap}</p>
                  <div className="mt-8 flex flex-wrap gap-2 text-xs uppercase tracking-[0.22em] text-white/70">
                    {item.accents.map((accent) => (
                      <span key={accent} className="border border-white/12 px-3 py-2">
                        {accent}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </section>

        <section className="grid gap-6 py-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="border border-white/10 bg-black/25 p-6 backdrop-blur-md sm:p-8">
            <p className="text-[10px] uppercase tracking-[0.45em] text-white/40">
              Profile
            </p>
            <h2 className="mt-5 text-4xl font-semibold uppercase leading-none tracking-[-0.05em] text-white sm:text-5xl">
              A site that can hold equations, gig posters, and unfinished sentences.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/68">
              I am studying electrical engineering with a strong interest in
              photonics and quantum optics, while also treating music and writing
              as serious long-term practices.
            </p>
          </div>

          <div className="grid gap-4">
            {disciplines.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * index, duration: 0.65 }}
                className="grid gap-5 border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:p-6"
              >
                <div className="text-[10px] uppercase tracking-[0.38em] text-[var(--accent)]">
                  Section
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/68">
                    {item.note}
                  </p>
                </div>
                <div className="flex items-start justify-end">
                  <Link
                    href={item.path}
                    className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-white/75 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    <item.icon className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-auto grid gap-6 border border-white/10 bg-black/25 p-6 backdrop-blur-md sm:p-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.45em] text-white/40">
              Contact
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold uppercase leading-none tracking-[-0.05em] text-white sm:text-5xl">
              Keep the visual pressure high, even when the content gets technical.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68">
              The homepage now routes directly into three real sections instead of
              pretending everything has to fit into one landing page.
            </p>
          </div>

          <div className="grid gap-3 sm:min-w-80">
            {links.map((link) => {
              const Icon = link.icon;

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
                    <Icon className="h-4 w-4 text-white/60 transition group-hover:text-[var(--accent)]" />
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
