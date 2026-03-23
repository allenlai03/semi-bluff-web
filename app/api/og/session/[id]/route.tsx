import { ImageResponse } from "@vercel/og";
import {
  fetchSession,
  fetchSessionPlayers,
  fetchSessionSuperlatives,
} from "@/lib/queries";
import { getPlayerName, formatCurrency, formatDate } from "@/utils/format";
import { SUPERLATIVE_CONFIG } from "@/types";
import type { SuperlativeType } from "@/types";

export const runtime = "edge";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const session = await fetchSession(id);
  if (!session) {
    return new Response("Not found", { status: 404 });
  }

  const [players, superlatives] = await Promise.all([
    fetchSessionPlayers(session.id),
    fetchSessionSuperlatives(session.id),
  ]);

  const totalPot = players.reduce(
    (sum, p) => sum + Number(p.total_buy_in ?? 0),
    0
  );
  const date = formatDate(session.closed_at ?? session.started_at ?? "");
  const topPlayers = players.slice(0, 5);

  // Order superlatives
  const orderedTypes: SuperlativeType[] = ["shark", "atm", "rock", "swing"];
  const orderedSuperlatives = orderedTypes
    .map((type) => {
      const sup = superlatives.find((s) => s.type === type);
      if (!sup) return null;
      const player = players.find((p) => p.id === sup.session_player_id);
      const config = SUPERLATIVE_CONFIG[type];
      let desc = "";
      switch (type) {
        case "shark":
          desc = `${player ? getPlayerName(player) : "?"} ${formatCurrency(sup.value)}`;
          break;
        case "atm":
          desc = `${player ? getPlayerName(player) : "?"} reloaded ${sup.value}x`;
          break;
        case "rock":
          desc =
            sup.value >= 60
              ? `${player ? getPlayerName(player) : "?"} (${Math.floor(sup.value / 60)}h gap)`
              : `${player ? getPlayerName(player) : "?"} (${sup.value}min gap)`;
          break;
        case "swing":
          desc = `${player ? getPlayerName(player) : "?"} ±$${sup.value.toFixed(2)}`;
          break;
      }
      return { ...config, desc };
    })
    .filter((s): s is NonNullable<typeof s> => s !== null);

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
            padding: "32px 60px 24px",
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
              fontSize: "32px",
              fontWeight: 800,
              color: "#FFFFFF",
              marginBottom: "6px",
            }}
          >
            {session.name}
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.7)",
              marginBottom: "12px",
            }}
          >
            {date}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(255,255,255,0.15)",
              borderRadius: "20px",
              padding: "6px 16px",
              fontSize: "14px",
              color: "#FFFFFF",
            }}
          >
            💰 ${totalPot.toFixed(2)} pot
          </div>
        </div>

        {/* Body: Players + Superlatives side by side */}
        <div
          style={{
            display: "flex",
            flex: 1,
            padding: "20px 60px",
            gap: "40px",
          }}
        >
          {/* Players */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap: "2px",
            }}
          >
            {topPlayers.map((player, i) => {
              const net = Number(player.net_result ?? 0);
              return (
                <div
                  key={player.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span
                      style={{
                        color: "#666666",
                        fontSize: "16px",
                        width: "24px",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span
                      style={{
                        color: "#FFFFFF",
                        fontSize: "18px",
                        fontWeight: 600,
                      }}
                    >
                      {getPlayerName(player)}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color:
                        net > 0
                          ? "#22C55E"
                          : net < 0
                            ? "#EF4444"
                            : "rgba(255,255,255,0.4)",
                    }}
                  >
                    {formatCurrency(net)}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Superlatives */}
          {orderedSuperlatives.length > 0 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "320px",
                gap: "8px",
              }}
            >
              {orderedSuperlatives.map((sup) => (
                <div
                  key={sup.title}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "8px 12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "2px",
                    }}
                  >
                    <span style={{ fontSize: "16px" }}>{sup.emoji}</span>
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {sup.title}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#A0A0A0",
                      marginLeft: "28px",
                    }}
                  >
                    {sup.desc}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "12px",
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
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    }
  );
}
