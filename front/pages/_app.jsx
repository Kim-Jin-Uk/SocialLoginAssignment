import '../styles/globals.css'

import Head from 'next/head'

import wrapper from '../store/configureStore'
import 'antd/dist/antd.css'

function MyApp({ Component, pageProps }) {
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

export default wrapper.withRedux(MyApp)
