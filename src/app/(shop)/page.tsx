"use client";
import Image from "next/image";
import { initialData } from "../seed/seed";
import { ProductGrid, ProductModal, TopBreadCrumb } from "@/components";
import { useUIModalProductStore } from "@/store";
import Providers from "@/middleware/providers";

const products = initialData.products;
export default function Home() {
  const isSideModalProductOpen = useUIModalProductStore(
    (state) => state.isSideModalProductOpen
  );
  return (
    <div className="py-24">
      <main className="container">
        <Providers>
          <TopBreadCrumb></TopBreadCrumb>
        </Providers>

        <ProductGrid products={products}></ProductGrid>
      </main>
      {isSideModalProductOpen && (
        <ProductModal slug="Batin-crofessor-pampden-2"></ProductModal>
      )}
    </div>
  );
}
