import { BRAND } from "@/constants/brand";
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Gold Mustache Barbearia - Tradição e Estilo Masculino";
export const size = {
  width: 1200,
  height: 600,
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
      {/* Gold accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "6px",
          background: "linear-gradient(90deg, #D4AF37 0%, #FFD700 100%)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "30px",
            fontSize: "50px",
          }}
        >
          💈
        </div>

        <h1
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "#ffffff",
            margin: "0 0 15px 0",
            lineHeight: 1.2,
          }}
        >
          {BRAND.name}
        </h1>

        <p
          style={{
            fontSize: "32px",
            color: "#D4AF37",
            margin: "0 0 25px 0",
            fontWeight: 600,
          }}
        >
          Tradição e Estilo Masculino
        </p>

        <div
          style={{
            display: "flex",
            gap: "30px",
            marginTop: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ffffff",
              fontSize: "22px",
            }}
          >
            ⭐ 4.8
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ffffff",
              fontSize: "22px",
            }}
          >
            📍 Itapema-SC
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ffffff",
              fontSize: "22px",
            }}
          >
            ✂️ +6 Anos
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "6px",
          background: "linear-gradient(90deg, #D4AF37 0%, #FFD700 100%)",
        }}
      />
    </div>,
    {
      ...size,
    },
  );
}
