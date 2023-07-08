import Script from "next/script";

import * as fbq from "../../lib/fpixel";

const Head = () => {
  return (
    <>
      <title>HABSL</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Empowering investors to achieve greater returns through professional brokerage services"
      />
      <link rel="icon" href="logos//logo.svg" />

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.GOOGLE_ANALYTICS}')
        `}
      </Script>
    </>
  );
};

export default Head;
