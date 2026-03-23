import { ImageResponse } from "@vercel/og";
import { getSession, getSessionPlayers, getSessionSuperlatives, getGroupForSession } from "@/lib/queries";
import { getPlayerName } from "@/lib/utils";
import { SUPERLATIVE_LABELS } from "@/lib/types";

export const runtime = "edge";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const session = await getSession(id);
  if (!session) {
    return new Response("Not found", { status: 404 });
  }

  const [players, superlatives, group] = await Promise.all([
    getSessionPlayers(session.id),
    getSessionSuperlatives(session.id),
    getGroupForSession(session.group_id),
  ]);

  const totalPot = players.reduce((sum, p) => sum + Number(p.total_buy_in ?? 0), 0);
  const topPlayers = players.slice(0, 5);
  const date = new Date(session.started_at).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200",
          height: "630",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0D0D0D",
          padding: "60px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row: branding + group name */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                backgroundColor: "#7C3AED",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              🃏
            </div>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "18px" }}>Semi Bluff</span>
          </div>
          {group && (
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "16px" }}>{group.name}</span>
          )}
        </div>

        {/* Session title + meta */}
        <div style={{ marginBottom: "36px", display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "42px", fontWeight: 700, color: "#FFFFFF", marginBottom: "8px" }}>
            {session.name}
          </div>
          <div style={{ fontSize: "18px", color: "rgba(255,255,255,0.35)", display: "flex", gap: "16px" }}>
            <span>{date}</span>
            <span>·</span>
            <span>{players.length} players</span>
            <span>·</span>
            <span>${totalPot.toFixed(0)} pot</span>
          </div>
        </div>

        {/* Player results */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", flex: 1 }}>
          {topPlayers.map((player, i) => {
            const net = Number(player.net_result ?? 0);
            const awards = superlatives.filter((s) => s.session_player_id === player.id);
            const awardText = awards
              .map((a) => SUPERLATIVE_LABELS[a.type]?.emoji ?? "")
              .join(" ");

            return (
              <div
                key={player.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 20px",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderRadius: i === 0 ? "16px 16px 2px 2px" : i === topPlayers.length - 1 ? "2px 2px 16px 16px" : "2px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "16px", width: "28px" }}>
                    {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `${i + 1}`}
                  </span>
                  <span style={{ color: "#FFFFFF", fontSize: "20px", fontWeight: 600 }}>
                    {getPlayerName(player)}
                  </span>
                  {awardText && (
                    <span style={{ fontSize: "16px" }}>{awardText}</span>
                  )}
                </div>
                <span
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: net > 0 ? "#22C55E" : net < 0 ? "#EF4444" : "rgba(255,255,255,0.4)",
                  }}
                >
                  {net > 0 ? "+" : ""}{net < 0 ? "-" : ""}${Math.abs(net).toFixed(0)}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        {players.length > 5 && (
          <div style={{ marginTop: "12px", color: "rgba(255,255,255,0.25)", fontSize: "14px" }}>
            +{players.length - 5} more player{players.length - 5 !== 1 ? "s" : ""}
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    }
  );
}
