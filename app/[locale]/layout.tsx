import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Toaster } from "react-hot-toast";

import "@/app/globals.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { JsonContextProvider } from "@/context/JsonContext";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "IRon Industries — Laser Cutting & Bending",
    template: "%s | IRon Industries",
  },
  description:
    "IRon Industries provides professional laser cutting of metal and tubes, CNC bending, DXF file upload and instant online price calculation.",
  keywords: [
    "laser cutting",
    "tube laser cutting",
    "metal bending",
    "CNC bending",
    "DXF upload",
    "online laser cutting calculation",
    "laser cutting Armenia",
    "лазерная резка",
    "гибка металла",
  ],
  authors: [{ name: "IRon Industries Team" }],
  creator: "IRon Industries",
  publisher: "IRon Industries",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "IRon Industries — Laser Cutting & Bending",
    description:
      "Upload DXF files and calculate laser cutting prices online. Professional metal and tube laser cutting services.",
    url: "https://iron-industries.am",
    siteName: "IRon Industries",
    images: [
      {
        url: "https://iron-industries.am/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IRon Industries Laser Cutting",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "IRon Industries — Laser Cutting & Bending",
    description:
      "Online laser cutting price calculation. Upload DXF files and order laser cutting and bending services.",
    images: ["https://iron-industries.am/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <JsonContextProvider>
      <html lang={locale}>
        <body className={manrope.className}>
          <NextIntlClientProvider>
            <Toaster position="bottom-right" containerStyle={{ zIndex: 9999 }} />
            <Header />
            <main className="flex-1 main-wrapper -mt-20.5">
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </body>
      </html>
    </JsonContextProvider>
  );
}