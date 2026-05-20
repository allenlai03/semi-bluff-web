import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Straddled. Contact us, manage your account, or check the FAQ.",
};

type FAQItem = {
  q: string;
  a: React.ReactNode;
};

const faqs: FAQItem[] = [
  {
    q: "How do I delete my account?",
    a: (
      <>
        Inside the app: Profile → Settings → Delete Account. Or email{" "}
        <a href="mailto:hello@straddled.app" className="text-[#D4B370] underline">
          hello@straddled.app
        </a>{" "}
        and we&apos;ll do it within 48 hours.
      </>
    ),
  },
  {
    q: "Does Straddled handle real money?",
    a: "No. Settlements are IOUs between friends. Money moves on Venmo, Zelle, or cash — outside the app. Straddled is a record-keeper.",
  },
  {
    q: "Is my data shared with anyone?",
    a: (
      <>
        No. See our full{" "}
        <a href="/privacy" className="text-[#D4B370] underline">
          privacy policy
        </a>{" "}
        for details.
      </>
    ),
  },
  {
    q: "A receipt I shared is showing the wrong number.",
    a: "Delete the session in the app — that revokes the receipt URL — then re-share.",
  },
  {
    q: "I lost access to my account / wrong email.",
    a: (
      <>
        Email us at{" "}
        <a href="mailto:hello@straddled.app" className="text-[#D4B370] underline">
          hello@straddled.app
        </a>{" "}
        with the email you signed up with.
      </>
    ),
  },
  {
    q: "Can I export my data?",
    a: "Yes. Email us and we'll send a JSON export.",
  },
  {
    q: "When is Android coming?",
    a: "Soon. We're iOS-first through WSOP 2026.",
  },
  {
    q: "Is Straddled affiliated with any casino?",
    a: "No. Built for home games.",
  },
];

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="bg-black pt-32 md:pt-44">
        <section className="px-6 py-20 md:px-10 md:py-32">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">Support</p>
            <h1
              className="font-display mt-6 text-white"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 5rem)",
                fontWeight: 500,
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              We&apos;ll get back to you.
            </h1>
            <p className="mt-6 max-w-[560px] text-[16px] leading-[1.6] text-white/60">
              We&apos;re a tiny team. Email us and you&apos;ll get a real
              reply, usually within a day.
            </p>

            <div className="mt-14 rounded-3xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] p-10 text-center md:p-14">
              <p className="eyebrow">Contact</p>
              <a
                href="mailto:hello@straddled.app"
                className="font-display mt-6 block text-[#D4B370] transition-colors hover:text-[#E8C988]"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                }}
              >
                hello@straddled.app
              </a>
              <p className="mx-auto mt-5 max-w-[440px] text-[14px] leading-[1.6] text-white/55">
                Best for anything urgent or account-related. Replies usually
                within a few hours.
              </p>
            </div>

            <div className="mt-24">
              <p className="eyebrow">Frequently asked</p>
              <div className="mt-6 space-y-3">
                {faqs.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-2xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] p-6 transition-colors open:border-[#D4B370]/[0.22]"
                  >
                    <summary className="cursor-pointer list-none text-[17px] font-medium text-white marker:hidden">
                      <span className="flex items-center justify-between gap-6">
                        {item.q}
                        <span
                          className="text-[#D4B370] transition-transform group-open:rotate-45"
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </span>
                    </summary>
                    <div className="mt-3 text-[15px] leading-[1.6] text-white/60">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
