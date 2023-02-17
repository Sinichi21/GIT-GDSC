import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <meta
            name='description'
            content='Student Innovation Centre Universitas Udayana official website'
          />
          <link rel = 'icon' href='/sic-logo.png' />
          
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-WTN8JKL2S2'
          ></script>
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
