import getConfig from 'next/config';
import { Html, Head, Main, NextScript } from 'next/document'


const {publicRuntimeConfig: {clientUrl}} = getConfig();
console.log(clientUrl);

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="preload" href={`${clientUrl}/images/*`} as="image"/>
        <link rel="preload" href={`${clientUrl}/docs/john_keyes_resume.docx`}/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;
