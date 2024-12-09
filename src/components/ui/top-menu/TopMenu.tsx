"use client";

import { useCartStore, useUIStore } from "@/store";
//import Link from "next/link";

//import Providers from "@/middleware/providers";
//import TotalProductsCart from "@/middleware/totalProductsCart";
import Search from "@/components/search/search";
import Image from "next/image";

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);

  const cart = useCartStore((state) => state.cart);

  return (
    <header className="py-lg-5 py-4 px-0 border-bottom border-bottom-lg-0">
      <div className="container-fluid">
        <div className="w-100 align-items-center g-0 gx-lg-3 row">
          <div className="col-xxl-9 col-lg-8">
            <div className="d-flex align-items-center">
              <a className="d-none d-lg-block navbar-brand" href="/">
                <img
                  src="/img/logo/shopping-logo.svg"
                  alt="Logo"
                  className=""
                  width={60}
                  height={60}
                />
              </a>
              <div className="w-100 ms-4 d-none d-lg-block">
                <Search></Search>
              </div>
            </div>
            <div className="d-flex justify-content-between w-100 d-lg-none">
              <a className="navbar-brand" href="/">
                <Image
                  src="/img/logo/shopping-logo.svg"
                  alt="logo"
                  className=""
                  width={50}
                  height={50}
                />
              </a>
              <div className="d-flex align-items-center lh-1">
                <div className="list-inline me-4">
                  <div role="button" className="list-inline-item me-3">
                    <a className="text-muted" href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </a>
                  </div>
                  <div role="button" className="list-inline-item">
                    <a
                      className="text-muted position-relative"
                      href="#"
                      onClick={() => openSideMenu()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                      <span className="custom-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                        {cart?.length}
                      </span>
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Toggle navigation"
                  className="navbar-toggler collapsed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-text-indent-left text-primary"
                  >
                    <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708M7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center col-xxl-3 col-lg-4">
            <div className="list-inline ms-auto d-lg-block d-none">
              <div className="text-reset list-inline-item me-6">
                <a className="text-reset" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </a>
              </div>
              <div className="list-inline-item">
                <a
                  className="text-reset position-relative"
                  href="#"
                  onClick={() => openSideMenu()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>

                  <span className="custom-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    {" "}
                    {cart?.length}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
