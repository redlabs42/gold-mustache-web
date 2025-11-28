import { SERVICES } from "@/constants/brand";
import { locales } from "@/i18n/config";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.goldmustachebarbearia.com.br";
  const currentDate = new Date().toISOString();

  const routes: MetadataRoute.Sitemap = [];

  // Generate routes for each locale
  locales.forEach((locale) => {
    const localePrefix = `/${locale}`;

    // Homepage - highest priority
    routes.push({
      url: `${baseUrl}${localePrefix}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
      alternates: {
        languages: {
          "pt-BR": `${baseUrl}/pt-BR`,
          es: `${baseUrl}/es`,
          en: `${baseUrl}/en`,
        },
      },
    });

    // Main sections - high priority
    const sections = [
      { id: "servicos", priority: 0.9, frequency: "weekly" as const },
      { id: "equipe", priority: 0.8, frequency: "monthly" as const },
      { id: "galeria", priority: 0.8, frequency: "weekly" as const },
      { id: "depoimentos", priority: 0.7, frequency: "weekly" as const },
      { id: "instagram", priority: 0.7, frequency: "daily" as const },
      { id: "faq", priority: 0.7, frequency: "monthly" as const },
      { id: "contato", priority: 0.9, frequency: "monthly" as const },
      { id: "eventos", priority: 0.6, frequency: "weekly" as const },
      { id: "parceiros", priority: 0.5, frequency: "monthly" as const },
    ];

    sections.forEach((section) => {
      routes.push({
        url: `${baseUrl}${localePrefix}#${section.id}`,
        lastModified: currentDate,
        changeFrequency: section.frequency,
        priority: section.priority,
        alternates: {
          languages: {
            "pt-BR": `${baseUrl}/pt-BR#${section.id}`,
            es: `${baseUrl}/es#${section.id}`,
            en: `${baseUrl}/en#${section.id}`,
          },
        },
      });
    });

    // Service-specific pages (virtual pages for SEO)
    SERVICES.forEach((service) => {
      routes.push({
        url: `${baseUrl}${localePrefix}#servico-${service.id}`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: {
          languages: {
            "pt-BR": `${baseUrl}/pt-BR#servico-${service.id}`,
            es: `${baseUrl}/es#servico-${service.id}`,
            en: `${baseUrl}/en#servico-${service.id}`,
          },
        },
      });
    });
  });

  return routes;
}
