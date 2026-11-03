import type { Metadata } from "next";
import { Playfair_Display, Open_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { content } from "@/content/content";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["600", "700", "800"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords,
  metadataBase: new URL(content.brand.website),
  alternates: {
    canonical: "https://samanthasaurino.com/",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/favicon-512.png",
  },
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    url: content.brand.website,
    siteName: "Samantha Saurino",
    images: [{ url: content.seo.ogImage, width: 800, height: 1000 }],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: content.seo.title,
    description: content.seo.description,
    images: [content.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${openSans.variable} ${sourceSerif.variable}`}
    >
      <head>
        {/* Google AdSense verification & script in <head> */}
        <meta name="google-adsense-account" content="ca-pub-1070738569472471" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1070738569472471"
          crossOrigin="anonymous"
        ></script>

        {/* Preload hero image for fast LCP */}
        <link
          rel="preload"
          as="image"
          href="/hero-samantha.webp"
          type="image/webp"
          fetchPriority="high"
        />

        {/* Preconnect to third-party origins */}
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link
          rel="preconnect"
          href="https://fundingchoicesmessages.google.com"
          crossOrigin="anonymous"
        />

        {/* Schema: Person (Samantha Saurino) & Organization (Belle 364) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://samanthasaurino.com/#samantha",
                  name: "Samantha Saurino",
                  jobTitle:
                    "Emprendedora, Fundadora de Belle 364 y Creadora de Contenido",
                  description: content.seo.description,
                  url: "https://samanthasaurino.com",
                  image: "https://samanthasaurino.com/hero-samantha.png",
                  email: content.brand.email,
                  nationality: {
                    "@type": "Country",
                    name: "Perú",
                  },
                  founderOf: {
                    "@id": "https://belle364.com/#organization",
                  },
                },
                {
                  "@type": "Organization",
                  "@id": "https://belle364.com/#organization",
                  name: "Belle 364",
                  url: "https://belle364.com/",
                  email: "info@belle364.com",
                  logo: "https://samanthasaurino.com/images/belle364/logo-vertical-olive.png",
                  description: content.brand.belle364.description,
                  founder: {
                    "@id": "https://samanthasaurino.com/#samantha",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
