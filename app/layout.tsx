import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Semi Bluff — Poker Night, Settled",
  description:
    "Track buy-ins, results, and settlements for your home poker game. Leaderboards, stats, and shareable receipts.",
  metadataBase: new URL("https://semibluff.app"),
  openGraph: {
    title: "Semi Bluff — Poker Night, Settled",
    description:
      "Track buy-ins, results, and settlements for your home poker game.",
    siteName: "Semi Bluff",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg-primary font-sans text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
