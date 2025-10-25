import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Layout } from "@/components/layout/Layout";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { LoadingElevatorWrapper } from "@/components/ui/loading-elevator-wrapper";
import { BRAND } from "@/constants/brand";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Gold Mustache Barbearia - Tradição e Estilo Masculino | Itapema-SC",
  description:
    "Barbearia tradicional em Itapema-SC com mais de 6 anos de experiência. Cortes masculinos clássicos e modernos, barba completa, degradê navalhado e produtos de qualidade. Agendamento online disponível.",
  keywords: [
    "barbearia itapema",
    "barbearia santa catarina",
    "corte masculino itapema",
    "barba completa",
    "degradê navalhado",
    "corte tradicional",
    "barbearia centro itapema",
    "gold mustache barbearia",
    "agendamento barbearia",
    "corte americano",
    "low fade",
    "sobrancelha masculina",
  ].join(", "),
  authors: [
    {
      name: "Gold Mustache Barbearia",
      url: "https://www.goldmustachebarbearia.com.br",
    },
  ],
  creator: "Gold Mustache Barbearia",
  publisher: "Gold Mustache Barbearia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.goldmustachebarbearia.com.br"),
  alternates: {
    canonical: "/",
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
    title: "Gold Mustache Barbearia - Tradição e Estilo Masculino | Itapema-SC",
    description:
      "Barbearia tradicional em Itapema-SC com mais de 6 anos de experiência. Cortes masculinos, barba completa e degradê navalhado. Agendamento online disponível.",
    url: "https://www.goldmustachebarbearia.com.br",
    siteName: "Gold Mustache Barbearia",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Gold Mustache Barbearia - Itapema SC",
        type: "image/png",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold Mustache Barbearia - Tradição e Estilo Masculino",
    description:
      "Barbearia tradicional em Itapema-SC. Cortes masculinos, barba completa e degradê navalhado.",
    images: ["/logo.png"],
    creator: "@goldmustachebarbearia",
  },
  verification: {
    google: "googlecd1c0babcbe059f0.html",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <SchemaMarkup />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        <GoogleAnalytics trackingId={BRAND.analytics.googleAnalyticsId} />
        <LoadingElevatorWrapper />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
