import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vedana Verlag – Bücher für das Herz";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(135deg, #f7efe4 0%, #efe0ce 58%, #c7a56b 100%)",
          color: "#28241f",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "72px 96px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            border: "2px solid rgba(109, 80, 43, 0.28)",
            borderRadius: 36,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
            padding: "60px 90px",
            textAlign: "center",
            width: "100%",
          }}
        >
          <div style={{ color: "#9a713d", fontSize: 30, letterSpacing: 8 }}>
            VEDANA VERLAG
          </div>
          <div style={{ fontSize: 78, lineHeight: 1.08, marginTop: 26 }}>
            Bücher für das Herz
          </div>
          <div style={{ fontSize: 30, marginTop: 30, opacity: 0.72 }}>
            Liebevoll illustriert · sorgfältig gemacht · aus Scheeßel
          </div>
        </div>
      </div>
    ),
    size,
  );
}
