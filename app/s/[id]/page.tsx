import { notFound } from "next/navigation";
import {
  fetchSession,
  fetchSessionPlayers,
  fetchSessionSuperlatives,
  fetchSessionTransactions,
  fetchGroupForSession,
} from "@/lib/queries";
import { PlayerResultRow } from "@/components/PlayerResultRow";
import { SuperlativeCard } from "@/components/SuperlativeCard";
import { SettlementCard } from "@/components/SettlementCard";
import { CTABanner } from "@/components/CTABanner";
import { StickyHeader } from "@/components/StickyHeader";
import { formatDate } from "@/utils/format";
import type { Metadata } from "next";
import type { SuperlativeType } from "@/types";
import { SUPERLATIVE_CONFIG } from "@/types";
import { getPlayerName, formatCurrency } from "@/utils/format";

export const revalidate = 86400;

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const session = await fetchSession(id);
  if (!session) return { title: "Session Not Found" };

  const [players, superlatives] = await Promise.all([
    fetchSessionPlayers(session.id),
    fetchSessionSuperlatives(session.id),
  ]);

  const totalPot = players.reduce(
    (sum, p) => sum + Number(p.total_buy_in ?? 0),
    0
  );
  const sharkSup = superlatives.find((s) => s.type === "shark");
  const sharkPlayer = sharkSup
    ? players.find((p) => p.id === sharkSup.session_player_id)
    : null;

  const description = sharkPlayer
    ? `💰 $${totalPot.toFixed(2)} pot · 🦈 ${getPlayerName(sharkPlayer)} won ${formatCurrency(sharkSup?.value ?? 0)}`
    : `💰 $${totalPot.toFixed(2)} pot · ${players.length} players`;

  return {
    title: `${session.name} — Semi Bluff`,
    description,
    openGraph: {
      title: `${session.name} — Semi Bluff`,
      description,
      images: [`/api/og/session/${id}`],
    },
  };
}

export default async function SessionPage({ params }: Props) {
  const { id } = await params;
  const session = await fetchSession(id);
  if (!session) notFound();

  const [players, superlatives, transactions, group] = await Promise.all([
    fetchSessionPlayers(session.id),
    fetchSessionSuperlatives(session.id),
    fetchSessionTransactions(session.id),
    fetchGroupForSession(session.group_id),
  ]);

  const totalPot = players.reduce(
    (sum, p) => sum + Number(p.total_buy_in ?? 0),
    0
  );

  const paidCount = transactions.filter((t) => t.status === "paid").length;
  const unpaidCount = transactions.length - paidCount;

  // Order superlatives: shark, atm, rock, swing
  const orderedTypes: SuperlativeType[] = ["shark", "atm", "rock", "swing"];
  const orderedSuperlatives = orderedTypes
    .map((type) => superlatives.find((s) => s.type === type))
    .filter(
      (s): s is NonNullable<typeof s> => s !== undefined
    );

  return (
    <>
      <StickyHeader />
      <main className="min-h-screen bg-bg-primary">
        <div className="max-w-2xl mx-auto px-md py-lg">
          {/* Session Header */}
          <section className="mb-lg">
            <h1 className="text-[28px] font-bold leading-[34px] text-text-primary">
              {session.name}
            </h1>
            {group && (
              <a
                href={`/g/${group.slug}`}
                className="text-[13px] text-accent-secondary hover:underline"
              >
                {group.name}
              </a>
            )}
            <p className="text-[13px] text-text-secondary mt-xs">
              {formatDate(session.closed_at ?? session.started_at ?? "")} ·{" "}
              {players.length} players · ${totalPot.toFixed(2)} pot
            </p>
          </section>

          {/* Summary Bar */}
          <section className="bg-surface-primary border-b border-border p-md flex justify-between rounded-lg mb-lg">
            <div>
              <p className="text-[11px] font-medium tracking-[0.5px] text-text-tertiary uppercase">
                Session
              </p>
              <p className="text-[15px] font-semibold text-text-primary">
                {session.name}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-medium tracking-[0.5px] text-text-tertiary uppercase">
                Payments
              </p>
              <p className="text-[15px] font-semibold text-text-primary">
                {paidCount}/{transactions.length} paid
              </p>
            </div>
          </section>

          {/* Results */}
          <section className="mb-lg">
            <h2 className="text-[11px] font-medium tracking-[1.5px] text-text-tertiary uppercase mb-md">
              Results
            </h2>
            {players.map((player, i) => (
              <PlayerResultRow
                key={player.id}
                player={player}
                rank={i + 1}
              />
            ))}
          </section>

          {/* Awards */}
          {orderedSuperlatives.length > 0 && (
            <section className="mb-lg">
              <h2 className="text-[11px] font-medium tracking-[1.5px] text-text-tertiary uppercase mb-md">
                Awards
              </h2>
              <div className="flex flex-col gap-sm">
                {orderedSuperlatives.map((sup) => (
                  <SuperlativeCard
                    key={sup.id}
                    superlative={sup}
                    player={players.find(
                      (p) => p.id === sup.session_player_id
                    )}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Settlements */}
          {transactions.length > 0 && (
            <section className="mb-lg">
              <h2 className="text-[11px] font-medium tracking-[1.5px] text-text-tertiary uppercase mb-md">
                Settlements
                {unpaidCount > 0 && (
                  <span className="text-text-secondary ml-sm normal-case tracking-normal">
                    ({unpaidCount} remaining)
                  </span>
                )}
              </h2>
              <div className="flex flex-col gap-sm">
                {transactions.map((t) => (
                  <SettlementCard
                    key={t.id}
                    transaction={t}
                    players={players}
                  />
                ))}
              </div>
            </section>
          )}

          {/* All Square State */}
          {transactions.length > 0 &&
            transactions.every((t) => t.status === "paid") && (
              <section className="bg-surface-primary rounded-lg p-lg text-center mb-lg">
                <p className="font-semibold text-[15px] text-positive">
                  All square!
                </p>
                <p className="text-[15px] text-text-secondary mt-xs">
                  All settlements have been paid.
                </p>
              </section>
            )}

          {/* CTA */}
          <CTABanner />
        </div>
      </main>
    </>
  );
}
