import { ImageResponse } from "@vercel/og"

export const runtime = "edge"

const LOGO_PATH = "/dark.png"
const OG_TEXT =
  "Modelfile based SDK that lets developers customize open models and agent experiences"

export default function handler(request: Request) {
  const logoUrl = new URL(LOGO_PATH, request.url).toString()

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0E0E0D",
        padding: "72px 96px",
        gap: 48,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={logoUrl}
          alt="Tilekit logo"
          style={{
            width: 200,
            height: 200,
            objectFit: "contain",
          }}
        />
      </div>

      <div
        style={{
          color: "#FFFFFF",
          fontSize: 34,
          lineHeight: 1.4,
          textAlign: "center",
          maxWidth: 880,
          fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        {OG_TEXT}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
