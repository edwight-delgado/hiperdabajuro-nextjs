"use client";

import { useUIMobileMenuStore } from "@/store";

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
                      <li>
                        <a
                          className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="index-2.html"
                        >
                          Smartwatch
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="index-3.html"
                        >
                          Drone
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="index-4.html"
                        >
                          BackPack
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="relative block">
                    <span className="menu-expand"></span>
                    <a
                      href="#"
                      className="block capitalize font-normal text-base my-2 py-1 font-roboto"
                    >
                      Shop
                    </a>
                    <ul className="offcanvas-submenu static top-auto hidden w-full visible opacity-100">
                      <li>
                        <span className="menu-expand"></span>
                        <a
                          className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="#"
                        >
                          Shop Grid
                        </a>
                        <ul className="offcanvas-submenu static top-auto hidden w-full visible opacity-100">
                          <li>
                            <a
                              className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                              href="shop-grid-3-column.html"
                            >
                              Shop Grid 3 Column
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                              href="shop-grid-4-column.html"
                            >
                              Shop Grid 4 Column
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                              href="shop-grid-left-sidebar.html"
                            >
                              Shop Grid Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                              href="shop-grid-right-sidebar.html"
                            >
                              shop Grid Right Sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="menu-expand"></span>
                        <a
                          className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="#"
                        >
                          shop list
                        </a>
                        <ul className="offcanvas-submenu static top-auto hidden w-full visible opacity-100">
                          <li>
                            <a
                              className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                              href="shop-list.html"
                            >
                              Shop List
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                              href="shop-list-left-sidebar.html"
                            >
                              Shop List Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                              href="shop-list-right-sidebar.html"
                            >
                              Shop List right Sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="menu-expand"></span>
                        <a
                          className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="#"
                        >
                          blogs
                        </a>
                        <ul className="offcanvas-submenu static top-auto hidden w-full visible opacity-100">
                          <li>
                            <a
                              className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                              href="blog-grid-3-column.html"
                            >
                              Blog Grid 3 Column
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                              href="blog-grid-4-column.html"
                            >
                              Blog Grid 4 Column
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                              href="blog-grid-left-sidebar.html"
                            >
                              Blog Grid Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                              href="blog-grid-right-sidebar.html"
                            >
                              Blog Grid Right Sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="menu-expand"></span>
                        <a
                          className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="#"
                        >
                          Product Types
                        </a>
                        <ul className="offcanvas-submenu static top-auto hidden w-full visible opacity-100">
                          <li>
                            <a
                              className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                              href="single-product.html"
                            >
                              Shop Single
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                              href="single-product-configurable.html"
                            >
                              Shop Variable
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                              href="single-product-affiliate.html"
                            >
                              Shop Affiliate
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                              href="single-product-group.html"
                            >
                              Shop Group
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="relative block">
                    <span className="menu-expand"></span>
                    <a
                      href="#"
                      className="block capitalize font-normal text-base my-2 py-1 font-roboto"
                    >
                      Blog
                    </a>
                    <ul className="offcanvas-submenu static top-auto hidden w-full visible opacity-100">
                      <li>
                        <span className="menu-expand"></span>
                        <a
                          className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="#"
                        >
                          Blog Grid
                        </a>
                        <ul className="offcanvas-submenu static top-auto hidden w-full visible opacity-100">
                          <li>
                            <a
                              className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                              href="blog-grid-3-column.html"
                            >
                              Blog Grid 3 column
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                              href="blog-grid-2-column.html"
                            >
                              Blog Grid 2 column
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                              href="blog-grid-left-sidebar.html"
                            >
                              Blog Grid Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                              href="blog-grid-right-sidebar.html"
                            >
                              Blog Grid Right Sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="menu-expand"></span>
                        <a
                          className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="#"
                        >
                          Blog List
                        </a>
                        <ul className="offcanvas-submenu static top-auto hidden w-full visible opacity-100">
                          <li>
                            <a
                              className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                              href="blog-list-left-sidebar.html"
                            >
                              Blog List Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                              href="blog-list-right-sidebar.html"
                            >
                              Blog List Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                              href="blog-details.html"
                            >
                              Blog details
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="relative block">
                    <a
                      href="about-us.html"
                      className="relative block capitalize font-normal text-base my-2 py-1 font-roboto"
                    >
                      Salir
                    </a>
                  </li>
                  <li className="relative block">
                    <a
                      href="contact.html"
                      className="relative block capitalize font-normal text-base my-2 py-1 font-roboto"
                    >
                      Login
                    </a>
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
