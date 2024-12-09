interface SeedProduct {
  id: number;
  description: string;
  images: string[];
  inStock: number;
  quantity: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
  category: string;
  categoryName: string;
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
      images: ["product-img-1.jpg", "image2", "image3"],
      inStock: 7,
      quantity: 1,
      price: 20,
      slug: "Batin-crofessor-pampden-1",
      title: "Batin crofessor pampden 1",
      tags: ["carne", "carniceria", "mejor"],
      category: "granos-y-cereales",
      categoryName: "Granos y Cereales",
      brand: "marca 1",
    },
    {
      id: 2,
      description:
        "desc n2 All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
      images: ["product-img-2.jpg", "image2", "image3"],
      inStock: 7,
      quantity: 1,
      price: 34,
      slug: "Batin-crofessor-pampden-2",
      title: "Batin crofessor pampden 2",
      tags: ["pollo", "enbutidos"],
      categoryName: "Granos y Cereales",
      category: "granos-y-cereales",
      brand: "marca2",
    },
    {
      id: 3,
      description:
        "desc n3 All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
      images: ["product-img-3.jpg", "image2", "image3"],
      inStock: 7,
      quantity: 1,
      price: 44,
      slug: "",
      title: "Batin crofessor pampden 3",
      tags: ["cafe", "Nescafe"],
      categoryName: "Panaderia y Pasteleria",
      category: "panaderia-y-pasteleria",
      brand: "marca 1",
    },
    {
      id: 4,
      description:
        "desc n4 All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
      images: ["product-img-4.jpg", "image2", "image3"],
      inStock: 7,
      quantity: 5,
      price: 10,
      slug: "Batin-crofessor-pampden-4",
      title: "Batin crofessor pampden 4",
      tags: ["verdura", "perejir"],
      categoryName: "Limpieza",
      category: "productos-de-limpieza",
      brand: "marca2",
    },
    {
      id: 5,
      description:
        "desc n4 All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
      images: ["product-img-5.jpg", "image2", "image3"],
      inStock: 7,
      quantity: 5,
      price: 12.5,
      slug: "Batin-crofessor-pampden-4",
      title: "Batin crofessor pampden 5",
      tags: ["verdura", "perejir"],
      categoryName: "Limpieza",
      category: "productos-de-limpieza",
      brand: "marca2",
    },
    {
      id: 6,
      description:
        "desc n4 All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
      images: ["product-img-6.jpg", "image2", "image3"],
      inStock: 7,
      quantity: 5,
      price: 6,
      slug: "Batin-crofessor-pampden-4",
      title: "Batin crofessor pampden 6",
      tags: ["verdura", "perejir"],
      categoryName: "Limpieza",
      category: "productos-de-limpieza",
      brand: "marca2",
    },
    {
      id: 7,
      description:
        "desc n4 All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
      images: ["product-img-7.jpg", "image2", "image3"],
      inStock: 7,
      quantity: 5,
      price: 15,
      slug: "Batin-crofessor-pampden-4",
      title: "Batin crofessor pampden 7",
      tags: ["verdura", "perejir"],
      categoryName: "Limpieza",
      category: "productos-de-limpieza",
      brand: "marca2",
    },
    {
      id: 8,
      description:
        "desc n4 All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
      images: ["product-img-8.jpg", "image2", "image3"],
      inStock: 7,
      quantity: 5,
      price: 5,
      slug: "Batin-crofessor-pampden-4",
      title: "Batin crofessor pampden 8",
      tags: ["verdura", "perejir"],
      categoryName: "Limpieza",
      category: "productos-de-limpieza",
      brand: "marca2",
    },
  ],
};
