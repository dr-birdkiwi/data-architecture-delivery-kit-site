import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://dr-birdkiwi.github.io/data-architecture-delivery-kit-site/"),
    title: "Data Architecture Delivery — Data systems without building a data team",
    description: "Expert-led design, optional implementation, and continuous data validation for reliable reporting, analytics, and AI-ready data systems.",
    openGraph: {
      title: "Get the data system you need—without building a data team",
      description: "Expert-led design, optional implementation, and continuous data validation for reliable reporting, analytics, and AI-ready data systems.",
      type: "website",
      images: [{ url: "/data-architecture-delivery-kit-site/og-service.png", width: 1536, height: 1024, alt: "Data Architecture Delivery" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Get the data system you need—without building a data team",
      description: "Expert-led design, optional implementation, and continuous data validation for reliable reporting, analytics, and AI-ready data systems.",
      images: ["/data-architecture-delivery-kit-site/og-service.png"],
    },
    icons: { icon: "/data-architecture-delivery-kit-site/favicon.svg" },
  };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
