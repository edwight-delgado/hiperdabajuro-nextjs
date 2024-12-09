import Address from "@/components/checkout/address";

export default function Checkout() {
  return (
    <>
      <div className="mt-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <nav aria-label="breadcrumb" className="mb-0">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#" role="button">
                      Inicio
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#" role="button">
                      <span>Carrito</span>
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Verificación
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <section className="mb-lg-14 mb-8 mt-8">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div>
                <div className="mb-8">
                  <h1 className="fw-bold mb-0">Verificación</h1>
                  <p className="mb-0">
                    ¿Ya tienes una cuenta? Haz clic aquí para
                    <a href="/signin"> iniciar sesión </a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div
                  id="accordionFlushExample"
                  className="accordion accordion-flush"
                >
                  <div className="py-4 accordion-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <a className="fs-5 text-inherit h4" href="">
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
                          className="me-2 text-muted"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        Datos Personales
                      </a>
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                      >
                        Nueva Dirección
                      </button>
                    </div>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse show"
                    >
                      <div className="mt-5">
                        <div className="row">
                          <div className="mb-4 col-lg-6 col-12">
                            <Address></Address>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-12 offset-lg-1">
                <div className="mt-4 mt-lg-0">
                  <div className="shadow-sm card">
                    <h5 className="px-6 py-4 bg-transparent mb-0">
                      Detalles del pedido
                    </h5>
                    <ul className="list-group list-group-flush">
                      <li className="px-4 py-3 list-group-item">
                        <div className="align-items-center row">
                          <div className="col-md-2 col-2">
                            <img
                              src="/img/products/product-img-1.jpg"
                              alt="Ecommerce"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-md-5 col-5">
                            <h6 className="mb-0">Haldiram Sev Bhujia</h6>
                            <span>
                              <small className="text-muted"></small>
                            </span>
                          </div>
                          <div className="text-center text-muted col-md-2 col-2">
                            <span>1</span>
                          </div>
                          <div className="text-lg-end text-start text-md-end col-md-3 col-3">
                            <span className="fw-bold">$21.60</span>
                          </div>
                        </div>
                      </li>
                      <li className="px-4 py-3 list-group-item">
                        <div className="d-flex align-items-center justify-content-between   mb-2">
                          <div>Item Subtotal</div>
                          <div className="fw-bold">$93.55</div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2 ">
                          <div>
                            Shipping Fee
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
                              className="text-muted"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="12" y1="16" x2="12" y2="12"></line>
                              <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            </svg>
                          </div>
                          <div className="fw-bold">$0.00</div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2 ">
                          <div>Tax Vat 18%</div>
                          <div className="fw-bold">$16.84</div>
                        </div>
                      </li>
                      <div className="px-4 py-3 list-group-item">
                        <div className="d-flex align-items-center justify-content-between mb-2 fw-bold">
                          <div>Grand Total</div>

                          <div>$110.39</div>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
