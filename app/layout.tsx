import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://radaro.sk'),
  title: {
    default: "RADARO - Profesionálne stavebné služby",
    template: "%s | RADARO"
  },
  description: "Profesionálne stavebné služby s dôrazom na kvalitu, efektivitu a inovácie. Stavebný dozor, technické poradenstvo a riadenie projektov.",
  generator: "Next.js",
  applicationName: "RADARO",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "RADARO", url: "https://radaro.sk" }],
  creator: "RADARO",
  publisher: "RADARO",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  keywords: [
    "profesionálne stavebné služby",
    "stavebný dozor",
    "technické poradenstvo",
    "riadenie projektov",
    "stavebné služby",
    "stavebné dozor",
    "stavebné poradenstvo",
    "stavebné riadenie",
    "stavebné dozorové služby",
    "stavebné poradenstvo služby",
    "stavebné riadenie služby",
  ],
  category: "construction",
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://radaro.sk",
    title: "RADARO - Profesionálne stavebné služby",
    description: "Profesionálne stavebné služby s dôrazom na kvalitu, efektivitu a inovácie. Stavebný dozor, technické poradenstvo a riadenie projektov.",
    siteName: "RADARO",
    images: [
      {
        url: "/images/other/og-image.jpg",
        width: 800,
        height: 420,
        alt: "RADARO - Profesionálne stavebné služby",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RADARO - Profesionálne stavebné služby",
    description: "Profesionálne stavebné služby s dôrazom na kvalitu, efektivitu a inovácie. Stavebný dozor, technické poradenstvo a riadenie projektov.",
    images: ["/images/other/og-image.jpg"],
    creator: "@radaro_sk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/images/other/favicon.ico",
    shortcut: "/images/other/favicon.ico",
    apple: "/images/other/favicon.ico",
  },
  // verification: {
  //   google: "verification_token", //TODO
  //   yandex: "verification_token", //TODO
  // },
  alternates: {
    canonical: "https://radaro.sk",
    languages: {
      'sk-SK': "https://radaro.sk",
    },
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="sk">
    <head>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "RADARO",
            "image": "https://radaro.sk/images/other/Logo.png",
            "@id": "https://radaro.sk",
            "url": "https://radaro.sk",
            "telephone": "+421902851275",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Petra Víťazoslava Rovnianka 5136/9",
              "addressLocality": "Martin",
              "postalCode": "03601",
              "addressCountry": "SK"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 49.09687,
              "longitude": 18.91743
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              }
            ],
            // "sameAs": [
            //   // "https://www.facebook.com/radaro", TODO
            //   // "https://www.instagram.com/radaro"
            // ],
            "priceRange": "€€",
            "servesCuisine": "Construction Services",
            "description": "Profesionálne stavebné služby s dôrazom na kvalitu, efektivitu a inovácie. Stavebný dozor, technické poradenstvo a riadenie projektov."
          })
        }}
      />
    </head>
    <body
      className={`antialiased`}
    >
      {children}
      <Toaster />
    </body>
  </html>
);

export default RootLayout;
