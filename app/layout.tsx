import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://dr-birdkiwi.github.io/data-architecture-delivery-kit-site/"),
    title: "Arc & Datum — Expert data architecture, delivery and assurance",
    description: "Independent, PhD-led data architecture, optional implementation, modernization, and continuous data quality assurance.",
    openGraph: {
      title: "Arc & Datum — Build a data system your business can trust",
      description: "Independent, PhD-led data architecture, optional implementation, modernization, and continuous assurance.",
      type: "website",
      images: [{ url: "/data-architecture-delivery-kit-site/og-service.png", width: 1536, height: 1024, alt: "Arc & Datum data architecture services" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Arc & Datum — Build a data system your business can trust",
      description: "Independent, PhD-led data architecture, optional implementation, modernization, and continuous assurance.",
      images: ["/data-architecture-delivery-kit-site/og-service.png"],
    },
    icons: { icon: "/data-architecture-delivery-kit-site/favicon.svg" },
  };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
