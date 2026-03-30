export type Locale = "ko" | "en";
export type LocalizedText = Record<Locale, string>;
export type DisciplineKey = "music" | "writing" | "research";
export type LinkIconKey = "arrow-up-right" | "mail";

export type SiteLink = {
  href: string;
  label: string;
  meta: LocalizedText;
  icon: LinkIconKey;
};

export type DisciplineSummary = {
  key: DisciplineKey;
  path: string;
  icon: DisciplineKey;
  title: LocalizedText;
  strap: LocalizedText;
  note: LocalizedText;
};

export type WritingEntry = {
  year: string;
  category: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  href: string;
};

export const links: SiteLink[] = [
  {
    href: "https://github.com/algo0419",
    label: "GitHub",
    meta: {
      ko: "\uCF54\uB4DC, \uC2E4\uD5D8, \uC791\uC5C5 \uAE30\uB85D",
      en: "code, experiments, working notes",
    },
    icon: "arrow-up-right",
  },
  {
    href: "https://rateyourmusic.com/~jHyung",
    label: "Rate Your Music",
    meta: {
      ko: "\uBCC4\uC810 \uC544\uCE74\uC774\uBE0C",
      en: "ratings archive",
    },
    icon: "arrow-up-right",
  },
  {
    href: "https://blog.naver.com/algo7112",
    label: "Naver Blog",
    meta: {
      ko: "\uB3C5\uC11C\uC640 \uAE00\uC4F0\uAE30 \uB178\uD2B8",
      en: "reading and writing notes",
    },
    icon: "arrow-up-right",
  },
  {
    href: "https://www.instagram.com/whwns_gud/",
    label: "Instagram",
    meta: {
      ko: "\uC0AC\uC9C4\uACFC \uC7A5\uBA74\uB4E4",
      en: "photos and fragments",
    },
    icon: "arrow-up-right",
  },
  {
    href: "mailto:junhyungcho@kaist.ac.kr",
    label: "Email",
    meta: {
      ko: "\uC5F0\uB77D \uBC0F \uD611\uC5C5",
      en: "contact and collaboration",
    },
    icon: "mail",
  },
];

export const disciplines: DisciplineSummary[] = [
  {
    key: "music",
    path: "/music",
    icon: "music",
    title: {
      ko: "\uC74C\uC545",
      en: "Music",
    },
    strap: {
      ko: "\uACF5\uC5F0 \uAE30\uB85D\uACFC \uD3C9\uC18C \uB4E3\uB294 \uC74C\uBC18.",
      en: "Live documents and favorite records.",
    },
    note: {
      ko: "\uB77C\uC774\uBE0C\uC640 \uB9AC\uC2A4\uB2DD",
      en: "live and listening",
    },
  },
  {
    key: "writing",
    path: "/writing",
    icon: "writing",
    title: {
      ko: "\uB3C5\uC11C / \uAE00",
      en: "Reading / Writing",
    },
    strap: {
      ko: "\uBE14\uB85C\uADF8 \uAE00\uACFC \uBA54\uBAA8.",
      en: "Blog posts and notes.",
    },
    note: {
      ko: "\uBE14\uB85C\uADF8\uC640 \uAE00 \uBAA9\uB85D",
      en: "blog and selected posts",
    },
  },
  {
    key: "research",
    path: "/research",
    icon: "research",
    title: {
      ko: "\uC5F0\uAD6C",
      en: "Research",
    },
    strap: {
      ko: "diamond photonic crystal / BTO hybrid modulation",
      en: "diamond photonic crystal / BTO hybrid modulation",
    },
    note: {
      ko: "figure / papers",
      en: "figures and papers",
    },
  },
];

export const homeContent = {
  badge: {
    ko: "\uC900\uD615 \uC870",
    en: "Junhyung Cho",
  },
  location: "KAIST / Daejeon",
  introLabel: {
    ko: "music / writing / research",
    en: "music / writing / research",
  },
  title: {
    ko: "\uC74C\uC545, \uAE00, \uC5F0\uAD6C.",
    en: "Music, writing,\nand research.",
  },
  description: {
    ko: "\uACF5\uC5F0 \uAE30\uB85D, \uC77D\uACE0 \uC4F4 \uAE00, \uADF8\uB9AC\uACE0 \uC5F0\uAD6C \uC7A5\uBA74\uB4E4.",
    en: "Live records, texts, and research references.",
  },
  principles: [
    {
      ko: "\uBBF8\uB2C8\uBA40",
      en: "Minimal",
    },
    {
      ko: "\uD55C / \uC601",
      en: "Korean / English",
    },
    {
      ko: "\uC138 \uAC1C\uC758 \uD750\uB984",
      en: "Three sections",
    },
  ],
  profileLabel: {
    ko: "\uC18C\uAC1C",
    en: "About",
  },
  profileTitle: {
    ko: "\uC804\uAE30\uC804\uC790\uACF5\uD559, photonics, quantum optics.",
    en: "Electrical engineering, photonics, and quantum optics.",
  },
  profileBody: {
    ko: "\uC74C\uC545, \uB3C5\uC11C, \uAE00\uC4F0\uAE30\uB97C \uBCD1\uD589\uD558\uBA70 \uAC01 \uC601\uC5ED\uC758 \uAE30\uB85D\uC744 \uC774 \uC0AC\uC774\uD2B8\uC5D0 \uB2F4\uACE0 \uC788\uC2B5\uB2C8\uB2E4.",
    en: "Music, reading, and writing run alongside the research work collected here.",
  },
};

export const writingPage = {
  header: {
    ko: "\uB3C5\uC11C / \uAE00",
    en: "Reading / Writing",
  },
  description: {
    ko: "\uBE14\uB85C\uADF8 \uAE00\uACFC \uB3C5\uC11C \uBA54\uBAA8.",
    en: "Blog posts and reading notes.",
  },
  title: {
    ko: "\uB3C5\uC11C / \uAE00",
    en: "Reading /\nWriting",
  },
  intro: {
    ko: "\uBB38\uD559, \uC5B8\uC5B4, \uC5D0\uC138\uC774, \uC9E7\uC740 \uB9AC\uBDF0.",
    en: "Literature, language, essays, and short reviews.",
  },
  blogUrl: "https://blog.naver.com/algo7112",
  blogLabel: {
    ko: "\uBE14\uB85C\uADF8",
    en: "Blog",
  },
  blogPlaceholder: {
    ko: "\uBE14\uB85C\uADF8 \uB9C1\uD06C \uC5C6\uC74C",
    en: "No blog link",
  },
  entriesLabel: {
    ko: "\uAE00 \uBAA9\uB85D",
    en: "Selected posts",
  },
  entries: [
    {
      year: "2026",
      category: {
        ko: "\uC5D0\uC138\uC774",
        en: "Essay",
      },
      title: {
        ko: "\uBAA8\uB974\uB294 \uB9CC\uD07C \uBCF4\uC778\uB2E4",
        en: "You See More by Knowing Less",
      },
      summary: {
        ko: "\uC804\uBB38\uC131\uACFC \uC2DC\uC57C\uC758 \uAD00\uACC4\uB97C \uB2E4\uB8EC \uC5D0\uC138\uC774.",
        en: "A short essay on how expertise deepens understanding while also narrowing what remains visible.",
      },
      href: "https://blog.naver.com/algo7112/224232537490",
    },
    {
      year: "2026",
      category: {
        ko: "\uB9AC\uBDF0",
        en: "Review",
      },
      title: {
        ko: "'\uD53D\uC158\uB4E4'\uC740 \uD3EC\uC2A4\uD2B8\uBAA8\uB354\uB2C8\uC998 \uC2DC\uB300\uC758 \uC131\uACBD\uC774\uB2E4",
        en: "'Ficciones' Is the Bible of the Postmodern Age",
      },
      summary: {
        ko: "\uBCF4\uB974\uD5E4\uC2A4\uC640 \uD3EC\uC2A4\uD2B8\uBAA8\uB354\uB2C8\uC998\uC744 \uC5F0\uACB0\uD558\uB294 \uB3C5\uC11C \uAE30\uB85D.",
        en: "A reading note that ties Borges to a postmodern way of thinking and writing.",
      },
      href: "https://blog.naver.com/algo7112/224151247766",
    },
    {
      year: "2025",
      category: {
        ko: "\uC5D0\uC138\uC774",
        en: "Essay",
      },
      title: {
        ko: "\uC624\uC9C1 \uD558\uB098\uC758 \uC88B\uC740 \uB18D\uB2F4\uC744 \uC0DD\uAC01\uD574\uB0B4\uAE30 \uC704\uD574 \uC544\uC8FC \uAE34 \uC2DC\uAC04\uACFC \uB178\uB825\uC744 \uBC14\uCE58\uACE0 \uC2F6\uB2E4",
        en: "I Want to Spend a Very Long Time Arriving at One Good Joke",
      },
      summary: {
        ko: "\uAE00\uC4F0\uAE30\uC640 \uC9C1\uAD00, \uBB38\uD559\uC758 \uD0DC\uB3C4\uB97C \uB2E4\uB8EC \uAE00.",
        en: "A reflective piece on writing, intuition, and literary attitude through the frame of a single joke.",
      },
      href: "https://blog.naver.com/algo7112/224070120051",
    },
    {
      year: "2025",
      category: {
        ko: "\uC5B8\uC5B4",
        en: "Language",
      },
      title: {
        ko: "\uC65C \uC77C\uBD80 \uC5B8\uC5B4\uC5D0\uC11C\uB294 '\uB0B4\uC77C'\uC774 \uACE7 '\uC544\uCE68'\uC77C\uAE4C?",
        en: "Why Do Some Languages Use the Same Word for 'Morning' and 'Tomorrow'?",
      },
      summary: {
        ko: "\uC2DC\uAC04 \uAC10\uAC01\uACFC \uC5B4\uC6D0\uC758 \uAD00\uACC4\uB97C \uC0B4\uD53C\uB294 \uB178\uD2B8.",
        en: "A short linguistic note following how etymology ties morning and tomorrow together in some languages.",
      },
      href: "https://blog.naver.com/algo7112/223786938523",
    },
    {
      year: "2025",
      category: {
        ko: "\uD53D\uC158",
        en: "Fiction",
      },
      title: {
        ko: "\uC608\uC220\uACFC \uC678\uC124\uC758 \uACBD\uACC4\uC5D0 \uAD00\uD55C \uC2A4\uCF00\uCE58",
        en: "A Sketch on the Boundary Between Art and Obscenity",
      },
      summary: {
        ko: "\uD574\uC11D\uACFC \uAC10\uC0C1\uC758 \uACBD\uACC4\uB97C \uBC00\uC5B4 \uBCF4\uB294 \uC9E7\uC740 \uAE00.",
        en: "A short piece set in a museum cafe, pressing on the boundary between art, obscenity, and interpretation.",
      },
      href: "https://blog.naver.com/algo7112/223722566599",
    },
  ] as WritingEntry[],
};

export const researchPage = {
  header: {
    ko: "\uC5F0\uAD6C",
    en: "Research",
  },
  description: {
    ko: "\uB17C\uBB38 figure\uC640 \uD0A4\uC6CC\uB4DC.",
    en: "Figures and keywords.",
  },
  title: {
    ko: "Diamond photonic crystal\nand BTO hybrid modulation",
    en: "Diamond photonic crystal\nand BTO hybrid modulation",
  },
  intro: {
    ko: "\uB2E4\uC774\uC544\uBAAC\uB4DC \uB098\uB178\uD3EC\uD1A0\uB2C9\uC2A4\uC640 hybrid modulator \uAD6C\uC870\uB97C \uC911\uC2EC\uC73C\uB85C \uBAA8\uC544 \uB46C \uCC38\uACE0 \uBCF4\uB4DC.",
    en: "A reference board centered on diamond nanophotonics and hybrid modulator structures.",
  },
};
