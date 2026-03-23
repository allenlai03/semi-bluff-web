import { formatMoney } from "@/lib/utils";
import type { LeaderboardEntry } from "@/lib/types";

export function LeaderboardTable({ entries }: { entries: LeaderboardEntry[] }) {
  if (entries.length === 0) {
    return (
      <p className="py-12 text-center text-white/40">No sessions played yet.</p>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03]">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/[0.06] text-left text-xs uppercase tracking-wider text-white/40">
            <th className="px-5 py-3 font-medium">#</th>
            <th className="px-5 py-3 font-medium">Player</th>
            <th className="px-5 py-3 text-right font-medium">Net</th>
            <th className="hidden px-5 py-3 text-right font-medium sm:table-cell">Sessions</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, i) => (
            <tr
              key={entry.userId}
              className="border-b border-white/[0.04] transition hover:bg-white/[0.03]"
            >
              <td className="px-5 py-4 text-white/50">
                {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : i + 1}
              </td>
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  {entry.avatarUrl ? (
                    <img
                      src={entry.avatarUrl}
                      alt=""
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm text-white/60">
                      {entry.displayName.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span className="font-medium text-white">{entry.displayName}</span>
                </div>
              </td>
              <td className={`px-5 py-4 text-right font-mono font-semibold ${
                entry.totalNet > 0
                  ? "text-emerald-400"
                  : entry.totalNet < 0
                  ? "text-red-400"
                  : "text-white/50"
              }`}>
                {formatMoney(entry.totalNet)}
              </td>
              <td className="hidden px-5 py-4 text-right text-white/40 sm:table-cell">
                {entry.sessionsPlayed}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
