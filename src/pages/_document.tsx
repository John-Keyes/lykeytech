import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="preload" href="/images/logo.png" as="image"/>
        <link rel="preload" href="/images/logoicon.png" as="image"/>
        <link rel="preload" href="/images/john-keyes-pfp.png" as="image"/>
        <link rel="preload" href="/images/starter1.png" as="image"/>
        <link rel="preload" href="/images/starter2.png" as="image"/>
        <link rel="preload" href="/images/starter3.png" as="image"/>
        <link rel="preload" href="/images/starter4.png" as="image"/>
        <link rel="preload" href="/docs/john_keyes_resume.docx"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;
