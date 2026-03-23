import { cn } from "@/utils/cn";
import type { SuperlativeType, SessionSuperlative, SessionPlayerWithProfile } from "@/types";
import { SUPERLATIVE_CONFIG } from "@/types";
import { getPlayerName, formatCurrency } from "@/utils/format";

type SuperlativeCardProps = {
  superlative: SessionSuperlative;
  player: SessionPlayerWithProfile | undefined;
};

const BORDER_COLORS: Record<SuperlativeType, string> = {
  shark: "border-l-positive",
  atm: "border-l-negative",
  rock: "border-l-text-secondary",
  swing: "border-l-warning",
};

const getDescription = (
  type: SuperlativeType,
  playerName: string,
  value: number
): string => {
  switch (type) {
    case "shark":
      return `${playerName} swam away with ${formatCurrency(value)}`;
    case "atm":
      return value === 1
        ? `${playerName} bought in once and kept bleeding`
        : `${playerName} reloaded ${value} times. Generosity is a virtue.`;
    case "rock":
      return value >= 60
        ? `${playerName} went ${Math.floor(value / 60)}h without a rebuy. Stone cold.`
        : `${playerName} sat on chips for ${value} min without touching them`;
    case "swing":
      return `${playerName}'s stack moved $${value.toFixed(2)} from start to finish`;
  }
};

export const SuperlativeCard = ({
  superlative,
  player,
}: SuperlativeCardProps) => {
  const config = SUPERLATIVE_CONFIG[superlative.type as SuperlativeType];
  if (!config) return null;

  const playerName = player ? getPlayerName(player) : "Unknown";
  const description = getDescription(
    superlative.type as SuperlativeType,
    playerName,
    superlative.value
  );

  return (
    <div
      className={cn(
        "bg-surface-primary rounded-lg p-md border-l-[3px]",
        BORDER_COLORS[superlative.type as SuperlativeType]
      )}
    >
      <div className="flex items-center gap-sm mb-xs">
        <span className="text-[20px]">{config.emoji}</span>
        <span className="font-semibold text-[15px] text-text-primary">
          {config.title}
        </span>
      </div>
      <p className="text-[15px] text-text-secondary">{description}</p>
    </div>
  );
};
