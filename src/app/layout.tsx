import type { Metadata } from "next";
import Script from "next/script";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

export const metadata: Metadata = {
  title: {
    default: "Testahemma.se – Bästa Hemtester för Sverige 2026",
    template: "%s | Testahemma.se",
  },
  description:
    "Sveriges guide till hemtestningskit. Vi testar och jämför blodtester, hormontester, STI-tester, vitamintester och mer. Hitta rätt test – från 299 kr.",
  keywords: [
    "hemtest", "hemtestningskit", "blodtest hemma", "hormontester hemma",
    "STI test hemma", "D-vitamintest", "allergitester hemma",
    "tarmflora test", "cancertest hemma", "werlabs recension",
    "cerascreen recension", "bästa hemtest",
  ],
  metadataBase: new URL("https://www.testahemma.se"),
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://www.testahemma.se/",
    siteName: "Testahemma.se",
    title: "Testahemma.se – Bästa Hemtester för Sverige 2026",
    description: "Sveriges guide till hemtestningskit. Oberoende tester och jämförelser.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Testahemma.se – Bästa Hemtester för Sverige 2026",
    description: "Sveriges guide till hemtestningskit.",
  },
  alternates: {
    canonical: "https://www.testahemma.se/",
    languages: { "sv-SE": "https://www.testahemma.se" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
  manifest: "/site.webmanifest",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Testahemma.se",
  url: "https://www.testahemma.se",
  inLanguage: "sv-SE",
  description: "Sveriges guide till hemtestningskit – blodtester, hormontester, STI-tester och vitamintester.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Testahemma.se",
  url: "https://www.testahemma.se",
  logo: "https://www.testahemma.se/favicon.svg",
  foundingDate: "2025",
  areaServed: "SE",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "editorial",
    email: "vpniskguiden@proton.me",
    url: "https://www.testahemma.se/kontakt/",
    availableLanguage: "Swedish",
  },
  founder: {
    "@type": "Person",
    name: "John Erik Johansson",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
        <CookieConsent />

        {/* Google Consent Mode v2 – GDPR default DENY */}
        <Script id="consent-mode-default" strategy="beforeInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{'analytics_storage':'denied','ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','wait_for_update':500});`}
        </Script>

        {/* GA4 – set NEXT_PUBLIC_GA_ID in Vercel env vars */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{'anonymize_ip':true});`}
        </Script>

        {/* Ahrefs Web Analytics – set NEXT_PUBLIC_AHREFS_KEY in Vercel env vars */}
        {process.env.NEXT_PUBLIC_AHREFS_KEY && (
          <Script src="https://analytics.ahrefs.com/analytics.js" data-key={process.env.NEXT_PUBLIC_AHREFS_KEY} strategy="lazyOnload" />
        )}

        {/* Addrevenue Easylinks – auto-konverterar direktlänkar till tracking-URLs */}
        <Script src="https://addrevenue.io/easylinks.min.js?c=3467323" strategy="lazyOnload" />

        {/* Microsoft Clarity – gratis heatmaps, set NEXT_PUBLIC_CLARITY_ID i Vercel */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script id="clarity" strategy="lazyOnload">
            {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${process.env.NEXT_PUBLIC_CLARITY_ID}");`}
          </Script>
        )}
      </body>
    </html>
  );
}
