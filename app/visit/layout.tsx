import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visit | Indian Restaurant Near Haeundae Beach",
  description:
    "Find Royal India Haeundae at 287 Haeundaehaebyeon-ro, Busan. Get directions, call the restaurant or reserve via CatchTable.",
  alternates: { canonical: "/visit" },
};

export default function VisitLayout({ children }: { children: React.ReactNode }) {
  return children;
}
