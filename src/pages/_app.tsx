import React from 'react';
import {AppProps} from 'next/app';
import DefaultSEO from 'src/components/seo/defaultSEO';
import PageSEO from 'src/components/seo/pageSEO';
import Header from 'src/components/nav/header';
import '../lib/styles/_app.scss';

const App = ({Component, pageProps}: AppProps & {pageProps: {[key: string]: any}}) => {
  return (
    <>
      <DefaultSEO/>

      <PageSEO
        title={pageProps.pageTitle || undefined}
        description={pageProps.pageDescription || undefined}
        thumbnail={pageProps.pageSocialImage || undefined}
      />

      <main className="fit-width fit-height">
        <Header/>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;