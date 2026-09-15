import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Reserve a table at Royal India Haeundae through CatchTable or call the restaurant directly.",
  alternates: { canonical: "/reservations" },
};

export default function ReservationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
