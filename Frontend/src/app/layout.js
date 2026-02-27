import { Noto_Sans, Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import { Toaster } from "@/components/ui/sonner";
import Chat from "@/components/Chat";

const Noto = Noto_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title:
    "Eastern India's No 1 Training Institute |  Kolkata's No.1 Job Oriented Training Institute - EME Academy",
  description:
    "We are job oriented training Institute. Best SAP Certification courses, advanced Digital Marketing, and hotel Management courses for career growth. Job-oriented & relevant courses in Kolkata at EME Academy.",
};

<link rel="icon" href="facicon.ico" sizes="any" />;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="gSlvHzxR_BU2lWlPG2mL40fNqEf8umL_vBOCX8RyOnQ"
        />

        <link rel="icon" href="facicon.ico" sizes="any" />
        {/* Google Tag (gtag.js) */}

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16692929586"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16692929586');
            `,
          }}
        ></script>
      </Head>
      {/* <GoogleTagManager gtmId="GTM-PDQTB5WZ" /> */}
      <GoogleTagManager gtmId="GTM-K9M2TGKC" />
      {/* <GoogleTagManager gtmId="GTM-KZXXKHG7" /> */}
      <GoogleAnalytics gaId="G-FJJYRNLQ4B" />
      {/* <GoogleAnalytics gaId="G-P6CCMJT8H8" /> */}
      <body className={`${inter.className}  `}>
        <Chat />
        <Toaster position="top-center" />
        <main>{children}</main>

        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s) 
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod? 
            n.callMethod.apply(n,arguments):n.queue.push(arguments)}; 
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; 
            n.queue=[];t=b.createElement(e);t.async=!0; 
            t.src=v;s=b.getElementsByTagName(e)[0]; 
            s.parentNode.insertBefore(t,s)}(window, document,'script', 
            'https://connect.facebook.net/en_US/fbevents.js'); 
            fbq('init', '308522255047574'); 
            fbq('init', '914641681048427'); 
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <Image
            height={1}
            width={1}
            style={{ display: "none" }}
            alt="facebook-pixel"
            src={
              "https://www.facebook.com/tr?id=308522255047574&ev=PageView&noscript=1"
            }
          />
          <Image
            height={1}
            width={1}
            style={{ display: "none" }}
            alt="facebook-pixel"
            src={
              "https://www.facebook.com/tr?id=914641681048427&ev=PageView&noscript=1"
            }
          />
        </noscript>
      </body>
    </html>
  );
}
