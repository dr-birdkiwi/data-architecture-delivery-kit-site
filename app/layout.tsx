import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://dr-birdkiwi.github.io/data-architecture-delivery-kit-site/"),
    title: "Data Architecture Delivery Kit — Build the right data system",
    description: "Turn a business data problem into context-aware architecture options and a reviewable implementation plan—without needing to be a data expert.",
    openGraph: {
      title: "Turn your data problem into the right data system",
      description: "From trusted reporting to scalable data platforms: plain-English needs in, context-aware options and a reviewable plan out.",
      type: "website",
      images: [{ url: "/data-architecture-delivery-kit-site/og.png", width: 1536, height: 1024, alt: "Data Architecture Delivery Kit" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Turn your data problem into the right data system",
      description: "From trusted reporting to scalable data platforms: plain-English needs in, context-aware options and a reviewable plan out.",
      images: ["/data-architecture-delivery-kit-site/og.png"],
    },
    icons: { icon: "/data-architecture-delivery-kit-site/favicon.svg" },
  };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
