import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: "/data-architecture-delivery-kit-site/services/" },
};

export { default } from "../services/page";
