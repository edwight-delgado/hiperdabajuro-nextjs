import { initialData } from "../seed/seed";
import { initialDataCat } from "../seed/seedCategory";
import { ProductGrid, ProductModal, ShoppingCart } from "@/components";
import { CategoryGrid } from "@/components/categories-grid/CategoryGrid";

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
        <CategoryGrid categorys={category}></CategoryGrid>
        <ProductGrid products={products} productQuery={query}></ProductGrid>
      </main>
      <ShoppingCart></ShoppingCart>
      <ProductModal></ProductModal>
    </div>
  );
}
