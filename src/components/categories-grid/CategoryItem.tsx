"use client";
import { Category } from "@/interfaces/category.interface";
import { useCartStore, useUIModalProductStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
interface Props {
  category: Category;
}
export const CategoryItem = ({ category }: Props) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const openSideModalProduct = useUIModalProductStore(
    (state) => state.openSideModalProduct
  );

  return (
    <div key={category.id} className="col1">
      <Link
        className="text-decoration-none text-inherit card-link"
        href={`/category/${category.slug}`}
      >
        <div className="card-product mb-lg-4 card">
          <div className="text-center py-8 card-body">
            <Image
              src={`/img/${category.images}`}
              alt={category.title}
              className="mb-3 img-fluid"
              width={120}
              height={120}
            />
            <div className="text-truncate">{category.title}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
