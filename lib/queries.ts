import { supabase } from "./supabase";
import type {
  Group,
  Session,
  SessionPlayerWithProfile,
  SessionSuperlative,
  Transaction,
  LeaderboardEntry,
  Profile,
  SessionWithStats,
} from "@/types";
import { getPlayerName } from "@/utils/format";

// ── Group ──────────────────────────────────────────────

export async function fetchGroupBySlug(slug: string): Promise<Group | null> {
  const { data } = await supabase
    .from("groups")
    .select("*")
    .eq("slug", slug)
    .single();
  return data;
}

export async function fetchGroupByInviteCode(
  code: string
): Promise<Group | null> {
  const { data } = await supabase
    .from("groups")
    .select("*")
    .eq("invite_code", code)
    .single();
  return data;
}

export async function fetchGroupMemberCount(groupId: string): Promise<number> {
  const { count } = await supabase
    .from("group_members")
    .select("*", { count: "exact", head: true })
    .eq("group_id", groupId);
  return count ?? 0;
}

// ── Leaderboard ────────────────────────────────────────

export async function fetchLeaderboard(
  groupId: string
): Promise<LeaderboardEntry[]> {
  const { data: sessions } = await supabase
    .from("sessions")
    .select("id")
    .eq("group_id", groupId)
    .eq("status", "closed");

  if (!sessions || sessions.length === 0) return [];

  const sessionIds = sessions.map((s) => s.id);

  const { data: players } = await supabase
    .from("session_players")
    .select("user_id, guest_name, is_guest, net_result")
    .in("session_id", sessionIds);

  if (!players) return [];

  const userIds = [
    ...new Set(players.filter((p) => p.user_id).map((p) => p.user_id!)),
  ];
  const { data: profiles } = await supabase
    .from("profiles")
    .select("id, username, display_name, avatar_url")
    .in("id", userIds);

  const profileMap = new Map<string, Profile>();
  profiles?.forEach((p) => profileMap.set(p.id, p as Profile));

  const aggregated = new Map<string, LeaderboardEntry>();

  for (const player of players) {
    const key = player.is_guest
      ? `guest:${player.guest_name}`
      : player.user_id!;

    const existing = aggregated.get(key);
    if (existing) {
      existing.totalNet += Number(player.net_result ?? 0);
      existing.sessionCount += 1;
    } else {
      const profile = player.user_id
        ? profileMap.get(player.user_id)
        : null;
      aggregated.set(key, {
        userId: key,
        displayName: player.is_guest
          ? player.guest_name ?? "Guest"
          : profile?.display_name ?? profile?.username ?? "Unknown",
        avatarUrl: profile?.avatar_url ?? null,
        totalNet: Number(player.net_result ?? 0),
        sessionCount: 1,
      });
    }
  }

  return Array.from(aggregated.values()).sort(
    (a, b) => b.totalNet - a.totalNet
  );
}

// ── Session ────────────────────────────────────────────

export async function fetchSession(id: string): Promise<Session | null> {
  const { data } = await supabase
    .from("sessions")
    .select("*")
    .eq("id", id)
    .eq("status", "closed")
    .single();
  return data;
}

export async function fetchSessionPlayers(
  sessionId: string
): Promise<SessionPlayerWithProfile[]> {
  const { data } = await supabase
    .from("session_players")
    .select("*, profiles:user_id(id, username, display_name, avatar_url)")
    .eq("session_id", sessionId)
    .order("net_result", { ascending: false });
  return (data ?? []) as SessionPlayerWithProfile[];
}

export async function fetchSessionSuperlatives(
  sessionId: string
): Promise<SessionSuperlative[]> {
  const { data } = await supabase
    .from("session_superlatives")
    .select("*")
    .eq("session_id", sessionId);
  return (data ?? []) as SessionSuperlative[];
}

export async function fetchSessionTransactions(
  sessionId: string
): Promise<Transaction[]> {
  const { data } = await supabase
    .from("transactions")
    .select("*")
    .eq("session_id", sessionId);
  return (data ?? []) as Transaction[];
}

export async function fetchGroupForSession(
  groupId: string
): Promise<Group | null> {
  const { data } = await supabase
    .from("groups")
    .select("*")
    .eq("id", groupId)
    .single();
  return data;
}

// ── Session with details (parallel fetch) ──────────────

export async function fetchSessionWithDetails(sessionId: string) {
  const session = await fetchSession(sessionId);
  if (!session) return null;

  const [players, superlatives, transactions, group] = await Promise.all([
    fetchSessionPlayers(session.id),
    fetchSessionSuperlatives(session.id),
    fetchSessionTransactions(session.id),
    fetchGroupForSession(session.group_id),
  ]);

  const totalPot = players.reduce(
    (sum, p) => sum + Number(p.total_buy_in ?? 0),
    0
  );

  // Find shark for OG description
  const sharkSuperlative = superlatives.find((s) => s.type === "shark");
  const sharkPlayer = sharkSuperlative
    ? players.find((p) => p.id === sharkSuperlative.session_player_id)
    : null;

  return {
    session,
    players,
    superlatives,
    transactions,
    group,
    totalPot,
    sharkName: sharkPlayer ? getPlayerName(sharkPlayer) : null,
    sharkNet: sharkSuperlative?.value ?? 0,
  };
}

// ── Recent sessions for group ──────────────────────────

export async function fetchRecentSessions(
  groupId: string,
  limit = 10
): Promise<SessionWithStats[]> {
  const { data: sessions } = await supabase
    .from("sessions")
    .select("*")
    .eq("group_id", groupId)
    .eq("status", "closed")
    .order("closed_at", { ascending: false })
    .limit(limit);

  if (!sessions || sessions.length === 0) return [];

  const results: SessionWithStats[] = [];

  for (const session of sessions) {
    const { data: players } = await supabase
      .from("session_players")
      .select("*, profiles:user_id(id, username, display_name, avatar_url)")
      .eq("session_id", session.id)
      .order("net_result", { ascending: false });

    const playerList = (players ?? []) as SessionPlayerWithProfile[];
    const topPlayer = playerList[0];

    results.push({
      ...session,
      playerCount: playerList.length,
      biggestWinner: topPlayer
        ? {
            name: getPlayerName(topPlayer),
            net: Number(topPlayer.net_result ?? 0),
          }
        : null,
    });
  }

  return results;
}
