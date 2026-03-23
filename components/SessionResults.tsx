import { formatMoney, getPlayerName } from "@/lib/utils";
import { SUPERLATIVE_LABELS } from "@/lib/types";
import type { SessionPlayer, SessionSuperlative, Transaction } from "@/lib/types";

function PlayerRow({ player, rank, superlatives }: {
  player: SessionPlayer;
  rank: number;
  superlatives: SessionSuperlative[];
}) {
  const name = getPlayerName(player);
  const net = Number(player.net_result ?? 0);
  const awards = superlatives.filter((s) => s.session_player_id === player.id);

  return (
    <div className="flex items-center justify-between border-b border-white/[0.04] px-5 py-4 last:border-0">
      <div className="flex items-center gap-3">
        <span className="w-6 text-center text-white/40">
          {rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : rank}
        </span>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-white">{name}</span>
            {player.is_guest && (
              <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-white/40">
                Guest
              </span>
            )}
          </div>
          {awards.length > 0 && (
            <div className="mt-0.5 flex gap-1.5">
              {awards.map((a) => {
                const sup = SUPERLATIVE_LABELS[a.type];
                return sup ? (
                  <span key={a.id} className="text-xs text-white/40" title={sup.description}>
                    {sup.emoji} {sup.label}
                  </span>
                ) : null;
              })}
            </div>
          )}
        </div>
      </div>
      <div className="text-right">
        <div className={`font-mono font-semibold ${
          net > 0 ? "text-emerald-400" : net < 0 ? "text-red-400" : "text-white/50"
        }`}>
          {formatMoney(net)}
        </div>
        <div className="mt-0.5 text-xs text-white/30">
          In: ${Number(player.total_buy_in).toFixed(0)} · Out: ${Number(player.cash_out).toFixed(0)}
        </div>
      </div>
    </div>
  );
}

export function SessionResults({ players, superlatives }: {
  players: SessionPlayer[];
  superlatives: SessionSuperlative[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03]">
      <div className="border-b border-white/[0.06] px-5 py-3">
        <h2 className="text-sm font-medium uppercase tracking-wider text-white/40">Results</h2>
      </div>
      {players.map((player, i) => (
        <PlayerRow
          key={player.id}
          player={player}
          rank={i + 1}
          superlatives={superlatives}
        />
      ))}
    </div>
  );
}

export function Settlements({ transactions, players }: {
  transactions: Transaction[];
  players: SessionPlayer[];
}) {
  if (transactions.length === 0) return null;

  const playerMap = new Map(players.map((p) => [p.id, p]));

  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03]">
      <div className="border-b border-white/[0.06] px-5 py-3">
        <h2 className="text-sm font-medium uppercase tracking-wider text-white/40">Settlements</h2>
      </div>
      {transactions.map((t) => {
        const from = playerMap.get(t.from_player_id);
        const to = playerMap.get(t.to_player_id);
        return (
          <div
            key={t.id}
            className="flex items-center justify-between border-b border-white/[0.04] px-5 py-3 last:border-0"
          >
            <div className="text-sm text-white/70">
              <span className="text-white">{from ? getPlayerName(from) : "?"}</span>
              {" → "}
              <span className="text-white">{to ? getPlayerName(to) : "?"}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono font-medium text-white">
                ${Number(t.amount).toFixed(0)}
              </span>
              {t.status === "paid" ? (
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-400">
                  Paid
                </span>
              ) : (
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium text-white/40">
                  Pending
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
