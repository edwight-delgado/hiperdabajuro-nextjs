import Link from "next/link";
import "./dash.css";

export default function Dashboard() {
  return (
    <div className="container">
      <div className="mb-8 row">
        <div className="col-md-12">
          <div className="border-0 rounded-4 card bg-light" id="dash-bg">
            <div className="p-lg-12 card-body">
              <h1>¡Bienvenidos de nuevo! Juan</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                suscipit velit ex eius rem esse, mollitia fugit sed porro.
                Voluptas quidem, voluptatibus facere omnis labore sunt sed quia
                illo facilis.
              </p>
              <Link href={"/dashboard/product/add"}>
                <button type="button" className="btn btn-primary">
                  Nuevo Producto
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="table-responsive-xl mb-6 mb-lg-0">
        <div className="flex-nowrap pb-3 pb-lg-0 row">
          <div className="mb-6 col-lg-4 col-12">
            <div className="h-100 card-lg card">
              <div className="p-6 card-body">
                <div className="d-flex justify-content-between align-items-center mb-6">
                  <div>
                    <h4 className="mb-0 fs-5">Ganancias</h4>
                  </div>
                  <div className="icon-shape icon-md bg-light-danger text-dark-danger rounded-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      className="bi bi-currency-dollar fs-5"
                    >
                      <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"></path>
                    </svg>
                  </div>
                </div>
                <div className="lh-1">
                  <h1 className="mb-2 fw-bold fs-2">$93,438.78</h1>
                  <span>Ingresos mensuales</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6 col-lg-4 col-12">
            <div className="h-100 card-lg card">
              <div className="p-6 card-body">
                <div className="d-flex justify-content-between align-items-center mb-6">
                  <div>
                    <h4 className="mb-0 fs-5">Pedidos</h4>
                  </div>
                  <div className="icon-shape icon-md bg-light-warning text-dark-warning rounded-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      className="bi bi-cart fs-5"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"></path>
                    </svg>
                  </div>
                </div>
                <div className="lh-1">
                  <h1 className="mb-2 fw-bold fs-2">42,339</h1>
                  <span>
                    <span className="text-dark me-1">35+</span>
                    New Sales
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6 col-lg-4 col-12">
            <div className="h-100 card-lg card">
              <div className="p-6 card-body">
                <div className="d-flex justify-content-between align-items-center mb-6">
                  <div>
                    <h4 className="mb-0 fs-5">Clientes</h4>
                  </div>
                  <div className="icon-shape icon-md bg-light-info text-dark-info rounded-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      className="bi bi-people fs-5"
                    >
                      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"></path>
                    </svg>
                  </div>
                </div>
                <div className="lh-1">
                  <h1 className="mb-2 fw-bold fs-2">39,354</h1>
                  <span>
                    <span className="text-dark me-1">30+</span>new in 2 days
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
}
