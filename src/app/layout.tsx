import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gorilla Gold | Grip-Enhancing Towel for Wet and Sweaty Conditions",
    template: "%s | Gorilla Gold",
  },
  description:
    "Gorilla Gold is a grip-enhancing towel that helps athletes and active users improve control in wet, sweaty, and slippery conditions across golf, racquet sports, pickleball, bowls, and more.",
  keywords: [
    "grip enhancer",
    "grip-enhancing towel",
    "golf grip aid",
    "sweaty hands grip",
    "wet weather grip",
    "pickleball grip aid",
    "tennis grip aid",
    "Gorilla Gold",
  ],
  authors: [{ name: "Gorilla Gold" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Gorilla Gold",
    title: "Gorilla Gold | Grip-Enhancing Towel for Wet and Sweaty Conditions",
    description:
      "Gorilla Gold is a grip-enhancing towel that helps athletes and active users improve control in wet, sweaty, and slippery conditions across golf, racquet sports, pickleball, bowls, and more.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@gorillagold",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-secondary">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="68ed898e88f1e93a1324862a"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
