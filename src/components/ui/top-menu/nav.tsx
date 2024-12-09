"use client";

//import { useUIMobileMenuStore } from "@/store";
import Link from "next/link";

export default function NavMenu() {
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
                  <Link
                    aria-expanded="false"
                    role="button"
                    className="dropdown-toggle nav-link"
                    href="/"
                  >
                    Pagina Principal
                  </Link>
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
