"use client";

import Link from "next/link";
import { useState } from "react";

type Category = "music" | "writing" | "research";

type CollageCard = {
  src: string;
  alt: string;
  title: string;
  category: Category;
  rotate: number;
  description: string;
  contain?: boolean;
  offsetClass?: string;
};

type Sticker = {
  label: string;
  className: string;
};

const categoryMeta: Record<
  Category,
  { label: string; href: string; button: string }
> = {
  music: { label: "Music", href: "/music", button: "Read further" },
  writing: { label: "Writing", href: "/writing", button: "Read further" },
  research: { label: "Research", href: "/research", button: "Read further" },
};

const cards: CollageCard[] = [
  {
    src: "/collage/off-the-wall.jpg",
    alt: "Michael Jackson - Off the Wall",
    title: "Off the Wall",
    category: "music",
    rotate: -3.5,
    offsetClass: "md:-mt-8 xl:-mt-12",
    description:
      "이 음반은 조준형의 청취가 단순한 목록 수집이 아니라 리듬을 통해 감각의 윤곽을 조직하는 행위임을 드러낸다. 경쾌함은 여기서 가벼움이 아니라 정교하게 설계된 추진력이며, 조준형은 바로 그 추진력이 몸에서 사유로 넘어가는 순간을 집요하게 포착하는 청자에 가깝다. 표지의 밝은 색면은 그에게 한 시대의 낙관을 상징하기보다, 운동성과 세련이 동일한 문장이 될 수 있다는 사실을 증언하는 장면으로 읽힌다.",
  },
  {
    src: "/collage/borges-ficciones.jpg",
    alt: "Jorge Luis Borges - Ficciones",
    title: "Ficciones",
    category: "writing",
    rotate: 2.3,
    offsetClass: "md:-mt-16 xl:-mt-24",
    description:
      "보르헤스는 조준형에게 취향의 이름이라기보다 구조적 사고의 원형에 가깝다. 미로와 거울, 가상의 저자와 무한한 서가라는 장치들은 이 화면에서 장식적 인용으로 머물지 않는다. 그것들은 조준형이 문장과 사유를 배치하는 방식, 즉 하나의 결론보다 다수의 입구를 더 신뢰하는 태도의 배후 문법으로 기능한다. 이 책 표지는 그의 글이 왜 곧장 닫히지 않고 오래 반향하는지를 해명하는 비평적 표지판처럼 놓여 있다.",
  },
  {
    src: "/collage/loncar-diamond-circuit.jpg",
    alt: "Diamond photonic circuit figure",
    title: "Diamond Circuit",
    category: "research",
    rotate: -2.4,
    contain: true,
    offsetClass: "md:-mt-6 xl:-mt-10",
    description:
      "다이아몬드 포토닉 회로의 도식은 조준형의 연구가 성능 경쟁의 공학에만 머무르지 않는다는 사실을 드러낸다. 선과 결합부, 공진기의 배열은 기능적 회로이면서 동시에 시각적 리듬이며, 그는 바로 그 이중성을 읽는 사람이다. 보이지 않는 광학적 사건이 도면의 언어로 번역되는 이 장면에서 연구는 계산의 결과를 넘어 하나의 조형 질서로 출현한다. 조준형의 연구 페이지가 이미지들로 서술될 수 있는 이유도 바로 이 때문이다.",
  },
  {
    src: "/portraits/portrait-stage.jpg",
    alt: "Portrait of Junhyung Cho on stage",
    title: "Portrait, Stage",
    category: "music",
    rotate: 3.6,
    offsetClass: "md:-mt-20 xl:-mt-28",
    description:
      "무대 위의 조준형은 취향을 소비하는 청자가 아니라, 소리를 자신의 시간과 신체를 통해 다시 조직하는 연주자적 존재로 나타난다. 별점과 커버, 플레이리스트와 평론은 이 장면에 이르러 하나의 다른 차원으로 이동한다. 즉 듣는다는 행위가 몸을 경유한 실천으로 변환되는 것이다. 이 사진은 그의 음악 취향이 왜 단순한 선호의 나열이 아니라 실제의 압력과 공기를 포함한 감각의 훈련으로 읽혀야 하는지를 보여 준다.",
  },
  {
    src: "/collage/blonde.jpg",
    alt: "Frank Ocean - Blonde",
    title: "Blonde",
    category: "music",
    rotate: -2.1,
    offsetClass: "md:-mt-10 xl:-mt-16",
    description:
      "조준형에게 이 표지는 한 세대의 우울을 재현하는 아이콘이 아니라, 감정이 가장 높은 해상도로 보존되는 형식에 가깝다. 목소리는 중심을 선명하게 제시하는 대신 가장자리를 오래 진동시키고, 그 지연은 결핍이 아니라 미학적 선택이 된다. 그의 글에서도 자주 발견되는 이 잔향의 문법은, 사태를 즉시 닫지 않고 주변부의 떨림을 더 오래 바라보는 태도와 연결된다. 이 음반은 그 태도를 소리의 표면 위에 가장 정확하게 남겨 놓은 물건이다.",
  },
  {
    src: "/collage/kaist-ee-logo.png",
    alt: "KAIST Electrical Engineering logo",
    title: "KAIST EE",
    category: "research",
    rotate: 1.8,
    contain: true,
    offsetClass: "md:-mt-18 xl:-mt-26",
    description:
      "이 로고는 조준형의 콜라주 안에서 제도적 소속을 표시하는 배지에 그치지 않는다. 그것은 그가 감각의 언어와 계산의 언어를 동시에 통과하는 장소의 좌표이며, 서로 다른 회로들이 실제로 접속되는 접점의 기호다. 음악과 문학의 표지들 사이에 이 단정한 마크가 삽입될 때 오히려 전체가 느슨해지지 않고 붙잡히는 이유는, 조준형의 작업 전체가 이미 하나의 이중 언어 위에 성립해 있기 때문이다.",
  },
  {
    src: "/collage/fight-club.jpg",
    alt: "Fight Club poster",
    title: "Fight Club",
    category: "writing",
    rotate: -3.2,
    offsetClass: "md:-mt-8 xl:-mt-14",
    description:
      "이 포스터는 조준형의 세계에서 단순한 컬트 기호가 아니다. 오히려 자아가 분열을 통해서만 자기 윤곽을 획득한다는 사실을 시각적으로 봉인한 표식에 가깝다. 그의 글에는 종종 서로 다른 강도의 목소리들이 한 문장 안에서 충돌하고, 그 간극 속에서 사유의 전압이 발생한다. 이 이미지는 바로 그 전압을 대중문화의 표면으로 번역한 예시이며, 조준형의 텍스트가 왜 안정된 진술보다 균열의 미학에 가까운지 설명해 준다.",
  },
  {
    src: "/collage/loveless.jpg",
    alt: "My Bloody Valentine - Loveless",
    title: "Loveless",
    category: "music",
    rotate: 2.6,
    offsetClass: "md:-mt-22 xl:-mt-32",
    description:
      "이 표지는 조준형의 청취가 선율의 윤곽만이 아니라 압력과 입자의 질감까지 듣는다는 사실을 보여 준다. 여기서 음악은 곡이라기보다 장이며, 각 층위는 서로를 지우지 않은 채 겹쳐져 하나의 기후를 만든다. 그가 밴드 안에서 구축해 온 시간감각 또한 이런 밀도와 충돌을 통해 성장해 왔다. 따라서 이 음반은 취향의 예시라기보다, 조준형이 소리를 어떻게 공간과 질감으로 사유하는지에 대한 하나의 축약된 지도에 가깝다.",
  },
  {
    src: "/portraits/portrait-night.jpg",
    alt: "Portrait of Junhyung Cho at night",
    title: "Portrait, Night",
    category: "writing",
    rotate: -1.7,
    offsetClass: "md:-mt-12 xl:-mt-18",
    description:
      "초상은 여기서 중심 인물의 정체성을 고정하는 수단이 아니라, 다른 모든 표지와 도면을 느슨하게 묶는 어두운 매듭처럼 작동한다. 조준형은 외부의 사물들을 수집하지만, 그 수집은 자기를 지우기 위한 것이 아니라 더 복잡한 형태로 우회해 드러내기 위한 것이다. 얼굴은 이 콜라주 안에서 완결된 자아의 상징이 아니라, 음악과 문학, 연구라는 서로 다른 회로가 한 사람의 시간 위에서 접속되는 인터페이스로 보인다.",
  },
  {
    src: "/collage/bto-phase.jpg",
    alt: "BTO modulation phase figure",
    title: "BTO Modulation",
    category: "research",
    rotate: 3.4,
    contain: true,
    offsetClass: "md:-mt-18 xl:-mt-24",
    description:
      "BTO 변조 구조는 조준형이 현재 다루는 하이브리드 집적의 핵심 어휘 가운데 하나를 상징한다. 서로 다른 물질과 공정, 계면과 손실, 전기장과 광장이 하나의 목적을 향해 협상하는 장면이 이 도표 안에 압축되어 있다. 그가 기술 이미지를 좋아하는 이유는 그것들이 차갑기 때문이 아니라, 복수의 질서가 한 점에서 충돌하면서 새로운 형식을 만들어 내기 때문이다. 이 figure는 그 충돌을 가장 정교하게 가시화한다.",
  },
  {
    src: "/collage/pulp-fiction.jpg",
    alt: "Pulp Fiction poster",
    title: "Pulp Fiction",
    category: "writing",
    rotate: -2.5,
    offsetClass: "md:-mt-8 xl:-mt-12",
    description:
      "조준형이 선호하는 텍스트와 이미지의 상당수는 고전적인 위계보다 병치의 쾌락 위에 세워져 있다. 이 포스터는 파편들이 하나의 교양적 중심으로 수렴하지 않아도 얼마나 강한 전체감을 형성할 수 있는지를 보여 준다. 서로 다른 장면과 말투, 질감들이 병렬될 때 더 선명한 리듬이 발생한다는 사실. 그의 웹사이트가 페이지 분류를 넘어서 콜라주로 작동하려는 이유 역시 바로 그 리듬의 가능성을 시각적으로 실험하기 위해서다.",
  },
  {
    src: "/collage/kind-of-blue.jpg",
    alt: "Miles Davis - Kind of Blue",
    title: "Kind of Blue",
    category: "music",
    rotate: 2.2,
    offsetClass: "md:-mt-24 xl:-mt-34",
    description:
      "조준형의 콜라주 안에서 이 재킷은 고전의 장식물이 아니라, 절제가 어떻게 가장 먼 울림을 만들어 내는지 보여 주는 표본으로 놓인다. 그는 과잉을 사랑하지만 그 과잉이 무질서가 아니라 선택된 긴장이어야 한다는 감각을 가지고 있다. 이 음반의 푸른 간격은 그 감각의 기원을 암시한다. 적게 말하고도 넓게 울리는 형식, 바로 그 호흡이 이 사이트 전체의 리듬과도 연결된다.",
  },
  {
    src: "/collage/calvino-winter.jpg",
    alt: "Italo Calvino - If on a winter's night a traveler",
    title: "If on a winter's night a traveler",
    category: "writing",
    rotate: 3.1,
    offsetClass: "md:-mt-16 xl:-mt-22",
    description:
      "칼비노의 이 표지는 조준형에게 읽기가 곧 분절의 기술이라는 점을 상기시킨다. 하나의 서사를 직선으로 밀어붙이기보다 끊김과 재개, 어긋남과 회귀 속에서 더 많은 긴장을 발견하는 태도는 그의 블로그 텍스트들에서도 반복된다. 미완의 조각들이 더 큰 총체를 암시할 수 있다는 믿음, 그리고 결론보다 다음 입구를 더 오래 남겨 두는 문장. 이 작품은 조준형의 글쓰기가 왜 항상 약간의 여백과 지연을 보존하는지에 대한 미묘한 해설처럼 작동한다.",
  },
  {
    src: "/collage/diamond-structures.jpg",
    alt: "Diamond photonic crystal structures",
    title: "Diamond Structures",
    category: "research",
    rotate: -2.2,
    contain: true,
    offsetClass: "md:-mt-20 xl:-mt-28",
    description:
      "결정 구조의 반복과 공백은 조준형이 오래 붙들고 있는 질문을 시각적으로 응축한다. 빛은 어떤 형태를 통과할 때 비로소 제어 가능한 사건이 되는가. 이 이미지는 그 질문을 가장 차갑고도 아름다운 방식으로 제시한다. 정밀한 주기성과 미세한 결함이 동시에 작동하는 장면 속에서 그의 연구는 단순한 기능 개발을 넘어, 물질과 형태가 어떻게 협업하는지를 사유하는 미학적 실천으로 확장된다.",
  },
  {
    src: "/portraits/portrait-archive-3.jpg",
    alt: "Portrait archive image of Junhyung Cho",
    title: "Archive Fragment",
    category: "writing",
    rotate: 2.4,
    offsetClass: "md:-mt-10 xl:-mt-16",
    description:
      "아카이브 사진은 부차적 자료처럼 보이지만 조준형의 경우에는 오히려 작업의 실질적 형식을 드러낸다. 그는 완성된 선언보다 축적된 조각들 속에서 자신을 구성하는 인물이며, 이 이미지는 그 자료적 자아의 한 단면처럼 남는다. 다른 커버와 figure들 사이에 이 사적인 단편이 끼어들 때 드러나는 것은 취향의 고백이 아니라, 자기 서사를 자료화하고 편집하는 하나의 방법론이다. 이 사이트가 연대기보다 콜라주에 가까운 이유도 여기에 있다.",
  },
];

const stickers: Sticker[] = [
  {
    label: "✦ archive pulse",
    className:
      "left-[6%] top-[8%] -rotate-6 bg-[#ffec62] text-black shadow-[0_14px_36px_rgba(255,236,98,0.35)]",
  },
  {
    label: "🎧 loud thinking",
    className:
      "right-[7%] top-[14%] rotate-[8deg] bg-[#ff5aa5] text-white shadow-[0_14px_36px_rgba(255,90,165,0.35)]",
  },
  {
    label: "⚡ diamond mode",
    className:
      "left-[12%] top-[43%] rotate-[7deg] bg-[#69f0ff] text-black shadow-[0_14px_36px_rgba(105,240,255,0.35)]",
  },
  {
    label: "📚 nocturnal notes",
    className:
      "right-[14%] top-[58%] -rotate-[10deg] bg-[#9d7bff] text-white shadow-[0_14px_36px_rgba(157,123,255,0.3)]",
  },
  {
    label: "🌀 feedback / memory",
    className:
      "left-[28%] bottom-[11%] rotate-[5deg] bg-[#6dff9d] text-black shadow-[0_14px_36px_rgba(109,255,157,0.3)]",
  },
  {
    label: "☆ jo junhyung",
    className:
      "right-[26%] bottom-[16%] -rotate-[7deg] bg-white text-black shadow-[0_14px_36px_rgba(255,255,255,0.25)]",
  },
];

export function FloatingCollage() {
  const [activeCard, setActiveCard] = useState<CollageCard | null>(null);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,72,180,0.22),_transparent_28%),radial-gradient(circle_at_20%_80%,_rgba(52,211,153,0.16),_transparent_26%),radial-gradient(circle_at_80%_28%,_rgba(56,189,248,0.2),_transparent_30%),linear-gradient(180deg,_#110417_0%,_#09010e_58%,_#050107_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(255,255,255,0.14),transparent_18%),radial-gradient(circle_at_78%_22%,rgba(255,255,255,0.08),transparent_16%),radial-gradient(circle_at_74%_74%,rgba(255,255,255,0.08),transparent_18%)]" />

      <div className="pointer-events-none absolute inset-0 z-20 hidden md:block">
        {stickers.map((sticker) => (
          <div
            key={sticker.label}
            className={`absolute rounded-full px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] ${sticker.className}`}
          >
            {sticker.label}
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-3 pb-16 pt-10 sm:px-4 md:px-6 md:pb-20 md:pt-12">
        <div className="columns-2 gap-3 md:columns-4 md:gap-4 xl:columns-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`relative mb-3 break-inside-avoid md:mb-4 ${card.offsetClass ?? ""}`}
            >
              <button
                type="button"
                onClick={() => setActiveCard(card)}
                className="group relative block w-full appearance-none border-0 bg-transparent p-0 text-left"
                aria-label={`${card.title} details`}
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className={`block w-full select-none shadow-[0_24px_60px_rgba(0,0,0,0.38)] transition duration-300 group-hover:-translate-y-1 ${
                    card.contain ? "h-auto object-contain" : "h-auto object-cover"
                  }`}
                  style={{ transform: `rotate(${card.rotate}deg)` }}
                  loading="lazy"
                  draggable={false}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {activeCard ? (
        <div
          className="fixed inset-0 z-50 flex items-end bg-black/70 p-3 backdrop-blur-sm md:items-center md:p-6"
          onClick={() => setActiveCard(null)}
        >
          <div
            className="mx-auto w-full max-w-3xl border border-white/10 bg-[#0c0711]/95 p-5 text-white shadow-[0_30px_120px_rgba(0,0,0,0.6)] md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="space-y-2">
                <p className="text-[0.68rem] uppercase tracking-[0.32em] text-white/45">
                  {categoryMeta[activeCard.category].label}
                </p>
                <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  {activeCard.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveCard(null)}
                className="appearance-none border-0 bg-transparent p-0 text-sm uppercase tracking-[0.28em] text-white/45 transition hover:text-white"
              >
                Close
              </button>
            </div>

            <p className="text-[0.98rem] leading-8 text-white/82 md:text-[1.02rem]">
              {activeCard.description}
            </p>

            <div className="mt-8">
              <Link
                href={categoryMeta[activeCard.category].href}
                className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium !text-black transition hover:bg-white/90"
              >
                {categoryMeta[activeCard.category].button}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
