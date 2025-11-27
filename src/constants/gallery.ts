export interface GalleryItem {
  id: string;
  before: string;
  after: string;
  service: string;
  category: "haircut" | "beard" | "combo" | "styling";
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    before: "/images/gallery/before-1.jpg",
    after: "/images/gallery/after-1.jpg",
    service: "Corte + Barba",
    category: "combo",
  },
  {
    id: "2",
    before: "/images/gallery/before-2.jpg",
    after: "/images/gallery/after-2.jpg",
    service: "Corte Degradê",
    category: "haircut",
  },
  {
    id: "3",
    before: "/images/gallery/before-3.jpg",
    after: "/images/gallery/after-3.jpg",
    service: "Barba Completa",
    category: "beard",
  },
  {
    id: "4",
    before: "/images/gallery/before-4.jpg",
    after: "/images/gallery/after-4.jpg",
    service: "Corte Social",
    category: "haircut",
  },
  {
    id: "5",
    before: "/images/gallery/before-5.jpg",
    after: "/images/gallery/after-5.jpg",
    service: "Barba + Styling",
    category: "styling",
  },
  {
    id: "6",
    before: "/images/gallery/before-6.jpg",
    after: "/images/gallery/after-6.jpg",
    service: "Corte + Barba Premium",
    category: "combo",
  },
];

export const GALLERY_CATEGORIES = [
  { value: "all", labelKey: "all" },
  { value: "haircut", labelKey: "haircut" },
  { value: "beard", labelKey: "beard" },
  { value: "combo", labelKey: "combo" },
  { value: "styling", labelKey: "styling" },
] as const;
