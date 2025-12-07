import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Layout } from "@/components/layout/Layout";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { LoadingElevatorWrapper } from "@/components/ui/loading-elevator-wrapper";
import { BRAND } from "@/constants/brand";
import { locales } from "@/i18n/config";
import { QueryProvider } from "@/providers/query-provider";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const baseUrl = "https://www.goldmustachebarbearia.com.br";

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    authors: [
      {
        name: "Gold Mustache Barbearia",
        url: baseUrl,
      },
    ],
    creator: "Gold Mustache Barbearia",
    publisher: "Gold Mustache Barbearia",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "pt-BR": "/pt-BR",
        es: "/es",
        en: "/en",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
      shortcut: "/favicon.ico",
    },
    openGraph: {
      title: t("og.title"),
      description: t("og.description"),
      url: `${baseUrl}/${locale}`,
      siteName: t("og.siteName"),
      images: [
        {
          url: `${baseUrl}/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "Gold Mustache Barbearia - Itapema SC",
          type: "image/png",
        },
        {
          url: "/logo.png",
          width: 800,
          height: 800,
          alt: "Gold Mustache Logo",
          type: "image/png",
        },
      ],
      locale: locale === "pt-BR" ? "pt_BR" : locale,
      type: "website",
      countryName: "Brazil",
      emails: ["ygor.dagger12@gmail.com"],
      phoneNumbers: ["+55 47 98840-1893"],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitter.title"),
      description: t("twitter.description"),
      images: [`${baseUrl}/${locale}/twitter-image`],
      creator: "@goldmustachebarbearia",
      site: "@goldmustachebarbearia",
    },
    other: {
      "mobile-web-app-capable": "yes",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent",
      "apple-mobile-web-app-title": "Gold Mustache",
      "application-name": "Gold Mustache Barbearia",
      "msapplication-TileColor": "#D4AF37",
      "theme-color": "#1a1a1a",
    },
    verification: {
      google: "googlecd1c0babcbe059f0.html",
    },
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <SchemaMarkup />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        <GoogleAnalytics trackingId={BRAND.analytics.googleAnalyticsId} />
        <LoadingElevatorWrapper />
        <NextIntlClientProvider messages={messages}>
          <QueryProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <Layout>{children}</Layout>
            </ThemeProvider>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
