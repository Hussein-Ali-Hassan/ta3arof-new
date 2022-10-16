import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageHead />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

function PageHead() {
  return (
    <Head>
      <title>حين نتعارف...ماذا نسأل؟</title>
      <meta property="og:title" content="حين نتعارف...ماذا نسأل؟" />
      <meta
        property="og:description"
        content="مجموعة من الأسلئة المساعدة في مرحلة التعارف"
      />
      <meta property="og:url" content="https://ta3arof.telickers.net/" />
    </Head>
  );
}
