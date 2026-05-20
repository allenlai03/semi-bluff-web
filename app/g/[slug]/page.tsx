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
import { Card } from "@/components/Card";
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
      <main className="bg-bg-primary pt-xxxl">
        <div className="mx-auto max-w-3xl px-md py-xl md:px-lg">
          {/* Group Header — felt accent */}
          <Card className="overflow-hidden">
            <div className="bg-felt px-lg py-xl text-center">
              <span className="eyebrow">Group</span>
              <h1 className="mt-sm font-display text-[32px] font-bold leading-[1.05] text-text-primary md:text-[44px]">
                {group.name}
              </h1>
              <p className="mt-sm text-[13px] text-text-secondary">
                {memberCount} member{memberCount !== 1 ? "s" : ""} ·{" "}
                {recentSessions.length} recent session
                {recentSessions.length !== 1 ? "s" : ""}
              </p>
            </div>
          </Card>

          {/* Leaderboard */}
          {leaderboard.length > 0 && (
            <section className="mt-xxl">
              <span className="eyebrow">All-Time Leaderboard</span>
              <div className="mt-md space-y-xs">
                {leaderboard.slice(0, 10).map((entry, i) => (
                  <div
                    key={entry.userId}
                    className="flex items-center justify-between rounded-lg border border-divider bg-surface-primary px-md py-sm"
                  >
                    <div className="flex items-center gap-md">
                      <span className="nums w-6 text-center text-[12px] uppercase tracking-caps text-text-tertiary">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-[15px] font-medium text-text-primary">
                          {entry.displayName}
                        </p>
                        <p className="text-[12px] text-text-tertiary">
                          {entry.sessionCount} session
                          {entry.sessionCount !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`nums font-display text-[18px] font-semibold ${
                        entry.totalNet > 0
                          ? "text-positive"
                          : entry.totalNet < 0
                            ? "text-negative"
                            : "text-text-tertiary"
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

          {/* Recent Sessions */}
          {recentSessions.length > 0 && (
            <section className="mt-xxl">
              <span className="eyebrow">Recent Sessions</span>
              <div className="mt-md space-y-xs">
                {recentSessions.map((session) => (
                  <Link
                    key={session.id}
                    href={`/s/${session.id}`}
                    className="flex items-center justify-between rounded-lg border border-divider bg-surface-primary px-md py-sm transition hover:border-gold-muted hover:bg-surface-secondary"
                  >
                    <div>
                      <p className="text-[15px] font-medium text-text-primary">
                        {session.name}
                      </p>
                      <p className="text-[12px] text-text-tertiary">
                        {formatDate(
                          session.closed_at ?? session.started_at ?? ""
                        )}{" "}
                        · {session.playerCount} players
                      </p>
                    </div>
                    {session.biggestWinner && (
                      <div className="text-right">
                        <p className="text-[11px] uppercase tracking-caps text-text-tertiary">
                          {session.biggestWinner.name}
                        </p>
                        <p className="nums text-[14px] font-semibold text-positive">
                          +{formatCurrency(session.biggestWinner.net)}
                        </p>
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Install CTA */}
          <Card className="mt-xxxl p-xl text-center">
            <h3 className="font-display text-[24px] font-semibold text-text-primary">
              Want in?
            </h3>
            <p className="mx-auto mt-sm max-w-[420px] text-[14px] text-text-secondary">
              Get Straddled to join {group.name} or start your own home game.
            </p>
            <div className="mt-lg flex justify-center">
              <AppStoreBadge size="lg" />
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
