import { Product } from "@/interfaces/product.interface";

interface Props {
  products: Product[];
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="products">
      {products.map((product) => (
        <span key={product.slug}>{product.title}</span>
      ))}
    </div>
  );
};
