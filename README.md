# Junhyung Cho's Home Page

A single-page personal archive for music, notes, photographs, books, and
occasional photonics. Built with the Next.js App Router and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Main files

- `app/page.tsx`: the complete home page
- `app/globals.css`: layout, responsive styles, and motion
- `lib/site-content.ts`: posts, records, books, photographs, and external links
- `public/generated/`: project-local 3D renders and animated GIF assets
- `public/collage/` and `public/portraits/`: the existing image archive

The legacy `/music`, `/writing`, and `/research` routes redirect to relevant
anchors on the home page.
