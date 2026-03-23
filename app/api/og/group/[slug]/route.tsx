import { ImageResponse } from "@vercel/og";
import { getGroupBySlug, getGroupLeaderboard, getGroupMemberCount } from "@/lib/queries";

export const runtime = "edge";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const group = await getGroupBySlug(slug);
  if (!group) {
    return new Response("Not found", { status: 404 });
  }

  const [leaderboard, memberCount] = await Promise.all([
    getGroupLeaderboard(group.id),
    getGroupMemberCount(group.id),
  ]);

  const top5 = leaderboard.slice(0, 5);

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
        {/* Top row: branding */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
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

        {/* Group name + meta */}
        <div style={{ marginBottom: "36px", display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "42px", fontWeight: 700, color: "#FFFFFF", marginBottom: "8px" }}>
            {group.name}
          </div>
          <div style={{ fontSize: "18px", color: "rgba(255,255,255,0.35)" }}>
            {memberCount} member{memberCount !== 1 ? "s" : ""} · Leaderboard
          </div>
        </div>

        {/* Top 5 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", flex: 1 }}>
          {top5.map((entry, i) => {
            const net = entry.totalNet;
            return (
              <div
                key={entry.userId}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 20px",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderRadius: i === 0 ? "16px 16px 2px 2px" : i === top5.length - 1 ? "2px 2px 16px 16px" : "2px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "16px", width: "28px" }}>
                    {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `${i + 1}`}
                  </span>
                  <span style={{ color: "#FFFFFF", fontSize: "20px", fontWeight: 600 }}>
                    {entry.displayName}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "15px" }}>
                    {entry.sessionsPlayed} game{entry.sessionsPlayed !== 1 ? "s" : ""}
                  </span>
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
              </div>
            );
          })}
        </div>

        {/* Footer */}
        {leaderboard.length > 5 && (
          <div style={{ marginTop: "12px", color: "rgba(255,255,255,0.25)", fontSize: "14px" }}>
            +{leaderboard.length - 5} more player{leaderboard.length - 5 !== 1 ? "s" : ""}
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    }
  );
}
