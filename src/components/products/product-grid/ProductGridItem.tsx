"use client";
import { Product } from "@/interfaces/product.interface";
import { useCartStore, useUIModalProductStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
interface Props {
  product: Product;
}
export const ProductGridItem = ({ product }: Props) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const openSideModalProduct = useUIModalProductStore(
    (state) => state.openSideModalProduct
  );
  product["quantity"] = 1;
  return (
    <div key={product.id} className="w-full md:w-1/2 xl:w-1/3 px-4 mb-7">
      <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative">
        <div className="relative overflow-hidden">
          <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">
            Sale
          </span>
          <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">
            -11%
          </span>
          <Image
            className="w-full h-full"
            src={`/img/product/${product.images[0]}`}
            alt={product.title}
            width={432}
            height={480}
          />

          <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
            <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
              <li className="py-4 pl-7 md:py-5 md:pl-8">
                <a
                  href="#"
                  onClick={() => openSideModalProduct(product.slug)}
                  className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle"
                  aria-label="quick view"
                  data-tippy-content="Quick View"
                >
                  <i className="icon-magnifier"></i>
                </a>
              </li>
              <li className="py-4 pl-7 md:py-5 md:pl-8">
                <a
                  href="whishlist.html"
                  className="text-dark flex items-center justify-center text-md hover:text-orange"
                  aria-label="quick veiw"
                  data-tippy-content="Add to wishlist"
                >
                  <i className="icon-heart"></i>
                </a>
              </li>
              <li className="py-4 pl-7 md:py-5 md:pl-8">
                <a
                  href="compare.html"
                  className="text-dark flex items-center justify-center text-md hover:text-orange"
                  aria-label="compare"
                  data-tippy-content="Compare"
                >
                  <i className="icon-refresh"></i>
                </a>
              </li>
              <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                <a
                  onClick={() => addToCart(product)}
                  href="#"
                  className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle"
                  aria-label="add to cart"
                  data-tippy-content="Add to cart"
                >
                  <i className="icon-bag"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="p-2 bg-gray-200 shadow absolute left-2 right-2 -bottom-40 group-hover:bottom-2 z-20 transition-all duration-500 ease-linear">
            <ul className="flex flex-wrap items-center justify-center mb-3">
              <li className="mx-1 leading-none">
                <button className="text-sm">sm</button>
              </li>
              <li className="mx-1 leading-none">
                <button className="text-sm">l</button>
              </li>
              <li className="mx-1 leading-none">
                <button className="text-sm">m</button>
              </li>
              <li className="mx-1 leading-none">
                <button className="text-sm">xl</button>
              </li>
              <li className="mx-1 leading-none">
                <button className="text-sm">xxl</button>
              </li>
            </ul>
            <ul className="flex flex-wrap items-center justify-center">
              <li className="mx-1 leading-none">
                <button
                  className="w-4 h-4 rounded-full bg-orange"
                  aria-label="colors"
                ></button>
              </li>
              <li className="mx-1 leading-none">
                <button
                  className="w-4 h-4 rounded-full bg-primary"
                  aria-label="variants"
                ></button>
              </li>
              <li className="mx-1 leading-none">
                <button
                  className="w-4 h-4 rounded-full bg-indigo-600"
                  aria-label="variants"
                ></button>
              </li>
              <li className="mx-1 leading-none">
                <button
                  className="w-4 h-4 rounded-full bg-dark"
                  aria-label="variants"
                ></button>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-5 px-4">
          <h4>
            <Link
              className="block text-base hover:text-orange transition-all"
              href={product.slug}
            >
              {product.title}
            </Link>
          </h4>
          <h5 className="font-bold text-md leading-none text-orange mt-3">
            <del className="font-normal text-sm mr-1 inline-block">
              ${product.price}
            </del>
            $130.00
          </h5>
        </div>
      </div>
    </div>
  );
};
