import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  fetchGroupBySlug,
  fetchGroupMemberCount,
  fetchLeaderboard,
  fetchRecentSessions,
} from "@/lib/queries";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppStoreBadge } from "@/components/AppStoreBadge";
import { formatDate, formatCurrency } from "@/utils/format";

export const revalidate = 300;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const group = await fetchGroupBySlug(slug);
  if (!group) return { title: "Group Not Found" };

  const memberCount = await fetchGroupMemberCount(group.id);

  return {
    title: group.name,
    description: `All-time leaderboard for ${group.name}. ${memberCount} members on Straddled.`,
    openGraph: {
      title: `${group.name} on Straddled`,
      description: `All-time leaderboard for ${group.name}. ${memberCount} members.`,
      images: [`/api/og/group/${slug}`],
    },
  };
}

export default async function GroupPage({ params }: Props) {
  const { slug } = await params;
  const group = await fetchGroupBySlug(slug);
  if (!group) notFound();

  const [memberCount, leaderboard, recentSessions] = await Promise.all([
    fetchGroupMemberCount(group.id),
    fetchLeaderboard(group.id),
    fetchRecentSessions(group.id),
  ]);

  return (
    <>
      <Header />
      <main className="bg-black pt-32 md:pt-40">
        <div className="mx-auto max-w-3xl px-6 py-12 md:px-10">
          {/* Group header — felt panel */}
          <div
            className="grain relative overflow-hidden rounded-3xl px-8 py-12 text-center md:px-12 md:py-16"
            style={{
              background:
                "radial-gradient(ellipse at top, #1A6B52 0%, #0F5340 40%, #0A3D2E 100%)",
            }}
          >
            <div className="relative z-10">
              <p className="eyebrow text-white/80">Group</p>
              <h1
                className="font-display mt-5 text-white"
                style={{
                  fontSize: "clamp(2rem, 6vw, 3.5rem)",
                  fontWeight: 500,
                  lineHeight: 1.05,
                  letterSpacing: "-0.015em",
                }}
              >
                {group.name}
              </h1>
              <p className="mt-3 text-[13px] text-white/70">
                {memberCount} member{memberCount !== 1 ? "s" : ""} ·{" "}
                {recentSessions.length} recent session
                {recentSessions.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>

          {leaderboard.length > 0 && (
            <section className="mt-16">
              <p className="eyebrow">All-time leaderboard</p>
              <div className="mt-5 space-y-2">
                {leaderboard.slice(0, 10).map((entry, i) => (
                  <div
                    key={entry.userId}
                    className="flex items-center justify-between rounded-2xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] px-5 py-4"
                  >
                    <div className="flex items-center gap-5">
                      <span className="nums w-6 text-center text-[12px] uppercase tracking-[0.18em] text-white/40">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-[15px] font-medium text-white">
                          {entry.displayName}
                        </p>
                        <p className="text-[12px] text-white/40">
                          {entry.sessionCount} session
                          {entry.sessionCount !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`nums text-[17px] font-semibold ${
                        entry.totalNet > 0
                          ? "text-[#4ADE80]"
                          : entry.totalNet < 0
                            ? "text-[#F87171]"
                            : "text-white/40"
                      }`}
                    >
                      {entry.totalNet > 0 ? "+" : ""}
                      {formatCurrency(entry.totalNet)}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {recentSessions.length > 0 && (
            <section className="mt-16">
              <p className="eyebrow">Recent sessions</p>
              <div className="mt-5 space-y-2">
                {recentSessions.map((session) => (
                  <Link
                    key={session.id}
                    href={`/s/${session.id}`}
                    className="flex items-center justify-between rounded-2xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] px-5 py-4 transition-colors hover:border-[#D4B370]/[0.25]"
                  >
                    <div>
                      <p className="text-[15px] font-medium text-white">
                        {session.name}
                      </p>
                      <p className="text-[12px] text-white/40">
                        {formatDate(
                          session.closed_at ?? session.started_at ?? ""
                        )}{" "}
                        · {session.playerCount} players
                      </p>
                    </div>
                    {session.biggestWinner && (
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                          {session.biggestWinner.name}
                        </p>
                        <p className="nums text-[14px] font-semibold text-[#4ADE80]">
                          +{formatCurrency(session.biggestWinner.net)}
                        </p>
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-20 rounded-3xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] p-10 text-center md:p-14">
            <h3
              className="font-display text-white"
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
                fontWeight: 500,
                letterSpacing: "-0.015em",
              }}
            >
              Want in?
            </h3>
            <p className="mx-auto mt-4 max-w-[420px] text-[14px] leading-[1.6] text-white/60">
              Get Straddled to join {group.name} or start your own home game.
            </p>
            <div className="mt-8 flex justify-center">
              <AppStoreBadge size="lg" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
