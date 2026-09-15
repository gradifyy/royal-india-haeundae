"use client";

import { ArrowUpRight, CalendarCheck, Check, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { copy, restaurant } from "@/data/restaurant";
import { useLanguage } from "@/lib/i18n";

export default function ReservationsPage() {
  const { locale, text } = useLanguage();
  const bookingUrl =
    locale === "ko" ? restaurant.links.catchTableKorean : restaurant.links.catchTable;

  const steps =
    locale === "ko"
      ? ["캐치테이블에서 날짜와 인원을 선택하세요.", "예약 가능 시간을 확인하고 예약을 완료하세요.", "해운대에서 따뜻하게 맞이하겠습니다."]
      : ["Choose your date and party size on CatchTable.", "Select an available time and complete the booking.", "We’ll be ready to welcome you in Haeundae."];

  return (
    <main id="main-content" className="inner-page reservations-page">
      <section className="reservation-hero">
        <img src="/images/hero-feast.webp" alt="" aria-hidden="true" width="1920" height="1201" />
        <div className="reservation-overlay" aria-hidden="true" />
        <div className="page-container reservation-hero-content">
          <p className="eyebrow eyebrow-light">{locale === "ko" ? "테이블 예약" : "Reservations"}</p>
          <h1>{locale === "ko" ? "해운대에서\n만날 시간을 정해보세요." : "Your table in Haeundae\nis a few taps away."}</h1>
          <p>
            {locale === "ko"
              ? "온라인 예약은 캐치테이블에서 간편하게 진행됩니다. 전화 예약도 가능합니다."
              : "Online bookings are handled securely through CatchTable. You can also call the restaurant directly."
            }
          </p>
          <div className="reservation-hero-actions">
            <Button asChild size="lg" className="hero-primary">
              <a href={bookingUrl} target="_blank" rel="noreferrer">
                <CalendarCheck aria-hidden="true" /> {text(copy.common.reserveCatchTable)} <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="hero-secondary">
              <a href={restaurant.phoneHref}>
                <Phone aria-hidden="true" /> {text(copy.common.callToReserve)}
              </a>
            </Button>
          </div>
        </div>
        <span className="image-caption reservation-caption">{text(copy.common.demoImage)}</span>
      </section>

      <section className="reservation-steps page-container">
        <div className="reservation-steps-heading">
          <p className="eyebrow">{locale === "ko" ? "간편한 온라인 예약" : "Simple online booking"}</p>
          <h2>{locale === "ko" ? "예약은 캐치테이블에서 완료됩니다." : "CatchTable takes care of the booking."}</h2>
          <p>
            {locale === "ko"
              ? "이 웹사이트는 메뉴와 식사 정보를 이해하는 데 도움을 드리고, 실제 예약은 익숙한 예약 서비스로 안전하게 연결합니다."
              : "This site helps you understand the menu and plan your visit, then connects you to the restaurant’s established reservation service."
            }
          </p>
        </div>
        <ol>
          {steps.map((step, index) => (
            <li key={step}>
              <span>0{index + 1}</span>
              <p>{step}</p>
              <Check aria-hidden="true" />
            </li>
          ))}
        </ol>
      </section>

      <section className="reservation-contact">
        <div className="page-container reservation-contact-grid">
          <div>
            <p className="eyebrow eyebrow-light">{locale === "ko" ? "전화 예약" : "Prefer to call?"}</p>
            <h2>{restaurant.phoneDisplay}</h2>
            <p>{locale === "ko" ? "직접 통화해 예약하거나 식단 관련 질문을 문의해 주세요." : "Speak directly with the team to reserve or ask about dietary needs."}</p>
            <Button asChild size="lg" className="hero-primary">
              <a href={restaurant.phoneHref}><Phone aria-hidden="true" /> {text(copy.common.callToReserve)}</a>
            </Button>
          </div>
          <div className="reservation-address">
            <MapPin aria-hidden="true" />
            <div>
              <strong>{restaurant.name}</strong>
              <address>
                {locale === "ko" ? restaurant.address.korean : `${restaurant.address.street}, ${restaurant.address.district}, ${restaurant.address.city}, ${restaurant.address.country}`}
              </address>
              <a href={restaurant.links.googleMaps} target="_blank" rel="noreferrer">
                {text(copy.common.directions)} <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
