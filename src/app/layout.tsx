import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: { default: "ABF Fisheries | Namibia", template: "%s | ABF Fisheries" },
  description:
    "Premium Namibian seafood, responsibly harvested for global markets.",
  openGraph: {
    title: "ABF Fisheries",
    description: "From the Atlantic coast of Namibia to the world.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
