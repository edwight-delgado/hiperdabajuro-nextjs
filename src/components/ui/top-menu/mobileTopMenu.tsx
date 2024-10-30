"use client";

import { useUIMobileMenuStore } from "@/store";
import Link from "next/link";

export default function MobileTopMenu() {
  const closeSideMobileMenu = useUIMobileMenuStore(
    (state) => state.closeSideMobileMenu
  );
  const isSideMobileMenuOpen = useUIMobileMenuStore(
    (state) => state.isSideMobileMenuOpen
  );
  return (
    <>
      {isSideMobileMenuOpen && (
        <>
          <div className="offcanvas-overlay block fixed inset-0 bg-black opacity-50 z-50"></div>
          <div
            id="offcanvas-mobile-menu"
            className="offcanvas left-auto right-0 transform translate-x-translate-x-full-120 fixed font-normal text-sm top-0 z-50 h-screen w-72 sm:w-80 lg:w-96 transition-all ease-in-out duration-300 bg-white offcanvas-open"
          >
            <div className="px-8 py-12 h-5/6 overflow-y-auto">
              <form
                className="pb-10 mb-10 border-b border-solid border-gray-600"
                action="#"
                method="get"
              >
                <div className="relative">
                  <input
                    className="w-full h-12 text-sm py-4 pl-4 pr-16 bg-gray-light text-dark placeholder-current focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search our store"
                  />
                  <button
                    className="w-12 h-full absolute top-0 right-0 flex items-center justify-center text-dark text-md border-l border-solid border-gray-600"
                    type="submit"
                    aria-label="button"
                  >
                    <i className="icon-magnifier"></i>
                  </button>
                </div>
              </form>

              <button
                className="offcanvas-close bg-dark group transition-all hover:text-orange text-white w-10 h-10 flex items-center justify-center absolute -left-10 top-0"
                aria-label="offcanvas"
                onClick={() => closeSideMobileMenu()}
              >
                <i className="icon-close transition-all transform group-hover:rotate-90"></i>
              </button>

              <nav className="offcanvas-menu pb-10 mb-10 border-b border-solid border-gray-600">
                <ul>
                  <li className="relative block">
                    <span className="menu-expand"></span>
                    <a
                      href="#"
                      className="block capitalize font-normal text-base my-2 py-1 font-roboto"
                    >
                      Home
                    </a>
                    <ul className="offcanvas-submenu static top-auto hidden w-full visible opacity-100">
                      <li>
                        <a
                          className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="index.html"
                        >
                          Airpod
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="relative block">
                    <Link
                      href="#"
                      className="relative block capitalize font-normal text-base my-2 py-1 font-roboto"
                    >
                      Salir
                    </Link>
                  </li>
                  <li className="relative block">
                    <Link
                      href="/auth/regiter"
                      className="relative block capitalize font-normal text-base my-2 py-1 font-roboto"
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </nav>

              <nav>
                <ul id="settings-menu">
                  <li className="block mb-3">
                    <a
                      className="flex flex-wrap justify-between mb-3 text-base text-dark hover:text-orange"
                      href="javascript:void(0)"
                    >
                      Currency <i className="icon-arrow-down"></i>
                    </a>
                    <ul className="sub-category hidden py-5 px-6 shadow">
                      <li className="my-2 block">
                        <a
                          className="font-light text-sm tracking-wide text-dark block hover:text-orange"
                          href="#"
                        >
                          EUR €
                        </a>
                      </li>
                      <li className="my-2 block">
                        <a
                          className="font-light text-sm tracking-wide text-dark block hover:text-orange"
                          href="#"
                        >
                          USD $
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="block mb-3">
                    <a
                      className="flex flex-wrap justify-between mb-3 text-base text-dark hover:text-orange"
                      href="javascript:void(0)"
                    >
                      Account <i className="icon-arrow-down"></i>
                    </a>
                    <ul className="sub-category hidden py-5 px-6 shadow">
                      <li className="my-2 block">
                        <a
                          className="font-light text-sm tracking-wide text-dark block hover:text-orange"
                          href="#"
                        >
                          English
                        </a>
                      </li>
                      <li className="my-2 block">
                        <a
                          className="font-light text-sm tracking-wide text-dark block hover:text-orange"
                          href="#"
                        >
                          Français
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
