import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.straddled.app"),
  title: {
    template: "%s — Straddled",
    default: "Straddled — Poker night, itemized.",
  },
  description:
    "The poker session tracker for friend groups. Track buy-ins in real time, settle the math, and share a receipt your group chat will actually open.",
  appleWebApp: {
    title: "Straddled",
  },
  openGraph: {
    title: "Straddled — Poker night, itemized.",
    description:
      "Track every buy-in, rebuy, and cash-out in real time. Straddled does the math, names a Shark, and drops a receipt your group chat will actually open.",
    siteName: "Straddled",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Straddled — Poker night, itemized.",
    description:
      "Track buy-ins in real time. Settle the math. Share the receipt.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0E0B",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="min-h-screen bg-bg-primary font-display text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
