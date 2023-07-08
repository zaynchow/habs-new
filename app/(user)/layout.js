import Header from "@/components/Header/Header";
import "../globals.css";
import Script from "next/script";
import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import Footer from "@/components/Footer";
import FacebookPixel from "@/components/FacebookPixel/FacebookPixel";
import * as fbq from "../../lib/fpixel";

// TODO: Remove 700 font weights from both of the fonts, don't need
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
});
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${lora.variable} font-sans`}
    >
      <body>
        <Header />
        {children}
        <Footer />
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
          }}
        />
        <FacebookPixel />
      </body>
    </html>
  );
}
