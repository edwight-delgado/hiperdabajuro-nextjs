import Image from "next/image";

export default function Orders() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center d-md-none py-4">
              <h3 className="fs-5 mb-0">Account Settig</h3>
              <button
                type="button"
                className="text-muted d-md-none btn-icon btn-sm ms-3 btn btn-outline-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="bi bi-text-indent-left fs-3"
                >
                  <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708M7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="border-end d-none d-md-block col-lg-3 col-md-4 col-12">
            <div className="pt-10 pe-lg-10">
              <ul className="flex-column nav-pills-dark nav nav-pills">
                <li className="nav-item">
                  <a
                    data-rr-ui-event-key="/user/account-orders"
                    className="d-flex align-items-center gap-1 nav-link active"
                    href="/user/account-orders"
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
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>{" "}
                    Tus Pedidos
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    data-rr-ui-event-key="/user/account-settings"
                    className="d-flex align-items-center gap-1 nav-link"
                    href="/user/account-settings"
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
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>{" "}
                    Configuración
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    data-rr-ui-event-key="/user/account-address"
                    className="d-flex align-items-center gap-1 nav-link"
                    href="/user/account-address"
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
                    </svg>{" "}
                    Dirección
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    data-rr-ui-event-key="/user/account-payment-method"
                    className="d-flex align-items-center gap-1 nav-link"
                    href="/user/account-payment-method"
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
                      <rect
                        x="1"
                        y="4"
                        width="22"
                        height="16"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="1" y1="10" x2="23" y2="10"></line>
                    </svg>{" "}
                    Metodo de Pago
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    data-rr-ui-event-key="/user/account-notification"
                    className="d-flex align-items-center gap-1 nav-link"
                    href="/user/account-notification"
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
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>{" "}
                    Notificación
                  </a>
                </li>
                <li className="nav-item">
                  <hr />
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    data-rr-ui-event-key="/"
                    className="d-flex align-items-center gap-1 nav-link"
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
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-12">
            <div className="py-6 p-md-6 p-lg-10">
              <h2 className="mb-6">Your Orders</h2>
              <div className="table-responsive-xxl border-0">
                <table
                  id="example"
                  className="text-nowrap table-centered mt-0 table"
                >
                  <thead className="bg-light">
                    <tr>
                      <th>
                        <div className=""></div>
                      </th>
                      <th>
                        <div className="">Product</div>
                      </th>
                      <th>
                        <div className="">Order</div>
                      </th>
                      <th>
                        <div className="">Date</div>
                      </th>
                      <th>
                        <div className="">Items</div>
                      </th>
                      <th>
                        <div className="">Status</div>
                      </th>
                      <th>
                        <div className="">Amount</div>
                      </th>
                      <th>
                        <div className=""></div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="align-middle border-top-0">
                        <a href="">
                          <img
                            src="img/products/product-img-1.jpg"
                            alt=""
                            className="icon-shape icon-xl"
                          />
                        </a>
                      </td>
                      <td className="align-middle border-top-0">
                        <a className="fw-semibold text-inherit" href="">
                          <h6 className="mb-0">Haldiram Nagpur Aloo Bhujia</h6>
                        </a>
                        <span>
                          <small className="text-muted">400g</small>
                        </span>
                      </td>
                      <td className="align-middle border-top-0">#14899</td>
                      <td className="align-middle border-top-0">
                        March 5, 2023
                      </td>
                      <td className="align-middle border-top-0">1</td>
                      <td className="align-middle border-top-0">
                        <span className="custom-badge  badge bg-warning">
                          Processing
                        </span>
                      </td>
                      <td className="align-middle border-top-0">$15.00</td>
                      <td className="align-middle border-top-0">
                        <a className="text-inherit" href="">
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
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle border-top-0">
                        <a href="">
                          <Image
                            src="/img/products/product-img-2.jpg"
                            alt="img"
                            className="icon-shape icon-xl"
                            width={120}
                            height={120}
                          />
                        </a>
                      </td>
                      <td className="align-middle border-top-0">
                        <a className="fw-semibold text-inherit" href="">
                          <h6 className="mb-0">Nutri Choise Biscuit</h6>
                        </a>
                        <span>
                          <small className="text-muted">2 Pkt</small>
                        </span>
                      </td>
                      <td className="align-middle border-top-0">#14658</td>
                      <td className="align-middle border-top-0">
                        {" "}
                        July 9, 2023
                      </td>
                      <td className="align-middle border-top-0">2</td>
                      <td className="align-middle border-top-0">
                        <span className="custom-badge  badge bg-success">
                          Completed
                        </span>
                      </td>
                      <td className="align-middle border-top-0">$45.00</td>
                      <td className="align-middle border-top-0">
                        <a className="text-inherit" href="">
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
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
