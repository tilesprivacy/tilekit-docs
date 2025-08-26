import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    const title = searchParams.get('title') || 'Tiles Launcher'

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: '#000000',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            padding: '80px 120px',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: title !== 'Tiles Launcher' ? 40 : 0,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  marginRight: 30,
                }}
              >
                <div style={{ display: 'flex', gap: 8 }}>
                  <div
                    style={{
                      width: 35,
                      height: 35,
                      backgroundColor: 'white',
                      borderRadius: 7,
                    }}
                  />
                  <div
                    style={{
                      width: 35,
                      height: 35,
                      backgroundColor: 'white',
                      borderRadius: 7,
                    }}
                  />
                </div>
                <div style={{ display: 'flex' }}>
                  <div
                    style={{
                      width: 35,
                      height: 35,
                      backgroundColor: 'white',
                      borderRadius: 7,
                    }}
                  />
                </div>
              </div>
              <span style={{ fontSize: 110, fontWeight: 600 }}>
                Tiles Launcher
              </span>
            </div>
            {title !== 'Tiles Launcher' && (
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 400,
                  maxWidth: 1000,
                  textAlign: 'center',
                }}
              >
                {title}
              </div>
            )}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
