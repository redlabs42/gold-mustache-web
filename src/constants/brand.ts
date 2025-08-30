export const BRAND = {
  name: "Gold Mustache Barbearia",
  tagline: "Tradição e Estilo Masculino",
  location: "Itapema, Santa Catarina",

  // Social Media
  instagram: {
    main: "@goldmustachebarbearia",
    store: "@_goldlab",
    mainUrl: "https://instagram.com/goldmustachebarbearia",
    storeUrl: "https://instagram.com/_goldlab",
  },

  // Booking System
  booking: {
    inbarberUrl:
      "https://chat.inbarberapp.com/?id=6c060e9d-672d-4f39-bbc4-fac594f4cc28",
  },

  // Contact Information
  contact: {
    phone: "47 98904-6178",
    whatsapp: "+5547989046178",
    // email: 'contato@goldmustache.com', // TODO: Add real email
    address:
      "R. 115, 79 - Centro, Itapema - SC, 88220-000 - Gold Mustache Barbearia",
  },

  // Business Hours
  hours: {
    weekdays: "Segunda a Sexta: 10h às 20h",
    saturday: "Sábado: 10h às 20h",
    sunday: "Domingo: Fechado",
  },

  // Brand Colors (for use in custom components)
  colors: {
    gold: "oklch(0.65 0.15 85)",
    darkGold: "oklch(0.55 0.15 85)",
    lightGold: "oklch(0.75 0.12 85)",
    dark: "oklch(0.12 0.02 85)",
    lightDark: "oklch(0.25 0.02 85)",
  },
} as const;

export const SERVICES = [
  {
    id: "corte-tradicional",
    name: "Corte Tradicional",
    description: "Corte clássico com tesoura e navalha",
    price: "R$ 35,00",
    duration: "45 min",
  },
  {
    id: "corte-degrade",
    name: "Corte Degradê",
    description: "Corte clássico com tesoura e navalha",
    price: "R$ 35,00",
    duration: "45 min",
  },
  {
    id: "corte-barba",
    name: "Corte + Barba",
    description: "Corte completo com acabamento de barba",
    price: "R$ 80,00",
    duration: "60 min",
  },
  {
    id: "barba-completa",
    name: "Barba Completa",
    description: "Aparar, modelar e hidratação",
    price: "R$ 45,00",
    duration: "30 min",
  },
  {
    id: "bigode",
    name: "Bigode",
    description: "Corte e modelagem de bigode",
    price: "R$ 15,00",
    duration: "20 min",
  },
  {
    id: "sobrancelha-na-navalha",
    name: "Sobrancelha na Navalha",
    description: "Design e aparar sobrancelhas",
    price: "R$ 20,00",
    duration: "15 min",
  },
] as const;
