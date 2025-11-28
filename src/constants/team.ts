export const TEAM_MEMBERS = [
  {
    id: "1",
    name: "Ygor Luan",
    role: {
      "pt-BR": "Barbeiro Sênior & Fundador",
      en: "Senior Barber & Founder",
      es: "Barbero Senior & Fundador",
    },
    bio: {
      "pt-BR":
        "Fundador da Gold Mustache, com mais de 10 anos de experiência. Especialista em cortes clássicos e modernos, sempre buscando a perfeição em cada detalhe.",
      en: "Founder of Gold Mustache, with over 10 years of experience. Specialist in classic and modern cuts, always seeking perfection in every detail.",
      es: "Fundador de Gold Mustache, con más de 10 años de experiencia. Especialista en cortes clásicos y modernos, siempre buscando la perfección en cada detalle.",
    },
    specialties: {
      "pt-BR": ["Cortes Clássicos", "Degradê", "Barba Completa", "Design"],
      en: ["Classic Cuts", "Fade", "Full Beard", "Design"],
      es: ["Cortes Clásicos", "Degradado", "Barba Completa", "Diseño"],
    },
    experience: 10,
    image: "/barbers/ygor.png",
  },
  {
    id: "2",
    name: "Vitor Maronez",
    role: {
      "pt-BR": "Barbeiro Profissional",
      en: "Professional Barber",
      es: "Barbero Profesional",
    },
    bio: {
      "pt-BR":
        "Mestre em degradê na zero e cortes precisos. Sua técnica impecável garante resultados incríveis em cada atendimento.",
      en: "Master in zero fade and precise cuts. His impeccable technique guarantees incredible results in every service.",
      es: "Maestro en degradado a cero y cortes precisos. Su técnica impecable garantiza resultados increíbles en cada servicio.",
    },
    specialties: {
      "pt-BR": ["Degradê na Zero", "High Fade", "Cortes Precisos", "Barba"],
      en: ["Zero Fade", "High Fade", "Precise Cuts", "Beard"],
      es: ["Degradado a Cero", "High Fade", "Cortes Precisos", "Barba"],
    },
    experience: 8,
    image: "/barbers/vitor.png",
  },
  {
    id: "3",
    name: "João Vitor",
    role: {
      "pt-BR": "Barbeiro Especialista",
      en: "Specialist Barber",
      es: "Barbero Especialista",
    },
    bio: {
      "pt-BR":
        "Especialista em cortes modernos e low fade. Atento aos detalhes e sempre atualizado com as últimas tendências da barbearia.",
      en: "Specialist in modern cuts and low fade. Detail-oriented and always updated with the latest barbershop trends.",
      es: "Especialista en cortes modernos y low fade. Atento a los detalles y siempre actualizado con las últimas tendencias de barbería.",
    },
    specialties: {
      "pt-BR": ["Low Fade", "Mid Fade", "Cortes Modernos", "Finalização"],
      en: ["Low Fade", "Mid Fade", "Modern Cuts", "Finishing"],
      es: ["Low Fade", "Mid Fade", "Cortes Modernos", "Acabado"],
    },
    experience: 7,
    image: "/barbers/joao.png",
  },
  {
    id: "4",
    name: "David Trindade",
    role: {
      "pt-BR": "Barbeiro Profissional",
      en: "Professional Barber",
      es: "Barbero Profesional",
    },
    bio: {
      "pt-BR":
        "Especialista em acabamentos perfeitos e design de barba. Sua atenção aos detalhes transforma cada corte em uma obra de arte.",
      en: "Specialist in perfect finishes and beard design. His attention to detail transforms every cut into a work of art.",
      es: "Especialista en acabados perfectos y diseño de barba. Su atención al detalle transforma cada corte en una obra de arte.",
    },
    specialties: {
      "pt-BR": ["Design de Barba", "Acabamentos", "Cortes Clássicos", "Fade"],
      en: ["Beard Design", "Finishing", "Classic Cuts", "Fade"],
      es: ["Diseño de Barba", "Acabados", "Cortes Clásicos", "Fade"],
    },
    experience: 6,
    image: "/barbers/david.png",
  },
] as const;

export type TeamMember = (typeof TEAM_MEMBERS)[number];
