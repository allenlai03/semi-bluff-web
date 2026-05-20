import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  fetchSession,
  fetchSessionPlayers,
  fetchSessionSuperlatives,
  fetchSessionTransactions,
  fetchGroupForSession,
} from "@/lib/queries";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/Card";
import { AppStoreBadge } from "@/components/AppStoreBadge";
import { formatDate, getPlayerName, formatCurrency } from "@/utils/format";
import { SUPERLATIVE_CONFIG } from "@/types";
import type { SuperlativeType } from "@/types";

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
    ? `$${totalPot.toFixed(2)} pot · ${getPlayerName(sharkPlayer)} took the table for ${formatCurrency(sharkSup?.value ?? 0)}`
    : `$${totalPot.toFixed(2)} pot · ${players.length} players`;

  return {
    title: session.name,
    description,
    openGraph: {
      title: `${session.name} on Straddled`,
      description,
      images: [`/api/og/session/${id}`],
    },
  };
}

const SUPERLATIVE_ORDER: SuperlativeType[] = [
  "shark",
  "atm",
  "rock",
  "swing",
  "whale",
  "phoenix",
  "iceman",
  "grinder",
];

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

  const orderedSuperlatives = SUPERLATIVE_ORDER.map((type) =>
    superlatives.find((s) => s.type === type)
  ).filter((s): s is NonNullable<typeof s> => s !== undefined);

  return (
    <>
      <Header />
      <main className="bg-bg-primary pt-xxxl">
        <div className="mx-auto max-w-3xl px-md py-xl md:px-lg">
          {/* Session Header — felt accent strip */}
          <Card className="overflow-hidden">
            <div className="bg-felt px-lg py-xl text-center">
              <span className="eyebrow">Straddled</span>
              <h1 className="mt-sm font-display text-[32px] font-bold leading-[1.05] text-text-primary md:text-[40px]">
                {session.name}
              </h1>
              <p className="mt-sm text-[13px] text-text-secondary">
                {formatDate(session.closed_at ?? session.started_at ?? "")}
              </p>
              <div className="mx-auto mt-md inline-flex items-center gap-md rounded-xl border border-gold-muted bg-bg-primary/40 px-md py-xs">
                <span className="nums font-display text-[15px] font-semibold text-gold-light">
                  ${totalPot.toFixed(2)} pot
                </span>
                <span className="text-text-tertiary">·</span>
                <span className="text-[13px] text-text-secondary">
                  {players.length} players
                </span>
              </div>
            </div>
          </Card>

          {group && (
            <p className="mt-md text-center text-[12px] uppercase tracking-caps text-text-tertiary">
              From{" "}
              <Link
                href={`/g/${group.slug}`}
                className="text-gold hover:text-gold-light"
              >
                {group.name}
              </Link>
            </p>
          )}

          {/* Results */}
          <section className="mt-xxl">
            <span className="eyebrow">Results</span>
            <div className="mt-md space-y-xs">
              {players.map((player, i) => {
                const net = Number(player.net_result ?? 0);
                return (
                  <div
                    key={player.id}
                    className="flex items-center justify-between rounded-lg border border-divider bg-surface-primary px-md py-sm"
                  >
                    <div className="flex items-center gap-md">
                      <span className="nums w-6 text-center text-[12px] uppercase tracking-caps text-text-tertiary">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-[15px] font-medium text-text-primary">
                          {getPlayerName(player)}
                        </p>
                        <p className="nums text-[12px] text-text-tertiary">
                          In ${Number(player.total_buy_in ?? 0).toFixed(2)} ·
                          Out ${Number(player.cash_out ?? 0).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`nums font-display text-[18px] font-semibold ${
                        net > 0
                          ? "text-positive"
                          : net < 0
                            ? "text-negative"
                            : "text-text-tertiary"
                      }`}
                    >
                      {net > 0 ? "+" : ""}
                      {formatCurrency(net)}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Awards */}
          {orderedSuperlatives.length > 0 && (
            <section className="mt-xxl">
              <span className="eyebrow">Awards</span>
              <div className="mt-md grid gap-sm md:grid-cols-2">
                {orderedSuperlatives.map((sup) => {
                  const player = players.find(
                    (p) => p.id === sup.session_player_id
                  );
                  const config = SUPERLATIVE_CONFIG[sup.type];
                  return (
                    <Card key={sup.id} className="p-md">
                      <span className="eyebrow">
                        {config?.emoji} {config?.title ?? sup.type}
                      </span>
                      <h3 className="mt-xs font-display text-[20px] font-semibold text-gold-light">
                        {config?.title ?? sup.type}
                      </h3>
                      <p className="mt-xs text-[14px] text-text-secondary">
                        {player ? getPlayerName(player) : "—"}
                        {sup.value != null && (
                          <span className="nums ml-xs text-text-tertiary">
                            · {sup.type === "shark" ? "+" : ""}
                            {formatCurrency(Number(sup.value))}
                          </span>
                        )}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </section>
          )}

          {/* Settlements */}
          {transactions.length > 0 && (
            <section className="mt-xxl">
              <span className="eyebrow">
                Settlements
                {unpaidCount > 0 && (
                  <span className="ml-sm normal-case tracking-normal text-text-secondary">
                    · {unpaidCount} unpaid
                  </span>
                )}
              </span>
              <div className="mt-md space-y-xs">
                {transactions.map((t) => {
                  const from = players.find((p) => p.id === t.from_player_id);
                  const to = players.find((p) => p.id === t.to_player_id);
                  return (
                    <div
                      key={t.id}
                      className="flex items-center justify-between rounded-lg border border-divider bg-surface-primary px-md py-sm"
                    >
                      <div className="flex items-center gap-sm text-[14px] text-text-secondary">
                        <span className="text-text-primary">
                          {from ? getPlayerName(from) : "—"}
                        </span>
                        <span className="text-gold">→</span>
                        <span className="text-text-primary">
                          {to ? getPlayerName(to) : "—"}
                        </span>
                      </div>
                      <div className="flex items-center gap-sm">
                        <span className="nums font-display text-[15px] font-semibold text-text-primary">
                          ${Number(t.amount).toFixed(2)}
                        </span>
                        {t.status === "paid" && (
                          <span className="rounded-md bg-positive/20 px-xs py-[2px] text-[10px] uppercase tracking-caps text-positive">
                            Paid
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Install CTA */}
          <Card className="mt-xxxl p-xl text-center">
            <h3 className="font-display text-[24px] font-semibold text-text-primary">
              Run your own home game.
            </h3>
            <p className="mx-auto mt-sm max-w-[420px] text-[14px] text-text-secondary">
              Straddled tracks every buy-in, settles the math, and drops a
              receipt your group chat will actually open.
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
