interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
  category: string;
}

interface SeedData {
  products: SeedProduct[];
}

export const initialData: SeedData = {
  products: [
    {
      description: "desc n1",
      images: ["product1.webp", "image2", "image3"],
      inStock: 7,
      price: 34,
      slug: "Batin-crofessor-pampden-1",
      title: "Batin crofessor pampden 1",
      tags: ["shirt"],
      category: "categoria1",
    },
    {
      description: "desc n1",
      images: ["product1.webp", "image2", "image3"],
      inStock: 7,
      price: 34,
      slug: "Batin-crofessor-pampden-2",
      title: "Batin crofessor pampden 2",
      tags: ["shirt"],
      category: "categoria2",
    },
    {
      description: "desc n1",
      images: ["product1.webp", "image2", "image3"],
      inStock: 7,
      price: 34,
      slug: "esddddd",
      title: "Batin crofessor pampden 3",
      tags: ["shirt"],
      category: "categoria3",
    },
    {
      description: "desc n1",
      images: ["product1.webp", "image2", "image3"],
      inStock: 7,
      price: 34,
      slug: "esddddd",
      title: "Batin crofessor pampden 4",
      tags: ["shirt"],
      category: "categoria1",
    },
  ],
};
