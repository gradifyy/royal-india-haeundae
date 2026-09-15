"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Info, Search, SlidersHorizontal } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import {
  categoryLabels,
  dietaryLabels,
  menuCategories,
  menuItems,
  type DietaryTag,
  type MenuCategory,
} from "@/data/menu";
import { restaurant } from "@/data/restaurant";
import { useLanguage } from "@/lib/i18n";

const dietaryFilters: DietaryTag[] = ["vegetarian", "vegan", "halal", "spicy"];

export default function MenuPage() {
  const { locale, text } = useLanguage();
  const [category, setCategory] = useState<MenuCategory>("all");
  const [search, setSearch] = useState("");
  const [guide, setGuide] = useState<string | null>(null);

  useEffect(() => {
    const profile = new URLSearchParams(window.location.search).get("guide");
    if (profile) setGuide(profile);
  }, []);

  useEffect(() => {
    const context = document.modelContext;
    if (!context?.registerTool) return;

    const lifecycle = new AbortController();
    try {
      void Promise.resolve(
        context.registerTool(
          {
            name: "filter_restaurant_menu",
            title: "Filter restaurant menu",
            description:
              "Apply the same category, search and flavour-guide filters available in the visible Royal India menu.",
            inputSchema: {
              type: "object",
              properties: {
                category: { type: "string", enum: menuCategories },
                query: { type: "string", maxLength: 80 },
                flavourGuide: {
                  type: ["string", "null"],
                  enum: ["creamy", "savoury", "smoky", "vegetarian", "spicy", "sharing", null],
                },
              },
              additionalProperties: false,
            },
            annotations: { readOnlyHint: false, untrustedContentHint: false },
            execute(input) {
              if (!input || typeof input !== "object" || Array.isArray(input)) {
                throw new Error("Expected a filter object");
              }
              const values = input as {
                category?: unknown;
                query?: unknown;
                flavourGuide?: unknown;
              };
              if (
                values.category !== undefined &&
                !menuCategories.includes(values.category as MenuCategory)
              ) {
                throw new Error("Unknown menu category");
              }
              if (values.query !== undefined && typeof values.query !== "string") {
                throw new Error("query must be a string");
              }
              const guides = ["creamy", "savoury", "smoky", "vegetarian", "spicy", "sharing"];
              if (
                values.flavourGuide !== undefined &&
                values.flavourGuide !== null &&
                (typeof values.flavourGuide !== "string" || !guides.includes(values.flavourGuide))
              ) {
                throw new Error("Unknown flavour guide");
              }

              const nextCategory = (values.category as MenuCategory | undefined) ?? "all";
              const nextQuery = (values.query as string | undefined) ?? "";
              const nextGuide = (values.flavourGuide as string | null | undefined) ?? null;
              setCategory(nextCategory);
              setSearch(nextQuery);
              setGuide(nextGuide);
              document.getElementById("menu-list")?.scrollIntoView({ behavior: "smooth" });
              return {
                category: nextCategory,
                query: nextQuery,
                flavourGuide: nextGuide,
              };
            },
          },
          { signal: lifecycle.signal },
        ),
      ).catch(() => undefined);
    } catch {
      // WebMCP is optional and feature-detected.
    }

    return () => lifecycle.abort();
  }, []);

  const visibleItems = useMemo(() => {
    const term = search.trim().toLowerCase();
    return menuItems.filter((item) => {
      const categoryMatch = category === "all" || item.category === category;
      const guideMatch = !guide || item.flavourProfiles.includes(guide);
      const searchMatch =
        !term ||
        item.name.en.toLowerCase().includes(term) ||
        item.name.ko.toLowerCase().includes(term) ||
        item.description.en.toLowerCase().includes(term) ||
        item.description.ko.toLowerCase().includes(term);
      return item.available && categoryMatch && guideMatch && searchMatch;
    });
  }, [category, guide, search]);

  const bookingUrl =
    locale === "ko" ? restaurant.links.catchTableKorean : restaurant.links.catchTable;

  return (
    <main id="main-content" className="inner-page menu-page">
      <PageIntro
        eyebrow={locale === "ko" ? "메뉴 둘러보기" : "Explore the menu"}
        title={locale === "ko" ? "익숙한 맛부터\n새로운 풍미까지." : "From familiar comfort\nto something new."}
        body={
          locale === "ko"
            ? "크리미한 커리, 불향 가득한 탄두리, 향긋한 비리야니와 갓 구운 난을 취향에 맞게 찾아보세요."
            : "Browse creamy curries, smoky tandoori, aromatic biryani and oven-fresh naan by the flavour you’re craving."
        }
        aside={
          <p className="demo-notice">
            <Info aria-hidden="true" />
            {locale === "ko"
              ? "데모용 샘플 메뉴입니다. 실제 메뉴, 가격과 판매 여부는 매장 확인 후 업데이트됩니다."
              : "Sample menu for this concept. Dishes, prices and availability require restaurant confirmation."
            }
          </p>
        }
      />

      <section className="menu-workspace" id="menu-list">
        <div className="page-container">
          {guide && (
            <div className="active-guide">
              <span>
                {locale === "ko" ? "맛 가이드 적용 중" : "Flavour guide applied"}: {guide}
              </span>
              <button type="button" onClick={() => setGuide(null)}>
                {locale === "ko" ? "모든 메뉴 보기" : "Show all dishes"}
              </button>
            </div>
          )}

          <div className="menu-toolbar">
            <label className="menu-search">
              <Search aria-hidden="true" />
              <span className="sr-only">{locale === "ko" ? "메뉴 검색" : "Search the menu"}</span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={locale === "ko" ? "메뉴 이름 또는 맛 검색" : "Search dishes or flavours"}
              />
            </label>
            <div className="filter-label">
              <SlidersHorizontal aria-hidden="true" />
              <span>{locale === "ko" ? "카테고리" : "Categories"}</span>
            </div>
          </div>

          <div className="category-filters" role="group" aria-label={locale === "ko" ? "메뉴 카테고리" : "Menu categories"}>
            {menuCategories.map((item) => (
              <button
                key={item}
                type="button"
                className={category === item ? "is-active" : ""}
                onClick={() => {
                  setCategory(item);
                  setGuide(null);
                }}
                aria-pressed={category === item}
              >
                {text(categoryLabels[item])}
              </button>
            ))}
          </div>

          <div className="dietary-filter-row">
            <span>{locale === "ko" ? "식단 필터" : "Dietary filters"}</span>
            {dietaryFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                disabled
                title={
                  locale === "ko"
                    ? "메뉴별 조리 정보 확인 후 활성화됩니다"
                    : "Available after dish-level preparation is confirmed"
                }
              >
                {text(dietaryLabels[filter])}
              </button>
            ))}
            <small>
              {locale === "ko"
                ? "식재료와 조리 방식 확인 후 메뉴별 태그가 적용됩니다."
                : "Dish-level tags will be enabled after ingredients and preparation are confirmed."
              }
            </small>
          </div>

          <div className="menu-result-bar" aria-live="polite">
            <p>
              <strong>{visibleItems.length}</strong>{" "}
              {locale === "ko" ? "개의 메뉴" : visibleItems.length === 1 ? "dish" : "dishes"}
            </p>
            <span>{locale === "ko" ? "가격은 매장 확인 후 추가됩니다" : "Prices to be added after owner review"}</span>
          </div>

          {visibleItems.length ? (
            <div className="menu-grid">
              {visibleItems.map((item, index) => (
                <article className={`menu-item ${item.image ? "menu-item-featured" : ""}`} key={item.id}>
                  {item.image ? (
                    <div className="menu-item-image">
                      <img
                        src={item.image}
                        alt={
                          item.id === "butter-chicken"
                            ? locale === "ko"
                              ? "버터 치킨과 인도 요리 식탁"
                              : "Butter chicken and an Indian dinner table"
                            : locale === "ko"
                              ? "탄두리 치킨 티카"
                              : "Tandoori chicken tikka"
                        }
                        loading="lazy"
                        width="900"
                        height="1100"
                      />
                      <span>{locale === "ko" ? "콘셉트 이미지" : "Concept photography"}</span>
                    </div>
                  ) : (
                    <div className="menu-item-number" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  )}
                  <div className="menu-item-copy">
                    <p>{text(categoryLabels[item.category])}</p>
                    <h2>{text(item.name)}</h2>
                    {item.alternateName && <span className="alternate-name">{item.alternateName}</span>}
                    <p className="menu-description">{text(item.description)}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="menu-empty">
              <h2>{locale === "ko" ? "조건에 맞는 메뉴가 없습니다" : "No dishes match those filters"}</h2>
              <p>{locale === "ko" ? "검색어를 지우거나 전체 메뉴를 확인해 주세요." : "Clear the search or return to the full menu."}</p>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setSearch("");
                  setCategory("all");
                  setGuide(null);
                }}
              >
                {locale === "ko" ? "필터 초기화" : "Reset filters"}
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="menu-reserve">
        <div className="page-container menu-reserve-inner">
          <div>
            <p className="eyebrow eyebrow-light">{locale === "ko" ? "테이블 준비하기" : "Ready for the table"}</p>
            <h2>{locale === "ko" ? "마음에 드는 메뉴를 찾으셨나요?" : "Found something you’d like to try?"}</h2>
          </div>
          <Button asChild size="lg" className="hero-primary">
            <a href={bookingUrl} target="_blank" rel="noreferrer">
              {locale === "ko" ? "캐치테이블로 예약" : "Reserve via CatchTable"}
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
