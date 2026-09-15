"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { copy, navigation, restaurant } from "@/data/restaurant";
import { useLanguage } from "@/lib/i18n";

export function SiteFooter() {
  const { locale, setLocale, text } = useLanguage();
  const bookingUrl =
    locale === "ko" ? restaurant.links.catchTableKorean : restaurant.links.catchTable;

  return (
    <footer className="site-footer">
      <div className="footer-main page-container">
        <div className="footer-brand">
          <span className="footer-kicker">Haeundae · Busan</span>
          <h2>{restaurant.name}</h2>
          <p>{restaurant.nameKorean}</p>
        </div>
        <div className="footer-column">
          <h3>{locale === "ko" ? "둘러보기" : "Explore"}</h3>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {text(item.label)}
            </Link>
          ))}
        </div>
        <div className="footer-column">
          <h3>{locale === "ko" ? "방문 안내" : "Visit"}</h3>
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
          <a href={restaurant.phoneHref}>{restaurant.phoneDisplay}</a>
          <a href={restaurant.emailHref}>{restaurant.email}</a>
        </div>
        <div className="footer-column footer-actions">
          <h3>{locale === "ko" ? "다음 단계" : "Your next step"}</h3>
          <a href={bookingUrl} target="_blank" rel="noreferrer">
            {text(copy.common.reserveCatchTable)} <ArrowUpRight aria-hidden="true" />
          </a>
          <a href={restaurant.links.googleMaps} target="_blank" rel="noreferrer">
            {text(copy.common.directions)} <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="footer-languages">
            <button type="button" onClick={() => setLocale("en")} aria-pressed={locale === "en"}>
              English
            </button>
            <button type="button" onClick={() => setLocale("ko")} aria-pressed={locale === "ko"}>
              한국어
            </button>
          </div>
        </div>
      </div>
      <div className="footer-base page-container">
        <span>© {new Date().getFullYear()} Royal India Haeundae</span>
        <span>
          {locale === "ko"
            ? "콘셉트 웹사이트 데모 — 로얄인디아 공식 웹사이트가 아닙니다."
            : "Concept website demonstration — not the official Royal India website."}
        </span>
      </div>
    </footer>
  );
}
