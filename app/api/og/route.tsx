import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://tilekit.dev')
  const imageResponse = await fetch(`${baseUrl}/dark.png`)
  const imageData = await imageResponse.arrayBuffer()
  const imageBase64 = Buffer.from(imageData).toString('base64')
  const imageDataUrl = `data:image/png;base64,${imageBase64}`

  const { searchParams } = new URL(request.url)
  const title =
    searchParams.get('title') || 'Modelfile based SDK that lets developers customize open models and agent experiences'
  const description =
    searchParams.get('description') || 'Modelfile based SDK that lets developers customize open models and agent experiences'
  const displayText = description || title

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0E0E0D',
        padding: '60px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '40px',
        }}
      >
        <img
          src={imageDataUrl}
          alt="Tilekit Logo"
          style={{
            width: '200px',
            height: '200px',
            objectFit: 'contain',
          }}
        />
      </div>

      <div
        style={{
          color: '#ffffff',
          fontSize: 28,
          textAlign: 'center',
          maxWidth: 900,
          lineHeight: 1.4,
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {displayText}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
