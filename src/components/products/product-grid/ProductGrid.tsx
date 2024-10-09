import { Product } from "@/interfaces/product.interface";
import { ProductGridItem } from "./ProductGridItem";

interface Props {
  products: Product[];
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="mt-10">
      <div className="shop-tab-content active" id="grid">
        <div className="flex flex-wrap -mb-7 -px-4">
          {products.map((product) => (
            <ProductGridItem
              key={product.slug}
              product={product}
            ></ProductGridItem>
          ))}
        </div>
      </div>
    </div>
  );
};
