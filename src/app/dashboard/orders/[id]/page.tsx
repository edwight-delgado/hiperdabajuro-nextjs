export default function () {
  return (
    <div className="container">
      <div className="mb-5 row"></div>
      <div className="row">
        <div className="col-md-12">
          <div className="d-md-flex justify-content-between align-items-center">
            <div>
              <h2>Pedido Individual</h2>
              <nav aria-label="breadcrumb" className="mb-0">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a className="text-inherit" href="#" role="button">
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Pedido Individual
                  </li>
                </ol>
              </nav>
            </div>
            <div>
              <a
                role="button"
                className="btn btn-primary"
                href="/dashboard/order-list"
              >
                Lista de Pedidos
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="mb-5 col-xl-12 col-12">
          <div className="h-100 card-lg card">
            <div className="p-6 card-body">
              <div className="d-md-flex justify-content-between">
                <div className="d-flex align-items-center mb-2 mb-md-0">
                  <h2 className="mb-0">Pedido ID: #FC001</h2>
                  <span className="custom-badge ms-2 badge rounded-pill text-dark-warning bg-light-warning">
                    Pendiente
                  </span>
                </div>
                <div className="d-md-flex">
                  <div className="mb-2 mb-md-0">
                    <select className="form-select">
                      <option value="true">Status</option>
                      <option value="Success">Success</option>
                      <option value="Pending">Pending</option>
                      <option value="Cancel">Cancel</option>
                    </select>
                  </div>
                  <div className="ms-md-3">
                    <button type="button" className="me-1 btn btn-primary">
                      Guardar
                    </button>
                    <button type="button" className="btn btn-secondary">
                      Descargar Factura
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="mb-6">
                      <h6>Datos del cliente</h6>
                      <p className="mb-1 lh-lg">
                        John Alex
                        <br />
                        anderalex@example.com
                        <br />
                        +998 99 22123456
                      </p>
                      <a href="#">Ver Perfil</a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="mb-6">
                      <h6>Dirección de envío</h6>
                      <p className="mb-1 lh-lg">
                        Gerg Harvell
                        <br />
                        568, Suite Ave.
                        <br />
                        Austrlia, 235153
                        <br />
                        Contact No. +91 99999 12345
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="mb-6">
                      <h6>Detalles del pedido</h6>
                      <p className="mb-1 lh-lg">
                        Order ID:<span className="text-dark">FC001</span>
                        <br />
                        Order Date:
                        <span className="text-dark">October 22, 2023</span>
                        <br />
                        Order Total:<span className="text-dark">$734.28</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="table-responsive">
                  <table className="mb-0 text-nowrap table-centered table">
                    <thead className="bg-light">
                      <tr>
                        <th>Productos</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a className="text-inherit" href="#">
                            <div className="d-flex align-items-center">
                              <div>
                                <img
                                  src="/images/products/product-img-1.jpg"
                                  alt=""
                                  className="icon-shape icon-lg"
                                />
                              </div>
                              <div className="ms-lg-4 mt-2 mt-lg-0">
                                <h5 className="mb-0 h6">
                                  Haldiram's Sev Bhujia
                                </h5>
                              </div>
                            </div>
                          </a>
                        </td>
                        <td>
                          <span className="text-body">$18.00</span>
                        </td>
                        <td>1</td>
                        <td>$18.00</td>
                      </tr>

                      <tr>
                        <td className="border-bottom-0 pb-0"></td>
                        <td className="border-bottom-0 pb-0"></td>
                        <td className="fw-medium text-dark">Sub Total :</td>
                        <td className="fw-medium text-dark">$80.00</td>
                      </tr>
                      <tr>
                        <td className="border-bottom-0 pb-0"></td>
                        <td className="border-bottom-0 pb-0"></td>
                        <td className="fw-medium text-dark">Costo de envío</td>
                        <td className="fw-medium text-dark">$10.00</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td className="fw-semibold text-dark">Gran total</td>
                        <td className="fw-semibold text-dark">$90.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="p-6 card-body">
              <div className="row">
                <div className="mb-4 mb-lg-0 col-md-6">
                  <h6>Información de pago</h6>
                  <span>Cash on Delivery</span>
                </div>
                <div className="col-md-6">
                  <h5>Notas</h5>
                  <textarea
                    placeholder="Write note for order"
                    className="mb-3 form-control"
                  ></textarea>
                  <button type="button" className="btn btn-primary">
                    {" "}
                    Save Notes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
