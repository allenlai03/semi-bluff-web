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

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0A0E0B",
          fontFamily: "sans-serif",
        }}
      >
        {/* Felt Header */}
        <div
          style={{
            background:
              "linear-gradient(135deg, #126B4E 0%, #0B4D37 55%, #063324 100%)",
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
              letterSpacing: "3px",
              color: "#C9A866",
              marginBottom: "12px",
              textTransform: "uppercase",
            }}
          >
            Straddled
          </div>
          <div
            style={{
              fontSize: "44px",
              fontWeight: 700,
              color: "#F5EFE2",
              marginBottom: "8px",
              fontFamily: "serif",
            }}
          >
            {group.name}
          </div>
          <div
            style={{
              fontSize: "16px",
              color: "rgba(245,239,226,0.72)",
            }}
          >
            {memberCount} member{memberCount !== 1 ? "s" : ""} ·{" "}
            {leaderboard.length} on the leaderboard
          </div>
        </div>

        {/* Leaderboard */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "28px 80px",
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
                padding: "14px 20px",
                borderBottom: "1px solid rgba(201,168,102,0.12)",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <span
                  style={{
                    color: "#C9A866",
                    fontSize: "18px",
                    fontWeight: 700,
                    width: "32px",
                    fontFamily: "serif",
                  }}
                >
                  {i + 1}
                </span>
                <span
                  style={{
                    color: "#F5EFE2",
                    fontSize: "22px",
                    fontWeight: 600,
                  }}
                >
                  {entry.displayName}
                </span>
              </div>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  fontFamily: "serif",
                  color:
                    entry.totalNet > 0
                      ? "#22C55E"
                      : entry.totalNet < 0
                        ? "#EF4444"
                        : "rgba(245,239,226,0.5)",
                }}
              >
                {entry.totalNet > 0 ? "+" : ""}
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
            fontSize: "13px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "rgba(245,239,226,0.5)",
            borderTop: "1px solid rgba(201,168,102,0.22)",
          }}
        >
          straddled.app
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
