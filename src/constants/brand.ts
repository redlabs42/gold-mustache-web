export const BRAND = {
  name: "Gold Mustache Barbearia",
  // tagline and location now come from i18n translations
  // Use t('brand.tagline') and t('brand.location')

  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "",
  },

  instagram: {
    main: "@goldmustachebarbearia",
    store: "@_goldlab",
    mainUrl: "https://instagram.com/goldmustachebarbearia",
    storeUrl: "https://instagram.com/_goldlab",
  },

  booking: {
    inbarberUrl:
      "https://chat.inbarberapp.com/?id=6c060e9d-672d-4f39-bbc4-fac594f4cc28",
  },

  contact: {
    phone: "47 98904-6178",
    whatsapp: "+5547989046178",
    // email: 'contato@goldmustache.com', // TODO: Add real email
    address:
      "R. 115, 79 - Centro, Itapema - SC, 88220-000 - Gold Mustache Barbearia",
  },

  contactVitor: {
    phone: "47 98882-8032",
    whatsapp: "+5547988828032",
    // email: 'contato@goldmustache.com', // TODO: Add real email
    address:
      "R. 115, 79 - Centro, Itapema - SC, 88220-000 - Gold Mustache Barbearia",
  },

  contactJoao: {
    phone: "47 99953-8340",
    whatsapp: "+5547999538340",
    // email: 'contato@goldmustache.com', // TODO: Add real email
    address:
      "R. 115, 79 - Centro, Itapema - SC, 88220-000 - Gold Mustache Barbearia",
  },

  contactDavid: {
    phone: "51 98594-7566",
    whatsapp: "+5551985947566",
    // email: 'contato@goldmustache.com', // TODO: Add real email
    address:
      "R. 115, 79 - Centro, Itapema - SC, 88220-000 - Gold Mustache Barbearia",
  },

  // Business Hours - now come from i18n translations
  // Use t('contact.hours.weekdays'), t('contact.hours.time'), etc.

  // Brand Colors (for use in custom components)
  colors: {
    gold: "oklch(0.65 0.15 85)",
    darkGold: "oklch(0.55 0.15 85)",
    lightGold: "oklch(0.75 0.12 85)",
    dark: "oklch(0.12 0.02 85)",
    lightDark: "oklch(0.25 0.02 85)",
  },
} as const;

// Services array - name and description come from i18n translations
// Use t(`services.items.${service.id}.name`) to get translated name
export const SERVICES = [
  {
    id: "corte-tradicional",
    price: "R$ 30,00",
    duration: "20 min",
  },
  {
    id: "corte-degrade",
    price: "R$ 60,00",
    duration: "45 min",
  },
  {
    id: "corte-barba",
    price: "R$ 90,00",
    duration: "60 min",
  },
  {
    id: "barba-completa",
    price: "R$ 45,00",
    duration: "30 min",
  },
  {
    id: "bigode",
    price: "R$ 60,00",
    duration: "45 min",
  },
  {
    id: "corte-americano",
    price: "R$ 50,00",
    duration: "45 min",
  },
  {
    id: "sobrancelha-na-navalha",
    price: "R$ 20,00",
    duration: "15 min",
  },
  {
    id: "corte-low-fade",
    price: "R$ 60,00",
    duration: "50 min",
  },
  {
    id: "cera-nariz-ouvido",
    price: "R$ 30,00",
    duration: "15 min",
  },
  {
    id: "corte-degrade-tradicional",
    price: "R$ 45,00",
    duration: "35 min",
  },
  {
    id: "corte-degrade-na-zero",
    price: "R$ 50,00",
    duration: "35 min",
  },
  {
    id: "progressiva-relaxamento",
    price: "R$ 100,00",
    duration: "50 min",
  },
  {
    id: "luzes",
    price: "R$ 150,00",
    duration: "1 hora 30 min",
  },
  {
    id: "platinado",
    price: "R$ 200,00",
    duration: "2 horas",
  },
  {
    id: "sobrancelha-na-pinca",
    price: "R$ 30,00",
    duration: "15 min",
  },
] as const;
