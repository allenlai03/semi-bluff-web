import { cn } from "@/utils/cn";
import type { LeaderboardEntry } from "@/types";
import { formatCurrency } from "@/utils/format";

type LeaderboardRowProps = {
  entry: LeaderboardEntry;
  rank: number;
};

const RANK_COLORS: Record<number, string> = {
  1: "text-medal-gold",
  2: "text-medal-silver",
  3: "text-medal-bronze",
};

export const LeaderboardRow = ({ entry, rank }: LeaderboardRowProps) => {
  const rankColor = RANK_COLORS[rank] ?? "text-text-tertiary";
  const netColor = entry.totalNet >= 0 ? "text-positive" : "text-negative";

  return (
    <div className="flex items-center py-sm px-md border-b border-divider last:border-b-0">
      <span
        className={cn(
          "w-7 text-center font-semibold text-[15px]",
          rankColor
        )}
      >
        {rank}
      </span>
      <div className="w-9 h-9 rounded-full bg-accent-muted flex items-center justify-center mx-sm">
        {entry.avatarUrl ? (
          <img
            src={entry.avatarUrl}
            alt=""
            className="w-9 h-9 rounded-full object-cover"
          />
        ) : (
          <span className="font-semibold text-[15px] text-accent-secondary">
            {entry.displayName.charAt(0).toUpperCase()}
          </span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[15px] text-text-primary truncate">
          {entry.displayName}
        </p>
        <p className="text-[13px] text-text-tertiary">
          {entry.sessionCount} {entry.sessionCount === 1 ? "session" : "sessions"}
        </p>
      </div>
      <span className={cn("font-semibold text-[15px]", netColor)}>
        {formatCurrency(entry.totalNet)}
      </span>
    </div>
  );
};
