import Link from "next/link";

export default function () {
  return (
    <div className="container">
      <div className="mb-5 row">
        <div className="col-md-12">
          <div className="d-md-flex justify-content-between align-items-center">
            <div>
              <h2>Lista de Pedidos</h2>
              <nav aria-label="breadcrumb" className="mb-0">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a className="text-inherit" href="#" role="button">
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Lista de Pedidos
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="mb-5 col-xl-12 col-12">
          <div className="h-100 card-lg card">
            <div className="px-6 py-6">
              <div className="justify-content-between row">
                <div className="mb-2 mb-lg-0 col-lg-4 col-md-6 col-12">
                  <form className="d-flex">
                    <input
                      placeholder="Busqueda"
                      className="form-control"
                      type="search"
                    />
                  </form>
                </div>
                <div className="col-lg-2 col-md-4 col-12">
                  <select className="form-select">
                    <option value="">Status</option>
                    <option value="success">Success</option>
                    <option value="pending">Pending</option>
                    <option value="cancel">Cancel</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="p-0 card-body">
              <div className="table-responsive">
                <table
                  id="example"
                  className="table-centered text-nowrap mb-0 table-with-checkbox table table-borderless table-hover"
                >
                  <thead className="bg-light">
                    <tr>
                      <th>
                        <div className="">
                          <div className="">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                        </div>
                      </th>
                      <th>
                        <div className="">Image</div>
                      </th>
                      <th>
                        <div className="">Nombre del pedido</div>
                      </th>
                      <th>
                        <div className="">Cliente</div>
                      </th>
                      <th>
                        <div className="">Fecha y hora</div>
                      </th>
                      <th>
                        <div className="">Pago</div>
                      </th>
                      <th>
                        <div className="">Estado</div>
                      </th>
                      <th>
                        <div className="">Cantidad</div>
                      </th>
                      <th>
                        <div className=""></div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="align-middle border-top-0">
                        <div className="px-1">
                          <div className="">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="align-middle border-top-0">
                        <img
                          src="/images/products/product-img-1.jpg"
                          alt=""
                          className="icon-shape icon-md"
                        />
                      </td>

                      <td className="align-middle border-top-0">
                        <Link href={"/dashboard/orders/FC#1007"}>FC#1007</Link>
                      </td>

                      <td className="align-middle border-top-0">
                        Jennifer Sullivan
                      </td>
                      <td className="align-middle border-top-0">
                        01 May 2023 (10:12 am)
                      </td>
                      <td className="align-middle border-top-0">Paypal</td>
                      <td className="align-middle border-top-0">
                        <span className="custom-badge  badge text-dark-primary bg-light-primary">
                          Success
                        </span>
                      </td>
                      <td className="align-middle border-top-0">$12.99</td>
                      <td className="align-middle border-top-0">
                        <div className="dropdown">
                          <a className="text-reset" href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="fs-5"
                            >
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="12" cy="5" r="1"></circle>
                              <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle border-top-0">
                        <div className="px-1">
                          <div className="">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="align-middle border-top-0">
                        <img
                          src="/images/products/product-img-2.jpg"
                          alt=""
                          className="icon-shape icon-md"
                        />
                      </td>
                      <td className="align-middle border-top-0">FC#1006</td>
                      <td className="align-middle border-top-0">
                        Willie Hanson
                      </td>
                      <td className="align-middle border-top-0">
                        20 April 2023 (9:20 am)
                      </td>
                      <td className="align-middle border-top-0">COD</td>
                      <td className="align-middle border-top-0">
                        <span className="custom-badge  badge text-dark-primary bg-light-primary">
                          Success
                        </span>
                      </td>
                      <td className="align-middle border-top-0">$8.19</td>
                      <td className="align-middle border-top-0">
                        <div className="dropdown">
                          <a className="text-reset" href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="fs-5"
                            >
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="12" cy="5" r="1"></circle>
                              <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle border-top-0">
                        <div className="px-1">
                          <div className="">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="align-middle border-top-0">
                        <img
                          src="/images/products/product-img-3.jpg"
                          alt=""
                          className="icon-shape icon-md"
                        />
                      </td>
                      <td className="align-middle border-top-0">FC#1005</td>
                      <td className="align-middle border-top-0">
                        Dori Stewart
                      </td>
                      <td className="align-middle border-top-0">
                        11 March 2023 (7:12 pm)
                      </td>
                      <td className="align-middle border-top-0">Paypal</td>
                      <td className="align-middle border-top-0">
                        <span className="custom-badge  badge text-dark-warning bg-light-warning">
                          Pending
                        </span>
                      </td>
                      <td className="align-middle border-top-0">$8.19</td>
                      <td className="align-middle border-top-0">
                        <div className="dropdown">
                          <a className="text-reset" href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="fs-5"
                            >
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="12" cy="5" r="1"></circle>
                              <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle border-top-0">
                        <div className="px-1">
                          <div className="">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="align-middle border-top-0">
                        <img
                          src="/images/products/product-img-4.jpg"
                          alt=""
                          className="icon-shape icon-md"
                        />
                      </td>
                      <td className="align-middle border-top-0">FC#1004</td>
                      <td className="align-middle border-top-0">
                        Ezekiel Rogerson
                      </td>
                      <td className="align-middle border-top-0">
                        09 March 2023 (6:23 pm){" "}
                      </td>
                      <td className="align-middle border-top-0">Stripe</td>
                      <td className="align-middle border-top-0">
                        <span className="custom-badge  badge text-dark-primary bg-light-primary">
                          Success
                        </span>
                      </td>
                      <td className="align-middle border-top-0">$23.11</td>
                      <td className="align-middle border-top-0">
                        <div className="dropdown">
                          <a className="text-reset" href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="fs-5"
                            >
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="12" cy="5" r="1"></circle>
                              <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle border-top-0">
                        <div className="px-1">
                          <div className="">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="align-middle border-top-0">
                        <img
                          src="/images/products/product-img-5.jpg"
                          alt=""
                          className="icon-shape icon-md"
                        />
                      </td>
                      <td className="align-middle border-top-0">FC#1003</td>
                      <td className="align-middle border-top-0">Maria Roux</td>
                      <td className="align-middle border-top-0">
                        18 Feb 2022 (12:20 pm)
                      </td>
                      <td className="align-middle border-top-0">COD</td>
                      <td className="align-middle border-top-0">
                        <span className="custom-badge  badge text-dark-primary bg-light-primary">
                          Success
                        </span>
                      </td>
                      <td className="align-middle border-top-0">$2.00</td>
                      <td className="align-middle border-top-0">
                        <div className="dropdown">
                          <a className="text-reset" href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="fs-5"
                            >
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="12" cy="5" r="1"></circle>
                              <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle border-top-0">
                        <div className="px-1">
                          <div className="">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="align-middle border-top-0">
                        <img
                          src="/images/products/product-img-6.jpg"
                          alt=""
                          className="icon-shape icon-md"
                        />
                      </td>
                      <td className="align-middle border-top-0">FC#1002</td>
                      <td className="align-middle border-top-0">
                        Robert Donald
                      </td>
                      <td className="align-middle border-top-0">
                        12 Feb 2022 (4:56 pm)
                      </td>
                      <td className="align-middle border-top-0">Paypal</td>
                      <td className="align-middle border-top-0">
                        <span className="custom-badge  badge text-dark-danger bg-light-danger">
                          Cancel
                        </span>
                      </td>
                      <td className="align-middle border-top-0">$56.00</td>
                      <td className="align-middle border-top-0">
                        <div className="dropdown">
                          <a className="text-reset" href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="fs-5"
                            >
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="12" cy="5" r="1"></circle>
                              <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle border-top-0">
                        <div className="px-1">
                          <div className="">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="align-middle border-top-0">
                        <img
                          src="/images/products/product-img-7.jpg"
                          alt=""
                          className="icon-shape icon-md"
                        />
                      </td>
                      <td className="align-middle border-top-0">FC#1001</td>
                      <td className="align-middle border-top-0">
                        Diann Watson
                      </td>
                      <td className="align-middle border-top-0">
                        22 Jan 2023 (1:20 pm)
                      </td>
                      <td className="align-middle border-top-0">Paypal</td>
                      <td className="align-middle border-top-0">
                        <span className="custom-badge  badge text-dark-primary bg-light-primary">
                          Success
                        </span>
                      </td>
                      <td className="align-middle border-top-0">$23.00</td>
                      <td className="align-middle border-top-0">
                        <div className="dropdown">
                          <a className="text-reset" href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="fs-5"
                            >
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="12" cy="5" r="1"></circle>
                              <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle border-top-0">
                        <div className="px-1">
                          <div className="">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="align-middle border-top-0">
                        <img
                          src="/images/products/product-img-2.jpg"
                          alt=""
                          className="icon-shape icon-md"
                        />
                      </td>
                      <td className="align-middle border-top-0">FC#1006</td>
                      <td className="align-middle border-top-0">
                        Willie Hanson
                      </td>
                      <td className="align-middle border-top-0">
                        20 April 2023 (9:20 am)
                      </td>
                      <td className="align-middle border-top-0">COD</td>
                      <td className="align-middle border-top-0">
                        <span className="custom-badge  badge text-dark-primary bg-light-primary">
                          Success
                        </span>
                      </td>
                      <td className="align-middle border-top-0">$8.19</td>
                      <td className="align-middle border-top-0">
                        <div className="dropdown">
                          <a className="text-reset" href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="fs-5"
                            >
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="12" cy="5" r="1"></circle>
                              <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle border-top-0">
                        <div className="px-1">
                          <div className="">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="align-middle border-top-0">
                        <img
                          src="/images/products/product-img-3.jpg"
                          alt=""
                          className="icon-shape icon-md"
                        />
                      </td>
                      <td className="align-middle border-top-0">FC#1005</td>
                      <td className="align-middle border-top-0">
                        Dori Stewart
                      </td>
                      <td className="align-middle border-top-0">
                        11 March 2023 (7:12 pm)
                      </td>
                      <td className="align-middle border-top-0">Paypal</td>
                      <td className="align-middle border-top-0">
                        <span className="custom-badge  badge text-dark-warning bg-light-warning">
                          Pending
                        </span>
                      </td>
                      <td className="align-middle border-top-0">$8.19</td>
                      <td className="align-middle border-top-0">
                        <div className="dropdown">
                          <a className="text-reset" href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="fs-5"
                            >
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="12" cy="5" r="1"></circle>
                              <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle border-top-0">
                        <div className="px-1">
                          <div className="">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="align-middle border-top-0">
                        <img
                          src="/images/products/product-img-2.jpg"
                          alt=""
                          className="icon-shape icon-md"
                        />
                      </td>
                      <td className="align-middle border-top-0">FC#1006</td>

                      <td className="align-middle border-top-0">
                        Willie Hanson
                      </td>
                      <td className="align-middle border-top-0">
                        20 April 2023 (9:20 am)
                      </td>
                      <td className="align-middle border-top-0">COD</td>
                      <td className="align-middle border-top-0">
                        <span className="custom-badge  badge text-dark-primary bg-light-primary">
                          Success
                        </span>
                      </td>
                      <td className="align-middle border-top-0">$8.19</td>
                      <td className="align-middle border-top-0">
                        <div className="dropdown">
                          <a className="text-reset" href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="fs-5"
                            >
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="12" cy="5" r="1"></circle>
                              <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="border-top d-md-flex justify-content-between align-items-center p-3">
                <div>Showing 1 to 10 of 15 entries</div>
                <nav className="mt-2 mt-md-0 navbar navbar-expand navbar-light">
                  <ul className="mb-0 pagination">
                    <li className="page-item disabled">
                      <span className="page-link">Previous</span>
                    </li>
                    <li className="page-item active">
                      <span className="page-link">
                        1<span className="visually-hidden">(current)</span>
                      </span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" role="button" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" role="button" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
