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
    "Mumbai's No 1 Training Institute | Mumbai's No.1 Job Oriented Training Institute - EME Academy Mumbai",
  description:
    "We are job oriented training Institute in Mumbai. Best SAP Certification courses, advanced Digital Marketing, and HR Management courses for career growth. Job-oriented & relevant courses in Mumbai at EME Academy Mumbai.",
};

<link rel="icon" href="facicon.ico" sizes="any" />;

export default function RootLayout({ children }) {
  const educationalOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "EME Academy Mumbai",
    url: "https://mumbai.emeacademy.co.in/",
    telephone: "+919831284098",
    email: "infomumbai@emeacademy.co.in",
    description:
      "EME Academy Mumbai offers professional courses in Digital Marketing, SAP, HR Management, and Data Analytics in Mumbai.",
    logo: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/emeLogo.png",
    founder: {
      "@type": "Person",
      name: "Kazi Mahasin Azim",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Mumbai Branch",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.572142449058223",
      longitude: "88.43353038465743",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "297",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61565016775751",
      "https://www.instagram.com/emeacademy__/",
      "https://www.youtube.com/@emeacademy",
      "https://www.linkedin.com/company/emeacademy/",
      "https://maps.app.goo.gl/rkwtFrpKiNQFpsdM6",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Courses",
      itemListElement: [
        { "@type": "Course", name: "Digital Marketing Course" },
        { "@type": "Course", name: "SAP Course" },
        { "@type": "Course", name: "HR Management Course" },
        { "@type": "Course", name: "Data Analytics Course" },
      ],
    },
  };

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(educationalOrganizationSchema),
          }}
        />
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
