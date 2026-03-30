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
  contain?: boolean;
  description: string;
};

const cards: CollageCard[] = [
  {
    src: "/collage/off-the-wall.jpg",
    alt: "Off the Wall",
    title: "Off the Wall",
    category: "music",
    rotate: -3,
    description:
      "이 표지는 조준형의 작업에서 음악이 단순한 배경음이 아니라 감각의 윤곽을 결정하는 전제라는 사실을 가장 선명하게 드러낸다. 밴드 연주를 실제로 수행하는 사람에게 리듬은 장식이 아니라 사고의 속도이며, 그루브는 취향의 문제가 아니라 세계를 통과하는 방식이 된다. 조준형이 음악을 선택하는 방식에는 늘 몸이 먼저 개입해 있고, 그 다음에야 문장과 개념이 뒤따른다. 이 이미지는 바로 그 순서를 증언한다. 생각보다 먼저 도착하는 박자, 해석보다 앞서는 움직임, 그리고 설명되기 전에 이미 신체에 각인된 미감. 그런 점에서 이 앨범은 그의 음악적 취향을 대표한다기보다, 조준형이라는 작업자가 세계를 감지하는 첫 번째 장치를 상징한다.",
  },
  {
    src: "/collage/blonde.jpg",
    alt: "Blonde",
    title: "Blonde",
    category: "music",
    rotate: 2,
    description:
      "조준형의 음악 취향에는 언제나 사적인 잔광이 남아 있다. 그것은 장르에 대한 충성이라기보다, 소리의 표면에 남겨진 감정의 잔류물을 집요하게 추적하는 감각에 가깝다. 이 앨범이 그의 아카이브 안에서 중요한 이유는 아름답기 때문이 아니라, 감정이 직접 진술되지 않은 상태로 오래 유예되는 방식을 가장 정교하게 보여주기 때문이다. 조준형의 블로그에서 발견되는 문장들 역시 종종 명확한 판단보다 지연된 정서를 더 오래 붙들고 있는데, 바로 그 점에서 이 이미지는 그의 글쓰기와도 깊은 친연성을 가진다. 사운드는 여기서 기억을 재생하지 않는다. 오히려 기억을 다시 편집한다. 그리고 조준형의 미감은 늘 그 편집의 순간에 민감하게 반응한다.",
  },
  {
    src: "/collage/loveless.jpg",
    alt: "Loveless",
    title: "Loveless",
    category: "music",
    rotate: -2,
    description:
      "조준형의 취향이 선명한 멜로디와 명백한 중심만을 향하는 것은 아니다. 오히려 이 이미지가 보여주는 것은 소음이 벽이 아니라 안개가 되는 순간, 감정이 직접 발화되지 못한 채 층위 속에 오래 눌려 남는 형식이다. 그의 작업 전반에는 늘 우회적인 정서의 전달 방식이 놓여 있다. 글에서는 비유와 곁길을 통해, 음악에서는 질감과 잔향을 통해, 연구에서는 표면 아래의 구조를 통해 의미가 늦게 도착한다. 이 커버는 그런 지연의 미학을 가장 압축적으로 보여준다. 조준형이 어떤 사물을 곧바로 결론으로 밀어붙이기보다, 그것이 만들어내는 분위기와 밀도를 먼저 읽는 사람이라는 사실도 여기서 함께 드러난다.",
  },
  {
    src: "/collage/kind-of-blue.jpg",
    alt: "Kind of Blue",
    title: "Kind of Blue",
    category: "music",
    rotate: 2,
    description:
      "재즈는 조준형의 취향에서 하나의 장르라기보다 태도에 가깝다. 그것은 과잉보다 간격, 과시보다 호흡, 완결보다 유예를 더 신뢰하는 태도이다. 이런 감각은 그의 음악적 선택에만 머무르지 않고 글쓰기의 문장 배치, 연구에서의 구조 인식, 심지어 자신을 드러내는 방식에도 반복된다. 그는 무엇이 중심인지 즉시 선언하기보다 주변의 긴장을 통해 중심을 느끼게 만드는 편에 가깝다. 이 앨범이 그의 세계에서 중요한 이유도 바로 그 때문이다. 최소한의 음으로 최대한의 공간을 만드는 법, 침묵조차 하나의 악구로 작동하게 하는 법, 그리고 질서를 강요하지 않고도 질서를 성립시키는 법. 그것은 조준형의 작업 전반을 설명하는 하나의 비유이기도 하다.",
  },
  {
    src: "/collage/borges-ficciones.jpg",
    alt: "Ficciones",
    title: "Ficciones",
    category: "writing",
    rotate: -2,
    description:
      "보르헤스는 조준형의 독서가 단순한 취향 수집이 아니라 사유의 구조를 조직하는 일이라는 사실을 가장 선명하게 설명하는 이름이다. 그의 블로그 텍스트들이 감상문을 넘어 미로의 형식을 띠는 이유, 하나의 문장이 종종 또 다른 문장의 그림자를 불러내는 이유, 읽는 행위 그 자체가 내용만큼 중요한 사건으로 남는 이유는 모두 이 계보 안에서 더 잘 읽힌다. 조준형에게 문학은 이야기의 저장소가 아니다. 오히려 문학은 세계를 인식하는 구조를 시험하는 실험실에 가깝다. 그가 보르헤스를 통해 획득한 것은 특정한 문체라기보다 사고의 배치 방식일 것이다. 그러므로 이 표지는 단순한 책 표지가 아니라, 조준형이라는 글쓰는 존재의 내면에 설치된 서가의 입구처럼 보인다.",
  },
  {
    src: "/collage/calvino-winter.jpg",
    alt: "If on a winter's night a traveler",
    title: "If on a winter's night a traveler",
    category: "writing",
    rotate: 2,
    description:
      "칼비노는 읽는 행위 자체를 이야기의 내부로 끌어들이는 작가다. 조준형의 글쓰기 역시 결과로서의 독후감보다, 읽는 동안 발생하는 미세한 구조적 전이를 더 오래 바라본다. 그가 문장을 쓰는 방식에는 언제나 독자와 텍스트 사이의 거리를 다시 조정하려는 충동이 있으며, 칼비노는 그 충동을 가장 정확하게 선행하는 이름처럼 보인다. 여기서 중요한 것은 줄거리가 아니라 장치다. 이야기를 읽는 사람은 더 이상 바깥의 해설자가 아니라, 서사의 내부에서 그 구조를 흔드는 존재가 된다. 조준형의 에세이적 문장도 바로 그런 식으로 움직인다. 그는 내용을 설명하기보다 읽기의 형식을 다시 노출시키고, 그 노출을 통해 사유의 새로운 동선을 만든다. 이 이미지는 바로 그 작동 방식을 비평적으로 요약한다.",
  },
  {
    src: "/collage/bolano-detectives.jpg",
    alt: "The Savage Detectives",
    title: "The Savage Detectives",
    category: "writing",
    rotate: -2,
    description:
      "볼라뇨의 소설에는 완성보다 도주, 정리보다 잔향, 정전보다 누락이 남아 있다. 조준형이 이러한 텍스트를 자신의 아카이브 안에 두고 있다는 사실은 그가 안정된 의미보다 아직 정리되지 않은 열기와 흔적에 더 끌린다는 방증으로 읽힌다. 그의 블로그에 남겨진 문장들 역시 완결된 결론보다는 흔들리는 감정의 주변부를 오래 머문다. 바로 그런 점에서 볼라뇨는 조준형의 문학적 취향을 설명하는 데 매우 적합한 이름이다. 청춘은 여기서 하나의 회상이 아니라 분산된 증언들의 총합이 되고, 문학은 질서 잡힌 역사라기보다 사라진 이름들의 파편적 지도처럼 남는다. 조준형이 매혹되는 것은 아마도 바로 그 불완전한 지형, 완성될 수 없기 때문에 더 집요하게 읽히는 세계의 형태일 것이다.",
  },
  {
    src: "/collage/fight-club.jpg",
    alt: "Fight Club",
    title: "Fight Club",
    category: "writing",
    rotate: 2,
    description:
      "이 이미지는 폭력의 표면보다 분열된 자아의 미학을 먼저 호출한다. 조준형의 감수성이 이런 작품과 연결된다면, 그것은 충격의 스펙터클 때문이 아니라 하나의 자아가 결코 단일한 중심으로 고정되지 못하는 상태에 대한 감각 때문일 것이다. 그의 글에도 때때로 그러한 긴장이 있다. 세련된 표면 아래에서 욕망과 회의, 냉소와 낭만이 동시에 서로를 밀어내는 방식 말이다. 파이트 클럽이 흥미로운 것은 파괴를 보여주기 때문이 아니라, 자기 동일성의 붕괴가 어떻게 하나의 미학적 표면으로 소비되는지를 드러내기 때문이다. 조준형이 이런 작품을 참조점으로 삼는다는 사실은 그가 세계를 안정된 개념의 집합으로 보기보다, 균열과 이중성 속에서 더 날카로운 진실을 포착하려는 사람이라는 점을 시사한다.",
  },
  {
    src: "/collage/pulp-fiction.jpg",
    alt: "Pulp Fiction",
    title: "Pulp Fiction",
    category: "writing",
    rotate: -2,
    description:
      "펄프 픽션의 진짜 힘은 내용이 아니라 배열에 있다. 이 영화는 시간을 뒤틀어 사건을 다시 배치함으로써 장면 그 자체를 더 강하게 기억하게 만들고, 그 편집의 리듬은 하나의 서사적 문체처럼 작동한다. 조준형이 음악과 글을 한 화면에 병치하고 싶어 하는 태도 역시 결국 이런 구조 감각과 통한다. 그는 내용을 단순히 전달하기보다, 어떻게 놓을 것인가를 먼저 묻는 사람에 가깝다. 따라서 이 이미지는 취향의 목록이 아니라 조준형의 편집 감각을 드러내는 하나의 증거로 읽힌다. 서로 무관해 보이는 것들을 인접시켰을 때 발생하는 전류, 서사의 직선 대신 충돌과 회귀로 이루어진 동선, 그리고 그 틈에서 발생하는 기묘한 리듬. 바로 그런 감각이 그의 작업의 여러 층위에 스며 있다.",
  },
  {
    src: "/portraits/portrait-night.jpg",
    alt: "Jo Junhyung portrait",
    title: "Portrait at Night",
    category: "writing",
    rotate: 1,
    description:
      "이 초상은 단순한 인물 사진이라기보다 복수의 자아가 한 표면 위에 접혀 있는 장면에 가깝다. 음악을 수행하는 조준형, 문장을 축적하는 조준형, 실험실에서 구조를 읽는 조준형은 서로 분리된 역할이 아니라 한 인물 안에서 서로를 비추는 상으로 존재한다. 사진은 종종 인물을 고정하지만, 이 이미지는 오히려 조준형이라는 이름의 내부에 얼마나 많은 시간대와 태도가 동시에 공존하는지를 드러낸다. 표정은 정지해 있으나 정체성은 정지해 있지 않다. 바로 그 점에서 이 이미지는 자전적이면서도 동시에 비평적이다. 그것은 한 사람을 보여주는 대신, 한 작업자가 스스로를 여러 층의 표면으로 편집해온 과정을 암시하는 인물도상으로 기능한다.",
  },
  {
    src: "/collage/kaist-ee-logo.png",
    alt: "KAIST EE Logo",
    title: "KAIST",
    category: "research",
    rotate: 1,
    contain: true,
    description:
      "KAIST는 조준형에게 단순한 소속기관의 로고가 아니라 질문의 문법을 재구성하는 장소의 표식이다. 음악과 글이 감정의 밀도와 문장의 리듬을 다루는 동안, 이 장소에서 그의 관심은 빛과 물질, 구조와 측정의 관계 속으로 번역된다. 그러나 중요한 것은 이행이지 단절이 아니다. 조준형의 연구는 앞선 감각적 세계를 폐기하기보다 다른 언어로 다시 쓰는 행위에 가깝다. 이 로고가 그의 아카이브 안에서 의미를 갖는 이유도 바로 거기에 있다. 제도는 여기서 외부의 배경이 아니라, 하나의 작업자가 자신을 다른 엄격함 안으로 밀어 넣으면서도 여전히 미감을 잃지 않으려는 장면의 압축된 기호로 기능한다.",
  },
  {
    src: "/collage/loncar-diamond-circuit.jpg",
    alt: "Loncar circuit",
    title: "Diamond Circuit",
    category: "research",
    rotate: -2,
    contain: true,
    description:
      "다이아몬드는 조준형의 연구에서 더 이상 장식의 물질이 아니다. 그것은 결함을 품은 채 광자와 스핀을 매개하는 플랫폼이며, 바로 그 점에서 완전한 표면보다 제어 가능한 불완전성의 가능성을 더 선명하게 드러낸다. 이 이미지는 재료가 얼마나 역설적인 방식으로 기능할 수 있는지를 보여준다. 가장 단단한 것처럼 보이는 물질이 오히려 가장 미세한 상호작용의 장이 되고, 보석의 상징은 여기서 실험의 구조로 전환된다. 조준형의 연구가 흥미로운 이유는 바로 이러한 전환을 아름다움의 차원에서도 읽기 때문이다. 그는 단지 장치를 설계하는 것이 아니라, 물질이 어떤 종류의 관계를 허용하는지에 대한 미세한 미학을 동시에 더듬고 있다.",
  },
  {
    src: "/collage/bto-phase.jpg",
    alt: "BTO phase",
    title: "BTO Modulation",
    category: "research",
    rotate: 2,
    contain: true,
    description:
      "BTO를 바라보는 조준형의 시선에는 재료에 대한 호기심과 회로에 대한 감각이 동시에 놓여 있다. 변조는 여기서 단순한 기능이 아니다. 그것은 물질이 빛의 문장을 얼마나 섬세하게 고쳐 쓸 수 있는지를 시험하는 장면이며, 신호 전달의 문제를 형식의 문제로 바꾸는 과정이다. 조준형의 연구가 흥미로운 이유는 바로 이 지점에서 드러난다. 그는 물질을 수동적인 기반으로 보지 않고, 적극적으로 광학적 의미를 재배열하는 번역 장치로 읽는다. 따라서 이 이미지는 실험 결과의 기록이라기보다, 조준형이 연구를 통해 도달하고자 하는 언어의 모델처럼 보인다. 빛은 여기서 통과하는 것이 아니라 조율되고, 구조는 지지대가 아니라 문체가 된다.",
  },
  {
    src: "/collage/loncar-fig1.jpg",
    alt: "Loncar fig1",
    title: "Inverse Design",
    category: "research",
    rotate: -2,
    contain: true,
    description:
      "역설계는 조준형의 연구가 손의 직관만으로 그려지는 것이 아니라는 사실을 드러낸다. 그러나 여기서 직관은 계산에 의해 폐기되는 것이 아니라, 계산을 통과하며 다른 형식으로 귀환한다. 이 이미지가 중요한 것은 공학적 효율의 표상이기 때문이 아니라, 설계라는 행위가 인간의 감각과 알고리즘의 연산 사이에서 어떻게 새롭게 재정의되는지를 보여주기 때문이다. 조준형의 작업은 바로 그 접점에 서 있다. 미리 알고 있던 형태를 구현하는 대신, 계산이 제안한 구조를 다시 읽고 해석하며 새로운 직관을 획득하는 일. 따라서 이 figure는 결과의 도식이라기보다, 공학과 미학이 서로의 언어를 잠시 빌려 쓰는 과정을 압축한 시각적 문장에 가깝다.",
  },
  {
    src: "/collage/diamond-structures.jpg",
    alt: "Diamond structures",
    title: "Diamond Structures",
    category: "research",
    rotate: 2,
    contain: true,
    description:
      "이 구조들은 조준형에게 단순한 figure가 아니라 가능성의 지형도에 가깝다. 구멍과 선, 공진과 손실, 반복과 변형의 관계는 여기서 단순한 파라미터가 아니라 읽혀야 할 문장처럼 배치된다. 그의 연구가 지닌 미학적 힘은 바로 이 독해의 태도에서 비롯된다. 결과를 확인하는 데 그치지 않고, 구조가 스스로 암시하는 다른 경로와 관계를 끝까지 읽어내려는 태도 말이다. 따라서 이 이미지는 기술적 정밀함의 증거이면서 동시에 조준형의 지적 습관을 보여주는 장면이기도 하다. 그는 구조를 본다기보다, 구조가 허용하는 미래의 문법을 읽는다. 그리고 그 독해는 과학적이면서도 놀랍도록 비평적이다.",
  },
];

const categoryMeta: Record<Category, { href: string; label: string }> = {
  music: { href: "/music", label: "Read further: Music" },
  writing: { href: "/writing", label: "Read further: Writing" },
  research: { href: "/research", label: "Read further: Research" },
};

export function FloatingCollage() {
  const [activeCard, setActiveCard] = useState<CollageCard | null>(null);

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,#ff4f5e_0%,#ff9a1f_16%,#ffe74c_30%,#61ffca_45%,#3db7ff_58%,#7856ff_73%,#ff42c4_87%,#ff4f5e_100%)] opacity-95" />
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.18)_0,rgba(255,255,255,0.18)_2px,transparent_2px,transparent_96px)] opacity-25 mix-blend-soft-light" />
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_2px,transparent_2px,transparent_120px)] opacity-20 mix-blend-soft-light" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.4),transparent_18%),radial-gradient(circle_at_85%_24%,rgba(255,255,255,0.22),transparent_16%),radial-gradient(circle_at_45%_68%,rgba(255,255,255,0.22),transparent_18%),radial-gradient(circle_at_72%_74%,rgba(255,255,255,0.24),transparent_14%)] mix-blend-screen" />
        <div className="pointer-events-none absolute inset-x-0 top-[4%] flex justify-center text-[18vw] font-black uppercase tracking-[-0.08em] text-white/14 blur-[2px] md:text-[10vw]">
          777
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-[40%] flex justify-center text-[15vw] font-black uppercase tracking-[-0.08em] text-white/10 blur-[2px] md:text-[9vw]">
          ARCHIVE
        </div>

        <div className="relative z-10 mx-auto max-w-[1540px] px-4 py-24 md:px-8 md:py-20">
          <div className="columns-2 gap-4 md:columns-4 md:gap-6">
            {cards.map((card) => (
              <button
                key={card.src}
                type="button"
                onClick={() => setActiveCard(card)}
                className="mb-4 block w-full break-inside-avoid appearance-none overflow-hidden border-0 bg-transparent p-0 text-left transition duration-200 hover:-translate-y-1 hover:scale-[1.01] focus:outline-none md:mb-6"
                style={{
                  transform: `rotate(${card.rotate}deg)`,
                  boxShadow: "0 18px 40px rgba(0,0,0,0.28)",
                }}
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className={`h-auto w-full bg-transparent ${card.contain ? "object-contain" : "object-cover"}`}
                  draggable={false}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeCard ? (
        <div className="fixed inset-0 z-50 flex items-end bg-black/65 backdrop-blur-sm md:items-center md:justify-center">
          <button
            type="button"
            aria-label="Close"
            className="absolute inset-0 appearance-none border-0 bg-transparent p-0"
            onClick={() => setActiveCard(null)}
          />
          <div className="relative z-10 w-full border-t border-white/20 bg-black/88 p-5 text-white md:max-w-3xl md:rounded-[30px] md:border md:p-8">
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

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/80 md:text-[1.02rem] md:leading-8">
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
