"use client";
import Image from "next/image";
import { initialData } from "../seed/seed";
import { ProductGrid, ProductModal } from "@/components";
import { useUIModalProductStore } from "@/store";

const products = initialData.products;
export default function Home() {
  const isSideModalProductOpen = useUIModalProductStore(
    (state) => state.isSideModalProductOpen
  );
  return (
    <div className="py-24">
      <main className="container">
        <ProductGrid products={products}></ProductGrid>
      </main>
      {isSideModalProductOpen && (
        <ProductModal slug="Batin-crofessor-pampden-2"></ProductModal>
      )}
    </div>
  );
}
