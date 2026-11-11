import { posts, books } from "./site-content";
import type { ArtifactKind } from "@/components/floating-artifact";

export function spherePosition(
  lon: number,
  lat: number,
): [number, number, number] {
  const lambda = (lon * Math.PI) / 180;
  const phi = (lat * Math.PI) / 180;
  return [
    540 * Math.cos(phi) * Math.sin(lambda),
    540 * Math.sin(phi),
    -540 * Math.cos(phi) * Math.cos(lambda),
  ];
}

export type SphereItem = {
  id: string;
  kind: "artifact" | "photo" | "room" | "word" | "note" | "post" | "record";
  title: string;
  body?: string;
  href?: string;
  image?: string;
  artifact?: ArtifactKind;
  lon: number;
  lat: number;
  width: number;
  height?: number;
  tilt: number;
  color?: string;
  mobile?: [number, number];
};

export const marginalia = [
  [
    "Between things",
    "A photograph of a performance leaves out the wait before the first note. A clean trace leaves out the hands adjusting the apparatus. A book on a shelf conceals the hundred times it has been moved, opened, abandoned.",
  ],
  [
    "An exhibition without an exit",
    "The exhibition does not stop at the edge of the work. It continues in the angle of a chair, the conversation leaking through a wall, the decision to look again. An object is never only itself; it is also the company it keeps.",
  ],
  [
    "A listening position",
    "Move a chair. Change the listening position. The same record becomes a different record. There is no neutral place to stand, and no completely innocent arrangement of furniture.",
  ],
  [
    "The apparatus",
    "Working with light involves learning to look at what is almost invisible. The beam is easy to photograph; the alignment is not. A fraction of a turn can be followed by another hour of waiting.",
  ],
  [
    "On the back of a receipt",
    "In an exhibition, the distance between two objects can carry as much meaning as either object. In a room, that distance becomes ordinary life: a cable across the floor, music from the next desk, a sentence on the back of a receipt.",
  ],
  [
    "An unfinished arrangement",
    "Perhaps an archive should keep a little friction. Things placed together without being made to agree. The difficulty is not collecting enough material. It is resisting the temptation to make the material tell one convenient story.",
  ],
  [
    "Before the first note",
    "A stage is full of work that disappears when the music begins. Cables, checks, waiting, the small negotiation of where to stand. The performance is already happening before anybody decides to call it a performance.",
  ],
  [
    "Looking at looking",
    "A waveform turns time into something the eye can follow. Scale, color, and the edges of a screen decide how uncertainty will appear. The display is making an argument even when it appears only to be showing a result.",
  ],
  [
    "A useful accident",
    "Turn a knob and listen. Turn it back and discover that returning to a position is not the same as returning to a moment. A good session can end with nothing saved except a new habit of hearing.",
  ],
  [
    "The frame is never neutral",
    "The frame tells us what deserves attention and what may be ignored. I keep thinking about the things it excludes: a cable, a pause, a person just outside the picture.",
  ],
  [
    "Side A, again",
    "Remove the sleeve, cross the room, lower the needle. Listening has a choreography. The record begins before the music does, in the little preparations of the body.",
  ],
  [
    "No final image",
    "A surface is cleaned. A lens is moved. A cable is checked. None of this appears in the elegance of the final trace. To show the apparatus is to admit that seeing takes work.",
  ],
  [
    "Something left open",
    "A book interrupts a day in a very particular way. Its sentences continue elsewhere while the room remains where it was. Closing it does not entirely reverse that displacement.",
  ],
  [
    "Not quite a conclusion",
    "I am interested in the apparatus, but also in the person standing beside it. A record changes the atmosphere of a room. A sentence makes something familiar briefly strange.",
  ],
] as const;

const seeds: SphereItem[] = [
  {
    id: "junhyung",
    kind: "word",
    title: "Junhyung",
    body: "Junhyung Cho. Electrical engineering at KAIST; performing, listening, writing, and everything that happens between them.",
    lon: 26,
    lat: -9,
    width: 350,
    tilt: -8,
    color: "red",
    mobile: [0, -33],
  },
  {
    id: "cho",
    kind: "word",
    title: "Cho.",
    body: "A person, in several places at once. Daejeon, South Korea.",
    lon: -30,
    lat: -28,
    width: 145,
    tilt: 21,
    color: "blue",
    mobile: [-16, 36],
  },
  {
    id: "about-one",
    kind: "note",
    title: "I study electrical engineering at KAIST.",
    body: "Working with light involves learning to look at what is almost invisible. At KAIST, electrical engineering gives these observations a technical vocabulary.",
    lon: -28,
    lat: 30,
    width: 230,
    tilt: 7,
    mobile: [18, 36],
  },
  {
    id: "about-two",
    kind: "note",
    title: "I also perform, listen obsessively, and write things down.",
    body: "Outside the laboratory, I keep finding versions of the same problem. A stage rearranges our attention. A record changes the atmosphere of a room. A sentence makes something familiar briefly strange.",
    lon: 50,
    lat: 2,
    width: 210,
    tilt: -9,
    mobile: [25, -3],
  },
  {
    id: "about-three",
    kind: "note",
    title:
      "Most days these are the same activity, seen from different sides of a table.",
    lon: -12,
    lat: -32,
    width: 250,
    tilt: 8,
    mobile: [-38, -25],
  },
  {
    id: "room",
    kind: "room",
    title: "An imagined room",
    lon: -22,
    lat: -1,
    width: 500,
    height: 334,
    tilt: -7,
    mobile: [-4, 10],
  },
  {
    id: "stage",
    kind: "photo",
    title: "Outside the lab. Turn it up.",
    image: "/media/portrait-stage-960.webp",
    lon: 34,
    lat: 23,
    width: 370,
    height: 370,
    tilt: 13,
    mobile: [32, 22],
  },
  {
    id: "city",
    kind: "photo",
    title: "Somewhere outside",
    image: "/media/portrait-city-480.webp",
    lon: -51,
    lat: 3,
    width: 270,
    height: 270,
    tilt: -18,
    mobile: [-34, 4],
  },
  {
    id: "night",
    kind: "photo",
    title: "After hours. No field notes.",
    image: "/media/portrait-night-960.webp",
    lon: 43,
    lat: -35,
    width: 240,
    height: 460,
    tilt: -13,
    mobile: [26, -40],
  },
  {
    id: "desk",
    kind: "record",
    title: "In constant rotation",
    lon: 4,
    lat: -57,
    width: 300,
    height: 350,
    tilt: 11,
  },
  ...posts.map(
    (post, i): SphereItem => ({
      id: `post-${i}`,
      kind: "post",
      title: post.title,
      href: post.href,
      lon: [5, 40, -10, -49, -51][i],
      lat: [29, -23, -16, 24, -22][i],
      width: [250, 250, 260, 210, 220][i],
      tilt: [-12, 11, 8, -17, 13][i],
      color: ["pink", "paper", "cyan", "yellow", "pink"][i],
      mobile: [
        [0, 53],
        [23, -16],
        [-4, -10],
        [-29, 27],
        [-25, -43],
      ][i] as [number, number],
    }),
  ),
  {
    id: "frame",
    kind: "note",
    title: marginalia[9][0],
    body: marginalia[9][1],
    lon: 65,
    lat: 12,
    width: 170,
    tilt: -13,
    color: "paper",
    mobile: [30, 0],
  },
  {
    id: "between",
    kind: "note",
    title: marginalia[0][0],
    body: marginalia[0][1],
    lon: 20,
    lat: 4,
    width: 180,
    tilt: 5,
    mobile: [-23, -11],
  },
  {
    id: "score",
    kind: "word",
    title: "the room is a score",
    body: marginalia[2][1],
    lon: -65,
    lat: -3,
    width: 310,
    tilt: 75,
    color: "red",
  },
  {
    id: "elsewhere",
    kind: "word",
    title: "elsewhere, meanwhile",
    body: marginalia[5][1],
    lon: 58,
    lat: -34,
    width: 340,
    tilt: -33,
    color: "blue",
  },
  {
    id: "open-books",
    kind: "note",
    title: "Left open, simultaneously.",
    body: books.map((b) => `${b.title} / ${b.author}`).join(". "),
    lon: -34,
    lat: 47,
    width: 230,
    tilt: -19,
  },
  {
    id: "hello",
    kind: "post",
    title: "Anyway, say hello.",
    href: "mailto:junhyungcho@kaist.ac.kr",
    lon: 26,
    lat: 51,
    width: 220,
    tilt: 23,
    color: "cyan",
  },
];

const objectPlacements: [ArtifactKind, number, number, number][] = [
  ["star", 3, 0, 230],
  ["piano", 9, -38, 260],
  ["cursor", 42, 31, 140],
  ["monitor", -43, -1, 230],
  ["pencil", -6, 37, 160],
  ["guitar", 35, -3, 190],
  ["dice", 54, 23, 160],
  ["megaphone", -18, 43, 200],
  ["camera", -57, -13, 180],
  ["prism", 54, -19, 210],
  ["floppy", -42, 36, 160],
  ["stairs", -25, -34, 190],
  ["chair", -62, 16, 220],
  ["book", -6, -48, 250],
  ["hourglass", 32, -46, 170],
  ["plane", 15, 46, 250],
];
const initialObjects: SphereItem[] = objectPlacements.map(
  ([artifact, lon, lat, width], i) => ({
    id: `object-${artifact}`,
    kind: "artifact",
    title: artifact,
    artifact,
    lon,
    lat,
    width,
    height: width,
    tilt: ((i % 5) - 2) * 8,
    mobile: [lon * 0.65, lat],
  }),
);

// Fill the rest of the sphere with a golden-angle distribution, not rows or rings.
const reverseSide: SphereItem[] = [];
for (let i = 0; i < 150; i++) {
  const lat = (Math.asin(1 - (2 * (i + 0.5)) / 150) * 180) / Math.PI;
  const lon = ((i * 137.507764) % 360) - 180;
  if (Math.abs(lon) < 75 && Math.abs(lat) < 62) continue;
  const note = marginalia[i % marginalia.length];
  const object = objectPlacements[i % objectPlacements.length];
  reverseSide.push(
    i % 3 === 0
      ? {
          id: `orbit-object-${i}`,
          kind: "artifact",
          title: object[0],
          artifact: object[0],
          lon,
          lat,
          width: 180 + (i % 4) * 30,
          height: 180 + (i % 4) * 30,
          tilt: (i % 50) - 25,
        }
      : i % 17 === 0
        ? {
            id: `orbit-photo-${i}`,
            kind: "photo",
            title: seeds[6 + (i % 3)].title,
            image: seeds[6 + (i % 3)].image,
            lon,
            lat,
            width: 270,
            height:
              (270 * (seeds[6 + (i % 3)].height ?? 270)) /
              seeds[6 + (i % 3)].width,
            tilt: (i % 40) - 20,
          }
        : {
            id: `orbit-note-${i}`,
            kind: "note",
            title: note[0],
            body: note[1],
            lon,
            lat,
            width: 210 + (i % 3) * 20,
            tilt: (i % 36) - 18,
            color: ["paper", "yellow", "cyan", "pink"][i % 4],
          },
  );
}

export const sphereItems = [...seeds, ...initialObjects, ...reverseSide];
const indexed = new Set<string>();
export const indexItems = sphereItems.filter((item) => {
  const key = `${item.kind}:${item.title}`;
  if (indexed.has(key)) return false;
  indexed.add(key);
  return true;
});
