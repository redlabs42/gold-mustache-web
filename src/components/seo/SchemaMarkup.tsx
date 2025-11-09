import { BRAND, SERVICES } from "@/constants/brand";

export function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.goldmustachebarbearia.com.br/#organization",
    name: BRAND.name,
    description:
      "Tradição e Estilo Masculino - Barbearia tradicional em Itapema-SC com mais de 6 anos de experiência oferecendo cortes masculinos clássicos e modernos, barba completa e degradê navalhado.",
    url: "https://www.goldmustachebarbearia.com.br",
    telephone: [
      BRAND.contact.phone,
      BRAND.contactVitor.phone,
      BRAND.contactJoao.phone,
      BRAND.contactDavid.phone,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. 115, 79 - Centro",
      addressLocality: "Itapema",
      addressRegion: "SC",
      postalCode: "88220-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -27.0897,
      longitude: -48.617,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "20:00",
      },
    ],
    sameAs: [BRAND.instagram.mainUrl, BRAND.instagram.storeUrl],
    priceRange: "$$",
    currenciesAccepted: "BRL",
    paymentAccepted: ["Cash", "Credit Card", "Debit Card", "Pix"],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -27.0897,
        longitude: -48.617,
      },
      geoRadius: "50000",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "50",
    },
    image: "https://www.goldmustachebarbearia.com.br/logo.png",
    logo: "https://www.goldmustachebarbearia.com.br/logo.png",
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.goldmustachebarbearia.com.br/#services",
    name: "Serviços de Barbearia",
    description: "Serviços completos de barbearia masculina",
    provider: {
      "@id": "https://www.goldmustachebarbearia.com.br/#organization",
    },
    serviceType: "Barbearia",
    areaServed: {
      "@type": "City",
      name: "Itapema",
      containedInPlace: {
        "@type": "State",
        name: "Santa Catarina",
        containedInPlace: {
          "@type": "Country",
          name: "Brasil",
        },
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Barbearia",
      itemListElement: SERVICES.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.id,
          description: service.id,
        },
        price: service.price.replace("R$ ", "").replace(",", "."),
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        validFrom: new Date().toISOString().split("T")[0],
        url: `https://www.goldmustachebarbearia.com.br/#service-${service.id}`,
        position: index + 1,
      })),
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.goldmustachebarbearia.com.br/#organization",
    name: BRAND.name,
    alternateName: "Gold Mustache",
    url: "https://www.goldmustachebarbearia.com.br",
    logo: "https://www.goldmustachebarbearia.com.br/logo.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BRAND.contact.phone,
        contactType: "customer service",
        availableLanguage: ["Portuguese"],
        areaServed: "BR",
      },
    ],
    sameAs: [BRAND.instagram.mainUrl, BRAND.instagram.storeUrl],
    foundingDate: "2018",
    description:
      "Tradição e Estilo Masculino - Barbearia tradicional especializada em cortes masculinos",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.goldmustachebarbearia.com.br",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.goldmustachebarbearia.com.br/#website",
    url: "https://www.goldmustachebarbearia.com.br",
    name: BRAND.name,
    description: "Tradição e Estilo Masculino - Site oficial da barbearia",
    publisher: {
      "@id": "https://www.goldmustachebarbearia.com.br/#organization",
    },
    inLanguage: "pt-BR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
