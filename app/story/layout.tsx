import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Indian & Nepali Hospitality in Haeundae",
  description:
    "Discover the Royal India Haeundae dining experience: traditional curries, tandoor cooking, freshly prepared naan and warm hospitality in Busan.",
  alternates: { canonical: "/story" },
};

export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
