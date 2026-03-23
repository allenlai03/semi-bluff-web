import { supabase } from "./supabase";
import type {
  Group,
  Session,
  SessionPlayer,
  SessionSuperlative,
  Transaction,
  GroupMember,
  LeaderboardEntry,
  Profile,
} from "./types";

// ── Group ──────────────────────────────────────────────

export async function getGroupBySlug(slug: string): Promise<Group | null> {
  const { data } = await supabase
    .from("groups")
    .select("*")
    .eq("slug", slug)
    .single();
  return data;
}

export async function getGroupByInviteCode(code: string): Promise<Group | null> {
  const { data } = await supabase
    .from("groups")
    .select("*")
    .eq("invite_code", code)
    .single();
  return data;
}

export async function getGroupMemberCount(groupId: string): Promise<number> {
  const { count } = await supabase
    .from("group_members")
    .select("*", { count: "exact", head: true })
    .eq("group_id", groupId);
  return count ?? 0;
}

// ── Leaderboard ────────────────────────────────────────

export async function getGroupLeaderboard(groupId: string): Promise<LeaderboardEntry[]> {
  // Get all closed sessions for this group
  const { data: sessions } = await supabase
    .from("sessions")
    .select("id")
    .eq("group_id", groupId)
    .eq("status", "closed");

  if (!sessions || sessions.length === 0) return [];

  const sessionIds = sessions.map((s) => s.id);

  // Get all players from those sessions
  const { data: players } = await supabase
    .from("session_players")
    .select("user_id, guest_name, is_guest, net_result")
    .in("session_id", sessionIds);

  if (!players) return [];

  // Get profiles for registered users
  const userIds = [...new Set(players.filter((p) => p.user_id).map((p) => p.user_id!))];
  const { data: profiles } = await supabase
    .from("profiles")
    .select("id, username, display_name, avatar_url")
    .in("id", userIds);

  const profileMap = new Map<string, Profile>();
  profiles?.forEach((p) => profileMap.set(p.id, p));

  // Aggregate by player
  const aggregated = new Map<string, LeaderboardEntry>();

  for (const player of players) {
    const key = player.is_guest
      ? `guest:${player.guest_name}`
      : player.user_id!;

    const existing = aggregated.get(key);
    if (existing) {
      existing.totalNet += Number(player.net_result ?? 0);
      existing.sessionsPlayed += 1;
    } else {
      const profile = player.user_id ? profileMap.get(player.user_id) : null;
      aggregated.set(key, {
        userId: key,
        displayName: player.is_guest
          ? player.guest_name ?? "Guest"
          : profile?.display_name ?? profile?.username ?? "Unknown",
        avatarUrl: profile?.avatar_url ?? null,
        totalNet: Number(player.net_result ?? 0),
        sessionsPlayed: 1,
      });
    }
  }

  return Array.from(aggregated.values()).sort((a, b) => b.totalNet - a.totalNet);
}

// ── Session ────────────────────────────────────────────

export async function getSession(id: string): Promise<Session | null> {
  const { data } = await supabase
    .from("sessions")
    .select("*")
    .eq("id", id)
    .eq("status", "closed")
    .single();
  return data;
}

export async function getSessionPlayers(sessionId: string): Promise<SessionPlayer[]> {
  const { data } = await supabase
    .from("session_players")
    .select("*, profiles:user_id(id, username, display_name, avatar_url)")
    .eq("session_id", sessionId)
    .order("net_result", { ascending: false });
  return data ?? [];
}

export async function getSessionSuperlatives(sessionId: string): Promise<SessionSuperlative[]> {
  const { data } = await supabase
    .from("session_superlatives")
    .select("*")
    .eq("session_id", sessionId);
  return data ?? [];
}

export async function getSessionTransactions(sessionId: string): Promise<Transaction[]> {
  const { data } = await supabase
    .from("transactions")
    .select("*")
    .eq("session_id", sessionId);
  return data ?? [];
}

export async function getGroupForSession(groupId: string): Promise<Group | null> {
  const { data } = await supabase
    .from("groups")
    .select("*")
    .eq("id", groupId)
    .single();
  return data;
}
