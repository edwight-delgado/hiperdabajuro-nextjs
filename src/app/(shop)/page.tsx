"use client";

import { initialData } from "../seed/seed";
import { ProductGrid, ProductModal, TopBreadCrumb } from "@/components";
import Providers from "@/middleware/providers";

const products = initialData.products;
export default function Home() {
  return (
    <div className="py-24">
      <main className="container">
        <Providers>
          <TopBreadCrumb></TopBreadCrumb>
        </Providers>

        <ProductGrid products={products}></ProductGrid>
      </main>
      <ProductModal slug="Batin-crofessor-pampden-2"></ProductModal>
    </div>
  );
}
