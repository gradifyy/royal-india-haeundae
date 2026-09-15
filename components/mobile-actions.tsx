"use client";

import Link from "next/link";
import { CalendarCheck, MapPin, Utensils } from "lucide-react";
import { restaurant } from "@/data/restaurant";
import { useLanguage } from "@/lib/i18n";

export function MobileActions() {
  const { locale } = useLanguage();
  const bookingUrl =
    locale === "ko" ? restaurant.links.catchTableKorean : restaurant.links.catchTable;
  const labels =
    locale === "ko"
      ? { menu: "메뉴", directions: "길찾기", reserve: "예약" }
      : { menu: "Menu", directions: "Directions", reserve: "Reserve" };

  return (
    <nav className="mobile-actions" aria-label={locale === "ko" ? "빠른 메뉴" : "Quick actions"}>
      <Link href="/menu">
        <Utensils aria-hidden="true" />
        <span>{labels.menu}</span>
      </Link>
      <a href={restaurant.links.googleMaps} target="_blank" rel="noreferrer">
        <MapPin aria-hidden="true" />
        <span>{labels.directions}</span>
      </a>
      <a href={bookingUrl} target="_blank" rel="noreferrer" className="primary">
        <CalendarCheck aria-hidden="true" />
        <span>{labels.reserve}</span>
      </a>
    </nav>
  );
}
