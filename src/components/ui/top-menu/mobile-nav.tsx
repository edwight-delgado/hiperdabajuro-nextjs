"use client";
import { useUIMobileMenuStore } from "@/store";
import Image from "next/image";
import Link from "next/link";

export default function MobileNav() {
  const closeSideMenu = useUIMobileMenuStore(
    (state) => state.closeSideMobileMenu
  );
  const isSideMobileMenu = useUIMobileMenuStore(
    (state) => state.isSideMobileMenuOpen
  );
  return (
    <>
      {isSideMobileMenu && (
        <>
          <div className="fade offcanvas-backdrop show"></div>
          <div
            role="dialog"
            aria-modal="true"
            className="offcanvas-lg offcanvas-start show"
            id="navbar-default"
          >
            <div className="pb-1 offcanvas-header">
              <a href="/">
                <Image
                  src="/img/logo/shopping-logo.svg"
                  alt="logo"
                  width={50}
                  height={50}
                  className=""
                />
              </a>
              <Link
                href={"#"}
                onClick={() => {
                  closeSideMenu();
                }}
              >
                <button type="button" className="btn btn-close"></button>
              </Link>
            </div>
            <div className="offcanvas-body">
              <div className="d-block d-lg-none mb-4">
                <form className="">
                  <div className="input-group">
                    <input
                      placeholder="Search for products"
                      className="rounded form-control"
                      type="search"
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
              </div>
              <div className="d-block d-lg-none mb-4">
                <a
                  role="button"
                  href=""
                  className="w-100 d-flex justify-content-center align-items-center btn btn-primary"
                >
                  <span className="me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                  </span>
                  Todos Los Departamentos
                </a>
                <div id="collapseExample" className="mt-2 collapse">
                  <div className="card">
                    <div className="card-body">
                      <ul className="mb-0 list-unstyled">
                        <li className="dropdown-item">
                          Dairy, Bread &amp; Eggs
                        </li>
                        <li className="dropdown-item">Snacks &amp; Munchies</li>
                        <li className="dropdown-item">
                          Fruits &amp; Vegetables
                        </li>
                        <li className="dropdown-item">
                          Cold Drinks &amp; Juices
                        </li>
                        <li className="dropdown-item">
                          Breakfast &amp; Instant Food
                        </li>
                        <li className="dropdown-item">Bakery &amp; Biscuits</li>
                        <li className="dropdown-item">
                          Chicken, Meat &amp; Fish
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="me-3 d-none d-lg-block dropdown">
                <button
                  type="button"
                  id="dropdownMenuButton1"
                  className="px-6 btn btn-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="me-1"
                  >
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>{" "}
                  Todos los Departamentos
                </button>
                <div
                  data-bs-popper="static"
                  className="dropdown-menu show"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <a
                    href="#"
                    data-rr-ui-dropdown-item=""
                    className="dropdown-item"
                    role="button"
                  >
                    Dairy, Bread &amp; Eggs
                  </a>
                  <a
                    href="#"
                    data-rr-ui-dropdown-item=""
                    className="dropdown-item"
                    role="button"
                  >
                    Snacks &amp; Munchies
                  </a>
                  <a
                    href="#"
                    data-rr-ui-dropdown-item=""
                    className="dropdown-item"
                    role="button"
                  >
                    Fruits &amp; Vegetables
                  </a>
                  <a
                    href="#"
                    data-rr-ui-dropdown-item=""
                    className="dropdown-item"
                    role="button"
                  >
                    Cold Drinks &amp; Juices
                  </a>
                  <a
                    href="#"
                    data-rr-ui-dropdown-item=""
                    className="dropdown-item"
                    role="button"
                  >
                    Breakfast &amp; Instant Food
                  </a>
                  <a
                    href="#"
                    data-rr-ui-dropdown-item=""
                    className="dropdown-item"
                    role="button"
                  >
                    Bakery &amp; Biscuits
                  </a>
                  <a
                    href="#"
                    data-rr-ui-dropdown-item=""
                    className="dropdown-item"
                    role="button"
                  >
                    Chicken, Meat &amp; Fish
                  </a>
                </div>
              </div>
              <div>
                <div className="align-items-center undefined navbar-nav">
                  <div className="w-100 w-lg-auto nav-item dropdown">
                    <Link
                      aria-expanded="false"
                      role="button"
                      className="dropdown-toggle nav-link"
                      href="#"
                    >
                      Inicio
                    </Link>
                  </div>
                  <div className="w-100 w-lg-auto nav-item dropdown">
                    <Link
                      aria-expanded="false"
                      role="button"
                      className="dropdown-toggle nav-link"
                      href="#"
                    >
                      Cuenta
                    </Link>
                  </div>
                  <div className="w-100 w-lg-auto nav-item dropdown">
                    <Link
                      aria-expanded="false"
                      role="button"
                      className="dropdown-toggle nav-link"
                      href={"dashboard"}
                    >
                      Admin
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      ;
    </>
  );
}
