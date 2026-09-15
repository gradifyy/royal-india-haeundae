"use client";

import { PageIntro } from "@/components/page-intro";
import { useLanguage } from "@/lib/i18n";

const gallery = [
  { src: "/images/hero-feast.webp", className: "gallery-wide", en: "Curry, tandoori chicken, naan and rice set for dinner", ko: "커리와 탄두리 치킨, 난, 라이스로 차린 식탁", category: { en: "The table", ko: "다이닝" } },
  { src: "/images/tandoori.webp", className: "gallery-tall", en: "Close view of tandoori chicken with naan", ko: "난과 함께 놓인 탄두리 치킨", category: { en: "Tandoor", ko: "탄두르" } },
  { src: "/images/hero-feast.webp", className: "gallery-square gallery-curry", en: "Rich butter chicken in a dark ceramic bowl", ko: "짙은 도자기 그릇에 담긴 버터 치킨", category: { en: "Curry", ko: "커리" } },
  { src: "/images/haeundae-dining.webp", className: "gallery-landscape", en: "Concept dinner overlooking Haeundae Beach at dusk", ko: "해운대 저녁 바다를 바라보는 다이닝 콘셉트", category: { en: "Haeundae", ko: "해운대" } },
  { src: "/images/tandoori.webp", className: "gallery-square gallery-naan", en: "Fresh naan beside a tandoori plate", ko: "탄두리 요리 옆에 놓인 갓 구운 난", category: { en: "Fresh naan", ko: "갓 구운 난" } },
  { src: "/images/haeundae-dining.webp", className: "gallery-tall gallery-coast", en: "Warm dining table against the blue-hour coast", ko: "푸른 저녁 바다와 따뜻한 다이닝 테이블", category: { en: "By the coast", ko: "바다 곁에서" } },
];

export default function GalleryPage() {
  const { locale } = useLanguage();

  return (
    <main id="main-content" className="inner-page gallery-page">
      <PageIntro
        eyebrow={locale === "ko" ? "분위기 미리보기" : "A glimpse of the experience"}
        title={locale === "ko" ? "색, 불, 향신료,\n그리고 해운대." : "Colour, fire, spice\nand Haeundae."}
        body={
          locale === "ko"
            ? "실제 매장 촬영 전, 로얄인디아가 지향하는 따뜻하고 현대적인 다이닝 무드를 담은 콘셉트 갤러리입니다."
            : "A concept gallery expressing the warm, contemporary dining mood envisioned for Royal India, pending an authorised restaurant photoshoot."
        }
      />
      <section className="gallery-section page-container" aria-label={locale === "ko" ? "콘셉트 갤러리" : "Concept gallery"}>
        <div className="gallery-note">
          <span>{locale === "ko" ? "데모 이미지" : "Demo imagery"}</span>
          <p>
            {locale === "ko"
              ? "현재 이미지는 생성된 콘셉트 사진이며 실제 매장 내부를 나타내지 않습니다. 사용 허가를 받은 실제 사진으로 쉽게 교체할 수 있습니다."
              : "These generated concept photographs do not depict the actual restaurant interior. They are structured for easy replacement with approved restaurant photography."
            }
          </p>
        </div>
        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <figure key={`${image.src}-${index}`} className={image.className}>
              <img src={image.src} alt={locale === "ko" ? image.ko : image.en} loading={index > 1 ? "lazy" : "eager"} />
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{locale === "ko" ? image.category.ko : image.category.en}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
