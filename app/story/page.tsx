"use client";

import Link from "next/link";
import { ArrowRight, Flame, HandHeart, Layers3, Wheat } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { restaurant } from "@/data/restaurant";
import { useLanguage } from "@/lib/i18n";

const pillars = [
  {
    icon: Layers3,
    title: { en: "Layered flavour", ko: "겹겹이 쌓인 풍미" },
    body: {
      en: "Warm spices come together with balance, depth and comfort.",
      ko: "따뜻한 향신료가 균형과 깊이, 편안함으로 어우러집니다.",
    },
  },
  {
    icon: Flame,
    title: { en: "Tandoor warmth", ko: "탄두르의 온기" },
    body: {
      en: "High heat brings smoky edges and tender centres to the table.",
      ko: "높은 열로 겉에는 불향을, 속에는 부드러움을 살립니다.",
    },
  },
  {
    icon: Wheat,
    title: { en: "Naan made fresh", ko: "갓 구운 난" },
    body: {
      en: "Warm flatbread turns a collection of dishes into a shared meal.",
      ko: "따뜻한 난 한 조각이 여러 요리를 함께 나누는 식사로 이어줍니다.",
    },
  },
  {
    icon: HandHeart,
    title: { en: "Hospitality first", ko: "따뜻한 환대" },
    body: {
      en: "A welcoming table for Haeundae locals and travellers alike.",
      ko: "해운대의 이웃과 여행자 모두에게 열린 편안한 식탁입니다.",
    },
  },
];

export default function StoryPage() {
  const { locale, text } = useLanguage();

  return (
    <main id="main-content" className="inner-page story-page">
      <PageIntro
        eyebrow={locale === "ko" ? "로얄인디아의 다이닝" : "The Royal India table"}
        title={locale === "ko" ? "인도와 네팔의 온기를\n해운대에." : "The warmth of India & Nepal,\nhere in Haeundae."}
        body={
          locale === "ko"
            ? "로얄인디아는 인도와 네팔 음식의 향신료와 조리 방식, 그리고 사람을 맞이하는 따뜻한 마음을 해운대에 전합니다."
            : "Royal India brings the warmth, spices and hospitality of Indian and Nepali dining to one of Busan’s most vibrant coastal neighbourhoods."
        }
      />

      <section className="story-feature page-container">
        <div className="story-feature-image">
          <img src="/images/tandoori.webp" alt={locale === "ko" ? "따뜻한 조명 아래 놓인 탄두리 치킨" : "Tandoori chicken under warm restaurant light"} width="1200" height="1499" />
          <span className="image-caption">{locale === "ko" ? "콘셉트 이미지" : "Concept photography"}</span>
        </div>
        <div className="story-feature-copy">
          <span className="story-number">01</span>
          <p className="eyebrow">{locale === "ko" ? "한 상의 경험" : "One table, many flavours"}</p>
          <h2>{locale === "ko" ? "천천히 만들어지고, 함께 나누는 음식." : "Food made with depth, meant to be shared."}</h2>
          <p>
            {locale === "ko"
              ? "향신료의 깊이를 살린 전통 커리, 탄두르의 높은 열로 구운 요리, 그리고 식탁에서 바로 나누기 좋은 따뜻한 난. 로얄인디아의 경험은 여러 접시가 한자리에 모일 때 완성됩니다."
              : "Traditional curries built in layers, dishes shaped by the high heat of the tandoor, and warm naan made for passing around the table. The Royal India experience comes together through sharing."
            }
          </p>
        </div>
      </section>

      <section className="story-pillars">
        <div className="page-container">
          <div className="story-pillars-heading">
            <p className="eyebrow eyebrow-light">{locale === "ko" ? "우리가 전하는 것" : "What shapes the experience"}</p>
            <h2>{locale === "ko" ? "정직한 맛, 따뜻한 공간" : "Honest flavour, generous welcome"}</h2>
          </div>
          <div className="pillar-grid">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title.en} className="pillar-card">
                  <div>
                    <Icon aria-hidden="true" />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{text(pillar.title)}</h3>
                  <p>{text(pillar.body)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="story-coast page-container">
        <div className="story-coast-copy">
          <p className="eyebrow">{locale === "ko" ? "해운대에서" : "At home in Haeundae"}</p>
          <h2>{locale === "ko" ? "여행 중에도 편안한 한 끼." : "A welcoming meal between city and sea."}</h2>
          <p>
            {locale === "ko"
              ? "바다를 찾은 여행자와 부산의 이웃, 익숙한 맛을 그리워하는 분과 새로운 요리를 만나고 싶은 분 모두를 위한 공간입니다."
              : "For travellers by the beach, Busan locals, diners missing familiar flavours and anyone ready to discover something new."
            }
          </p>
          <Button asChild variant="outline" size="lg">
            <Link href="/visit">
              {locale === "ko" ? "오시는 길" : "Plan your visit"} <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <div className="story-coast-image">
          <img src="/images/haeundae-dining.webp" alt={locale === "ko" ? "해운대 저녁 해변을 바라보는 다이닝 콘셉트" : "Concept dinner overlooking Haeundae Beach at dusk"} loading="lazy" width="1800" height="1200" />
          <span className="image-caption">{locale === "ko" ? "콘셉트 이미지" : "Concept photography"}</span>
        </div>
      </section>

      <section className="story-cta">
        <div className="page-container story-cta-inner">
          <div>
            <span>{restaurant.nameKorean}</span>
            <h2>{locale === "ko" ? "로얄인디아의 맛을 만나보세요." : "Find your place at the table."}</h2>
          </div>
          <Button asChild size="lg" className="hero-primary">
            <Link href="/menu">{locale === "ko" ? "메뉴 보기" : "Explore the menu"}</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
