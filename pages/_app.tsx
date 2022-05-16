import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavigationComponent from '../components/navigation'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationComponent/>
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
