import { initialData } from "../seed/seed";
import { initialDataCat } from "../seed/seedCategory";
import {
  ProductGrid,
  ProductModal,
  ShoppingCart,
  TopBreadCrumb,
} from "@/components";
import { CategoryGrid } from "@/components/categories-grid/CategoryGrid";

import Providers from "@/middleware/providers";

const products = initialData.products;
const category = initialDataCat.categories;
export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  console.log("this query ", query);

  return (
    <div className="py-24">
      <main className="container">
        <Providers>
          <TopBreadCrumb></TopBreadCrumb>
        </Providers>
        <CategoryGrid categorys={category}></CategoryGrid>
        <ProductGrid products={products} productQuery={query}></ProductGrid>
      </main>
      <ShoppingCart></ShoppingCart>
      <ProductModal></ProductModal>
    </div>
  );
}
