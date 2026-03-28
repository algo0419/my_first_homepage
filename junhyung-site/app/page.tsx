"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Music,
  PenSquare,
  Atom,
  ArrowUpRight,
  Sparkles,
  Waves,
  BookOpen,
  Mail,
  Microscope,
  AudioLines,
  Github,
  Instagram,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    title: "Music / Band",
    icon: Music,
    blurb:
      "Heavy riffs, rehearsals, live energy, and the strange way performance turns noise into meaning.",
    items: ["Band life", "Listening notes", "Live clips"],
  },
  {
    title: "Writing",
    icon: PenSquare,
    blurb:
      "Essays, fragments, observations, and fiction ideas that start from unlikely similarities.",
    items: ["Essays", "Short prose", "Notes & drafts"],
  },
  {
    title: "Research",
    icon: Atom,
    blurb:
      "Photonics, quantum systems, and the engineering questions that feel almost philosophical.",
    items: ["Research notes", "Slides", "Projects"],
  },
];

const highlights = [
  {
    tag: "Now playing",
    title: "Band rehearsals and sonic identity",
    text: "Thinking about distortion, stage presence, and how a band’s personality forms before its discography does.",
  },
  {
    tag: "Now writing",
    title: "Essays on mood, culture, and form",
    text: "Collecting fragments on art, irony, internet language, and the emotional texture of contemporary life.",
  },
  {
    tag: "Now researching",
    title: "Integrated photonics and quantum devices",
    text: "Exploring structures, tuning methods, fabrication trade-offs, and what makes a platform actually scalable.",
  },
];

const selected = [
  {
    category: "Writing",
    title: "On irony becoming sincerity again",
    description:
      "A short essay on how internet language flips negative meaning into warmth and belonging.",
    href: "#",
  },
  {
    category: "Research",
    title: "Hybrid photonics notebook",
    description:
      "A running archive of ideas around cavities, tuning, materials, and device integration.",
    href: "#",
  },
  {
    category: "Music",
    title: "Setlist, noise, memory",
    description:
      "Notes on bands, rehearsal rooms, and why certain songs feel larger when played live.",
    href: "#",
  },
];

const timeline = [
  "Studying electrical engineering with a strong pull toward photonics and quantum optics.",
  "Playing in a band and thinking seriously about music as both craft and identity.",
  "Writing essays and fiction ideas shaped by atmosphere, contrast, and unlikely parallels.",
];

const links = [
  {
    label: "GitHub",
    href: "https://github.com/algo0419",
    icon: Github,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/whwns_gud/",
    icon: Instagram,
  },
  {
    label: "Email",
    href: "mailto:junhyungcho@kaist.ac.kr",
    icon: Mail,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-neutral-200 selection:text-neutral-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute top-[28rem] right-12 h-64 w-64 rounded-full bg-fuchsia-400/10 blur-3xl" />
        <div className="absolute bottom-16 left-12 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-between border-b border-white/10 pb-5"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-neutral-400">
              Personal website
            </div>
            <div className="mt-2 text-lg font-medium">Junhyung Jo</div>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <a href="#selected">
              <Button variant="outline" className="rounded-full">
                Selected work
              </Button>
            </a>
            <a href="#contact">
              <Button className="rounded-full">Contact</Button>
            </a>
          </div>
        </motion.header>

        <section className="grid gap-10 py-14 lg:grid-cols-[1.4fr_0.8fr] lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.7 }}
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Contemporary, editorial, and slightly cinematic
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Music, writing, and research—
                <span className="text-neutral-400">
                  {" "}three ways of paying attention.
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
                I’m Junhyung, an engineer and maker interested in how technical rigor,
                artistic sensitivity, and personal voice can live on the same page.
                This space is part lab notebook, part listening room, part essay archive.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#selected">
                <Button className="rounded-full">Explore selected work</Button>
              </a>
              <a href="#about">
                <Button variant="outline" className="rounded-full">
                  Read more
                </Button>
              </a>
            </div>

            <div className="grid gap-3 pt-4 sm:grid-cols-3">
              {[
                ["Band", "performance / sound / identity"],
                ["Writing", "essays / fragments / fiction"],
                ["Research", "photonics / quantum / systems"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
                >
                  <div className="text-sm text-neutral-400">{k}</div>
                  <div className="mt-2 text-sm font-medium text-neutral-100">{v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="flex flex-col justify-between"
          >
            <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.04] backdrop-blur">
              <CardContent className="p-0">
                <div className="border-b border-white/10 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.28em] text-neutral-400">
                        Current moodboard
                      </div>
                      <div className="mt-2 text-xl font-medium">
                        Signals / language / resonance
                      </div>
                    </div>
                    <Waves className="h-5 w-5 text-neutral-400" />
                  </div>
                </div>
                <div className="space-y-5 p-5">
                  <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4">
                    <div className="text-xs uppercase tracking-[0.28em] text-neutral-500">
                      Aesthetic
                    </div>
                    <p className="mt-2 leading-7 text-neutral-300">
                      Minimal structure, strong typography, soft gradients, and modular
                      sections that feel equally suitable for research notes and personal
                      essays.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    {timeline.map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-white/10 p-4 text-sm leading-7 text-neutral-300"
                      >
                        <span className="mr-2 text-neutral-500">0{idx + 1}</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section className="py-8">
          <div className="mb-6 flex items-center gap-3">
            <AudioLines className="h-5 w-5 text-neutral-400" />
            <h2 className="text-2xl font-semibold tracking-tight">Core interests</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                >
                  <Card className="h-full rounded-[2rem] border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]">
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                        <Icon className="h-5 w-5 text-neutral-200" />
                      </div>
                      <h3 className="text-2xl font-medium tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="mt-3 flex-1 leading-7 text-neutral-300">
                        {pillar.blurb}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {pillar.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="selected" className="grid gap-6 py-14 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="rounded-[2rem] border-white/10 bg-white/[0.04]">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-neutral-400" />
                <h2 className="text-2xl font-semibold tracking-tight">Selected pieces</h2>
              </div>
              <div className="mt-6 space-y-4">
                {selected.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="group block rounded-2xl border border-white/10 p-5 transition hover:bg-white/[0.04]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-sm text-neutral-400">{item.category}</div>
                        <div className="mt-1 text-lg font-medium text-white">
                          {item.title}
                        </div>
                        <p className="mt-2 text-sm leading-7 text-neutral-300">
                          {item.description}
                        </p>
                      </div>
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-neutral-500 transition group-hover:text-neutral-200" />
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * idx, duration: 0.6 }}
              >
                <Card className="rounded-[2rem] border-white/10 bg-white/[0.04]">
                  <CardContent className="p-6 sm:p-8">
                    <div className="text-xs uppercase tracking-[0.32em] text-neutral-500">
                      {item.tag}
                    </div>
                    <h3 className="mt-3 text-2xl font-medium tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl leading-8 text-neutral-300">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="about" className="py-8">
          <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.04]">
            <CardContent className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
              <div>
                <div className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                  About
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  I like work that feels precise,
                  <span className="text-neutral-400"> but still alive.</span>
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-neutral-300">
                  Whether I’m building devices, writing prose, or playing with a band, I
                  keep coming back to the same questions: what holds a structure together,
                  what gives it character, and what makes it resonate with someone else.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    icon: Microscope,
                    label: "Research",
                    value:
                      "Integrated photonics, quantum systems, fabrication questions",
                  },
                  {
                    icon: Music,
                    label: "Music",
                    value:
                      "Band work, listening, rehearsal culture, sonic aesthetics",
                  },
                  {
                    icon: PenSquare,
                    label: "Writing",
                    value: "Essays, literary fragments, observations, ideas",
                  },
                  {
                    icon: Mail,
                    label: "Contact",
                    value:
                      "Open to collaboration, conversation, and interesting projects",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-2xl border border-white/10 p-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                          <Icon className="h-4 w-4 text-neutral-200" />
                        </div>
                        <div>
                          <div className="text-sm text-neutral-400">{item.label}</div>
                          <div className="mt-1 text-sm leading-7 text-neutral-200">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="py-8">
          <Card className="rounded-[2rem] border-white/10 bg-white/[0.04]">
            <CardContent className="p-6 sm:p-8 lg:p-10">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <div className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                    Contact
                  </div>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Replace the placeholder links and make this page yours.
                  </h2>
                  <p className="mt-4 max-w-2xl leading-8 text-neutral-300">
                    Before you publish, update the GitHub, Instagram, and email links in
                    <code className="mx-1 rounded bg-white/10 px-1.5 py-0.5 text-sm">
                      app/page.tsx
                    </code>
                    so visitors can actually reach you.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                        <Button variant="outline" className="rounded-full">
                          <Icon className="h-4 w-4" />
                          {link.label}
                        </Button>
                      </a>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <footer className="mt-12 border-t border-white/10 py-8 text-sm text-neutral-500">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>Junhyung Jo — personal website starter</div>
            <div className="flex items-center gap-4">
              <span>Research</span>
              <span>Writing</span>
              <span>Music</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
