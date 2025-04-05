import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100..900&family=Bai+Jamjuree:wght@100;500;600;700&family=Syncopate:wght@400;700&family=Bodoni+Moda:wght@100;700&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.ico" />

        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#e6e8ea" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
