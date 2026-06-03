import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Italidea | Swedish–Italian interpretation and language support",
  description:
    "Professional Swedish–Italian interpretation, mediation, and practical guidance for private clients and businesses.",
  openGraph: {
    title: "Italidea — Swedish–Italian interpretation",
    description:
      "Experienced interpreter Cecilia Skoldebrink — language support between Sweden and Italy.",
    locale: "sv_SE",
    type: "website",
    url: "https://italidea.netlify.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${sourceSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
