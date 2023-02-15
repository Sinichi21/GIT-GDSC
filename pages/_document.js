/* eslint-disable @next/next/next-script-for-ga */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <meta
            name='description'
            content='Student Innovation Centre Universitas Udayana official website'
          />
          <meta 
            name = "keywords" 
            content = "SIC Unud, SIC, Inovation Centre, Student Innovation Centre, SIC Udayana, Udayana SIC, UNUD Sic, SIC Universitas Udayana, SIC, Udayana University, udayana , universitas , UNUD , Universitas Udayana , Udayana University , Universty of Udayana , Bali , Badung, Denpasar , Indonesia , perguruan tinggi negeri , World Class University , Unggul , Mandiri , Berbudaya" 
          />
          
          <link rel = 'icon' href = '/sic-logo.png' type = "image/png" />
          
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-WTN8JKL2S2'
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-WTN8JKL2S2', { page_path: window.location.pathname }); 
            `
            }}
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
