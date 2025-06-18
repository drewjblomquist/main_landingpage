import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Bloom Advisory.ai</title>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32-cropped.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
