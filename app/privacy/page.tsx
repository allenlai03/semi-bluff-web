import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Straddled",
  description:
    "How Straddled handles your data. Plain-language privacy policy for the poker session tracker app.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="bg-black pt-32 md:pt-44">
        <article className="mx-auto max-w-2xl px-6 py-20 text-white md:px-10 md:py-32">
          <header className="mb-16">
            <p className="eyebrow">Privacy</p>
            <h1
              className="font-display mt-6 text-white"
              style={{
                fontSize: "clamp(2.25rem, 6vw, 4rem)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
              }}
            >
              Privacy Policy
            </h1>
            <p className="mt-4 text-[13px] text-white/40">
              Last updated: May 19, 2026
            </p>
          </header>

          <Section title="The short version">
            <p>
              Straddled is a poker session tracker for friend groups. We collect
              the minimum data needed to make the app work — your email and
              display name, the sessions you log, and any avatar you upload. We
              don&apos;t sell your data, we don&apos;t share it with advertisers,
              and we never move real money through the app. If you want your
              account deleted, email us and we&apos;ll delete it.
            </p>
          </Section>

          <Section title="What we collect">
            <List
              items={[
                {
                  label: "Account info",
                  body:
                    "Email address and display name when you sign up. Optional profile photo if you upload one. If you sign in with Apple, we receive a private relay email and your name (only what Apple shares).",
                },
                {
                  label: "Session data",
                  body:
                    "Buy-ins, cash-outs, settlements, and superlatives for the poker sessions you log. This data is tied to your account and the groups you belong to.",
                },
                {
                  label: "Friends and groups",
                  body:
                    "The groups you create or join, the members of those groups, and your friend connections inside the app.",
                },
                {
                  label: "Device data for notifications",
                  body:
                    "If you grant push notification permission, we store an Expo push token tied to your account so we can send session updates and payment reminders.",
                },
                {
                  label: "Crash and error logs",
                  body:
                    "If the app crashes or hits an error, we collect diagnostic info (no message contents, no sensitive data) so we can fix bugs.",
                },
              ]}
            />
          </Section>

          <Section title="What we do NOT collect">
            <List
              items={[
                {
                  label: "Real-money payments",
                  body:
                    "Straddled does not process, move, or facilitate any real-money transactions. Settlements are IOUs between friends — money handoffs happen outside the app (Venmo, Zelle, cash, etc.).",
                },
                {
                  label: "Location data",
                  body: "We do not collect or track your location.",
                },
                {
                  label: "Contacts",
                  body: "We do not access your phone's contacts.",
                },
                {
                  label: "Browsing or ad activity",
                  body:
                    "We do not run ads and do not track activity across other apps or websites.",
                },
              ]}
            />
          </Section>

          <Section title="How we use your data">
            <p>
              Strictly to operate the app: showing you your sessions and stats,
              letting your group members see shared data, sending you push
              notifications you&apos;ve opted into, and fixing bugs. That&apos;s
              it.
            </p>
          </Section>

          <Section title="Where your data lives">
            <p>
              We use Supabase (a hosted Postgres database) for storage and
              authentication. Data is stored in the US. Every table has
              row-level security enabled so users can only access their own data
              and data shared with them through groups they belong to. We use
              HTTPS for everything.
            </p>
          </Section>

          <Section title="Who can see your data">
            <List
              items={[
                { label: "You", body: "Always have full access to your own data." },
                {
                  label: "Members of your groups",
                  body:
                    "Can see the sessions, stats, and settlements within that shared group.",
                },
                {
                  label: "Friends you accept",
                  body:
                    "Can see your stats only if you have stats privacy set to public (default is public, you can toggle to private in Profile).",
                },
                {
                  label: "Nobody else",
                  body:
                    "We do not sell, rent, or share your data with third parties for marketing or advertising.",
                },
              ]}
            />
          </Section>

          <Section title="Receipts and shared images">
            <p>
              When you share a session receipt to a group chat or social media,
              the receipt image is rendered on our server and is publicly
              accessible at a unique URL (anyone with the link can view it).
              Don&apos;t share receipts you want to keep private. You can delete
              a session at any time, which removes the associated receipt URL.
            </p>
          </Section>

          <Section title="Your rights">
            <List
              items={[
                { label: "Access", body: "All your data is visible to you inside the app." },
                {
                  label: "Correct",
                  body:
                    "You can edit your profile, sessions, and settings any time.",
                },
                {
                  label: "Delete your account",
                  body:
                    "Inside the app: Profile → Settings → Delete Account. Or email us at the address below. Deletion is permanent and includes your profile, sessions, friend connections, and avatar. Sessions you participated in with other people will retain the historical record (anonymized) so group statistics stay accurate.",
                },
                {
                  label: "Export",
                  body:
                    "Email us if you want a copy of your data and we will send a JSON export.",
                },
              ]}
            />
          </Section>

          <Section title="Children">
            <p>
              Straddled is intended for users 17 and older. We do not knowingly
              collect data from children under 13. If you believe a child has
              created an account, email us and we will delete it.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              If we make material changes, we will update the &ldquo;Last
              updated&rdquo; date at the top and, for significant changes, notify
              you in the app or by email.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions, deletion requests, data exports, or anything else:{" "}
              <a
                href="mailto:hello@straddled.app"
                className="text-[#D4B370] underline"
              >
                hello@straddled.app
              </a>
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
