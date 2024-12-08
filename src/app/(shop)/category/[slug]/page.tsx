import { initialData } from "@/app/seed/seed";

import {
  ProductGrid,
  ProductModal,
  ShoppingCart,
  TopBreadCrumb,
} from "@/components";
import { CategoryGrid } from "@/components/categories-grid/CategoryGrid";

import Providers from "@/middleware/providers";

const products = initialData.products;

interface Props {
  params: {
    slug: string;
  };

  searchParams?: {
    query?: string;
    page?: string;
  };
}
const seedProduct = initialData.products;

export default function ({ params, searchParams }: Props) {
  const { slug } = params;
  const products = seedProduct.filter((product) => product.category == slug);

  const query = searchParams?.query || "";
  console.log("this query ", query);
  return (
    <div className="py-24">
      <main className="container">
        <div className="mt-4">
          <div className="container">
            <div className="row">
              <div className="col">
                <nav aria-label="breadcrumb" className="mb-0">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#" role="button">
                        Inicio
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#" role="button">
                        <span>Categoia</span>
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {slug}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4 bg-light border-0 card">
          <div className="p-9 card-body">
            <h2 className="mb-0 fs-1">{slug}</h2>
          </div>
        </div>

        <ProductGrid products={products} productQuery={query}></ProductGrid>
      </main>
      <ShoppingCart></ShoppingCart>
      <ProductModal></ProductModal>
    </div>
  );
}
