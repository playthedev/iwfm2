import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#eb7328",
          borderRadius: 36,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <span
          style={{
            fontSize: 52,
            fontWeight: 800,
            letterSpacing: -2,
            color: "#fff8f1",
          }}
        >
          IWFM
        </span>
      </div>
    ),
    { ...size }
  );
}
