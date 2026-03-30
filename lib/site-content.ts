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
  title: LocalizedText;
  summary: LocalizedText;
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
      ko: "협업 및 연락",
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
      ko: "블로그 링크와 지금까지의 글을 한/영으로 정리하는 공간.",
      en: "A page that organizes blog links and written pieces in Korean and English.",
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
    ko: "홈은 입구 역할만 하고, 실제 내용은 각각의 서브페이지에서 더 차분하고 밀도 있게 보이도록 재구성했습니다.",
    en: "The homepage now acts as an entry point, while the actual content lives in dedicated pages with a calmer rhythm.",
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
    ko: "블로그 링크와 지금까지의 글 목록을 한국어와 영어로 함께 보여주는 페이지입니다.",
    en: "A page for your blog link and a bilingual index of what you have written so far.",
  },
  title: {
    ko: "블로그와 글 목록을\n한/영으로 정리하기.",
    en: "Organize your blog\nand writing in two languages.",
  },
  intro: {
    ko: "지금은 블로그 URL이 없어서 링크 영역을 placeholder로 남겨 두었습니다. URL만 넣으면 바로 실제 링크로 바뀌게 해 두었습니다.",
    en: "The blog URL is currently left as a placeholder. Once you add the real URL, this section becomes a live link immediately.",
  },
  blogUrl: "",
  blogLabel: {
    ko: "블로그 링크",
    en: "Blog link",
  },
  blogPlaceholder: {
    ko: "블로그 URL을 추가하면 실제 링크가 표시됩니다.",
    en: "Add your blog URL to turn this into a live link.",
  },
  entriesLabel: {
    ko: "작성한 글",
    en: "Written pieces",
  },
  entries: [
    {
      year: "2026",
      title: {
        ko: "아이러니가 다시 진심처럼 들릴 때",
        en: "When irony starts sounding sincere again",
      },
      summary: {
        ko: "온라인 언어가 거리두기에서 친밀감 쪽으로 이동하는 방식에 대한 글.",
        en: "A piece on how online language shifts from distance toward intimacy.",
      },
    },
    {
      year: "2025",
      title: {
        ko: "분위기가 논지보다 먼저 오는 문장들",
        en: "Sentences where atmosphere arrives before thesis",
      },
      summary: {
        ko: "글을 쓸 때 분위기와 리듬이 논리보다 먼저 자리를 잡는 순간에 대한 메모.",
        en: "Notes on the moment when mood and rhythm settle before the formal argument does.",
      },
    },
    {
      year: "2024",
      title: {
        ko: "야간 이동, 형광등, 유리창",
        en: "Night transit, fluorescent light, reflected glass",
      },
      summary: {
        ko: "도시의 늦은 시간대 이동감각을 짧은 산문으로 잡아본 기록.",
        en: "A short prose fragment about moving through the city late at night.",
      },
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
