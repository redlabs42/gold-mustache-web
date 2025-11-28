import { BRAND } from "@/constants/brand";
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Gold Mustache Barbearia - Tradição e Estilo Masculino";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        position: "relative",
      }}
    >
      {/* Gold accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "8px",
          background: "linear-gradient(90deg, #D4AF37 0%, #FFD700 100%)",
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          textAlign: "center",
        }}
      >
        {/* Logo/Icon placeholder */}
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
            fontSize: "60px",
          }}
        >
          💈
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "#ffffff",
            margin: "0 0 20px 0",
            lineHeight: 1.2,
          }}
        >
          {BRAND.name}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "36px",
            color: "#D4AF37",
            margin: "0 0 30px 0",
            fontWeight: 600,
          }}
        >
          Tradição e Estilo Masculino
        </p>

        {/* Features */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ffffff",
              fontSize: "24px",
            }}
          >
            ⭐ 4.8 Rating
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ffffff",
              fontSize: "24px",
            }}
          >
            📍 Itapema-SC
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ffffff",
              fontSize: "24px",
            }}
          >
            ✂️ +6 Anos
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "8px",
          background: "linear-gradient(90deg, #D4AF37 0%, #FFD700 100%)",
        }}
      />
    </div>,
    {
      ...size,
    },
  );
}
