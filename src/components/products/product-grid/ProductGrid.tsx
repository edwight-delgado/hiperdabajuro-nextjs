"use client";
import { Product } from "@/interfaces/product.interface";
import { ProductGridItem } from "./ProductGridItem";
//import SidebarProduct from "@/components/sidebar-product/SidebarProduct";

interface Props {
  products: Product[];
  productQuery: string;
}

export const ProductGrid = ({ products, productQuery }: Props) => {
  const filteredProduct = products.filter((product) =>
    product.title.toLowerCase().includes(productQuery.toLowerCase())
  );

  const filtered = filteredProduct || products;

  console.log("busqueda: ", filtered);

  return (
    <section className="my-lg-14 my-8">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mb-8">
              <h3 className="mb-0">Shop by Category</h3>
            </div>
          </div>
        </div>
        <div className="g-6 row row-cols-xxl-6 row-cols-lg-4 row-cols-md-3 row-cols-2">
          {filtered.map((product) => (
            <ProductGridItem
              key={product.id}
              product={product}
            ></ProductGridItem>
          ))}
        </div>
      </div>
    </section>
  );
};
