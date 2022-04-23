// @ts-check
import '../styles/globals.css'

import { SessionProvider } from "next-auth/react"

/**
 * 
 * @param {{Component: any; pageProps: any}} param0
 */
function MyApp({ Component, pageProps }) {
  // return (
  //   <SessionProvider session={session}>
  //     <Component {...pageProps} />
  //   </SessionProvider>
  // )
  return <Component {...pageProps} />
}

export default MyApp
