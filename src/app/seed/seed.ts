interface SeedProduct {
  id: number;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
  category: string;
  brand: string;
}

interface SeedData {
  products: SeedProduct[];
}

export const initialData: SeedData = {
  products: [
    {
      id: 1,
      description:
        "desc n1 All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
      images: ["product1.webp", "image2", "image3"],
      inStock: 7,
      price: 20,
      slug: "Batin-crofessor-pampden-1",
      title: "Batin crofessor pampden 1",
      tags: ["shirt", "otra cosa", "mejor"],
      category: "categoria1",
      brand: "marca 1",
    },
    {
      id: 2,
      description:
        "desc n2 All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
      images: ["product2.webp", "image2", "image3"],
      inStock: 7,
      price: 34,
      slug: "Batin-crofessor-pampden-2",
      title: "Batin crofessor pampden 2",
      tags: ["shirt", "casa", "mata"],
      category: "categoria2",
      brand: "marca2",
    },
    {
      id: 3,
      description:
        "desc n3 All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
      images: ["product1.webp", "image2", "image3"],
      inStock: 7,
      price: 44,
      slug: "esddddd",
      title: "Batin crofessor pampden 3",
      tags: ["shirt"],
      category: "categoria3",
      brand: "marca 1",
    },
    {
      id: 4,
      description:
        "desc n4 All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
      images: ["product2.webp", "image2", "image3"],
      inStock: 7,
      price: 10,
      slug: "Batin-crofessor-pampden-4",
      title: "Batin crofessor pampden 4",
      tags: ["shirt"],
      category: "categoria1",
      brand: "marca2",
    },
  ],
};
