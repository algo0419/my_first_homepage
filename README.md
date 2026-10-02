# Junhyung Cho / Personal Index

A single-page personal archive for music, notes, photographs, books, and
occasional photonics. Built with the Next.js App Router and Tailwind CSS.

## Run locally

```bash
pnpm install
pnpm run dev
```

Open `http://localhost:3000`.

## Main files

- `app/page.tsx`: the home page entry point
- `components/personal-index.tsx`: the continuous personal index and record controls
- `components/interactive-studio.tsx`: room hotspots and hover/focus/touch notes
- `app/globals.css`: layout, responsive styles, and motion
- `lib/site-content.ts`: posts, records, books, photographs, and external links
- `public/generated/`: project-local 3D renders and animated GIF assets
- `public/collage/` and `public/portraits/`: the existing image archive

The legacy `/music`, `/writing`, and `/research` routes redirect to relevant
anchors on the home page.

The `Blonde` and `Loveless` covers are local 640px images retrieved from the
official Spotify metadata for the albums linked in `lib/site-content.ts`.
The generated studio is an imagined room, not a photograph of the owner's desk.
Animation controls and the system's reduced-motion preference are respected.
