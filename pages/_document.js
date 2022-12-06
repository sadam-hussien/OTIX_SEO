import Document, { NextScript, Main, Html, Head } from "next/document";

class MyDocumnet extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="hotel" />
          <meta name="keywords" content="hotel, booking" />

          <link
            rel="stylesheet"
            href="https://icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
          />
          {/* google fonts  */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&family=Lato:wght@400;700&family=Rubik+Marker+Hatch&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocumnet;
