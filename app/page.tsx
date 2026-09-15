"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Check,
  Flame,
  Leaf,
  MapPin,
  Navigation,
  Phone,
  Sparkles,
  Star,
  WheatOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  copy,
  dietaryOptions,
  flavourGuides,
  restaurant,
  signatureDishes,
  trustItems,
} from "@/data/restaurant";
import { useLanguage } from "@/lib/i18n";

const dietaryIcons = [Flame, Leaf, Sparkles, WheatOff];

export default function Home() {
  const { locale, text } = useLanguage();
  const home = copy.home;
  const bookingUrl =
    locale === "ko" ? restaurant.links.catchTableKorean : restaurant.links.catchTable;

  return (
    <main id="main-content">
      <section className="hero-section">
        <img
          className="hero-image"
          src="/images/hero-feast.webp"
          alt={
            locale === "ko"
              ? "버터 치킨과 탄두리 치킨, 난, 라이스가 놓인 저녁 식탁"
              : "An evening table with butter chicken, tandoori chicken, naan and rice"
          }
          width="1920"
          height="1201"
          fetchPriority="high"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="page-container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light hero-eyebrow">
              <MapPin aria-hidden="true" /> {text(home.location)}
            </p>
            <h1>{text(home.headline)}</h1>
            <p className="hero-intro">{text(home.intro)}</p>
            <div className="hero-actions">
              <Button asChild size="lg" className="hero-primary">
                <a href={bookingUrl} target="_blank" rel="noreferrer">
                  {text(copy.common.reserve)}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="hero-secondary">
                <Link href="/menu">
                  {text(copy.common.exploreMenu)}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <a className="hero-directions" href={restaurant.links.googleMaps} target="_blank" rel="noreferrer">
                <Navigation aria-hidden="true" /> {text(copy.common.directions)}
              </a>
            </div>
            <div className="hero-proof">
              <span className="proof-stars" aria-hidden="true">
                <Star /> <Star /> <Star /> <Star /> <Star />
              </span>
              <span>{text(home.proof)}</span>
            </div>
          </div>
        </div>
        <span className="image-caption hero-caption">{text(copy.common.demoImage)}</span>
        <div className="hero-scroll" aria-hidden="true">
          <span />
          {locale === "ko" ? "아래로" : "Discover"}
        </div>
      </section>

      <section className="trust-strip" aria-label={locale === "ko" ? "주요 정보" : "Quick information"}>
        <div className="page-container trust-grid">
          {trustItems.map((item, index) => (
            <div key={item.en} className="trust-item">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{text(item)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section signature-section">
        <div className="page-container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">{text(home.flavoursEyebrow)}</p>
              <h2>{text(home.flavoursTitle)}</h2>
            </div>
            <div>
              <p>{text(home.flavoursBody)}</p>
              <Link href="/menu" className="text-link">
                {text(copy.common.exploreMenu)} <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="signature-grid">
            {signatureDishes.map((dish, index) => (
              <article className={`dish-card dish-card-${index + 1}`} key={dish.name.en}>
                <div className="dish-image-wrap">
                  <img src={dish.image} alt={text(dish.alt)} loading="lazy" width="900" height="1100" />
                  <span>{text(copy.common.demoImage)}</span>
                </div>
                <div className="dish-card-copy">
                  <p>{dish.secondary}</p>
                  <h3>{text(dish.name)}</h3>
                  <span>{text(dish.description)}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section guide-section">
        <div className="page-container guide-layout">
          <div className="guide-intro">
            <p className="eyebrow eyebrow-light">{text(home.guideEyebrow)}</p>
            <h2>{text(home.guideTitle)}</h2>
            <p>{text(home.guideBody)}</p>
            <Button asChild variant="outline" size="lg" className="guide-button">
              <Link href="/menu">{text(copy.common.exploreMenu)}</Link>
            </Button>
          </div>
          <div className="guide-grid">
            {flavourGuides.map((guide) => (
              <Link href={`/menu?guide=${guide.key}#menu-list`} className="guide-card" key={guide.key}>
                <span>{guide.number}</span>
                <div>
                  <h3>{text(guide.title)}</h3>
                  <p>{text(guide.detail)}</p>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section story-section">
        <div className="page-container story-grid">
          <div className="story-image-block">
            <img
              src="/images/tandoori.webp"
              alt={text(signatureDishes[1].alt)}
              loading="lazy"
              width="1200"
              height="1499"
            />
            <span className="image-caption">{text(copy.common.demoImage)}</span>
            <div className="story-seal" aria-hidden="true">
              <span>INDIA</span>
              <strong>&</strong>
              <span>NEPAL</span>
            </div>
          </div>
          <div className="story-copy">
            <p className="eyebrow">{text(home.storyEyebrow)}</p>
            <h2>{text(home.storyTitle)}</h2>
            <p>{text(home.storyBody)}</p>
            <div className="story-details">
              <span>{locale === "ko" ? "정통 커리" : "Traditional curries"}</span>
              <span>{locale === "ko" ? "탄두르 요리" : "Tandoor cooking"}</span>
              <span>{locale === "ko" ? "갓 구운 난" : "Freshly prepared naan"}</span>
              <span>{locale === "ko" ? "따뜻한 환대" : "Warm hospitality"}</span>
            </div>
            <Link href="/story" className="text-link">
              {locale === "ko" ? "더 알아보기" : "Our approach"} <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section dietary-section">
        <div className="page-container dietary-layout">
          <div className="dietary-copy">
            <p className="eyebrow eyebrow-light">{text(home.dietaryEyebrow)}</p>
            <h2>{text(home.dietaryTitle)}</h2>
            <p>{text(home.dietaryBody)}</p>
          </div>
          <div className="dietary-grid">
            {dietaryOptions.map((option, index) => {
              const Icon = dietaryIcons[index];
              return (
                <div className="dietary-item" key={option.en}>
                  <Icon aria-hidden="true" />
                  <span>{text(option)}</span>
                  <Check aria-hidden="true" />
                </div>
              );
            })}
            <p className="dietary-note">{text(home.dietaryNote)}</p>
          </div>
        </div>
      </section>

      <section className="section reviews-section">
        <div className="page-container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">{text(home.reviewsEyebrow)}</p>
              <h2>{text(home.reviewsTitle)}</h2>
            </div>
            <p>{text(home.reviewsNote)}</p>
          </div>
          <div className="review-grid">
            <a href={restaurant.links.googleMaps} target="_blank" rel="noreferrer" className="review-card">
              <span className="review-platform">Google</span>
              <strong>{restaurant.ratings.google.value.toFixed(1)}</strong>
              <div className="review-stars" aria-label={`${restaurant.ratings.google.value} out of 5`}>
                ★★★★★
              </div>
              <span className="review-link">
                {locale === "ko" ? "Google 리뷰 보기" : "Read Google reviews"} <ArrowUpRight aria-hidden="true" />
              </span>
            </a>
            <a href={restaurant.links.tripadvisor} target="_blank" rel="noreferrer" className="review-card review-card-dark">
              <span className="review-platform">Tripadvisor</span>
              <strong>{restaurant.ratings.tripadvisor.value.toFixed(1)}</strong>
              <div className="review-stars" aria-label={`${restaurant.ratings.tripadvisor.value} out of 5`}>
                ★★★★★
              </div>
              <span className="review-link">
                {locale === "ko" ? "Tripadvisor 보기" : "View Tripadvisor"} <ArrowUpRight aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="coast-section">
        <img
          src="/images/haeundae-dining.webp"
          alt={
            locale === "ko"
              ? "해운대의 저녁 해변 풍경을 바라보는 인도 요리 식탁 콘셉트"
              : "Concept dining table overlooking Haeundae Beach at blue hour"
          }
          loading="lazy"
          width="1800"
          height="1200"
        />
        <div className="coast-overlay" aria-hidden="true" />
        <div className="page-container coast-content">
          <p className="eyebrow eyebrow-light">{text(home.coastEyebrow)}</p>
          <h2>{text(home.coastTitle)}</h2>
          <p>{text(home.coastBody)}</p>
          <Button asChild size="lg" className="hero-primary">
            <Link href="/visit">
              {text(copy.common.directions)} <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <span className="image-caption coast-caption">{text(copy.common.demoImage)}</span>
      </section>

      <section className="section visit-preview">
        <div className="page-container visit-card">
          <div>
            <p className="eyebrow">{locale === "ko" ? "방문 안내" : "Visit us"}</p>
            <h2>{restaurant.name}</h2>
            <p className="visit-korean">{restaurant.nameKorean}</p>
          </div>
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
          <div className="visit-actions">
            <Button asChild size="lg" className="reserve-button">
              <a href={bookingUrl} target="_blank" rel="noreferrer">
                <CalendarCheck aria-hidden="true" /> {text(copy.common.reserve)}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={restaurant.links.googleMaps} target="_blank" rel="noreferrer">
                <Navigation aria-hidden="true" /> {text(copy.common.directions)}
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href={restaurant.phoneHref}>
                <Phone aria-hidden="true" /> {text(copy.common.call)}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
