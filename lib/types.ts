export interface Group {
  id: string;
  name: string;
  slug: string;
  avatar_url: string | null;
  invite_code: string;
  created_by: string;
  created_at: string;
}

export interface Profile {
  id: string;
  username: string | null;
  display_name: string | null;
  avatar_url: string | null;
}

export interface Session {
  id: string;
  group_id: string;
  host_id: string;
  name: string;
  status: string;
  buy_in_amount: number;
  started_at: string;
  closed_at: string | null;
  created_at: string;
}

export interface SessionPlayer {
  id: string;
  session_id: string;
  user_id: string | null;
  guest_name: string | null;
  is_guest: boolean;
  initial_buy_in: number;
  total_buy_in: number;
  cash_out: number;
  net_result: number;
  created_at: string;
  profiles?: Profile | null;
}

export interface SessionSuperlative {
  id: string;
  session_id: string;
  session_player_id: string;
  type: string;
  value: number;
}

export interface Transaction {
  id: string;
  session_id: string;
  from_player_id: string;
  to_player_id: string;
  amount: number;
  status: string;
  paid_at: string | null;
}

export interface GroupMember {
  id: string;
  group_id: string;
  user_id: string;
  role: string;
  joined_at: string;
}

export interface LeaderboardEntry {
  userId: string;
  displayName: string;
  avatarUrl: string | null;
  totalNet: number;
  sessionsPlayed: number;
}

export const SUPERLATIVE_LABELS: Record<string, { label: string; emoji: string; description: string }> = {
  shark: { label: "Shark", emoji: "🦈", description: "Biggest winner" },
  atm: { label: "ATM", emoji: "🏧", description: "Biggest loser" },
  rock: { label: "Rock", emoji: "🪨", description: "Tightest player" },
  swing: { label: "Swing", emoji: "🎢", description: "Wildest swings" },
};
