"use client";

import Image from "next/image";
import { useCartStore, useUIStore } from "@/store";
import clsx from "clsx";
import { initialData } from "@/app/seed/seed";
import Link from "next/link";
import useFromStore from "./useFromStore";
import { use } from "react";

export const Sidebar = () => {
  const cart = useFromStore(useCartStore, (state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  let total = 0;
  if (cart) {
    total = cart.reduce(
      (acc, product) => acc + product.price * (product.quantity as number),
      0
    );
  }

  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <>
      {isSideMenuOpen && (
        <div
          className="offcanvas-overlay block fixed inset-0 bg-black opacity-50 z-50"
          onClick={() => closeMenu()}
        ></div>
      )}
      <div
        id="offcanvas-cart"
        className={clsx(
          "offcanvas left-auto right-0 transform translate-x-translate-x-full-120 fixed font-normal text-sm top-0 z-50 h-screen w-80 lg:w-96 transition-all ease-in-out duration-300 bg-white overflow-y-auto",
          {
            "offcanvas-open": isSideMenuOpen,
          }
        )}
      >
        <div className="p-8">
          <div className="flex flex-wrap justify-between items-center pb-6 mb-6 border-b border-solid border-gray-600">
            <h4 className="font-normal text-md text-dark capitalize">
              Shoping Cart
            </h4>
            <button
              className="offcanvas-close hover:text-orange"
              aria-label="close icon"
              onClick={() => {
                closeMenu();
              }}
            >
              <i className="icon-close"></i>
            </button>
          </div>
          <ul className="h-96 overflow-y-auto">
            {/* item */}
            {cart?.map((product) => (
              <li key={product.slug} className="flex flex-wrap group mb-8">
                <div className="mr-5 relative">
                  <a href="#">
                    <Image
                      src={`/img/product/${product.images[0]}`}
                      alt={product.title}
                      loading="lazy"
                      width="90"
                      height="100"
                    />
                  </a>
                  <button
                    onClick={() => removeFromCart(product)}
                    className="absolute top-3 left-3 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all hover:text-orange"
                  >
                    <i className="icon-close"></i>
                  </button>
                </div>
                <div className="flex-1">
                  <h4>
                    <a
                      className="font-light text-sm md:text-base text-dark hover:text-orange transition-all tracking-wide"
                      href="#"
                    >
                      {product.title}
                    </a>
                  </h4>
                  <span className="font-light text-sm text-dark transition-all tracking-wide">
                    ${product.quantity} x <span>$ ${product.price}</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <div className="flex flex-wrap justify-between items-center py-4 my-6 border-t border-b border-solid border-gray-600 font-normal text-base text-dark capitalize">
              Total:<span>$ ${total}</span>
            </div>
            <div className="text-center">
              <Link
                className="py-5 px-10 block bg-white border border-solid border-gray-600 uppercase font-semibold text-base hover:bg-orange hover:border-orange hover:text-white transition-all leading-none"
                href="/checkout"
              >
                Checkout
              </Link>
              <Link
                className="py-5 px-10 block bg-white border border-solid border-gray-600 uppercase font-semibold text-base hover:bg-orange hover:border-orange hover:text-white transition-all leading-none mt-3"
                href="/cart"
              >
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
