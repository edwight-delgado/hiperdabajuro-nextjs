import Image from "next/image";
import Link from "next/link";

export function SideBarLayout() {
  return (
    <nav className="navbar-vertical-nav d-none d-xl-block navbar navbar-expand navbar-light">
      <div className="navbar-vertical">
        <div className="px-4 py-5 d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="/">
            <Image
              src="/img/logo/shopping-logo.svg"
              alt="Logo"
              className="logo"
              width={50}
              height={50}
            />
          </a>
        </div>
        <div className="navbar-vertical-content flex-grow-1">
          <div data-simplebar="init" className="simplebar-scrollable-y">
            <div className="simplebar-wrapper">
              <div className="simplebar-height-auto-observer-wrapper">
                <div className="simplebar-height-auto-observer"></div>
              </div>
              <div className="simplebar-mask">
                <div className="simplebar-offset">
                  <div
                    className="simplebar-content-wrapper"
                    role="region"
                    aria-label="scrollable content"
                  >
                    <div className="simplebar-content">
                      <ul id="sideNavbar" className="navbar-nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link" href="/dashboard">
                            <div className="d-flex align-items-center">
                              <span className="nav-link-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 16 16"
                                  width="1em"
                                  height="1em"
                                  fill="currentColor"
                                  className="bi bi-house"
                                >
                                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"></path>
                                </svg>
                              </span>
                              <span className="nav-link-text">Dashboard</span>
                            </div>
                          </a>
                        </li>
                        <li className="mt-6 mb-3 nav-item">
                          <span className="nav-label">Gestión del Mercado</span>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            href="/dashboard/product"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 16 16"
                                  width="1em"
                                  height="1em"
                                  fill="currentColor"
                                  className="bi bi-cart"
                                >
                                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"></path>
                                </svg>
                              </span>
                              <span className="nav-link-text">Productos</span>
                            </div>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/dashboard/orders"
                            data-bs-toggle="collapse"
                            data-bs-target="#navOrders"
                            role="button"
                            className="nav-link"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 16 16"
                                  width="1em"
                                  height="1em"
                                  fill="currentColor"
                                  className="bi bi-bag"
                                >
                                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"></path>
                                </svg>
                              </span>
                              <span className="nav-link-text">Pedidos</span>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="simplebar-placeholder"></div>
            </div>
            <div className="simplebar-track simplebar-horizontal">
              <div className="simplebar-scrollbar"></div>
            </div>
            <div className="simplebar-track simplebar-vertical">
              <div className="simplebar-scrollbar"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
