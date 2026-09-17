import { ImageResponse } from "next/og";
import { site } from "@/data/content";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  const initials = site.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #5b7cff, #b98cff)",
          color: "#050506",
          fontSize: 30,
          fontWeight: 700,
          borderRadius: 14,
          fontFamily: "sans-serif",
        }}
      >
        {initials}
      </div>
    ),
    { ...size }
  );
}
