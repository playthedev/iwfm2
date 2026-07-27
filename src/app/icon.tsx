import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 7,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: -0.6,
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
