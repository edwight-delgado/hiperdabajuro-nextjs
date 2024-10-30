"use client";

import { useCartStore, useUIMobileMenuStore, useUIStore } from "@/store";
import Link from "next/link";
import LoginButton from "./LoginButton";
import Providers from "@/middleware/providers";
import TotalProductsCart from "@/middleware/totalProductsCart";

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const openSideMobileMenu = useUIMobileMenuStore(
    (state) => state.openSideMobileMenu
  );
  const cart = useCartStore((state) => state.cart);
  let total = TotalProductsCart(cart);
  return (
    <header id="sticky-header" className="">
      <div className="px-4 md:px-10 2xl:px-24 py-6 lg:py-0">
        <div className="flex items-center lg:relative">
          <div className="w-6/12 lg:w-2/12">
            <div className="logo">
              <Link href="/"></Link>
            </div>
          </div>
          <div className="hidden lg:flex flex-1 xl:relative">
            <nav className="main-menu">
              <ul className="flex flex-wrap">
                <li className="main-menu__item relative group">
                  <Link
                    className="block py-10 xl:pr-6 md:pr-5 capitalize font-normal text-md text-primary hover:text-orange transition-all"
                    href="/"
                  >
                    Inicio
                  </Link>
                </li>

                <li className="main-menu__item relative group">
                  <a
                    className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all"
                    href="#"
                  >
                    Actención al Cliente
                  </a>
                </li>
                <li className="main-menu__item relative group">
                  <a
                    className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all"
                    href="#"
                  >
                    Oferta
                  </a>
                </li>
                <Providers>
                  <LoginButton></LoginButton>
                </Providers>
              </ul>
            </nav>
          </div>

          <div className="w-6/12 lg:w-3/12">
            <ul className="flex items-center justify-end">
              <li className="ml-6 hidden lg:block">
                <button
                  className="search-toggle text-right text-primary text-md hover:text-orange transition-all"
                  aria-label="icon-settings"
                >
                  <i className="icon-magnifier"></i>
                </button>
              </li>
              <li className="ml-6">
                <a
                  onClick={() => openSideMenu()}
                  href="#"
                  className="text-primary text-md hover:text-orange transition-all relative offcanvas-toggle"
                >
                  <span className="w-5 h-5 bg-dark text-white text-sm rounded-full font-normal flex flex-wrap items-center justify-center absolute -top-3 left-2 leading-none">
                    {cart?.length}
                  </span>
                  <i className="icon-bag"></i>
                  <span className="text-base leading-none text-dark mx-3">
                    ${total}
                  </span>
                </a>
              </li>

              <li className="ml-6 lg:hidden">
                <button
                  onClick={() => openSideMobileMenu()}
                  className="offcanvas-toggle text-primary text-md hover:text-orange transition-all"
                >
                  <i className="icon-menu"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
