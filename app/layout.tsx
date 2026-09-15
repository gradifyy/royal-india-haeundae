import type { Metadata, Viewport } from "next";
import { SiteShell } from "@/components/site-shell";
import { restaurant } from "@/data/restaurant";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(restaurant.canonicalBase),
  title: {
    default: "Royal India Haeundae | Indian & Nepali Restaurant in Busan",
    template: "%s | Royal India Haeundae",
  },
  description:
    "Authentic Indian and Nepali cuisine near Haeundae Beach, Busan, with vegetarian, vegan, halal and gluten-free options. 해운대 인도 음식과 네팔 요리.",
  keywords: [
    "Indian restaurant Haeundae",
    "Indian restaurant Busan",
    "Nepali restaurant Busan",
    "Indian food near Haeundae Beach",
    "Halal Indian food Busan",
    "Vegetarian Indian food Busan",
    "해운대 인도 음식",
    "해운대 인도 레스토랑",
    "부산 인도 음식",
    "해운대 카레",
    "부산 할랄 음식",
    "해운대 맛집",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ko_KR",
    siteName: restaurant.name,
    title: "Royal India Haeundae | Indian & Nepali Restaurant in Busan",
    description: "Traditional curries, tandoor-fired favourites and warm hospitality near Haeundae Beach.",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "Royal India Haeundae",
    description: "Indian & Nepali dining near Haeundae Beach, Busan.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1d1c1a",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "LocalBusiness"],
  name: restaurant.name,
  alternateName: restaurant.nameKorean,
  url: restaurant.canonicalBase,
  telephone: restaurant.phoneDisplay,
  email: restaurant.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: restaurant.address.street,
    addressLocality: "Busan",
    addressRegion: "Haeundae-gu",
    postalCode: "48095",
    addressCountry: "KR",
  },
  servesCuisine: ["Indian", "Nepali"],
  acceptsReservations: true,
  hasMap: restaurant.links.googleMaps,
  menu: `${restaurant.canonicalBase}/menu`,
  ...(restaurant.priceRange ? { priceRange: restaurant.priceRange } : {}),
  sameAs: [restaurant.links.catchTable, restaurant.links.tripadvisor],
  potentialAction: {
    "@type": "ReserveAction",
    target: restaurant.links.catchTable,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteShell>{children}</SiteShell>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
