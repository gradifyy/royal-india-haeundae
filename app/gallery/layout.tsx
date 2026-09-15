import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A visual taste of Indian and Nepali dining by Haeundae Beach in Busan.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
