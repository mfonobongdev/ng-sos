import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavigationComponent from '../components/navigation'
import { ActiveBreakpointIndicator } from '../components/ActiveBreakpointIndicator'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.NODE_ENV === 'development' && <ActiveBreakpointIndicator />}
      <NavigationComponent/>
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
