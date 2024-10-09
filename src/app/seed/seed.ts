interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
}

interface SeedData {
  products: SeedProduct[];
}

export const initialData: SeedData = {
  products: [
    {
      description: "desc n1",
      images: ["image1", "image2", "image3"],
      inStock: 7,
      price: 34,
      slug: "esddddd",
      title: "title1",
      tags: ["shirt"],
    },
    {
      description: "desc n1",
      images: ["image1", "image2", "image3"],
      inStock: 7,
      price: 34,
      slug: "esddddd",
      title: "title2",
      tags: ["shirt"],
    },
    {
      description: "desc n1",
      images: ["image1", "image2", "image3"],
      inStock: 7,
      price: 34,
      slug: "esddddd",
      title: "title3",
      tags: ["shirt"],
    },
    {
      description: "desc n1",
      images: ["image1", "image2", "image3"],
      inStock: 7,
      price: 34,
      slug: "esddddd",
      title: "title4",
      tags: ["shirt"],
    },
  ],
};
