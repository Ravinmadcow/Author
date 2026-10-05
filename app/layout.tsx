import type { Metadata } from "next";
import { Kaushan_Script, Montserrat } from "next/font/google";
import { site } from "../data/site";
import "./globals.css";

const display = Kaushan_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: site.author,
  description: `${site.tagline}. Books by ${site.author}.`,
  openGraph: {
    title: site.author,
    description: site.tagline,
    images: ["/images/banner.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
