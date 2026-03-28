export type DisciplineKey = "music" | "writing" | "research";
export type LinkIconKey = "arrow-up-right" | "mail";

export type DisciplinePageData = {
  key: DisciplineKey;
  title: string;
  strap: string;
  description: string;
  path: string;
  icon: DisciplineKey;
  accents: string[];
  note: string;
  intro: string;
  manifesto: string;
  sections: Array<{
    eyebrow: string;
    title: string;
    body: string;
  }>;
  entries: Array<{
    type: string;
    title: string;
    description: string;
  }>;
};

export type SiteLink = {
  href: string;
  label: string;
  meta: string;
  icon: LinkIconKey;
};

export const links: SiteLink[] = [
  {
    href: "https://github.com/algo0419",
    label: "GitHub",
    meta: "code, notes, experiments",
    icon: "arrow-up-right",
  },
  {
    href: "https://www.instagram.com/whwns_gud/",
    label: "Instagram",
    meta: "images, mood, fragments",
    icon: "arrow-up-right",
  },
  {
    href: "mailto:junhyungcho@kaist.ac.kr",
    label: "Email",
    meta: "collaboration and conversation",
    icon: "mail",
  },
];

export const disciplines: DisciplinePageData[] = [
  {
    key: "music",
    title: "Music",
    strap: "Live volume, rehearsal rooms, distortion, and the identity a band builds before anyone can name it.",
    description:
      "Band practice, performance, and listening as a serious craft rather than a side note.",
    path: "/music",
    icon: "music",
    accents: ["Band practice", "Live clips", "Listening notes"],
    note: "The music page holds rehearsal culture, setlists, and sonic identity in one place.",
    intro:
      "Music is where repetition stops being mechanical and starts becoming character. I care about how a band sounds, but also how a band looks, moves, and carries tension on stage.",
    manifesto:
      "A song is not finished when it is written. It becomes itself when a room pushes back.",
    sections: [
      {
        eyebrow: "Band life",
        title: "Rehearsal is where the language forms",
        body: "I am interested in the small decisions that shape a group identity: tone, pacing, volume, mistakes, and how repeated live playing changes the meaning of a track.",
      },
      {
        eyebrow: "Listening",
        title: "Noise can still be precise",
        body: "Heavy music, texture, and atmosphere matter to me when they feel intentional rather than decorative. I keep notes on records that build pressure well.",
      },
      {
        eyebrow: "Performance",
        title: "Stage presence is part of composition",
        body: "Performance is not separate from songwriting. Gesture, posture, and transitions all change how a set is remembered.",
      },
    ],
    entries: [
      {
        type: "Live note",
        title: "Setlist, pressure, release",
        description: "Notes on how to sequence songs so the set accumulates weight instead of flattening out.",
      },
      {
        type: "Listening note",
        title: "Distortion with shape",
        description: "A running archive of riffs, tones, and mixes that feel aggressive without becoming vague.",
      },
      {
        type: "Band journal",
        title: "Rehearsal room memory",
        description: "Fragments from practice sessions where repetition unexpectedly clarified the emotional center of a song.",
      },
    ],
  },
  {
    key: "writing",
    title: "Writing",
    strap: "Essays, fragments, and atmosphere-heavy prose about mood, culture, irony, memory, and internet language.",
    description:
      "A place for essay drafts, short prose, observations, and unfinished but alive ideas.",
    path: "/writing",
    icon: "writing",
    accents: ["Essay drafts", "Short prose", "Notebook pages"],
    note: "The writing page is for prose that starts from a strong mood and then finds its argument.",
    intro:
      "Writing lets me stay close to ambiguity without losing structure. I am drawn to essays that think seriously while still sounding personal, and to short prose that moves by tone as much as logic.",
    manifesto:
      "A paragraph should carry both an idea and a climate.",
    sections: [
      {
        eyebrow: "Essay",
        title: "Arguments with atmosphere",
        body: "I like essays that move from close observation into broader cultural or emotional claims without becoming flattened by academic distance.",
      },
      {
        eyebrow: "Fragment",
        title: "Some ideas should stay unfinished for a while",
        body: "Fragments help me keep tempo. They hold an image, tension, or sentence rhythm until the larger structure becomes clear.",
      },
      {
        eyebrow: "Language",
        title: "Internet speech changed emotional texture",
        body: "I often write about irony, sincerity, and the way digital language reshapes affection, embarrassment, and belonging.",
      },
    ],
    entries: [
      {
        type: "Essay fragment",
        title: "When irony starts sounding sincere again",
        description: "Notes on how detachment became a way to speak warmly without sounding naive.",
      },
      {
        type: "Notebook page",
        title: "Mood before thesis",
        description: "A short reflection on why some pieces need atmosphere first and argument second.",
      },
      {
        type: "Short prose",
        title: "Night transit, fluorescent light",
        description: "A scene study built from transit sounds, reflected glass, and the sensation of late movement through a city.",
      },
    ],
  },
  {
    key: "research",
    title: "Research",
    strap: "Integrated photonics, quantum systems, and the engineering decisions that quietly decide what becomes scalable.",
    description:
      "Technical interests, lab-facing notes, and questions about device platforms that actually hold up.",
    path: "/research",
    icon: "research",
    accents: ["Photonics", "Quantum devices", "Lab notes"],
    note: "The research page is for technical thinking that still benefits from clear visual framing.",
    intro:
      "I study electrical engineering with a strong pull toward photonics and quantum optics. I am especially interested in systems where fabrication, tunability, and architecture all constrain one another.",
    manifesto:
      "Elegance matters more when the tolerances are tight.",
    sections: [
      {
        eyebrow: "Platform",
        title: "Useful systems are built from trade-offs",
        body: "I care about device platforms that are not only theoretically elegant, but realistic to fabricate, tune, and scale without losing performance.",
      },
      {
        eyebrow: "Optics",
        title: "Precision can still be exploratory",
        body: "Research is most interesting when quantitative rigor does not erase curiosity. I want technical notes to stay readable and alive.",
      },
      {
        eyebrow: "Engineering",
        title: "Integration is a design problem",
        body: "Hybrid systems, materials choices, coupling strategies, and fabrication paths all shape whether a result remains academic or becomes usable.",
      },
    ],
    entries: [
      {
        type: "Research notebook",
        title: "Hybrid photonics, tuning, and useful friction",
        description: "Running notes on cavities, material stacks, and how integration choices affect real device behavior.",
      },
      {
        type: "Technical memo",
        title: "Scalability is an architectural constraint",
        description: "A short argument for judging platforms by fabrication reality, not only idealized performance.",
      },
      {
        type: "Lab note",
        title: "Questions that survive simulation",
        description: "A set of prompts for turning abstract optical interest into experiments with actual design consequences.",
      },
    ],
  },
];

export const currentSignals = [
  "Thinking about how stage energy becomes a visual language before it becomes a discography.",
  "Collecting essay fragments on sincerity, atmosphere, and the emotional logic of online culture.",
  "Studying device platforms where precision matters, but elegance still changes the result.",
];
