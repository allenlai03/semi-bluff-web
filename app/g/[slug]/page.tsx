import { notFound } from "next/navigation";
import { getGroupBySlug, getGroupMemberCount, getGroupLeaderboard } from "@/lib/queries";
import { LeaderboardTable } from "@/components/LeaderboardTable";
import { AppStoreButtons } from "@/components/AppStoreButtons";
import type { Metadata } from "next";

export const revalidate = 300; // ISR: 5 minutes

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const group = await getGroupBySlug(slug);
  if (!group) return { title: "Group Not Found" };

  return {
    title: `${group.name} — Semi Bluff`,
    description: `Leaderboard for ${group.name} on Semi Bluff`,
    openGraph: {
      title: `${group.name} — Leaderboard`,
      description: `Leaderboard for ${group.name} on Semi Bluff`,
      images: [`/api/og/group/${slug}`],
    },
  };
}

export default async function GroupPage({ params }: Props) {
  const { slug } = await params;
  const group = await getGroupBySlug(slug);
  if (!group) notFound();

  const [memberCount, leaderboard] = await Promise.all([
    getGroupMemberCount(group.id),
    getGroupLeaderboard(group.id),
  ]);

  const totalPot = leaderboard.reduce(
    (sum, e) => sum + Math.max(0, e.totalNet),
    0
  );

  return (
    <main className="bg-grid min-h-screen px-4 py-12">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600 text-xl">
            🃏
          </div>
          <h1 className="mb-1 text-3xl font-bold tracking-tight">{group.name}</h1>
          <p className="text-white/40">
            {memberCount} member{memberCount !== 1 ? "s" : ""} · $
            {totalPot.toFixed(0)} total in play
          </p>
        </div>

        {/* Leaderboard */}
        <LeaderboardTable entries={leaderboard} />

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-sm text-white/40">
            Track your poker games with Semi Bluff
          </p>
          <AppStoreButtons />
        </div>
      </div>
    </main>
  );
}
