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
    name: "Corte Simples",
    description: "Corte simples com tesoura e navalha",
    price: "R$ 30,00",
    duration: "20 min",
  },
  {
    id: "corte-degrade",
    name: "Corte Degradê Navalhado",
    description: "Corte degradê navalhado com tesoura",
    price: "R$ 60,00",
    duration: "45 min",
  },
  {
    id: "corte-barba",
    name: "Corte + Barba",
    description: "Corte e barba completo",
    price: "R$ 90,00",
    duration: "60 min",
  },
  {
    id: "barba-completa",
    name: "Barba Completa",
    description: "Aparar e modelar",
    price: "R$ 45,00",
    duration: "30 min",
  },
  {
    id: "bigode",
    name: "Corte na Tesoura",
    description: "Corte de cabelo todo na tesoura",
    price: "R$ 60,00",
    duration: "45 min",
  },
  {
    id: "sobrancelha-na-navalha",
    name: "Corte Americano",
    description: "Corte com degradê só nos pezinhos",
    price: "R$ 50,00",
    duration: "45 min",
  },
  {
    id: "sobrancelha-na-navalha",
    name: "Sobrancelha na Navalha",
    description: "Design e aparar sobrancelhas",
    price: "R$ 20,00",
    duration: "15 min",
  },
  {
    id: "sobrancelha-na-navalha",
    name: "Corte Low Fade",
    description: "Corte com degradê mais baixo",
    price: "R$ 60,00",
    duration: "50 min",
  },
  {
    id: "sobrancelha-na-navalha",
    name: "Cera Nariz e Ouvido",
    description: "",
    price: "R$ 30,00",
    duration: "15 min",
  },
  {
    id: "sobrancelha-na-navalha",
    name: "Corte Degradê Tradicional",
    description: "Corte degradê apartir do pente 1",
    price: "R$ 45,00",
    duration: "35 min",
  },
  {
    id: "sobrancelha-na-navalha",
    name: "Corte Degradê na Zero",
    description: "Corte degradê apartir da zero",
    price: "R$ 50,00",
    duration: "35 min",
  },
  {
    id: "sobrancelha-na-navalha",
    name: "Progresiva / Relaxamento",
    description: "Alisamento dos fios",
    price: "R$ 100,00",
    duration: "50 min",
  },
  {
    id: "sobrancelha-na-navalha",
    name: "Luzes",
    description: "",
    price: "R$ 150,00",
    duration: "1 hora 30 min",
  },
  {
    id: "sobrancelha-na-navalha",
    name: "Platinado",
    description: "",
    price: "R$ 200,00",
    duration: "2 horas",
  },
  {
    id: "sobrancelha-na-navalha",
    name: "Sobrancelha na pinça",
    description: "",
    price: "R$ 30,00",
    duration: "15 min",
  },
] as const;
