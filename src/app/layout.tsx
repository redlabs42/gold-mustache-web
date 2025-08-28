import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout/Layout";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gold Mustache Barbearia - Tradição e Estilo Masculino | Itapema-SC",
  description:
    "Barbearia tradicional em Itapema com mais de 10 anos de experiência. Cortes masculinos clássicos e modernos, barba completa e produtos de qualidade.",
  keywords:
    "barbearia, itapema, corte masculino, barba, bigode, santa catarina, gold mustache",
  authors: [{ name: "Gold Mustache Barbearia" }],
  openGraph: {
    title: "Gold Mustache Barbearia | Itapema-SC",
    description:
      "Barbearia tradicional em Itapema - Tradição e Estilo Masculino",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
