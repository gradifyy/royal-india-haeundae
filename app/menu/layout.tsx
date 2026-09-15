import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Indian & Nepali Flavours",
  description:
    "Explore curries, tandoori dishes, biryani, naan and more at Royal India Haeundae. 해운대 인도 음식 메뉴를 살펴보세요.",
  alternates: { canonical: "/menu" },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
