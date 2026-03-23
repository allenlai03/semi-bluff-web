// Currency with sign prefix
export const formatCurrency = (n: number): string => {
  const prefix = n >= 0 ? "+$" : "-$";
  return `${prefix}${Math.abs(n).toFixed(2)}`;
};

// Net result without $ (used on receipt)
export const formatNet = (n: number): string =>
  `${n >= 0 ? "+" : ""}${n.toFixed(2)}`;

// Date
export const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

// Date with time (for audit log)
export const formatDateTime = (iso: string): string =>
  new Date(iso).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

// Player name resolution
export const getPlayerName = (player: {
  is_guest: boolean;
  guest_name: string | null;
  profiles?: { display_name: string | null; username: string | null } | null;
}): string => {
  if (player.is_guest) return player.guest_name ?? "Guest";
  return player.profiles?.display_name ?? player.profiles?.username ?? "Unknown";
};
