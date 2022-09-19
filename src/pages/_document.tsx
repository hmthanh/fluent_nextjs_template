import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";
import { fontFace } from "@fluentui/merge-styles";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    fontFace({
      fontFamily: `"ZDN"`,
      src: `url("./public/fonts/segoeui-bold.woff2) format(woff2)`,
      fontWeight: "normal"
    });
    // const renderer = createDOMRenderer();

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      // const styles = renderToStyleElements(renderer);
      // return initialProps;
      return {
        ...initialProps,
        ...initialProps.styles,
        ...sheet.getStyleElement()
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="./favicon.ico" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="" />
          <meta property="og:url" content="" />
          <meta name="theme-color" content="#000000" />

          <meta property="og:image" content="" />
          <link rel="preload" href="/fonts/segoeui-bold.woff2" crossOrigin="" as="font" />
          <link rel="preload" href="/fonts/segoeui-semibold.woff2" crossOrigin="" as="font" />
          <link rel="preload" href="/fonts/segoeui-regular.woff2" crossOrigin="" as="font" />
          <link rel="preload" href="/fonts/segoeui-semilight.woff2" crossOrigin="" as="font" />
          {/* <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap"
            rel="stylesheet"
          // /> */}
          {/* // <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/segoe-fonts@1.0.1/segoe-fonts.min.css"></link> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
