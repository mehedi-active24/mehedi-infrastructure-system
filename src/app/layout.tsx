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
  title: "Mehedi Hasan - Cold Email Deliverability & Infrastructure Engineer",
  description: "Cold email deliverability specialist for outbound agencies on Instantly and Smartlead. SPF, DKIM, DMARC forensic audit and infrastructure rebuild. 890+ domains recovered.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-bg-dark text-text-primary selection:bg-accent/30`}
      >
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}
