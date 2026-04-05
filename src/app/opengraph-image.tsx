import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Testahemma.se – Sveriges guide till hemtestningskit";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const [arialRegular, arialBold] = await Promise.all([
    readFile(join(process.cwd(), "assets/Arial.ttf")),
    readFile(join(process.cwd(), "assets/Arial-Bold.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "60px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="6" fill="rgba(255,255,255,0.2)" />
            <path
              d="M10 17l4 4 8-8"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontSize: 56, fontWeight: 700 }}>TestaHemma.se</span>
        </div>
        <div
          style={{
            fontSize: 32,
            opacity: 0.9,
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          Sveriges oberoende guide till hemtestningskit
        </div>
        <div
          style={{
            fontSize: 22,
            opacity: 0.7,
            marginTop: "20px",
          }}
        >
          Blodtester - Hormontester - STI-tester - Vitamintester
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Arial",
          data: arialRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Arial",
          data: arialBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
