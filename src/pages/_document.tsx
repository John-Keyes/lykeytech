import getConfig from 'next/config';
import { Html, Head, Main, NextScript } from 'next/document'
import { cmscritic, codeCS, logoGif, logoPng, myPfp, qrCode, resilience, todoapp } from 'src/lib/helpers/static';

/*
<link rel="preload" href="/images/cmscritic.png" as="image"/>
        <link rel="preload" href="/images/codeCS.png" as="image"/>
        <link rel="preload" href="/images/logo.gif" as="image"/>
        <link rel="preload" href="/images/logo.png" as="image"/>
        <link rel="preload" href="/images/myPfp.png*" as="image"/>
        <link rel="preload" href="/images/qrcode.png" as="image"/>
        <link rel="preload" href="/images/resilience.png" as="image"/>
        <link rel="preload" href="/images/todoapp.png" as="image"/>
*/
const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="preload" href={cmscritic} as="image"/>
        <link rel="preload" href={codeCS} as="image"/>
        <link rel="preload" href={logoGif} as="image"/>
        <link rel="preload" href={logoPng} as="image"/>
        <link rel="preload" href={myPfp} as="image"/>
        <link rel="preload" href={qrCode} as="image"/>
        <link rel="preload" href={resilience} as="image"/>
        <link rel="preload" href={todoapp} as="image"/>
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
