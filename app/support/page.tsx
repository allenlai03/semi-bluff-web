import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/Card";

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
        <a href="mailto:hello@straddled.app" className="text-gold underline">
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
        <a href="/privacy" className="text-gold underline">
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
        <a href="mailto:hello@straddled.app" className="text-gold underline">
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
      <main className="bg-bg-primary pt-xxxl">
        <section className="px-md py-mega md:px-lg">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-display text-[44px] font-bold leading-[1.05] text-text-primary md:text-[56px]">
              Support
            </h1>
            <p className="mt-md max-w-[560px] text-[16px] leading-[26px] text-text-secondary">
              We&apos;re a tiny team. Email us and you&apos;ll get a real
              reply, usually within a day.
            </p>

            <Card className="mt-xxl p-xl text-center md:p-xxl">
              <span className="eyebrow">Contact</span>
              <a
                href="mailto:hello@straddled.app"
                className="mt-md block font-display text-[28px] font-semibold text-gold transition hover:text-gold-light md:text-[36px]"
              >
                hello@straddled.app
              </a>
              <p className="mx-auto mt-md max-w-[420px] text-[14px] leading-[22px] text-text-secondary">
                Best for anything urgent or account-related. Replies usually
                within a few hours.
              </p>
            </Card>

            <div className="mt-xxxl">
              <span className="eyebrow">Frequently asked</span>
              <div className="mt-md space-y-md">
                {faqs.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-lg border border-border bg-surface-primary p-lg transition open:border-gold-muted"
                  >
                    <summary className="cursor-pointer list-none font-display text-[18px] font-semibold text-text-primary marker:hidden">
                      <span className="flex items-center justify-between gap-md">
                        {item.q}
                        <span
                          className="text-gold transition group-open:rotate-45"
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </span>
                    </summary>
                    <div className="mt-sm text-[15px] leading-[24px] text-text-secondary">
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
