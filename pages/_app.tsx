import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { OpenGraph } from '../components/OpenGraph'
import '../public/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  
  // Get page-specific metadata from frontmatter or props
  const pageTitle = (pageProps as any)?.title || 'Modelfile based declarative, cross-platform blueprint that allows developers to customize open models.'
  const pageDescription = (pageProps as any)?.description || 'Our goal is to evolve Modelfile in collaboration with the community and establish it as the standard for model customization.'
  const pageType = (pageProps as any)?.type || 'website'
  
  return (
    <>
      <OpenGraph
        title={pageTitle}
        description={pageDescription}
        type={pageType}
        url={router.asPath}
      />
      <Component {...pageProps} />
    </>
  )
}
