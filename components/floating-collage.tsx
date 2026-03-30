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
    x: 6,
    y: 8,
    w: 12,
    h: 18,
    rotate: -8,
    description:
      "춤은 이 이미지에서 기록이 아니라 탈출구로 남아 있다. 방 하나를 벗어나기 위해서는 문이 아니라 리듬이 필요하다는 사실, 그리고 어떤 밤들은 사유보다 베이스라인을 더 정확한 철학으로 만든다는 사실을 나는 여기서 배운다.",
  },
  {
    src: "/collage/blonde.jpg",
    alt: "Blonde",
    title: "Blonde",
    category: "music",
    x: 24,
    y: 6,
    w: 12,
    h: 17,
    rotate: 6,
    description:
      "기억은 늘 색을 잃은 뒤에야 선명해진다. 이 커버는 감정이 장르보다 오래 남는다는 증거처럼 보이고, 나는 종종 음악을 듣는 것이 아니라 과거의 미세한 날씨를 다시 통과하는 일이라고 생각하게 된다.",
  },
  {
    src: "/collage/loveless.jpg",
    alt: "Loveless",
    title: "Loveless",
    category: "music",
    x: 42,
    y: 10,
    w: 11,
    h: 15,
    rotate: -7,
    description:
      "소음이 벽이 아니라 안개가 될 때, 사람은 길을 잃는 대신 떠오른다. 이 이미지는 멜로디를 숨기지 않고 오히려 과다하게 감싸서, 말해지지 않은 것들이 더 오래 잔향을 갖는 방식을 보여준다.",
  },
  {
    src: "/collage/discovery.jpg",
    alt: "Discovery",
    title: "Discovery",
    category: "music",
    x: 57,
    y: 7,
    w: 12,
    h: 16,
    rotate: 7,
    description:
      "미래는 대개 차갑게 묘사되지만, 내가 좋아하는 미래는 늘 지나치게 반짝이고 유치할 만큼 낙관적이다. 디스코와 기계가 서로를 닮아가는 이 장면에서 기술은 계산이 아니라 희열의 디자인이 된다.",
  },
  {
    src: "/collage/kind-of-blue.jpg",
    alt: "Kind of Blue",
    title: "Kind of Blue",
    category: "music",
    x: 74,
    y: 8,
    w: 11,
    h: 15,
    rotate: -5,
    description:
      "재즈는 정답이 아니라 올바른 망설임의 기술일지 모른다. 이 커버를 보면 언제나 최소한의 음들이 최대한의 공간을 만들 수 있다는 사실, 그리고 침묵조차 편곡의 일부가 될 수 있다는 사실을 다시 믿게 된다.",
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
      "보르헤스를 읽는다는 것은 한 권의 책을 여는 일이 아니라, 책이라는 물체가 끝없이 다른 책들을 꿈꾸는 현장을 목격하는 일에 가깝다. 나는 종종 문장을 쓰기보다 미로를 정리하고 있다는 느낌을 받는데, 그 미로의 원형은 대개 여기에서 시작된다.",
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
      "독자는 종종 등장인물보다 더 허구적인 존재다. 칼비노는 읽는 행위 자체를 소설의 무대로 바꾸고, 나는 그 장난스럽고 정교한 균열 속에서 문학이 줄거리보다 구조에 의해 더 오래 기억될 수 있다는 걸 배운다.",
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
      "청춘은 하나의 운동이라기보다 흩어진 증언들의 합처럼 남는다. 볼라뇨의 세계는 문학을 완성된 대성당이 아니라 도주와 우연, 사라진 이름들로 이루어진 지도처럼 보여주고, 그 불완전함이 오히려 더 정확하게 현실을 닮는다.",
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
      "이 포스터는 폭력의 표면보다 정체성의 균열을 먼저 말한다. 우리는 얼마나 많은 가면을 소비한 뒤에야 비로소 자기 파괴를 자기 발견으로 착각하게 되는가, 라는 질문이 여기서는 분홍 비누처럼 이상하게도 세련된 형태를 띤다.",
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
      "시간이 직선이 아닐 때 이야기는 더 윤리적이 될지도 모른다. 펄프 픽션의 세계에서는 순서가 원인을 설명하지 않고, 오히려 어긋난 배치가 인물의 기묘한 존엄을 드러낸다. 나는 그 편집의 리듬을 하나의 문체처럼 본다.",
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
      "자기 자신도 결국 하나의 읽히는 표면이라면, 초상은 진실의 증거가 아니라 편집된 각도의 합일 것이다. 이 사진 속 인물은 나이지만, 동시에 내가 되고 싶었던 여러 버전들의 잔광이기도 하다.",
  },
  {
    src: "/collage/kaist-ee-logo.png",
    alt: "KAIST EE Logo",
    title: "KAIST",
    category: "research",
    x: 73,
    y: 50,
    w: 16,
    h: 8,
    rotate: 3,
    fit: "contain",
    description:
      "연구실과 캠퍼스는 단순한 배경이 아니라 사고 방식의 기후를 만든다. 이 로고는 제도적 표식이면서도, 내게는 수식과 실험, 지연된 결과, 그리고 아주 천천히 선명해지는 질문들의 압축된 입구처럼 보인다.",
  },
  {
    src: "/collage/loncar-diamond-circuit.jpg",
    alt: "Loncar circuit",
    title: "Diamond Circuit",
    category: "research",
    x: 8,
    y: 58,
    w: 17,
    h: 12,
    rotate: -4,
    fit: "contain",
    description:
      "다이아몬드는 보석이기 이전에 결함을 품은 플랫폼이다. 결함은 보통 수정되어야 할 오류로 불리지만, 이 장면에서는 오히려 광자와 스핀을 잇는 정밀한 인터페이스가 된다. 나는 그런 역설이 과학을 아름답게 만든다고 믿는다.",
  },
  {
    src: "/collage/bto-phase.jpg",
    alt: "BTO phase",
    title: "BTO Modulation",
    category: "research",
    x: 27,
    y: 61,
    w: 16,
    h: 12,
    rotate: 5,
    fit: "contain",
    description:
      "변조는 정보를 흔들림 없이 전달하기 위해 오히려 빛을 흔드는 기술이다. BTO의 위상 응답을 보고 있으면, 물질이 얼마나 섬세한 번역 기계가 될 수 있는지 새삼 실감하게 된다. 신호는 여기서 전송이 아니라 조율에 가깝다.",
  },
  {
    src: "/collage/loncar-fig1.jpg",
    alt: "Loncar fig1",
    title: "Inverse Design",
    category: "research",
    x: 47,
    y: 58,
    w: 14,
    h: 11,
    rotate: -6,
    fit: "contain",
    description:
      "설계는 더 이상 사람이 직접 선을 긋는 일이 아닐 수도 있다. 역설계된 구조를 보고 있으면, 직관이 계산으로 대체되는 것이 아니라 계산 속으로 침투해 새로운 직관으로 돌아오는 장면을 보는 것 같다.",
  },
  {
    src: "/collage/diamond-structures.jpg",
    alt: "Diamond structures",
    title: "Diamond Structures",
    category: "research",
    x: 63,
    y: 61,
    w: 15,
    h: 12,
    rotate: 4,
    fit: "contain",
    description:
      "결정 구조를 들여다보는 일은 종종 도시의 지도를 위에서 보는 경험과 닮아 있다. 선과 구멍, 공진과 손실이 서로를 정의하는 이 패턴 속에서 연구는 발견이기보다 지형을 읽는 기술처럼 느껴진다.",
  },
  {
    src: "/collage/fab-fig2.jpg",
    alt: "Fabrication fig2",
    title: "Fabrication Trace",
    category: "research",
    x: 80,
    y: 60,
    w: 12,
    h: 11,
    rotate: -5,
    fit: "contain",
    description:
      "제작 공정은 논문에서 대개 한 장의 figure로 축약되지만, 실제로는 시행착오와 표면의 미세한 타협들로 이루어진 서사다. 나는 이 도식을 볼 때마다 연구의 진짜 미학이 완벽함보다 축적에 있다는 생각을 한다.",
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
            className="absolute block overflow-hidden text-left transition duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/70"
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
            className="absolute inset-0"
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
                className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/85"
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
