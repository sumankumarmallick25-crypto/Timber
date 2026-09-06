export type ProductPreview = {
  name: string;
  slug: string;
  price: number;
  category: string;
  tone: string;
};

export const products: ProductPreview[] = [
  { name: "Core Heavy Tee", slug: "core-heavy-tee", price: 1299, category: "T-Shirts", tone: "Charcoal" },
  { name: "Relaxed Oxford", slug: "relaxed-oxford", price: 1899, category: "Shirts", tone: "Stone" },
  { name: "Everyday Cargo", slug: "everyday-cargo", price: 2299, category: "Cargos", tone: "Olive" },
  { name: "Straight Denim", slug: "straight-denim", price: 2499, category: "Jeans", tone: "Raw Indigo" },
  { name: "Utility Trouser", slug: "utility-trouser", price: 2099, category: "Trousers", tone: "Black" },
  { name: "Relaxed Co-ord", slug: "relaxed-co-ord", price: 2799, category: "Co-ords", tone: "Sand" },
];
