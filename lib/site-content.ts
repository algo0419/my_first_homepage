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
      ko: "코드, 실험, 작업 기록",
      en: "code, experiments, working notes",
    },
    icon: "arrow-up-right",
  },
  {
    href: "https://rateyourmusic.com/~jHyung",
    label: "Rate Your Music",
    meta: {
      ko: "개인 별점 아카이브",
      en: "personal ratings archive",
    },
    icon: "arrow-up-right",
  },
  {
    href: "https://blog.naver.com/algo7112",
    label: "Naver Blog",
    meta: {
      ko: "독서와 글쓰기 노트",
      en: "reading and writing notes",
    },
    icon: "arrow-up-right",
  },
  {
    href: "mailto:junhyungcho@kaist.ac.kr",
    label: "Email",
    meta: {
      ko: "연락 및 협업",
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
      ko: "음악",
      en: "Music",
    },
    strap: {
      ko: "공연 기록과 평소 듣는 음반을 함께 두는 청취 아카이브.",
      en: "A listening archive that keeps live documents and favorite records in the same frame.",
    },
    note: {
      ko: "라이브와 리스닝",
      en: "live work and listening",
    },
  },
  {
    key: "writing",
    path: "/writing",
    icon: "writing",
    title: {
      ko: "독서 / 글",
      en: "Reading / Writing",
    },
    strap: {
      ko: "블로그 글과 메모를 한글과 영어로 묶어 놓은 페이지.",
      en: "A page that gathers blog posts and notes in Korean and English.",
    },
    note: {
      ko: "블로그와 글 목록",
      en: "blog and selected posts",
    },
  },
  {
    key: "research",
    path: "/research",
    icon: "research",
    title: {
      ko: "연구",
      en: "Research",
    },
    strap: {
      ko: "diamond photonic crystal과 BTO hybrid modulation 주변의 시각적 레퍼런스.",
      en: "A visual board around diamond photonic crystals and BTO hybrid modulation.",
    },
    note: {
      ko: "figure와 참고 논문",
      en: "figures and papers",
    },
  },
];

export const homeContent = {
  badge: {
    ko: "개인 아카이브",
    en: "Personal archive",
  },
  location: "KAIST / Daejeon",
  introLabel: {
    ko: "세 개의 축으로 정리한 개인 웹사이트",
    en: "A personal website split into three active tracks",
  },
  title: {
    ko: "음악, 글, 연구를\n한 화면에서 시작하고\n각 페이지로 깊게 들어가기.",
    en: "Start with music,\nwriting, and research,\nthen go deeper by page.",
  },
  description: {
    ko: "홈은 전체 결을 보여주고, 실제 내용은 각 서브 페이지에서 보다 차분하게 펼쳐집니다. 듣는 음악, 읽고 쓰는 글, 그리고 연구 중인 주제를 분리해서 정리했습니다.",
    en: "The homepage sets the overall tone, while the actual material unfolds more quietly inside each section. Music, writing, and research are separated so each can keep its own pace.",
  },
  principles: [
    {
      ko: "미니멀한 구조",
      en: "Minimal structure",
    },
    {
      ko: "한 / 영 전환",
      en: "Korean / English",
    },
    {
      ko: "섹션 중심 탐색",
      en: "Section-first navigation",
    },
  ],
  profileLabel: {
    ko: "프로필",
    en: "Profile",
  },
  profileTitle: {
    ko: "공학, 연주, 글쓰기를 서로 다른 리듬으로 이어 가고 있습니다.",
    en: "Engineering, performance, and writing are moving in parallel at different speeds.",
  },
  profileBody: {
    ko: "전기전자공학을 공부하며 photonics와 quantum optics를 중심으로 연구하고 있습니다. 동시에 밴드와 리스닝 아카이브를 이어 가고, 블로그에 읽고 생각한 것들을 기록합니다.",
    en: "I study electrical engineering with a focus on photonics and quantum optics, while keeping a parallel practice in music and an ongoing notebook of reading and writing.",
  },
};

export const writingPage = {
  header: {
    ko: "독서 / 글",
    en: "Reading / Writing",
  },
  description: {
    ko: "네이버 블로그를 중심으로 읽기와 쓰기의 흔적을 정리한 페이지.",
    en: "A page that organizes reading and writing traces around the Naver blog.",
  },
  title: {
    ko: "블로그와 글 목록을\n한글과 영어로\n함께 보기.",
    en: "Read the blog\nand selected pieces\nin two languages.",
  },
  intro: {
    ko: "블로그에 쌓인 글 중 몇 편을 골라 영어 설명과 함께 묶었습니다. 문학, 언어, 에세이, 짧은 리뷰를 중심으로 천천히 늘려 갈 생각입니다.",
    en: "A small set of blog posts is gathered here with English context. The page leans toward literature, language, essays, and short reviews, and can expand over time.",
  },
  blogUrl: "https://blog.naver.com/algo7112",
  blogLabel: {
    ko: "블로그 링크",
    en: "Blog link",
  },
  blogPlaceholder: {
    ko: "블로그 링크가 아직 연결되지 않았습니다.",
    en: "The blog link is not connected yet.",
  },
  entriesLabel: {
    ko: "골라 둔 글",
    en: "Selected posts",
  },
  entries: [
    {
      year: "2026",
      category: {
        ko: "에세이",
        en: "Essay",
      },
      title: {
        ko: "모르는 만큼 보인다",
        en: "You See More by Knowing Less",
      },
      summary: {
        ko: "전문성이 시야를 넓히는 동시에 무엇을 놓치게 만드는지에 대해 생각한 짧은 에세이.",
        en: "A short essay on how expertise deepens understanding while also narrowing what remains visible.",
      },
      href: "https://blog.naver.com/algo7112/224232537490",
    },
    {
      year: "2026",
      category: {
        ko: "리뷰",
        en: "Review",
      },
      title: {
        ko: "'픽션들'은 포스트모더니즘 시대의 성경이다",
        en: "'Ficciones' Is the Bible of the Postmodern Age",
      },
      summary: {
        ko: "보르헤스의 문장과 포스트모던 감각을 함께 읽어 내려가는 독서 기록.",
        en: "A reading note that ties Borges to a postmodern way of thinking and writing.",
      },
      href: "https://blog.naver.com/algo7112/224151247766",
    },
    {
      year: "2025",
      category: {
        ko: "에세이",
        en: "Essay",
      },
      title: {
        ko: "오직 하나의 좋은 농담을 생각해내기 위해 아주 긴 시간과 노력을 바치고 싶다",
        en: "I Want to Spend a Very Long Time Arriving at One Good Joke",
      },
      summary: {
        ko: "글쓰기와 직관, 그리고 문학의 태도를 농담이라는 형식을 통해 돌아보는 글.",
        en: "A reflective piece on writing, intuition, and literary attitude through the frame of a single joke.",
      },
      href: "https://blog.naver.com/algo7112/224070120051",
    },
    {
      year: "2025",
      category: {
        ko: "언어",
        en: "Language",
      },
      title: {
        ko: "왜 일부 언어에서는 '내일'이 곧 '아침'일까?",
        en: "Why Do Some Languages Use the Same Word for 'Morning' and 'Tomorrow'?",
      },
      summary: {
        ko: "스페인어와 이탈리아어의 어원을 따라가며 시간 감각과 언어의 관계를 살피는 노트.",
        en: "A short linguistic note following how etymology ties morning and tomorrow together in some languages.",
      },
      href: "https://blog.naver.com/algo7112/223786938523",
    },
    {
      year: "2025",
      category: {
        ko: "픽션",
        en: "Fiction",
      },
      title: {
        ko: "예술과 외설의 경계에 관한 스케치",
        en: "A Sketch on the Boundary Between Art and Obscenity",
      },
      summary: {
        ko: "미술관 카페를 배경으로 해석과 감상의 경계를 밀어 보는 짧은 글.",
        en: "A short piece set in a museum cafe, pressing on the boundary between art, obscenity, and interpretation.",
      },
      href: "https://blog.naver.com/algo7112/223722566599",
    },
  ] as WritingEntry[],
};

export const researchPage = {
  header: {
    ko: "연구",
    en: "Research",
  },
  description: {
    ko: "현재 관심사를 둘러싼 논문 figure와 키워드를 시각적으로 모아 둔 보드.",
    en: "A visual board of figures and keywords around the research topics I am working through now.",
  },
  title: {
    ko: "Diamond photonic crystal과\nBTO hybrid modulation을\n시각적으로 훑기.",
    en: "A visual pass through\ndiamond photonic crystals\nand BTO hybrid modulation.",
  },
  intro: {
    ko: "아직 개인 시뮬레이션 결과물을 올리기 전이라, 현재는 관련 리뷰 논문에서 중요한 figure를 먼저 모아 두었습니다. 나중에는 이 자리에 직접 만든 simulation image가 들어갈 예정입니다.",
    en: "My own simulation figures are not on the page yet, so the current board starts with a few useful review-paper images. This will later give way to original simulation outputs.",
  },
};
