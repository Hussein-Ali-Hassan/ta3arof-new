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
      <script async src="https://cdn.splitbee.io/sb.js"></script>
      <title>حين نتعارف...ماذا نسأل؟</title>
      <meta property="og:title" content="حين نتعارف...ماذا نسأل؟" />
      <meta
        property="og:description"
        content="مجموعة من الأسئلة المساعدة في مرحلة التعارف"
      />
    </Head>
  );
}
