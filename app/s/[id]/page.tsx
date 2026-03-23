import { notFound } from "next/navigation";
import {
  getSession,
  getSessionPlayers,
  getSessionSuperlatives,
  getSessionTransactions,
  getGroupForSession,
} from "@/lib/queries";
import { SessionResults, Settlements } from "@/components/SessionResults";
import { AppStoreButtons } from "@/components/AppStoreButtons";
import { formatDateTime, formatMoney } from "@/lib/utils";
import type { Metadata } from "next";

export const revalidate = 86400; // ISR: 24h (closed sessions are immutable)

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const session = await getSession(id);
  if (!session) return { title: "Session Not Found" };

  return {
    title: `${session.name} — Semi Bluff`,
    description: `Session results for ${session.name}`,
    openGraph: {
      title: `${session.name} — Results`,
      description: `Session results for ${session.name}`,
      images: [`/api/og/session/${id}`],
    },
  };
}

export default async function SessionPage({ params }: Props) {
  const { id } = await params;
  const session = await getSession(id);
  if (!session) notFound();

  const [players, superlatives, transactions, group] = await Promise.all([
    getSessionPlayers(session.id),
    getSessionSuperlatives(session.id),
    getSessionTransactions(session.id),
    getGroupForSession(session.group_id),
  ]);

  const totalPot = players.reduce((sum, p) => sum + Number(p.total_buy_in ?? 0), 0);

  return (
    <main className="bg-grid min-h-screen px-4 py-12">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600 text-xl">
            🃏
          </div>
          <h1 className="mb-1 text-3xl font-bold tracking-tight">{session.name}</h1>
          {group && (
            <p className="mb-1 text-white/40">
              <a href={group.slug ? `/g/${group.slug}` : "#"} className="hover:text-white/60 transition">
                {group.name}
              </a>
            </p>
          )}
          <p className="text-sm text-white/30">
            {formatDateTime(session.started_at)} · {players.length} players · $
            {totalPot.toFixed(0)} pot
          </p>
        </div>

        {/* Results */}
        <SessionResults players={players} superlatives={superlatives} />

        {/* Settlements */}
        <div className="mt-6">
          <Settlements transactions={transactions} players={players} />
        </div>

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
