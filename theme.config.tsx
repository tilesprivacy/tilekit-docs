import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Logo } from './components/logo'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Logo width={24} height={24} />
      <span>Tilekit</span>
    </div>
  ),
  project: {
    link: 'https://github.com/tileslauncher',
  },
  chat: {
    link: 'https://go.tiles.run/discord',
  },
  docsRepositoryBase: 'https://github.com/tileslauncher',
  footer: {
    text: 'Tilekit',
  },
  // OpenGraph configuration
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:site_name" content="Tilekit" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:site" content="@tileslauncher" />
      <meta name="twitter:creator" content="@tileslauncher" />
      <meta name="theme-color" content="#667eea" />
    </>
  ),
  // Custom theme colors
  primaryHue: {
    dark: 0, // Black (0 degrees = black)
    light: 0, // Black (0 degrees = black)
  },
  primarySaturation: {
    dark: 0, // 0% saturation for pure black/white
    light: 0, // 0% saturation for pure black/white
  },
  // Custom theme provider for OpenGraph
  components: {
    // This will be handled by our custom _app.tsx
  },
}

export default config
