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
      "준형에게 음악은 배경이 아니라 몸을 통과하는 사고다. 밴드 연주를 하고 리듬으로 기억을 붙잡는 그의 감각에서 이 앨범은 생각보다 먼저 도착하는 그루브의 원형처럼 남아 있다. 어떤 밤에는 문장보다 베이스라인이 그를 더 정확하게 설명한다.",
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
      "준형의 음악 취향에는 늘 사적인 잔광이 남아 있다. 이 커버는 감정이 장르보다 오래 남는다는 사실, 그리고 어떤 사운드는 그의 블로그 문장들처럼 뒤늦게 감정을 드러낸다는 사실을 상기시킨다.",
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
      "준형의 취향은 늘 선명한 멜로디만 향하지 않는다. 이 앨범은 말해지지 않은 감정이 노이즈 속에 오래 눌려 남는 방식을 닮아 있고, 그래서 그가 직접 쓰지 못한 어떤 것들을 대신 울려주는 장면처럼 보인다.",
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
      "재즈는 준형의 취향에서 하나의 윤리처럼 보인다. 과잉보다 간격, 과시보다 호흡, 그리고 계산된 망설임. 그는 이런 음악을 들을 때 연구에서도 글쓰기에서도 결국 중요한 것은 밀도가 아니라 배치라는 사실을 다시 확인하게 된다.",
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
      "준형의 블로그 글들을 읽고 있으면 감상이 자주 에세이를 넘어 미로가 된다. 보르헤스는 그 미로의 가장 정확한 선조다. 준형의 독서는 단순한 취향이 아니라 사유의 구조를 세우는 행위에 가깝다.",
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
      "준형은 읽는 행위 자체를 다시 쓰고 싶어 하는 사람처럼 보인다. 칼비노가 책을 읽는 사람을 이야기의 장치로 끌어들이는 방식은, 그의 글이 종종 독서 경험 자체를 하나의 서사로 바꾸는 이유와 닿아 있다.",
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
      "준형이 좋아하는 텍스트에는 늘 청춘의 폐허가 조금씩 남아 있다. 완성된 세계보다 도주 중인 세계, 정리된 문학사보다 사라진 이름들의 흔적. 볼라뇨는 그가 책에서 찾는 불완전한 열기를 가장 잘 대변하는 작가 중 하나다.",
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
      "준형이 이 영화를 좋아한다면 그것은 폭력 때문이 아니라 분열된 자아가 만들어내는 이상한 미학 때문일 것이다. 그의 글에도 가끔 그런 긴장이 있다. 세련된 표면 아래에서 정체성과 욕망이 서로를 밀어내는 방식 말이다.",
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
      "준형은 서사의 내용만큼 편집의 리듬에도 끌리는 사람 같다. 펄프 픽션이 시간의 순서를 비틀어 장면을 더 강하게 기억하게 만드는 방식은, 그가 음악과 글을 한 화면에 겹쳐두고 싶어 하는 취향과도 자연스럽게 이어진다.",
  },
  {
    src: "/portraits/portrait-night.jpg",
    alt: "Junhyung portrait",
    title: "Portrait at Night",
    category: "writing",
    x: 36,
    y: 48,
    w: 14,
    h: 22,
    rotate: 2,
    description:
      "이 초상은 단순한 인물 사진이 아니다. 음악을 하는 준형, 글을 쓰는 준형, 연구를 하는 준형이 한 장에 겹쳐진 장면처럼 보인다. 얼굴은 하나지만 그 안에는 서로 다른 시간대의 자아가 동시에 반사된다.",
  },
  {
    src: "/collage/kaist-ee-logo.png",
    alt: "KAIST EE Logo",
    title: "KAIST",
    category: "research",
    x: 73,
    y: 50,
    w: 13,
    h: 6,
    rotate: 3,
    fit: "contain",
    description:
      "KAIST는 준형에게 단순한 소속이 아니라 질문의 형식을 바꿔놓은 장소일 것이다. 음악과 글이 감정의 밀도를 다루는 동안, 여기서는 빛과 물질, 구조와 측정이 다른 문법으로 같은 집요함을 요구한다.",
  },
  {
    src: "/collage/loncar-diamond-circuit.jpg",
    alt: "Loncar circuit",
    title: "Diamond Circuit",
    category: "research",
    x: 8,
    y: 58,
    w: 15,
    h: 10,
    rotate: -4,
    fit: "contain",
    description:
      "다이아몬드는 준형의 연구에서 더 이상 장식이 아니다. 오히려 결함을 품은 채 광자와 스핀을 이어주는 플랫폼이고, 그래서 그에게 아름다움은 완벽한 표면보다 제어 가능한 불완전성에 더 가까워진다.",
  },
  {
    src: "/collage/bto-phase.jpg",
    alt: "BTO phase",
    title: "BTO Modulation",
    category: "research",
    x: 27,
    y: 61,
    w: 14,
    h: 10,
    rotate: 5,
    fit: "contain",
    description:
      "BTO를 보는 준형의 시선에는 재료공학적 호기심과 회로적 감각이 함께 있다. 변조는 그에게 단순한 기능이 아니라 물질이 빛의 문장을 얼마나 섬세하게 고쳐 쓸 수 있는지를 보여주는 장면이다.",
  },
  {
    src: "/collage/loncar-fig1.jpg",
    alt: "Loncar fig1",
    title: "Inverse Design",
    category: "research",
    x: 47,
    y: 58,
    w: 12,
    h: 9,
    rotate: -6,
    fit: "contain",
    description:
      "역설계는 준형의 연구가 손으로만 그려지는 것이 아니라는 사실을 보여준다. 직관은 여기서 사라지지 않고 계산을 통과한 뒤 다른 형태의 직관으로 돌아온다. 그는 이런 장면에서 공학이 미학과 만나는 지점을 본다.",
  },
  {
    src: "/collage/diamond-structures.jpg",
    alt: "Diamond structures",
    title: "Diamond Structures",
    category: "research",
    x: 63,
    y: 61,
    w: 13,
    h: 10,
    rotate: 4,
    fit: "contain",
    description:
      "이 구조들은 준형에게 figure가 아니라 지형도에 가깝다. 구멍과 선, 공진과 손실을 읽어가며 그는 결과를 본다기보다 가능성의 지도를 해독한다. 연구가 그에게 매력적인 이유도 아마 그런 독해의 감각일 것이다.",
  },
  {
    src: "/collage/fab-fig2.jpg",
    alt: "Fabrication fig2",
    title: "Fabrication Trace",
    category: "research",
    x: 80,
    y: 60,
    w: 10,
    h: 9,
    rotate: -5,
    fit: "contain",
    description:
      "논문 속 공정 figure는 늘 매끈하지만 준형이 실제로 마주하는 연구는 훨씬 더 느리고 거칠다. 그래서 이런 이미지는 결과의 요약이라기보다 시행착오가 하나의 형식으로 압축되는 과정을 보여주는 작업 일지처럼 읽힌다.",
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
