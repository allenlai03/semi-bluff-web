import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Semi Bluff — Poker Night, Settled",
  description:
    "Track buy-ins, results, and settlements for your home poker game. Leaderboards, stats, and shareable receipts.",
  metadataBase: new URL("https://semibluff.app"),
  openGraph: {
    title: "Semi Bluff — Poker Night, Settled",
    description: "Track buy-ins, results, and settlements for your home poker game.",
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
    <html lang="en" className={`${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-[#0D0D0D] font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
