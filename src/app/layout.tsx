import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import HeaderNav from "@/components/HeaderNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mehedi Hasan | Email Deliverability Consultant | Inbox Recovery & Cold Email Infrastructure",
  description: "Email deliverability consultant helping cold email agencies and B2B outbound teams recover inbox placement, fix authentication failures, and protect sender reputation. 5 documented case recoveries. Inbox placement specialists for cold email agencies.",
  openGraph: {
    title: "Mehedi Hasan · Email Deliverability Consultant",
    description: "Cold email agencies come to me when every validator says pass and inbox placement still drops. 5 documented case recoveries across US, UK, and AU agencies.",
    url: "https://mehedi-infrastructure-system.vercel.app",
    siteName: "Mehedi Hasan",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehedi Hasan · Email Deliverability Consultant",
    description: "Cold email agencies come to me when every validator says pass and inbox placement still drops. 5 documented case recoveries.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mehedi Hasan",
  "jobTitle": "Email Deliverability Consultant",
  "description": "Email deliverability consultant specialising in inbox recovery, cold email infrastructure, and authentication forensics for cold email agencies and B2B outbound teams.",
  "url": "https://mehedi-infrastructure-system.vercel.app",
  "sameAs": [
    "https://github.com/mehedi-active24"
  ],
  "knowsAbout": [
    "Email Deliverability",
    "SPF",
    "DKIM",
    "DMARC",
    "Cold Email Infrastructure",
    "Inbox Placement",
    "Blacklist Recovery"
  ],
  "areaServed": ["US", "UK", "AU"],
  "offers": {
    "@type": "Offer",
    "name": "Forensic Deliverability Audit",
    "price": "799",
    "priceCurrency": "USD"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-bg-dark text-text-primary selection:bg-accent/30`}
      >
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}
