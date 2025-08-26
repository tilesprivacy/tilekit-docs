import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    
    // Get dynamic parameters
    const title = searchParams.get('title') || 'Tilekit'
    const description = searchParams.get('description') || 'Monorepo hosting both in-house and vendored libraries and tools powering the Tiles Launcher.'
    const type = searchParams.get('type') || 'default'
    
    // Note: Using system fonts for better compatibility

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0a0a0a',
            backgroundImage: 'radial-gradient(circle at 25px 25px, #1a1a1a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a1a1a 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        >
          {/* Header with logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              T
            </div>
            <span
              style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: 'white',
                letterSpacing: '-0.02em',
              }}
            >
              Tilekit
            </span>
          </div>

          {/* Main content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: '800px',
              padding: '0 40px',
            }}
          >
            <h1
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                color: 'white',
                margin: '0 0 24px 0',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
              }}
            >
              {title}
            </h1>
            
            <p
              style={{
                fontSize: '28px',
                color: '#a1a1aa',
                margin: '0',
                lineHeight: '1.4',
                maxWidth: '600px',
              }}
            >
              {description}
            </p>
          </div>

          {/* Footer */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '40px',
              right: '40px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#71717a',
                fontSize: '18px',
              }}
            >
              <span>tileslauncher</span>
              <span>•</span>
              <span>{type}</span>
            </div>
            
            <div
              style={{
                color: '#71717a',
                fontSize: '18px',
              }}
            >
              tiles.run
            </div>
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
