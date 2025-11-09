import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.goldmustachebarbearia.com.br";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/pt-BR/", "/es/", "/en/"],
        disallow: ["/api/", "/_next/", "/admin/", "*.json", "/private/"],
      },
      {
        userAgent: "Googlebot",
        allow: ["/", "/pt-BR/", "/es/", "/en/"],
        disallow: ["/api/", "/_next/", "/admin/", "/private/"],
      },
      {
        userAgent: "Bingbot",
        allow: ["/", "/pt-BR/", "/es/", "/en/"],
        disallow: ["/api/", "/_next/", "/admin/", "/private/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
