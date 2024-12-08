"use client";

import { useUIMobileMenuStore } from "@/store";
import Link from "next/link";

export default function NavMenu() {
  const closeSideMobileMenu = useUIMobileMenuStore(
    (state) => state.closeSideMobileMenu
  );
  const isSideMobileMenuOpen = useUIMobileMenuStore(
    (state) => state.isSideMobileMenuOpen
  );
  return (
    <>
      <nav className="py-0 py-lg-2 navbar-default navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <div id="navbar-default" className="offcanvas-lg offcanvas-start">
            <div className="pb-1 offcanvas-header">
              <a href="/">
                <img
                  src="/images/logo/freshcart-logo.svg"
                  alt=""
                  className=""
                />
              </a>
              <button type="button" className="btn btn-close"></button>
            </div>
            <div className="offcanvas-body"></div>
            <div className="d-block d-lg-none mb-4">
              <form className="">
                <div className="input-group">
                  <input
                    placeholder="Search for products"
                    type="search"
                    className="rounded form-control"
                  />
                  <span className="input-group-append">
                    <button
                      type="button"
                      className="border border-start-0 ms-n10 rounded-0 rounded-end btn btn-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </button>
                  </span>
                </div>
              </form>
              <button
                type="button"
                className="text-muted w-100 mt-2 btn btn-outline-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="me-2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Pick Location
              </button>
            </div>
            {/* CategoryList */}
            <div>
              <div className="align-items-center navbar-offcanvas-color navbar-nav">
                <div className="w-100 w-lg-auto nav-item dropdown">
                  <a
                    aria-expanded="false"
                    role="button"
                    className="dropdown-toggle nav-link"
                    href="#"
                  >
                    Pagina Principal
                  </a>
                </div>
                <div className="w-100 w-lg-auto nav-item dropdown">
                  <a
                    aria-expanded="false"
                    role="button"
                    className="dropdown-toggle nav-link"
                    href="#"
                  >
                    Shop
                  </a>
                </div>
                <div className="w-100 w-lg-auto nav-item dropdown">
                  <a
                    aria-expanded="false"
                    role="button"
                    className="dropdown-toggle nav-link"
                    href="#"
                  >
                    Stores
                  </a>
                </div>
                <div className=" w-100 w-lg-auto dropdown-fullwidth nav-item dropdown">
                  <a
                    aria-expanded="false"
                    role="button"
                    className="dropdown-toggle nav-link"
                    href="#"
                  >
                    Departamentos
                  </a>
                  <div
                    aria-labelledby=""
                    data-bs-popper="static"
                    className="dropdown-menu"
                  >
                    <div className="p-2 p-lg-4 row">
                      <div className="mb-4 mb-lg-0 col-lg-3 col-12">
                        <h6 className="text-primary ps-3">
                          Dairy, Bread &amp; Eggs
                        </h6>
                        <a
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          href=""
                        >
                          Butter
                        </a>
                        <a
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          href=""
                        >
                          Milk Drinks
                        </a>
                        <a
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          href=""
                        >
                          Curd &amp; Yogurt
                        </a>
                        <a
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          href=""
                        >
                          Eggs
                        </a>
                        <a
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          href=""
                        >
                          Buns &amp; Bakery
                        </a>
                        <a
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          href=""
                        >
                          Cheese
                        </a>
                        <a
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          href=""
                        >
                          Condensed Milk
                        </a>
                        <a
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          href=""
                        >
                          Dairy Products
                        </a>
                      </div>
                      <div className="mb-4 mb-lg-0 col-lg-3 col-12">
                        <h6 className="text-primary ps-3">
                          Breakfast &amp; Instant Food
                        </h6>
                        <a
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          href=""
                        >
                          Breakfast Cereal
                        </a>
                        <a
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          href=""
                        >
                          Noodles, Pasta &amp; Soup
                        </a>
                        <a
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          href=""
                        >
                          Frozen Veg Snacks
                        </a>
                        <a
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          href=""
                        >
                          Frozen Non-Veg Snacks
                        </a>
                        <a
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          href=""
                        >
                          Frozen Non-Veg Snacks
                        </a>
                        <a
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          href=""
                        >
                          Instant Mixes
                        </a>
                        <a
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          href=""
                        >
                          Batter
                        </a>
                        <a
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          href=""
                        >
                          Fruit and Juices
                        </a>
                      </div>
                      <div className="mb-4 mb-lg-0 col-lg-3 col-12">
                        <h6 className="text-primary ps-3">
                          Cold Drinks &amp; Juices
                        </h6>
                        <a
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          href=""
                        >
                          Soft Drinks
                        </a>
                        <a
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          href=""
                        >
                          Fruit Juices
                        </a>
                        <a
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          href=""
                        >
                          Coldpress
                        </a>
                        <a
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          href=""
                        >
                          Water &amp; Ice Cubes
                        </a>
                        <a
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          href=""
                        >
                          Soda &amp; Mixers
                        </a>
                        <a
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          href=""
                        >
                          Health Drinks
                        </a>
                        <a
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          href=""
                        >
                          Herbal Drinks
                        </a>
                        <a
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          href=""
                        >
                          Milk Drinks
                        </a>
                      </div>
                      <div className="mb-4 mb-lg-0 col">
                        <div className="border-0 card">
                          <img
                            src="/images/banner/menu-banner.jpg"
                            alt="eCommerce HTML Template"
                            className="img-fluid"
                          />
                          <div className="position-absolute ps-6 mt-8">
                            <h5 className="mb-0">
                              Dont miss this offer today.
                            </h5>
                            <a className="btn btn-primary btn-sm mt-3" href="#">
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-100 w-lg-auto nav-item dropdown">
                  <a
                    aria-expanded="false"
                    role="button"
                    className="dropdown-toggle nav-link"
                    href="#"
                  >
                    Cuenta
                  </a>
                  <div
                    aria-labelledby=""
                    data-bs-popper="static"
                    className="dropdown-menu"
                  >
                    <a
                      data-rr-ui-dropdown-item=""
                      className="w-100 w-lg-auto dropdown-item"
                      href="/signin"
                    >
                      Sign in
                    </a>
                    <a
                      data-rr-ui-dropdown-item=""
                      className="w-100 w-lg-auto dropdown-item"
                      href="/signup"
                    >
                      Signup
                    </a>
                    <a
                      data-rr-ui-dropdown-item=""
                      className="w-100 w-lg-auto dropdown-item"
                      href="/forgot-password"
                    >
                      Forgot Password
                    </a>
                    <div className="dropdown-submenu p-0 w-100 w-lg-auto nav-item dropend">
                      <a
                        aria-expanded="false"
                        role="button"
                        className="dropdown-toggle dropdown-item dropdown-list-group-item w-100 w-lg-auto justify-content-between"
                        href="#"
                      >
                        My Account
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-100 w-lg-auto nav-item">
                  <Link
                    data-rr-ui-event-key="/dashboard"
                    className="nav-link"
                    href="/dashboard"
                  >
                    Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
