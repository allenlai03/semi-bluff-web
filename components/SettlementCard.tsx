import { cn } from "@/utils/cn";
import type { Transaction, SessionPlayerWithProfile } from "@/types";
import { getPlayerName } from "@/utils/format";

type SettlementCardProps = {
  transaction: Transaction;
  players: SessionPlayerWithProfile[];
};

export const SettlementCard = ({
  transaction,
  players,
}: SettlementCardProps) => {
  const fromPlayer = players.find(
    (p) => p.id === transaction.from_player_id
  );
  const toPlayer = players.find(
    (p) => p.id === transaction.to_player_id
  );
  const isPaid = transaction.status === "paid";

  return (
    <div
      className={cn(
        "bg-surface-primary rounded-lg p-md border",
        isPaid ? "border-positive opacity-60" : "border-border"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-[15px] text-text-primary truncate">
            {fromPlayer ? getPlayerName(fromPlayer) : "?"}
          </p>
          <p className="text-[13px] text-text-secondary">
            pays{" "}
            <span className="text-text-primary">
              {toPlayer ? getPlayerName(toPlayer) : "?"}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-sm">
          <span
            className={cn(
              "font-semibold text-[20px]",
              isPaid ? "text-positive" : "text-warning"
            )}
          >
            ${Number(transaction.amount).toFixed(2)}
          </span>
          {isPaid && (
            <span className="bg-positive rounded-sm px-sm py-xs text-[11px] font-medium tracking-[0.5px] text-text-inverse uppercase">
              Paid
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
