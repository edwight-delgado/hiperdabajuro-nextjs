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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ProductGrid products={products}></ProductGrid>
      </main>
      {isSideModalProductOpen && (
        <ProductModal slug="Batin-crofessor-pampden-2"></ProductModal>
      )}
    </div>
  );
}
