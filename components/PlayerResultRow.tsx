import { cn } from "@/utils/cn";
import type { SessionPlayerWithProfile } from "@/types";
import { getPlayerName, formatNet } from "@/utils/format";

type PlayerResultRowProps = {
  player: SessionPlayerWithProfile;
  rank: number;
};

export const PlayerResultRow = ({ player, rank }: PlayerResultRowProps) => {
  const name = getPlayerName(player);
  const net = Number(player.net_result ?? 0);
  const netColor =
    net > 0 ? "text-positive" : net < 0 ? "text-negative" : "text-text-secondary";

  return (
    <div className="bg-surface-primary rounded-md p-md mb-xs flex items-center justify-between">
      <div className="flex items-center gap-sm">
        <span className="text-[13px] text-text-tertiary w-5 text-center">
          {rank}
        </span>
        <span className="text-[15px] text-text-primary">{name}</span>
        {player.is_guest && (
          <span className="bg-surface-elevated rounded-[4px] px-xs py-[2px] text-[11px] font-medium text-text-tertiary uppercase">
            Guest
          </span>
        )}
      </div>
      <span className={cn("font-semibold text-[15px]", netColor)}>
        {formatNet(net)}
      </span>
    </div>
  );
};
