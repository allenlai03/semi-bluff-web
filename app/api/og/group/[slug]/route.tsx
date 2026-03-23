import { ImageResponse } from "@vercel/og";
import {
  fetchGroupBySlug,
  fetchLeaderboard,
  fetchGroupMemberCount,
} from "@/lib/queries";
import { formatCurrency } from "@/utils/format";

export const runtime = "edge";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const group = await fetchGroupBySlug(slug);
  if (!group) {
    return new Response("Not found", { status: 404 });
  }

  const [leaderboard, memberCount] = await Promise.all([
    fetchLeaderboard(group.id),
    fetchGroupMemberCount(group.id),
  ]);

  const top5 = leaderboard.slice(0, 5);
  const sessionCount = leaderboard.reduce(
    (max, e) => max + e.sessionCount,
    0
  );
  // Deduplicate: total unique sessions is harder to get, use a rough count
  const totalSessions = Math.round(sessionCount / Math.max(leaderboard.length, 1));

  const medalEmojis: Record<number, string> = { 0: "🥇", 1: "🥈", 2: "🥉" };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0D0D0D",
          fontFamily: "sans-serif",
        }}
      >
        {/* Purple Header */}
        <div
          style={{
            backgroundColor: "#7C3AED",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 60px 32px",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              letterSpacing: "2px",
              color: "rgba(255,255,255,0.7)",
              marginBottom: "8px",
              textTransform: "uppercase",
            }}
          >
            Semi Bluff
          </div>
          <div
            style={{
              fontSize: "36px",
              fontWeight: 800,
              color: "#FFFFFF",
              marginBottom: "6px",
            }}
          >
            {group.name}
          </div>
          <div
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {memberCount} member{memberCount !== 1 ? "s" : ""}
          </div>
        </div>

        {/* Leaderboard Body */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "24px 60px",
            gap: "4px",
          }}
        >
          {top5.map((entry, i) => (
            <div
              key={entry.userId}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 20px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <span style={{ fontSize: "20px", width: "32px" }}>
                  {medalEmojis[i] ?? `${i + 1}`}
                </span>
                <span
                  style={{
                    color: "#FFFFFF",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  {entry.displayName}
                </span>
              </div>
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color:
                    entry.totalNet > 0
                      ? "#22C55E"
                      : entry.totalNet < 0
                        ? "#EF4444"
                        : "rgba(255,255,255,0.4)",
                }}
              >
                {formatCurrency(entry.totalNet)}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "16px",
            fontSize: "14px",
            color: "#666666",
          }}
        >
          semi-bluff.app
        </div>
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
