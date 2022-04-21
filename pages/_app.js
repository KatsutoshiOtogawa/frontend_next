// @ts-check
import '../styles/globals.css'

import { SessionProvider } from "next-auth/react"

/**
 * 
 * @param {{Component: any; pageProps: {session: object; pageProps: any}}} param0 
 * @returns 
 */
function MyApp({ Component, pageProps: { session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
  // return <Component {...pageProps} />
}

export default MyApp
