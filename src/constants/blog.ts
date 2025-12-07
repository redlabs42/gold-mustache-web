export interface BlogPost {
  slug: string;
  image: string;
  category: string;
  readTime: number; // minutes
  publishedAt: string; // ISO date
  author: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "cuidados-barba",
    image: "/images/blog/barba-care.svg",
    category: "barba",
    readTime: 5,
    publishedAt: "2025-12-01",
    author: "Gold Mustache",
  },
  {
    slug: "tendencias-cortes-2025",
    image: "/images/blog/tendencias-2025.svg",
    category: "cortes",
    readTime: 4,
    publishedAt: "2025-11-28",
    author: "Gold Mustache",
  },
  {
    slug: "corte-ideal-rosto",
    image: "/images/blog/formato-rosto.svg",
    category: "dicas",
    readTime: 6,
    publishedAt: "2025-11-20",
    author: "Gold Mustache",
  },
  {
    slug: "cuidados-pos-corte",
    image: "/images/blog/pos-corte.svg",
    category: "cuidados",
    readTime: 3,
    publishedAt: "2025-11-15",
    author: "Gold Mustache",
  },
];

export const BLOG_CATEGORIES = [
  "barba",
  "cortes",
  "dicas",
  "cuidados",
] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number];
