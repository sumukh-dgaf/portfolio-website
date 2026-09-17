import { ImageResponse } from "next/og";
import { site } from "@/data/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #050506 0%, #0c0c10 60%, #14101f 100%)",
          color: "#f3f3f5",
          fontSize: 30,
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 6, color: "#5b7cff", textTransform: "uppercase" }}>
          Portfolio
        </div>
        <div style={{ fontSize: 88, fontWeight: 600, marginTop: 24, letterSpacing: -2 }}>
          {site.name}
        </div>
        <div style={{ fontSize: 34, color: "#98979f", marginTop: 20 }}>{site.role}</div>
      </div>
    ),
    { ...size }
  );
}
