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

export type MusicVideo = {
  title: LocalizedText;
  caption: LocalizedText;
  youtubeId: string;
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
      ko: "코드, 실험, 기록",
      en: "code, experiments, notes",
    },
    icon: "arrow-up-right",
  },
  {
    href: "https://www.instagram.com/whwns_gud/",
    label: "Instagram",
    meta: {
      ko: "이미지와 순간 기록",
      en: "images and fragments",
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
      ko: "합주, 공연, 톤, 무대 위 긴장감에 관한 아카이브.",
      en: "An archive for rehearsals, live sets, tone, and stage energy.",
    },
    note: {
      ko: "공연 영상과 밴드 작업 기록",
      en: "Live videos and band work",
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
      ko: "블로그 링크와 실제 글 목록을 한국어와 영어로 함께 정리하는 공간.",
      en: "A page that organizes your blog and selected posts in Korean and English.",
    },
    note: {
      ko: "블로그와 작성한 글 목록",
      en: "Blog and writing index",
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
      ko: "다이아몬드 시뮬레이션과 연구 노트를 위한 페이지.",
      en: "A page for diamond simulation images and research notes.",
    },
    note: {
      ko: "이미지와 연구 업데이트 예정",
      en: "Images and updates to be added",
    },
  },
];

export const homeContent = {
  badge: {
    ko: "개인 아카이브",
    en: "Personal archive",
  },
  location: "KAIST / Korea",
  introLabel: {
    ko: "세 가지 축으로 정리된 개인 사이트",
    en: "A personal site organized into three active tracks",
  },
  title: {
    ko: "음악, 글, 연구를\n한 화면에\n너무 많이 쌓지 않기.",
    en: "Keep music,\nwriting, and research\nclear and separate.",
  },
  description: {
    ko: "홈은 입구 역할만 하고, 실제 내용은 각각의 서브페이지에서 더 차분하고 밀도 있게 보이도록 정리했습니다.",
    en: "The homepage acts as an entry point, while the actual content lives in dedicated pages with a calmer rhythm.",
  },
  principles: [
    {
      ko: "미니멀한 구성",
      en: "Minimal structure",
    },
    {
      ko: "한/영 전환",
      en: "Korean / English",
    },
    {
      ko: "서브페이지 중심",
      en: "Section-first navigation",
    },
  ],
  profileLabel: {
    ko: "소개",
    en: "Profile",
  },
  profileTitle: {
    ko: "공학, 밴드, 글쓰기를 각각의 페이지로 나눠 정리합니다.",
    en: "Engineering, band work, and writing are split into dedicated pages.",
  },
  profileBody: {
    ko: "전기전자공학을 공부하면서 포토닉스와 양자광학에 관심을 두고 있고, 음악과 글쓰기도 장기적으로 계속해 가고 있습니다.",
    en: "I study electrical engineering with a focus on photonics and quantum optics, while continuing music and writing as long-term practices.",
  },
};

export const musicPage = {
  header: {
    ko: "음악",
    en: "Music",
  },
  description: {
    ko: "합주와 공연 중심의 페이지입니다. 실제 영상은 아래 임베드 영역에 바로 들어가도록 구성했습니다.",
    en: "This page centers on rehearsals and live performances, with embedded videos ready to play directly on the site.",
  },
  title: {
    ko: "공연과 합주를\n사이트 안에서 바로 보기.",
    en: "Play live performances\ninside the site.",
  },
  intro: {
    ko: "유튜브 공연 링크만 넣으면 웹사이트 안에서 바로 재생되는 구조입니다. 지금은 영상 ID를 아직 받지 못해서 placeholder 슬롯으로 두었습니다.",
    en: "The structure is ready for direct YouTube embeds. The slots are placeholders for now because the actual video IDs have not been provided yet.",
  },
  videosLabel: {
    ko: "공연 영상",
    en: "Live videos",
  },
  videos: [
    {
      title: {
        ko: "공연 영상 01",
        en: "Live video 01",
      },
      caption: {
        ko: "유튜브 영상 ID를 넣으면 여기서 바로 재생됩니다.",
        en: "Drop a YouTube video ID here and it will play in place.",
      },
      youtubeId: "",
    },
    {
      title: {
        ko: "공연 영상 02",
        en: "Live video 02",
      },
      caption: {
        ko: "합주 영상이나 공연 클립을 추가하기 위한 슬롯입니다.",
        en: "A second slot for rehearsal footage or another live clip.",
      },
      youtubeId: "",
    },
  ] as MusicVideo[],
  notes: [
    {
      ko: "셋리스트, 톤, 무대 위 에너지에 대한 기록",
      en: "Notes on setlists, tone, and stage energy",
    },
    {
      ko: "밴드 작업을 정리하는 페이지",
      en: "A place to organize band work",
    },
  ],
};

export const writingPage = {
  header: {
    ko: "독서 / 글",
    en: "Reading / Writing",
  },
  description: {
    ko: "네이버 블로그와 지금까지의 글 일부를 한/영으로 정리해 둔 페이지입니다.",
    en: "A page that links your Naver blog and organizes selected pieces in Korean and English.",
  },
  title: {
    ko: "블로그와 글 목록을\n한/영으로 함께 보기.",
    en: "Read the blog\nand selected writing in two languages.",
  },
  intro: {
    ko: "공개 RSS에서 확인 가능한 글 몇 편을 추려 writing 페이지에 실제 콘텐츠로 반영했습니다. 이후 더 추가하고 싶은 글은 같은 방식으로 계속 넣을 수 있습니다.",
    en: "A small set of publicly visible posts from the blog RSS feed has been folded into this page. More entries can be added in the same format later.",
  },
  blogUrl: "https://blog.naver.com/algo7112",
  blogLabel: {
    ko: "블로그 링크",
    en: "Blog link",
  },
  blogPlaceholder: {
    ko: "블로그 URL을 추가하면 실제 링크가 표시됩니다.",
    en: "Add your blog URL to turn this into a live link.",
  },
  entriesLabel: {
    ko: "선별한 글",
    en: "Selected posts",
  },
  entries: [
    {
      year: "2026",
      category: {
        ko: "수필",
        en: "Essay",
      },
      title: {
        ko: "모르는 만큼 보인다",
        en: "You See More by Knowing Less",
      },
      summary: {
        ko: "전문성의 경계에 가까워질수록 오히려 큰 맥락을 놓치기 쉬워진다는 점을 사유하는 수필.",
        en: "An essay on how expertise can narrow perception even as it deepens technical understanding.",
      },
      href: "https://blog.naver.com/algo7112/224232537490",
    },
    {
      year: "2026",
      category: {
        ko: "작품 리뷰",
        en: "Review",
      },
      title: {
        ko: "'픽션들'은 포스트모더니즘 시대의 성경이다",
        en: "'Ficciones' Is the Bible of the Postmodern Age",
      },
      summary: {
        ko: "보르헤스의 '픽션들'을 다시 읽으며 독서, 포스트모더니즘, 그리고 글쓰기의 형식을 연결하는 글.",
        en: "A review that connects Borges, postmodernism, and the structure of literary thinking.",
      },
      href: "https://blog.naver.com/algo7112/224151247766",
    },
    {
      year: "2025",
      category: {
        ko: "수필",
        en: "Essay",
      },
      title: {
        ko: "오직 하나의 좋은 농담을 생각해내기 위해 아주 긴 시간과 노력을 바치고 싶다",
        en: "I Want to Spend a Very Long Time Arriving at One Good Joke",
      },
      summary: {
        ko: "왜 글을 쓰는가에 대한 질문을 농담, 직관, 문학의 목적이라는 방식으로 풀어가는 에세이.",
        en: "A reflective essay on writing, intuition, and the idea of literature through the frame of a single good joke.",
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
        ko: "왜 일부 언어에서는 '내일'이 곧 '아침' 일까?",
        en: "Why Do Some Languages Use the Same Word for 'Morning' and 'Tomorrow'?",
      },
      summary: {
        ko: "스페인어와 독일어 사례를 통해 시간 개념과 어원을 흥미롭게 푸는 짧은 언어학 글.",
        en: "A concise linguistic note on how etymology links morning and tomorrow in some European languages.",
      },
      href: "https://blog.naver.com/algo7112/223786938523",
    },
    {
      year: "2025",
      category: {
        ko: "단편",
        en: "Short fiction",
      },
      title: {
        ko: "예술과 외설의 경계에 관한 스케치",
        en: "A Sketch on the Boundary Between Art and Obscenity",
      },
      summary: {
        ko: "현대미술관 카페를 배경으로 예술, 외설, 해체와 상징을 대화 형식으로 밀어붙이는 단편.",
        en: "A short fiction piece set in a museum cafe, pushing art, obscenity, and interpretation through dialogue.",
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
    ko: "다이아몬드 시뮬레이션 이미지와 연구 내용을 업데이트할 공간입니다.",
    en: "A space for diamond simulation images and research updates.",
  },
  title: {
    ko: "다이아몬드 시뮬레이션 이미지는\n곧 업데이트됩니다.",
    en: "Diamond simulation images\nwill be updated soon.",
  },
  intro: {
    ko: "이미지와 세부 연구 설명이 들어올 자리를 미리 만들어 두었습니다.",
    en: "The layout is prepared in advance for images and more detailed research notes.",
  },
  placeholderTitle: {
    ko: "이미지 준비 중",
    en: "To be updated",
  },
  placeholderBody: {
    ko: "여기에 다이아몬드 시뮬레이션 이미지와 캡션을 넣을 예정입니다.",
    en: "Diamond simulation images and captions will be placed here.",
  },
  notes: [
    {
      ko: "연구 개요",
      en: "Research overview",
    },
    {
      ko: "시뮬레이션 결과",
      en: "Simulation output",
    },
    {
      ko: "업데이트 예정",
      en: "Further updates",
    },
  ],
};
