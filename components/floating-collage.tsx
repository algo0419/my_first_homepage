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
    rotate: -3,
    offsetClass: "md:-mt-4 xl:-mt-8",
    description:
      "이 음반은 조준형의 음악 감각이 단순한 취향의 목록이 아니라 리듬의 윤리로까지 확장된다는 사실을 드러낸다. 그는 사운드를 설명할 때 종종 구조와 밀도, 표면의 광택과 그 밑에서 작동하는 긴장을 함께 본다. 이 레코드의 운동감은 그런 이중 시선을 압축한다. 경쾌함은 여기서 가벼움이 아니라 정교하게 조율된 추진력이며, 조준형의 청취는 바로 그 추진력이 어떻게 몸을 통해 사유로 번역되는지를 추적한다.",
  },
  {
    src: "/collage/blonde.jpg",
    alt: "Frank Ocean - Blonde",
    title: "Blonde",
    category: "music",
    rotate: 2.5,
    offsetClass: "md:-mt-14 xl:-mt-20",
    description:
      "조준형에게 이 표지는 한 시대의 정서를 요약하는 이미지라기보다 감정이 가장 높은 해상도로 보존되는 방식에 가깝다. 목소리는 명확하게 말하는 대신 번지는 쪽을 택하고, 그 번짐은 결핍이 아니라 형식이 된다. 그의 글이 의미를 즉시 폐쇄하지 않고 주변부의 진동을 오래 남겨 두는 것처럼, 이 음반 또한 중심보다 잔향을 통해 자신의 형태를 완성한다.",
  },
  {
    src: "/collage/loveless.jpg",
    alt: "My Bloody Valentine - Loveless",
    title: "Loveless",
    category: "music",
    rotate: -2,
    offsetClass: "md:-mt-8 xl:-mt-14",
    description:
      "이 이미지는 조준형의 청취가 선율의 윤곽만이 아니라 압력과 입자의 질감까지 듣는다는 사실을 말해 준다. 여기서 음악은 곡이 아니라 장으로 존재한다. 각 층위는 서로를 지우지 않은 채 겹쳐지고, 그 결과 청자는 하나의 문장을 이해하는 대신 하나의 기후를 통과하게 된다. 조준형이 만드는 밴드의 시간감각 역시 이런 밀도와 충돌하며 성장해 왔다.",
  },
  {
    src: "/collage/kind-of-blue.jpg",
    alt: "Miles Davis - Kind of Blue",
    title: "Kind of Blue",
    category: "music",
    rotate: 3,
    offsetClass: "md:-mt-20 xl:-mt-28",
    description:
      "조준형의 콜라주 안에서 이 재킷은 고전의 장식물이 아니라 즉흥이 어떻게 절제를 통해 가장 멀리 도달하는지를 보여 주는 표본이다. 그는 과잉을 사랑하지만, 그 과잉은 무질서가 아니라 선택된 긴장이어야 한다는 감각을 가지고 있다. 이 음반의 푸른 간격은 그 감각의 근원을 암시한다. 적게 말하고도 더 넓게 울리는 형식, 바로 그 방식이 이 사이트 전체의 호흡과도 연결된다.",
  },
  {
    src: "/collage/yeezus.jpg",
    alt: "Kanye West - Yeezus",
    title: "Yeezus",
    category: "music",
    rotate: -4,
    offsetClass: "md:-mt-10 xl:-mt-16",
    description:
      "투명한 케이스와 노출된 원판은 조준형이 기술적 표면을 바라보는 방식을 은유한다. 그는 매끈한 완성보다 노출된 구조, 봉합되지 않은 가장자리, 공격적으로 드러난 인터페이스에서 더 강한 미학을 읽는다. 이 음반은 폭력적인 단순화로 스스로를 구성하지만, 그 단순화는 빈곤이 아니라 의도적인 절개다. 조준형의 연구 이미지와 음악 이미지가 한 화면에서 공존할 수 있는 이유도 바로 이런 구조적 노출의 감각 때문이다.",
  },
  {
    src: "/collage/borges-ficciones.jpg",
    alt: "Jorge Luis Borges - Ficciones",
    title: "Ficciones",
    category: "writing",
    rotate: 2,
    offsetClass: "md:-mt-6 xl:-mt-10",
    description:
      "조준형의 글을 따라가다 보면 반복적으로 출현하는 것은 어떤 결론이 아니라 사유가 자기 자신을 비추며 늘어나는 순간들이다. 보르헤스는 이 사이트에서 단지 좋아하는 작가가 아니라, 조준형이 문장과 구조를 다루는 방식의 원형에 가깝다. 미로, 거울, 도서관이라는 오래된 은유들은 여기서 취향의 장식으로 머물지 않는다. 그것들은 그가 읽고 쓰고 배열하는 모든 행위의 배후에서 작동하는 문법이 된다.",
  },
  {
    src: "/collage/calvino-winter.jpg",
    alt: "Italo Calvino - If on a winter's night a traveler",
    title: "If on a winter's night a traveler",
    category: "writing",
    rotate: -2.5,
    offsetClass: "md:-mt-16 xl:-mt-24",
    description:
      "칼비노의 이 표지는 조준형에게 읽기가 곧 분절의 기술이라는 점을 환기한다. 그는 하나의 서사를 끝까지 밀어붙이는 방식보다 단절과 재개, 어긋남과 회귀 속에서 더 많은 긴장을 발견한다. 이 작품은 미완의 조각들이 어떻게 오히려 더 큰 총체를 암시하는지를 보여 주고, 조준형의 블로그에 흩어진 에세이와 단상들 또한 그러한 산재의 미학을 닮아 있다. 그의 문장은 종종 결론보다 다음 입구를 남기는 쪽으로 기운다.",
  },
  {
    src: "/collage/fight-club.jpg",
    alt: "Fight Club poster",
    title: "Fight Club",
    category: "writing",
    rotate: 3.5,
    offsetClass: "md:-mt-8 xl:-mt-12",
    description:
      "이 포스터는 조준형의 세계에서 단순한 컬트 취향의 흔적이 아니다. 오히려 자아가 어떻게 분열을 통해서만 자기 모습을 드러내는지를 시각적으로 봉인한 표식에 가깝다. 그의 글에는 종종 하나의 목소리가 아니라 서로 다른 강도의 목소리들이 공존하고, 그 간극에서 사유의 전압이 발생한다. 이 이미지는 바로 그 전압을 대중문화의 아이콘으로 번역한 경우로 읽힌다.",
  },
  {
    src: "/collage/pulp-fiction.jpg",
    alt: "Pulp Fiction poster",
    title: "Pulp Fiction",
    category: "writing",
    rotate: -3,
    offsetClass: "md:-mt-18 xl:-mt-24",
    description:
      "조준형이 선호하는 텍스트와 이미지의 다수는 고전적 위계 대신 병치의 쾌락 위에 세워져 있다. 이 포스터는 서사의 파편들이 하나의 교양적 중심으로 수렴하지 않아도 얼마나 강한 전체감을 형성할 수 있는지 보여 준다. 서로 다른 장면, 말투, 질감이 병렬될 때 오히려 더 선명한 리듬이 발생한다는 사실. 이 사이트의 홈 화면이 콜라주라는 형식을 고집하는 이유 역시 바로 그 원리를 시각적으로 실험하기 위해서다.",
  },
  {
    src: "/portraits/portrait-night.jpg",
    alt: "Portrait of Junhyung Cho at night",
    title: "Portrait, Night",
    category: "writing",
    rotate: 2.2,
    offsetClass: "md:-mt-10 xl:-mt-14",
    description:
      "작가의 초상은 이 화면에서 중심 인물의 인증 사진이 아니라, 다른 모든 이미지들을 느슨하게 묶는 검은 매듭처럼 기능한다. 조준형의 작업은 늘 외부의 사물들을 수집하지만, 그 수집은 자기를 지우기 위해서가 아니라 더 복잡한 형태로 우회해 드러내기 위한 것이다. 이 초상은 그러한 우회의 징후다. 얼굴은 여기서 완결된 정체성이 아니라 음악, 문학, 연구라는 서로 다른 회로가 한 사람의 시간 안에서 접속되는 인터페이스로 보인다.",
  },
  {
    src: "/portraits/portrait-stage.jpg",
    alt: "Portrait of Junhyung Cho on stage",
    title: "Portrait, Stage",
    category: "music",
    rotate: -2.8,
    offsetClass: "md:-mt-16 xl:-mt-22",
    description:
      "무대 위의 조준형은 듣는 사람과 연주하는 사람 사이의 경계를 지우는 인물로 읽힌다. 그의 청취가 수동적인 감상의 형식을 벗어나 있다는 것은, 결국 음악이 몸을 통과하는 순간을 직접 감당하고자 한다는 뜻이기도 하다. 이 사진은 그 사실을 가장 직접적으로 증언한다. 목록과 별점, 재킷과 트랙을 넘어 실제의 공기와 압력 속으로 이동하는 장면. 그의 음악 페이지는 바로 그 이동의 기록이다.",
  },
  {
    src: "/portraits/portrait-archive-3.jpg",
    alt: "Portrait archive image of Junhyung Cho",
    title: "Archive Fragment",
    category: "writing",
    rotate: 3,
    offsetClass: "md:-mt-6 xl:-mt-10",
    description:
      "아카이브 사진은 늘 부차적인 자료처럼 보이지만, 조준형의 경우에는 오히려 작업의 실질적인 형식을 드러낸다. 그는 완성된 선언보다 축적된 조각들 속에서 자신을 구성한다. 이 이미지가 다른 표지들과 나란히 놓일 때 드러나는 것은 취향의 사적인 기록이 아니라, 자기 서사를 자료화하는 한 방식이다. 그의 웹사이트가 전기적 연대기보다 콜라주에 가까운 이유는 여기에 있다.",
  },
  {
    src: "/collage/kaist-ee-logo.png",
    alt: "KAIST Electrical Engineering logo",
    title: "KAIST EE",
    category: "research",
    rotate: -2,
    contain: true,
    offsetClass: "md:-mt-12 xl:-mt-18",
    description:
      "이 로고는 제도적 소속을 표시하는 배지에 그치지 않는다. 조준형의 연구가 어떤 장소의 공기와 규율 속에서 형성되고 있는지를 가리키는 좌표다. 음악과 글의 이미지 사이에 이 기호가 삽입될 때, 그것은 이질적인 요소처럼 보이면서도 오히려 전체를 안정시키는 축이 된다. 감각의 세계와 계산의 세계가 분리된 영역이 아니라는 사실, 조준형의 작업은 그 명제를 이 기호 하나로 압축해 보인다.",
  },
  {
    src: "/collage/loncar-diamond-circuit.jpg",
    alt: "Diamond photonic circuit figure",
    title: "Diamond Circuit",
    category: "research",
    rotate: 2.8,
    contain: true,
    offsetClass: "md:-mt-20 xl:-mt-28",
    description:
      "다이아몬드 포토닉 회로의 도식은 조준형의 연구가 단순히 소자의 성능을 겨루는 엔지니어링이 아니라 빛의 질서를 설계하는 미학적 행위이기도 하다는 점을 드러낸다. 이 그림에서 선들은 회로이면서 동시에 리듬이며, 결합과 분기는 기능이면서 구성이다. 조준형이 연구 페이지에서 축적하는 이미지들은 결국 보이지 않는 광학적 사건을 시각적 형태로 번역한 기록이며, 그 번역의 긴장 속에서 그의 연구 정체성이 형성된다.",
  },
  {
    src: "/collage/bto-phase.jpg",
    alt: "BTO modulation phase figure",
    title: "BTO Modulation",
    category: "research",
    rotate: -3.5,
    contain: true,
    offsetClass: "md:-mt-8 xl:-mt-12",
    description:
      "BTO 변조 구조는 조준형이 현재 다루는 하이브리드 집적의 핵심 어휘 중 하나를 상징한다. 서로 다른 물질과 공정, 물성과 인터페이스가 하나의 목적을 위해 협상하는 장면이 여기 들어 있다. 그가 기술 이미지에 끌리는 이유는 그것들이 차갑기 때문이 아니라, 오히려 복수의 질서가 한 지점에서 부딪히며 형식을 만들어 내기 때문이다. 이 도표는 그러한 충돌의 가장 정확한 시각화다.",
  },
  {
    src: "/collage/loncar-fig1.jpg",
    alt: "Loncar lab figure",
    title: "Photonic Node",
    category: "research",
    rotate: 2,
    contain: true,
    offsetClass: "md:-mt-14 xl:-mt-20",
    description:
      "이 figure는 연구 이미지가 결코 보조 자료에 머무르지 않는다는 사실을 보여 준다. 조준형의 관심은 데이터 뒤에 있는 구조적 직관, 곧 어떤 네트워크가 가능해지는 방식 자체로 향한다. 노드와 경로, 결합부와 공진기는 이 화면에서 기술적 명칭을 넘어 하나의 조형 언어가 된다. 그래서 그의 연구는 텍스트와 숫자뿐 아니라 도면과 색면을 통해서도 읽혀야 한다.",
  },
  {
    src: "/collage/diamond-structures.jpg",
    alt: "Diamond photonic crystal structures",
    title: "Diamond Structures",
    category: "research",
    rotate: -2.5,
    contain: true,
    offsetClass: "md:-mt-10 xl:-mt-14",
    description:
      "결정 구조의 반복과 공백은 조준형이 오래 붙들고 있는 질문을 시각적으로 응축한다. 빛은 어떤 형태를 만났을 때 비로소 통제 가능한 사건이 되는가. 이 이미지는 그 질문을 가장 차갑고도 가장 아름다운 방식으로 보여 준다. 정밀한 주기성과 미세한 결함이 동시에 작동하는 장면, 바로 그 사이에서 그의 연구는 단순한 기능 개발을 넘어 형태와 물질의 협업을 사유하게 만든다.",
  },
];

export function FloatingCollage() {
  const [activeCard, setActiveCard] = useState<CollageCard | null>(null);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,72,180,0.2),_transparent_28%),radial-gradient(circle_at_20%_80%,_rgba(52,211,153,0.16),_transparent_26%),radial-gradient(circle_at_80%_28%,_rgba(56,189,248,0.18),_transparent_30%),linear-gradient(180deg,_#110417_0%,_#09010e_58%,_#050107_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:32px_32px]" />

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
