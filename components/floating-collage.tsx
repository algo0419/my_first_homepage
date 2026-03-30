"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Category = "music" | "writing" | "research";

type CollageCard = {
  src: string;
  alt: string;
  title: string;
  category: Category;
  x: number;
  y: number;
  w: number;
  h: number;
  rotate: number;
  fit?: "cover" | "contain";
  description: string;
};

const cards: CollageCard[] = [
  {
    src: "/collage/off-the-wall.jpg",
    alt: "Off the Wall",
    title: "Off the Wall",
    category: "music",
    x: 8,
    y: 9,
    w: 12,
    h: 18,
    rotate: -8,
    description:
      "이 앨범은 조준형의 작업에서 음악이 단순한 배경이 아니라 신체를 통해 사유되는 사건임을 암시한다. 밴드 연주와 리듬 감각이 그의 감수성을 통과할 때, 그루브는 취향의 문제가 아니라 세계를 지각하는 방식이 된다.",
  },
  {
    src: "/collage/blonde.jpg",
    alt: "Blonde",
    title: "Blonde",
    category: "music",
    x: 28,
    y: 7,
    w: 12,
    h: 17,
    rotate: 6,
    description:
      "조준형이 선택하는 음악에는 장르보다 정서의 잔광이 오래 남는다. 이 이미지는 늦게 도착하는 감정, 사운드가 기억을 다시 편집하는 방식, 그리고 그의 문장이 종종 수행하는 사적인 회고의 형식을 함께 환기한다.",
  },
  {
    src: "/collage/loveless.jpg",
    alt: "Loveless",
    title: "Loveless",
    category: "music",
    x: 49,
    y: 10,
    w: 11,
    h: 15,
    rotate: -7,
    description:
      "조준형의 취향이 늘 선명한 멜로디만 향하는 것은 아니다. 오히려 말해지지 않은 감정이 노이즈의 층위 속에 오래 눌려 남는 구조, 즉 직접 서술될 수 없는 정서를 우회적으로 드러내는 형식이 이 작업자의 감각과 더 가까워 보인다.",
  },
  {
    src: "/collage/kind-of-blue.jpg",
    alt: "Kind of Blue",
    title: "Kind of Blue",
    category: "music",
    x: 69,
    y: 8,
    w: 11,
    h: 15,
    rotate: -5,
    description:
      "재즈는 조준형의 미감에서 하나의 윤리에 가깝다. 과잉보다 간격, 과시보다 호흡, 밀어붙임보다 유예. 이러한 감각은 음악에만 머물지 않고 글쓰기와 연구의 구조 속에서도 배치와 간격에 대한 집요한 관심으로 반복된다.",
  },
  {
    src: "/collage/borges-ficciones.jpg",
    alt: "Ficciones",
    title: "Ficciones",
    category: "writing",
    x: 10,
    y: 32,
    w: 13,
    h: 19,
    rotate: 5,
    description:
      "보르헤스는 조준형의 독서가 단순한 취향 수집이 아니라 사유의 구조를 조직하는 작업에 가깝다는 사실을 보여준다. 그의 블로그 글들이 종종 감상문을 넘어 미로의 형식을 띠는 이유도, 아마 이 계보 안에서 더 잘 읽힐 수 있을 것이다.",
  },
  {
    src: "/collage/calvino-winter.jpg",
    alt: "If on a winter's night a traveler",
    title: "If on a winter's night a traveler",
    category: "writing",
    x: 27,
    y: 28,
    w: 12,
    h: 17,
    rotate: -8,
    description:
      "칼비노는 읽는 행위 그 자체를 하나의 장치로 바꾸는 작가이고, 조준형의 글 역시 독서의 결과보다 독서가 일으키는 구조적 전이를 오래 응시한다. 독자가 텍스트 바깥이 아니라 내부의 매개가 되는 순간이 여기서도 중요하다.",
  },
  {
    src: "/collage/bolano-detectives.jpg",
    alt: "The Savage Detectives",
    title: "The Savage Detectives",
    category: "writing",
    x: 45,
    y: 31,
    w: 11,
    h: 16,
    rotate: 7,
    description:
      "볼라뇨의 세계에는 완성보다 도주, 정리보다 잔향, 정전보다 누락이 남아 있다. 조준형이 이런 소설을 통과해 간다는 사실은 그의 문장이 안정된 해석보다 아직 정리되지 않은 열기와 흔적을 더 신뢰한다는 징후처럼 보인다.",
  },
  {
    src: "/collage/fight-club.jpg",
    alt: "Fight Club",
    title: "Fight Club",
    category: "writing",
    x: 61,
    y: 28,
    w: 12,
    h: 17,
    rotate: -6,
    description:
      "이 이미지는 폭력의 표면보다 분열된 자아의 미학을 먼저 호출한다. 조준형의 관심이 이 작품에 닿아 있다면, 그것은 아마 정체성과 욕망이 하나의 단단한 중심을 이루지 못한 채 서로를 밀어내는 긴장에 대한 감각과 연결될 것이다.",
  },
  {
    src: "/collage/pulp-fiction.jpg",
    alt: "Pulp Fiction",
    title: "Pulp Fiction",
    category: "writing",
    x: 78,
    y: 32,
    w: 11,
    h: 16,
    rotate: 6,
    description:
      "펄프 픽션이 장면을 배열하는 방식은 서사의 내용보다 편집의 리듬을 더 강하게 기억하게 만든다. 이러한 감각은 음악과 글을 하나의 화면에 병치하려는 조준형의 태도와도 닿아 있으며, 그의 작업이 종종 내용보다 구조를 먼저 말하는 이유를 드러낸다.",
  },
  {
    src: "/portraits/portrait-night.jpg",
    alt: "Jo Junhyung portrait",
    title: "Portrait at Night",
    category: "writing",
    x: 36,
    y: 48,
    w: 14,
    h: 22,
    rotate: 2,
    description:
      "이 초상은 단순한 인물 사진이라기보다 복수의 자아가 한 장면 안에 겹쳐진 기록처럼 보인다. 음악을 하는 조준형, 글을 쓰는 조준형, 연구를 수행하는 조준형이 서로 분리되지 않은 채 하나의 표면 위에서 미세하게 충돌하고 있다.",
  },
  {
    src: "/collage/kaist-ee-logo.png",
    alt: "KAIST EE Logo",
    title: "KAIST",
    category: "research",
    x: 73,
    y: 50,
    w: 11,
    h: 4.8,
    rotate: 3,
    fit: "contain",
    description:
      "KAIST는 조준형에게 단순한 제도적 표식이 아니라 질문의 문법을 재구성하는 장소에 가깝다. 감정의 밀도를 다루던 음악과 글의 층위가 여기서는 빛, 물질, 측정, 구조의 언어로 번역되며 다른 종류의 엄격함을 획득한다.",
  },
  {
    src: "/collage/loncar-diamond-circuit.jpg",
    alt: "Loncar circuit",
    title: "Diamond Circuit",
    category: "research",
    x: 8,
    y: 58,
    w: 13.5,
    h: 8.8,
    rotate: -4,
    fit: "contain",
    description:
      "다이아몬드는 이 작업자에게 더 이상 장식의 물질이 아니다. 결함을 품은 채 광자와 스핀을 매개하는 플랫폼이라는 점에서, 그것은 조준형의 연구가 완전한 표면보다 제어 가능한 불완전성의 가능성에 더 가까이 서 있음을 보여준다.",
  },
  {
    src: "/collage/bto-phase.jpg",
    alt: "BTO phase",
    title: "BTO Modulation",
    category: "research",
    x: 27,
    y: 61,
    w: 12.8,
    h: 8.6,
    rotate: 5,
    fit: "contain",
    description:
      "BTO를 바라보는 조준형의 시선에는 재료에 대한 호기심과 회로에 대한 감각이 동시에 놓여 있다. 변조는 여기서 단순한 기능이 아니라, 물질이 빛의 문장을 얼마나 섬세하게 고쳐 쓸 수 있는지를 시험하는 장면으로 읽힌다.",
  },
  {
    src: "/collage/loncar-fig1.jpg",
    alt: "Loncar fig1",
    title: "Inverse Design",
    category: "research",
    x: 47,
    y: 58,
    w: 11.2,
    h: 8.2,
    rotate: -6,
    fit: "contain",
    description:
      "역설계는 조준형의 연구가 손의 직관만으로 그려지는 것이 아니라는 사실을 드러낸다. 그러나 여기서 직관은 사라지는 대신 계산을 통과하며 다른 형태로 귀환한다. 공학과 미학이 만나는 지점은 바로 이런 전환 속에서 생겨난다.",
  },
  {
    src: "/collage/diamond-structures.jpg",
    alt: "Diamond structures",
    title: "Diamond Structures",
    category: "research",
    x: 63,
    y: 61,
    w: 11.8,
    h: 8.6,
    rotate: 4,
    fit: "contain",
    description:
      "이 구조들은 조준형에게 단순한 figure가 아니라 가능성의 지형도에 가깝다. 구멍과 선, 공진과 손실을 읽는 행위는 결과를 확인하는 절차라기보다 아직 실현되지 않은 경로를 예감하는 독해의 기술처럼 보인다.",
  },
  {
    src: "/collage/fab-fig2.jpg",
    alt: "Fabrication fig2",
    title: "Fabrication Trace",
    category: "research",
    x: 80,
    y: 60,
    w: 9.2,
    h: 7.6,
    rotate: -5,
    fit: "contain",
    description:
      "논문 속 공정 figure는 언제나 매끈하지만, 실제 연구는 훨씬 더 느리고 거친 시간의 축적을 전제로 한다. 이 이미지는 결과의 요약이라기보다 시행착오가 하나의 형식으로 정련되는 과정을 보여주는 조준형의 작업 노트처럼 읽힌다.",
  },
];

const categoryMeta: Record<Category, { href: string; label: string }> = {
  music: { href: "/music", label: "Read further: Music" },
  writing: { href: "/writing", label: "Read further: Writing" },
  research: { href: "/research", label: "Read further: Research" },
};

const mobileScale = 0.72;
const desktopScale = 0.86;

export function FloatingCollage() {
  const [activeCard, setActiveCard] = useState<CollageCard | null>(null);
  const [scale, setScale] = useState(desktopScale);

  useEffect(() => {
    const sync = () => {
      setScale(window.innerWidth < 768 ? mobileScale : desktopScale);
    };

    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  return (
    <>
      <div className="relative h-[100svh] min-h-[100svh] overflow-hidden md:h-[100dvh] md:min-h-[100dvh]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,#ff4f5e_0%,#ff9a1f_16%,#ffe74c_30%,#61ffca_45%,#3db7ff_58%,#7856ff_73%,#ff42c4_87%,#ff4f5e_100%)] opacity-95" />
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.18)_0,rgba(255,255,255,0.18)_2px,transparent_2px,transparent_96px)] opacity-25 mix-blend-soft-light" />
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_2px,transparent_2px,transparent_120px)] opacity-20 mix-blend-soft-light" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.4),transparent_18%),radial-gradient(circle_at_85%_24%,rgba(255,255,255,0.22),transparent_16%),radial-gradient(circle_at_45%_68%,rgba(255,255,255,0.22),transparent_18%),radial-gradient(circle_at_72%_74%,rgba(255,255,255,0.24),transparent_14%)] mix-blend-screen" />
        <div className="pointer-events-none absolute inset-x-0 top-[5%] flex justify-center text-[18vw] font-black uppercase tracking-[-0.08em] text-white/14 blur-[2px] md:text-[10vw]">
          777
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-[43%] flex justify-center text-[15vw] font-black uppercase tracking-[-0.08em] text-white/10 blur-[2px] md:text-[9vw]">
          ARCHIVE
        </div>

        {cards.map((card, index) => (
          <button
            key={card.src}
            type="button"
            onClick={() => setActiveCard(card)}
            className="absolute block appearance-none overflow-hidden border-0 bg-transparent p-0 text-left transition duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/70"
            style={{
              left: `${card.x}%`,
              top: `${card.y}%`,
              width: `${card.w * scale}%`,
              height: `${card.h * scale}%`,
              transform: `rotate(${card.rotate}deg)`,
              zIndex: index + 10,
              boxShadow: "0 14px 34px rgba(0,0,0,0.28)",
            }}
          >
            <img
              src={card.src}
              alt={card.alt}
              className={`h-full w-full ${card.fit === "contain" ? "object-contain" : "object-cover"}`}
              draggable={false}
            />
          </button>
        ))}
      </div>

      {activeCard ? (
        <div className="fixed inset-0 z-50 flex items-end bg-black/60 backdrop-blur-sm md:items-center md:justify-center">
          <button
            type="button"
            aria-label="Close"
            className="absolute inset-0 appearance-none border-0 bg-transparent p-0"
            onClick={() => setActiveCard(null)}
          />
          <div className="relative z-10 w-full border-t border-white/20 bg-black/82 p-5 text-white md:max-w-2xl md:rounded-[28px] md:border md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.36em] text-white/56">
                  {activeCard.category}
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-[-0.05em] md:text-4xl">
                  {activeCard.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveCard(null)}
                className="rounded-full border border-white/18 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/70 transition hover:bg-white hover:text-black"
              >
                Close
              </button>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/78 md:text-base">
              {activeCard.description}
            </p>

            <div className="mt-8">
              <Link
                href={categoryMeta[activeCard.category].href}
                className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-medium !text-black transition hover:bg-white/85"
              >
                {categoryMeta[activeCard.category].label}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
