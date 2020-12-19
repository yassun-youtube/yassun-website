import Document,{ Html,Head,Main,NextScript } from 'next/document'
import GTag from "../components/gtags";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta name='application-name' content='やっすんのエンジニア大学' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='やっすんのエンジニア大学' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name="theme-color" content="#de6d6d" />
          <meta name="google-site-verification" content="33nsbTByQ2jOulNKofSPO8vD597Jvz7ofktNm03ly4M" />

          <link rel="apple-touch-icon" sizes="57x57" href="/images/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/images/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/images/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/images/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/images/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
          <link rel='manifest' href='/manifest.json' />

          <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js" />
          <script async custom-element="amp-install-serviceworker" src="https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js"></script>
        </Head>
        <body style={{ fontFamily: '"Helvetica Neue","Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif'}}>
          <Main/>
          <NextScript/>
          <amp-install-serviceworker
            src="https://yassun.dev/sw.js"
            data-iframe-src="https://yassun.dev/"
            layout="nodisplay"
          />

          <GTag />
        </body>
      </Html>
    )
  }
}

export default MyDocument
