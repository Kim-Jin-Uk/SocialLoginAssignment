import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet={'utf-8'} />
        <link rel="icon" href="/dog.png"></link>
        <title>Social Loin Service 김진욱</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
