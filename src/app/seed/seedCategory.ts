interface SeedCategory {
  id: number;
  images: string;
  inStock: number;
  quantity: number;

  slug: string;
  tags: string[];
  title: string;
}

interface SeedDataCat {
  categories: SeedCategory[];
}

export const initialDataCat: SeedDataCat = {
  categories: [
    {
      id: 1,

      images: "category/category-atta-rice-dal.jpg",
      inStock: 7,
      quantity: 0,

      slug: "granos-y-cereales",
      title: "Granos y Cereales",
      tags: ["carne", "carniceria", "mejor"],
    },
    {
      id: 2,

      images: "category/category-baby-care.jpg",
      inStock: 7,
      quantity: 0,

      slug: "Dairy_Bread_&_Eggs",
      title: "Dairy, Bread & Eggs",
      tags: ["carne", "carniceria", "mejor"],
    },
    {
      id: 3,

      images: "category/category-bakery-biscuits.jpg",
      inStock: 7,
      quantity: 0,

      slug: "panaderia-y-pasteleria",
      title: "Panaderia y Pasteleria",
      tags: ["carne", "carniceria", "mejor"],
    },
    {
      id: 4,

      images: "category/category-chicken-meat-fish.jpg",
      inStock: 7,
      quantity: 0,

      slug: "pollo-y-pescado",
      title: "Pollo y Pescado",
      tags: ["carne", "carniceria", "mejor"],
    },
    {
      id: 5,

      images: "category/category-cleaning-essentials.jpg",
      inStock: 7,
      quantity: 0,

      slug: "productos-de-limpieza",
      title: "Productos de Limpieza",
      tags: ["carne", "carniceria", "mejor"],
    },

    {
      id: 6,

      images: "category/category-cold-drinks-juices.jpg",
      inStock: 7,
      quantity: 0,

      slug: "jugos-y-refrescos",
      title: "Jugos y Refrescos",
      tags: ["carne", "carniceria", "mejor"],
    },
    {
      id: 7,

      images: "category/category-fruits-vegetables.jpg",
      inStock: 7,
      quantity: 0,

      slug: "frutas-y-vegetales",
      title: "Frutas y Vegetales",
      tags: ["carne", "carniceria", "mejor"],
    },
  ],
};
