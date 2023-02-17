import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return(
    <>
      <Head>
        <meta name="viewport" content = "width=device-width, initial-scale=1.0, shrink-to-fit=no, user-scalable=no" />
      </Head> 
      <Component {...pageProps} />
    </>
  )
}
