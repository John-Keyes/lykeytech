import getConfig from 'next/config';
import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="preload" href="/images/*" as="image"/>
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
