import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.goldmustachebarbearia.com.br";

  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/pt-BR/",
          "/es/",
          "/en/",
          "/images/",
          "/barbers/",
          "/logo.png",
          "/favicon.ico",
        ],
        disallow: [
          "/api/",
          "/_next/static/",
          "/_next/image/",
          "/admin/",
          "/private/",
          "/*.json$",
          "/node_modules/",
        ],
        crawlDelay: 0,
      },
      {
        userAgent: "Googlebot",
        allow: [
          "/",
          "/pt-BR/",
          "/es/",
          "/en/",
          "/images/",
          "/barbers/",
          "/_next/static/",
          "/_next/image/",
        ],
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/images/", "/barbers/", "/logo.png", "/_next/image/"],
        disallow: ["/private/"],
      },
      {
        userAgent: "Bingbot",
        allow: ["/", "/pt-BR/", "/es/", "/en/", "/images/", "/barbers/"],
        disallow: ["/api/", "/_next/", "/admin/", "/private/"],
        crawlDelay: 1,
      },
      {
        userAgent: "baiduspider",
        disallow: ["/"],
      },
      {
        userAgent: "YandexBot",
        allow: ["/", "/pt-BR/", "/es/", "/en/"],
        disallow: ["/api/", "/_next/", "/admin/", "/private/"],
        crawlDelay: 2,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
