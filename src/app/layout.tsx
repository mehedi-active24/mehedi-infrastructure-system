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
  description: "Email deliverability consultant helping cold email agencies and B2B outbound teams recover inbox placement, fix authentication failures, and protect sender reputation. 1,235+ domains recovered. Book a free discovery call.",
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
