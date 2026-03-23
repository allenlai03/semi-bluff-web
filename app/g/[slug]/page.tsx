import { notFound } from "next/navigation";
import {
  fetchGroupBySlug,
  fetchGroupMemberCount,
  fetchLeaderboard,
  fetchRecentSessions,
} from "@/lib/queries";
import { LeaderboardSection } from "@/components/LeaderboardSection";
import { SessionCard } from "@/components/SessionCard";
import { CTABanner } from "@/components/CTABanner";
import { StickyHeader } from "@/components/StickyHeader";
import type { Metadata } from "next";

export const revalidate = 300;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const group = await fetchGroupBySlug(slug);
  if (!group) return { title: "Group Not Found" };

  const memberCount = await fetchGroupMemberCount(group.id);

  return {
    title: `${group.name} — Semi Bluff`,
    description: `All-time leaderboard for ${group.name}. ${memberCount} members.`,
    openGraph: {
      title: `${group.name} — Semi Bluff`,
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
      <StickyHeader />
      <main className="min-h-screen bg-bg-primary">
        <div className="max-w-2xl mx-auto px-md py-lg">
          {/* Group Header */}
          <section className="mb-xl">
            <h1 className="text-[28px] font-bold leading-[34px] text-text-primary">
              {group.name}
            </h1>
            <p className="text-[13px] text-text-secondary mt-xs">
              {memberCount} member{memberCount !== 1 ? "s" : ""}
            </p>
          </section>

          {/* Leaderboard */}
          <section className="mb-xl">
            <h2 className="text-[17px] font-semibold text-text-secondary mb-md uppercase tracking-wider text-[11px]">
              Leaderboard
            </h2>
            <LeaderboardSection entries={leaderboard} />
          </section>

          {/* Recent Sessions */}
          {recentSessions.length > 0 && (
            <section className="mb-xl">
              <h2 className="text-[17px] font-semibold text-text-secondary mb-md uppercase tracking-wider text-[11px]">
                Recent Sessions
              </h2>
              <div className="flex flex-col gap-sm">
                {recentSessions.map((session) => (
                  <SessionCard key={session.id} session={session} />
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <CTABanner />
        </div>
      </main>
    </>
  );
}
