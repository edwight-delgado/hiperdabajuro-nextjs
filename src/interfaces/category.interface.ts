export interface Category {
  id: number;
  images: string;
  inStock: number;
  quantity: number;

  slug: string;
  tags: string[];
  title: string;
}
