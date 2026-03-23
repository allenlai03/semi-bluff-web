import type { SessionWithStats } from "@/types";
import { formatDate, formatCurrency } from "@/utils/format";

type SessionCardProps = {
  session: SessionWithStats;
};

export const SessionCard = ({ session }: SessionCardProps) => {
  return (
    <a
      href={`/s/${session.id}`}
      className="block bg-surface-primary border border-border rounded-lg p-md transition hover:bg-surface-secondary"
    >
      <div className="flex items-center justify-between mb-xs">
        <span className="font-semibold text-[17px] text-text-primary truncate">
          {session.name}
        </span>
        <span className="text-[11px] font-medium tracking-[0.5px] text-text-tertiary bg-bg-tertiary rounded-sm px-sm py-xs uppercase">
          Closed
        </span>
      </div>
      <div className="flex items-center gap-md text-[13px] text-text-secondary">
        <span>{formatDate(session.closed_at ?? session.started_at ?? "")}</span>
        <span>·</span>
        <span>{session.playerCount} players</span>
        {session.biggestWinner && session.biggestWinner.net > 0 && (
          <>
            <span>·</span>
            <span className="text-positive">
              🦈 {formatCurrency(session.biggestWinner.net)}
            </span>
          </>
        )}
      </div>
    </a>
  );
};
