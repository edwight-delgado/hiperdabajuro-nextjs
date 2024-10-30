import { Product } from "@/interfaces/product.interface";
import { ProductGridItem } from "./ProductGridItem";
import SidebarProduct from "@/components/sidebar-product/SidebarProduct";

interface Props {
  products: Product[];
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="flex flex-wrap flex-col lg:flex-row -mx-4">
      <SidebarProduct></SidebarProduct>
      <div id="shoptab" className="flex-1">
        <div className="mt-10">
          <div className="shop-tab-content active" id="grid">
            <div className="flex flex-wrap -mb-7 -px-4">
              {products.map((product) => (
                <ProductGridItem product={product}></ProductGridItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
