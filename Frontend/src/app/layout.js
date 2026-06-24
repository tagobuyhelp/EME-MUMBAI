import { Noto_Sans, Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
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
  verification: {
    google: "C4o0-xKAEN4T_ufIrZYUxATGJdRJBpcl0s7_6Ufl4tw",
  },
  openGraph: {
    title: "Western India's No 1 Training Institute in Mumbai",
    siteName: "EME Academy Mumbai",
    url: "https://mumbai.emeacademy.co.in",
    description: "EME Academy Mumbai is a leading Professional Training Institute in Mumbai offering job-oriented courses. Learn industry-relevant skills with expert trainers, practical projects, and dedicated placement support for career growth.",
    type: "website",
    images: [
      {
        url: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/emeLogo.png",
      },
    ],
    locale: "en_IN",
  },
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
        "8th floor, RUPA SOLITAIRE, MILLENNIUM BUSINESS PARK, 814, D wing, Mahape",
      addressLocality: "Navi Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400710",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "19.135242782073994",
      longitude: "73.00392347596766",
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
      "https://www.facebook.com/profile.php?id=61589298807614",
      "https://www.instagram.com/eme_academy_mumbai/",
      "https://www.youtube.com/@EMEAcademyMumbai",
      "https://www.youtube.com/channel/UCcYuv-IUJMyKdy0e-T5E5DA",
      "https://www.pinterest.com/hiemeacademy/?invite_code=b612232379204c42a5e74b0e188e7d6d&sender=108578992882025",
      "https://maps.app.goo.gl/MnUFq3bQptnJTR626",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="C4o0-xKAEN4T_ufIrZYUxATGJdRJBpcl0s7_6Ufl4tw"
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NN6J9GHM');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <GoogleAnalytics gaId="G-FJJYRNLQ4B" />
      {/* <GoogleAnalytics gaId="G-P6CCMJT8H8" /> */}
      <body className={`${inter.className}  `}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NN6J9GHM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
