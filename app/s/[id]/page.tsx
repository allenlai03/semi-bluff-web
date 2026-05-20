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

const superlativeAccent: Record<SuperlativeType, string> = {
  shark: "#4ADE80",
  atm: "#F87171",
  rock: "#FAFAF7",
  swing: "#4ADE80",
  whale: "#FAFAF7",
  phoenix: "#F87171",
  iceman: "#7DD3FC",
  grinder: "#D4B370",
};

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
      <main className="bg-black pt-32 md:pt-40">
        <div className="mx-auto max-w-3xl px-6 py-12 md:px-10">
          {/* Session header — felt panel */}
          <div
            className="grain relative overflow-hidden rounded-3xl px-8 py-12 text-center md:px-12 md:py-16"
            style={{
              background:
                "radial-gradient(ellipse at top, #1A6B52 0%, #0F5340 40%, #0A3D2E 100%)",
            }}
          >
            <div className="relative z-10">
              <p className="eyebrow text-white/80">Straddled</p>
              <h1
                className="font-display mt-5 text-white"
                style={{
                  fontSize: "clamp(2rem, 5.5vw, 3.25rem)",
                  fontWeight: 500,
                  lineHeight: 1.05,
                  letterSpacing: "-0.015em",
                }}
              >
                {session.name}
              </h1>
              <p className="mt-3 text-[13px] text-white/70">
                {formatDate(session.closed_at ?? session.started_at ?? "")}
              </p>
              <div className="mx-auto mt-5 inline-flex items-center gap-4 rounded-full border border-[#D4B370]/40 bg-black/40 px-5 py-2">
                <span className="nums text-[15px] font-semibold text-[#D4B370]">
                  ${totalPot.toFixed(2)} pot
                </span>
                <span className="text-white/40">·</span>
                <span className="text-[13px] text-white/70">
                  {players.length} players
                </span>
              </div>
            </div>
          </div>

          {group && (
            <p className="mt-5 text-center text-[11px] uppercase tracking-[0.18em] text-white/40">
              From{" "}
              <Link
                href={`/g/${group.slug}`}
                className="text-[#D4B370] hover:text-[#E8C988]"
              >
                {group.name}
              </Link>
            </p>
          )}

          {/* Results */}
          <section className="mt-16">
            <p className="eyebrow">Results</p>
            <div className="mt-5 space-y-2">
              {players.map((player, i) => {
                const net = Number(player.net_result ?? 0);
                return (
                  <div
                    key={player.id}
                    className="flex items-center justify-between rounded-2xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] px-5 py-4"
                  >
                    <div className="flex items-center gap-5">
                      <span className="nums w-6 text-center text-[12px] uppercase tracking-[0.18em] text-white/40">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-[15px] font-medium text-white">
                          {getPlayerName(player)}
                        </p>
                        <p className="nums text-[12px] text-white/40">
                          In ${Number(player.total_buy_in ?? 0).toFixed(2)} ·
                          Out ${Number(player.cash_out ?? 0).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`nums text-[17px] font-semibold ${
                        net > 0
                          ? "text-[#4ADE80]"
                          : net < 0
                            ? "text-[#F87171]"
                            : "text-white/40"
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

          {orderedSuperlatives.length > 0 && (
            <section className="mt-16">
              <p className="eyebrow">Awards</p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {orderedSuperlatives.map((sup) => {
                  const player = players.find(
                    (p) => p.id === sup.session_player_id
                  );
                  const config = SUPERLATIVE_CONFIG[sup.type];
                  const color = superlativeAccent[sup.type];
                  return (
                    <div
                      key={sup.id}
                      className="rounded-2xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] p-5"
                    >
                      <p
                        className="text-[11px] uppercase tracking-[0.18em]"
                        style={{ color }}
                      >
                        {config?.title ?? sup.type}
                      </p>
                      <p className="mt-2 text-[14px] text-white/70">
                        {player ? getPlayerName(player) : "—"}
                        {sup.value != null && (
                          <span className="nums ml-2 text-white/40">
                            · {sup.type === "shark" ? "+" : ""}
                            {formatCurrency(Number(sup.value))}
                          </span>
                        )}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {transactions.length > 0 && (
            <section className="mt-16">
              <p className="eyebrow">
                Settlements
                {unpaidCount > 0 && (
                  <span className="ml-2 normal-case tracking-normal text-white/55">
                    · {unpaidCount} unpaid
                  </span>
                )}
              </p>
              <div className="mt-5 space-y-2">
                {transactions.map((t) => {
                  const from = players.find((p) => p.id === t.from_player_id);
                  const to = players.find((p) => p.id === t.to_player_id);
                  return (
                    <div
                      key={t.id}
                      className="flex items-center justify-between rounded-2xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] px-5 py-4"
                    >
                      <div className="flex items-center gap-2 text-[14px] text-white/70">
                        <span className="text-white">
                          {from ? getPlayerName(from) : "—"}
                        </span>
                        <span className="text-[#D4B370]">→</span>
                        <span className="text-white">
                          {to ? getPlayerName(to) : "—"}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="nums text-[15px] font-semibold text-white">
                          ${Number(t.amount).toFixed(2)}
                        </span>
                        {t.status === "paid" && (
                          <span className="rounded-md bg-[#4ADE80]/20 px-2 py-[2px] text-[10px] uppercase tracking-[0.18em] text-[#4ADE80]">
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

          <div className="mt-20 rounded-3xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] p-10 text-center md:p-14">
            <h3
              className="font-display text-white"
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
                fontWeight: 500,
                letterSpacing: "-0.015em",
              }}
            >
              Run your own home game.
            </h3>
            <p className="mx-auto mt-4 max-w-[420px] text-[14px] leading-[1.6] text-white/60">
              Straddled tracks every buy-in, settles the math, and drops a
              receipt your group chat will actually open.
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
