import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Straddled",
  description:
    "Plain-language terms of service for Straddled, the poker session tracker for friend groups.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-black pt-32 md:pt-44">
        <article className="mx-auto max-w-2xl px-6 py-20 text-white md:px-10 md:py-32">
          <header className="mb-16">
            <p className="eyebrow">Terms</p>
            <h1
              className="font-display mt-6 text-white"
              style={{
                fontSize: "clamp(2.25rem, 6vw, 4rem)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
              }}
            >
              Terms of Service
            </h1>
            <p className="mt-4 text-[13px] text-white/40">
              Last updated: May 20, 2026
            </p>
          </header>

          <Section title="The short version">
            <p>
              Straddled is a poker session tracker. You use it to keep score at
              home games. It does not handle real money. By using the app or
              this site, you agree to the terms below. They&apos;re written in
              plain English so we can both understand them.
            </p>
          </Section>

          <Section title="Who we are">
            <p>
              Straddled (&ldquo;Straddled,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us&rdquo;) is an iOS app and accompanying website operated
              by the Straddled team. Contact:{" "}
              <a
                href="mailto:hello@straddled.app"
                className="text-[#D4B370] underline"
              >
                hello@straddled.app
              </a>
              .
            </p>
          </Section>

          <Section title="Who can use Straddled">
            <List
              items={[
                {
                  label: "Age",
                  body:
                    "You must be 17 or older to create an account. Straddled is rated 17+ on the App Store and discusses simulated poker scoring.",
                },
                {
                  label: "Account",
                  body:
                    "You agree to provide accurate information and to keep your sign-in credentials secure. You're responsible for activity on your account.",
                },
                {
                  label: "One person per account",
                  body:
                    "Accounts are for individuals, not shared. If you and your friends want to track a group, use the in-app group feature — each person gets their own account.",
                },
              ]}
            />
          </Section>

          <Section title="What Straddled is — and isn't">
            <List
              items={[
                {
                  label: "It is",
                  body:
                    "A record-keeping tool. A scoreboard. A way to itemize buy-ins, cash-outs, settlements, and superlatives for friendly home games.",
                },
                {
                  label: "It isn't",
                  body:
                    "A gambling platform, a payment processor, a money-transmission service, or a casino. We do not move real money. Settlements you see in the app are IOUs between friends. Any actual payments happen outside Straddled (Venmo, Zelle, cash, etc.) and are entirely between the participants.",
                },
                {
                  label: "Real-world games only",
                  body:
                    "Straddled is intended to record poker games that take place in person, in private settings, where they're legal. You're responsible for knowing whether your home game is permitted under the laws of your jurisdiction. We don't, and can't, advise on local gambling law.",
                },
              ]}
            />
          </Section>

          <Section title="Acceptable use">
            <p className="mb-4">When using Straddled, you agree not to:</p>
            <List
              items={[
                {
                  label: "Misrepresent",
                  body:
                    "Impersonate someone else, falsify your identity, or enter session data on behalf of a player who didn't agree to it.",
                },
                {
                  label: "Abuse",
                  body:
                    "Harass other users, post offensive content in display names or group names, or use the app to facilitate disputes that should be settled directly.",
                },
                {
                  label: "Break",
                  body:
                    "Reverse-engineer, scrape, or attempt to disrupt the service. Don't probe the database, abuse the API, or run automated traffic against us.",
                },
                {
                  label: "Resell",
                  body:
                    "Use Straddled to operate a paid pool, run a fee-taking rake, or offer it as a service to third parties.",
                },
              ]}
            />
          </Section>

          <Section title="Your content">
            <p>
              You own the data you enter — session results, player names,
              avatars, group names. By using Straddled, you grant us a limited
              license to store, display, and process that data so the app
              works (e.g., showing your session to other group members,
              rendering a shareable receipt). We don&apos;t sell your content
              and don&apos;t use it to train AI models. See the{" "}
              <a href="/privacy" className="text-[#D4B370] underline">
                privacy policy
              </a>{" "}
              for the full picture.
            </p>
          </Section>

          <Section title="Shared receipts">
            <p>
              When you share a session receipt to a chat or social platform,
              the receipt image is rendered on our server and available at a
              public URL. Anyone with the link can view it. Don&apos;t share a
              receipt you want to keep private. You can delete a session in
              the app at any time, which revokes the receipt URL.
            </p>
          </Section>

          <Section title="Apparel and merch (when applicable)">
            <p>
              Straddled apparel and accessory drops (for example, the Spring
              2026 collection) are sold through a third-party storefront. Once
              you check out via that storefront, fulfillment, returns,
              shipping, and any related disputes are governed by that
              storefront&apos;s terms, not this one. We provide the listing
              page; we don&apos;t hold inventory or process card payments
              directly.
            </p>
          </Section>

          <Section title="Service changes and availability">
            <p>
              We may change, suspend, or discontinue features. We try not to
              break things, but Straddled is offered &ldquo;as is.&rdquo; We
              don&apos;t guarantee uninterrupted availability, and we
              aren&apos;t liable for losses caused by outages, data sync
              delays, or features being removed.
            </p>
          </Section>

          <Section title="Termination">
            <p>
              You can delete your account any time (Profile → Settings →
              Delete Account, or email us). We can suspend or terminate
              accounts that violate these terms, behave abusively toward other
              users, or put the service at risk. We&apos;ll try to give you
              notice unless the violation is serious enough that we
              can&apos;t.
            </p>
          </Section>

          <Section title="Disclaimers">
            <p className="mb-4">
              Straddled is provided &ldquo;as is&rdquo; and &ldquo;as
              available,&rdquo; without warranties of any kind, express or
              implied. We disclaim warranties of merchantability, fitness for
              a particular purpose, and non-infringement to the maximum extent
              permitted by law.
            </p>
            <p>
              We are not responsible for disputes between players about who
              owes what after a session. The receipt is a record; the payment
              is up to you.
            </p>
          </Section>

          <Section title="Limitation of liability">
            <p>
              To the maximum extent permitted by law, Straddled, its team,
              and its contractors will not be liable for indirect,
              incidental, special, consequential, or punitive damages, or any
              loss of profits or revenues, whether arising from your use of
              the service or from settlements that don&apos;t go the way you
              expected. Our total liability for any claim related to the
              service will not exceed $100 USD.
            </p>
          </Section>

          <Section title="Indemnity">
            <p>
              You agree to indemnify and hold Straddled harmless from any
              claims arising out of your use of the service, your content, or
              your violation of these terms — including reasonable
              attorneys&apos; fees.
            </p>
          </Section>

          <Section title="Governing law">
            <p>
              These terms are governed by the laws of the State of California,
              USA, without regard to conflict-of-laws principles. Any dispute
              will be brought in the state or federal courts located in Los
              Angeles County, California, and you consent to jurisdiction
              there.
            </p>
          </Section>

          <Section title="Changes to these terms">
            <p>
              If we make material changes, we&apos;ll update the &ldquo;Last
              updated&rdquo; date above and, for significant changes, notify
              you in the app or by email. Continued use of Straddled after
              changes take effect means you accept the updated terms.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about these terms, requests, or disputes:{" "}
              <a
                href="mailto:hello@straddled.app"
                className="text-[#D4B370] underline"
              >
                hello@straddled.app
              </a>
              .
            </p>
          </Section>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-[18px] font-semibold leading-[1.3] text-white">
        {title}
      </h2>
      <div className="text-[15px] leading-[1.65] text-white/60">{children}</div>
    </section>
  );
}

function List({ items }: { items: { label: string; body: string }[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.label}>
          <span className="font-medium text-white">{item.label}.</span>{" "}
          <span>{item.body}</span>
        </li>
      ))}
    </ul>
  );
}
