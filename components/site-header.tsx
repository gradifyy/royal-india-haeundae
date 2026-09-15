"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { copy, navigation, restaurant } from "@/data/restaurant";
import { useLanguage } from "@/lib/i18n";

function BrandMark() {
  return (
    <span aria-hidden="true" className="brand-mark">
      <span>R</span>
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const { locale, setLocale, text } = useLanguage();
  const bookingUrl =
    locale === "ko" ? restaurant.links.catchTableKorean : restaurant.links.catchTable;

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand-lockup" aria-label="Royal India Haeundae home">
          <BrandMark />
          <span className="brand-words">
            <strong>{restaurant.shortName}</strong>
            <small>Haeundae · 해운대</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label={locale === "ko" ? "주요 메뉴" : "Primary navigation"}>
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined}>
                {text(item.label)}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <div className="language-switch" aria-label={locale === "ko" ? "언어 선택" : "Choose language"}>
            <button
              type="button"
              onClick={() => setLocale("en")}
              aria-pressed={locale === "en"}
              className={locale === "en" ? "is-active" : ""}
            >
              EN
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              onClick={() => setLocale("ko")}
              aria-pressed={locale === "ko"}
              className={locale === "ko" ? "is-active" : ""}
            >
              KR
            </button>
          </div>
          <Button asChild className="reserve-button hidden lg:inline-flex">
            <a href={bookingUrl} target="_blank" rel="noreferrer">
              {text(copy.common.reserve)}
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon-lg"
                className="mobile-menu-trigger lg:hidden"
                aria-label={text(copy.common.open)}
              >
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent className="mobile-sheet w-full border-l-0 sm:max-w-md">
              <SheetHeader className="mobile-sheet-heading">
                <SheetTitle className="sr-only">Royal India Haeundae</SheetTitle>
                <SheetDescription className="sr-only">
                  {locale === "ko" ? "사이트 탐색 메뉴" : "Site navigation menu"}
                </SheetDescription>
                <div className="brand-lockup">
                  <BrandMark />
                  <span className="brand-words">
                    <strong>{restaurant.shortName}</strong>
                    <small>Haeundae · 해운대</small>
                  </span>
                </div>
              </SheetHeader>
              <nav className="mobile-nav" aria-label={locale === "ko" ? "모바일 메뉴" : "Mobile navigation"}>
                {navigation.map((item, index) => (
                  <SheetClose asChild key={item.href}>
                    <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                      <span>0{index + 1}</span>
                      {text(item.label)}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mobile-sheet-footer">
                <div className="language-switch language-switch-dark">
                  <button type="button" onClick={() => setLocale("en")} aria-pressed={locale === "en"}>
                    English
                  </button>
                  <span aria-hidden="true">/</span>
                  <button type="button" onClick={() => setLocale("ko")} aria-pressed={locale === "ko"}>
                    한국어
                  </button>
                </div>
                <Button asChild className="reserve-button h-14 w-full">
                  <a href={bookingUrl} target="_blank" rel="noreferrer">
                    {text(copy.common.reserveCatchTable)}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
