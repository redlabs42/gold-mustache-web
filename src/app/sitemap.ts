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

    // Static pages
    routes.push(
      {
        url: `${baseUrl}${localePrefix}`,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 1.0,
        alternates: {
          languages: {
            "pt-BR": `${baseUrl}/pt-BR`,
            es: `${baseUrl}/es`,
            en: `${baseUrl}/en`,
          },
        },
      },
      {
        url: `${baseUrl}${localePrefix}#servicos`,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}${localePrefix}#instagram`,
        lastModified: currentDate,
        changeFrequency: "daily",
        priority: 0.7,
      },
      {
        url: `${baseUrl}${localePrefix}#contato`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.6,
      },
      {
        url: `${baseUrl}${localePrefix}#parceiros`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.4,
      },
    );

    // Service-specific pages (virtual pages for SEO)
    SERVICES.forEach((service) => {
      routes.push({
        url: `${baseUrl}${localePrefix}#servico-${service.id}`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.5,
      });
    });
  });

  return routes;
}
