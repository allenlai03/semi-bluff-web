// ─── Enums ──────────────────────────────────────────────

export type SessionStatus = "lobby" | "active" | "cashing_out" | "closed";
export type GroupRole = "admin" | "member";
export type TransactionStatus = "unpaid" | "paid";
export type SuperlativeType =
  | "shark"
  | "atm"
  | "rock"
  | "swing"
  | "whale"
  | "phoenix"
  | "iceman"
  | "grinder";

// ─── Database Row Types ─────────────────────────────────

export type Profile = {
  id: string;
  username: string;
  display_name: string | null;
  avatar_url: string | null;
  created_at: string;
};

export type Group = {
  id: string;
  name: string;
  slug: string;
  invite_code: string;
  created_by: string;
  created_at: string;
};

export type GroupMember = {
  id: string;
  group_id: string;
  user_id: string;
  role: GroupRole;
  joined_at: string;
};

export type Session = {
  id: string;
  group_id: string;
  host_id: string;
  name: string;
  status: SessionStatus;
  buy_in_amount: number;
  started_at: string | null;
  closed_at: string | null;
};

export type SessionPlayer = {
  id: string;
  session_id: string;
  user_id: string | null;
  guest_name: string | null;
  is_guest: boolean;
  claim_token: string | null;
  initial_buy_in: number;
  total_buy_in: number;
  cash_out: number | null;
  net_result: number | null;
};

export type SessionPlayerWithProfile = SessionPlayer & {
  profiles: Profile | null;
};

export type Transaction = {
  id: string;
  session_id: string;
  from_player_id: string;
  to_player_id: string;
  amount: number;
  status: TransactionStatus;
  paid_at: string | null;
};

export type SessionSuperlative = {
  id: string;
  session_id: string;
  session_player_id: string;
  type: SuperlativeType;
  value: number;
};

export type SessionReceipt = {
  id: string;
  session_id: string;
  image_url: string | null;
  og_image_url: string | null;
  created_at: string;
};

// ─── Joined / Extended Types ────────────────────────────

export type LeaderboardEntry = {
  userId: string;
  displayName: string;
  avatarUrl: string | null;
  totalNet: number;
  sessionCount: number;
};

export type SessionWithStats = Session & {
  playerCount: number;
  biggestWinner: { name: string; net: number } | null;
};

// ─── Superlative Labels ─────────────────────────────────

export const SUPERLATIVE_CONFIG: Record<
  SuperlativeType,
  { emoji: string; title: string; color: string }
> = {
  shark: { emoji: "🦈", title: "The Shark", color: "#22C55E" },
  atm: { emoji: "🏧", title: "The ATM", color: "#EF4444" },
  rock: { emoji: "🪨", title: "The Rock", color: "#A0A0A0" },
  swing: { emoji: "🎢", title: "The Swing", color: "#F59E0B" },
  whale: { emoji: "🐋", title: "The Whale", color: "#C9A866" },
  phoenix: { emoji: "🔥", title: "The Phoenix", color: "#F59E0B" },
  iceman: { emoji: "❄️", title: "The Iceman", color: "#7DD3FC" },
  grinder: { emoji: "⏱️", title: "The Grinder", color: "#A0A0A0" },
};
