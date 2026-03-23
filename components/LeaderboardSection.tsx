import type { LeaderboardEntry } from "@/types";
import { LeaderboardRow } from "./LeaderboardRow";

type LeaderboardSectionProps = {
  entries: LeaderboardEntry[];
};

export const LeaderboardSection = ({ entries }: LeaderboardSectionProps) => {
  if (entries.length === 0) {
    return (
      <div className="bg-surface-primary border border-border rounded-lg p-md">
        <p className="text-[15px] text-text-secondary text-center py-lg">
          No closed sessions yet. Play one to see the leaderboard!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-surface-primary border border-border rounded-lg overflow-hidden">
      {entries.map((entry, i) => (
        <LeaderboardRow key={entry.userId} entry={entry} rank={i + 1} />
      ))}
    </div>
  );
};
