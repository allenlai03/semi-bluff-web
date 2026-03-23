export function formatMoney(amount: number): string {
  const abs = Math.abs(amount);
  const formatted = abs % 1 === 0 ? abs.toFixed(0) : abs.toFixed(2);
  if (amount > 0) return `+$${formatted}`;
  if (amount < 0) return `-$${formatted}`;
  return "$0";
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateTime(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export function getPlayerName(player: {
  is_guest: boolean;
  guest_name: string | null;
  profiles?: { display_name: string | null; username: string | null } | null;
}): string {
  if (player.is_guest) return player.guest_name ?? "Guest";
  return player.profiles?.display_name ?? player.profiles?.username ?? "Unknown";
}
