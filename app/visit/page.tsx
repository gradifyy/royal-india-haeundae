"use client";

import { ArrowUpRight, CalendarCheck, Car, Clock3, CreditCard, Mail, MapPin, Phone, ShoppingBag } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { copy, restaurant } from "@/data/restaurant";
import { useLanguage } from "@/lib/i18n";

const serviceItems = [
  { icon: ShoppingBag, en: "Takeaway & delivery", ko: "포장 & 배달" },
  { icon: Car, en: "Parking available", ko: "주차 가능" },
  { icon: CreditCard, en: "Card & digital payments", ko: "카드 & 디지털 결제" },
  { icon: CalendarCheck, en: "Reservations available", ko: "예약 가능" },
];

export default function VisitPage() {
  const { locale, text } = useLanguage();
  const bookingUrl =
    locale === "ko" ? restaurant.links.catchTableKorean : restaurant.links.catchTable;

  return (
    <main id="main-content" className="inner-page visit-page">
      <PageIntro
        eyebrow={locale === "ko" ? "해운대에서 만나요" : "Find us in Haeundae"}
        title={locale === "ko" ? "바다 가까이,\n따뜻한 식탁." : "Close to the coast.\nReady to welcome you."}
        body={
          locale === "ko"
            ? "해운대 해변과 부산의 대표적인 관광 지역을 둘러보는 여정에 인도와 네팔의 풍미를 더해보세요."
            : "Add the warmth of Indian and Nepali dining to a day exploring Haeundae Beach and Busan’s best-known coastal district."
        }
      />

      <section className="visit-detail page-container">
        <div className="visit-map-wrap">
          <iframe
            title={locale === "ko" ? "로얄인디아 해운대점 지도" : "Map of Royal India Haeundae"}
            src={restaurant.links.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <span>{locale === "ko" ? "해운대 해변 인근" : "Near Haeundae Beach"}</span>
        </div>

        <div className="visit-info">
          <p className="eyebrow">{locale === "ko" ? "주소 & 연락처" : "Address & contact"}</p>
          <h2>{restaurant.name}</h2>
          <p className="visit-info-korean">{restaurant.nameKorean}</p>

          <div className="contact-list">
            <div>
              <MapPin aria-hidden="true" />
              <address>
                {locale === "ko" ? (
                  restaurant.address.korean
                ) : (
                  <>
                    {restaurant.address.street}<br />
                    {restaurant.address.district}, {restaurant.address.city}<br />
                    {restaurant.address.country}
                  </>
                )}
              </address>
            </div>
            <a href={restaurant.phoneHref}>
              <Phone aria-hidden="true" />
              <span>{restaurant.phoneDisplay}</span>
            </a>
            <a href={restaurant.emailHref}>
              <Mail aria-hidden="true" />
              <span>{restaurant.email}</span>
            </a>
          </div>

          <div className="visit-button-grid">
            <Button asChild size="lg" className="reserve-button">
              <a href={restaurant.links.googleMaps} target="_blank" rel="noreferrer">
                {text(copy.common.directions)} <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={restaurant.links.naverMaps} target="_blank" rel="noreferrer">
                {locale === "ko" ? "네이버 지도" : "Open Naver Map"} <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={restaurant.phoneHref}>{text(copy.common.call)}</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={bookingUrl} target="_blank" rel="noreferrer">
                {text(copy.common.reserve)}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="visit-lower page-container">
        <article className="hours-card">
          <div className="hours-heading">
            <Clock3 aria-hidden="true" />
            <div>
              <p className="eyebrow">{locale === "ko" ? "영업시간" : "Opening hours"}</p>
              <h2>{locale === "ko" ? "방문 전 확인해 주세요" : "Please confirm before visiting"}</h2>
            </div>
          </div>
          <p>{text(restaurant.hours.note)}</p>
          <a href={restaurant.phoneHref}>
            {locale === "ko" ? "영업시간 전화 문의" : "Call to confirm today’s hours"} <ArrowUpRight aria-hidden="true" />
          </a>
        </article>

        <article className="services-card">
          <p className="eyebrow eyebrow-light">{locale === "ko" ? "편의 정보" : "Good to know"}</p>
          <div className="services-grid">
            {serviceItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.en}>
                  <Icon aria-hidden="true" />
                  <span>{locale === "ko" ? item.ko : item.en}</span>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </main>
  );
}
