import Head from 'next/head'

export default function MyHead({ title, description, keywords, canonical, ogpImage }) {
  const outputTitle = title || 'やっすんのエンジニア大学'
  const outputDescription = description || '現役エンジニアのやっすんがエンジニア向けの技術情報を動画で提供。日々の勉強がめんどうという方も、動画でサクッと学習できます。'
  const outputKeywords = keywords || 'やっすんのエンジニア大学,やっすん,エンジニア大学,やっすんのエンジニアTips'
  const outputCanonical = canonical || 'https://yassun.dev/'

  return (
    <Head>
      <title>{ outputTitle }</title>
      <meta name="description" content={outputDescription} />
      <meta name="keywords" content={outputKeywords} />

      <meta property="og:title" content={outputTitle} />
      <meta property="og:description" content={outputDescription} />
      <meta property="og:site_name" content="やっすんのエンジニア大学" />
      <meta property="og:image" content={ogpImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@yassun_youtuber" />
      <meta name="twitter:title" content={outputTitle} />
      <meta name="twitter:description" content={outputDescription} />
      <meta name="twitter:image" content={ogpImage} />

      <link rel="canonical" href={outputCanonical} />
    </Head>
  )
}
