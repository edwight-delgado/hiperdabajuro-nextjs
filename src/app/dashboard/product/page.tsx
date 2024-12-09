import Link from "next/link";

//async function loadProduct() {
//const res = await fetch("http://localhost:3000/api/product");
//const data = await res.json();
//console.log("data api", data);
//return data;
//}
export default async function Products() {
  //let users = await loadProduct();

  return (
    <div className="container">
      <div className="mb-5 row">
        <div className="col-md-12">
          <div className="d-md-flex justify-content-between align-items-center">
            <div>
              <h2>Productos </h2>
              <nav aria-label="breadcrumb" className="mb-0">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a className="text-inherit" href="#" role="button">
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Productos
                  </li>
                </ol>
              </nav>
            </div>
            <div>
              <Link
                role="button"
                className="btn btn-primary"
                href="/dashboard/product/add"
              >
                Nuevo Producto
              </Link>
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
                      placeholder="Busqueda de Productos"
                      className="form-control"
                      type="search"
                    />
                  </form>
                </div>
                <div className="col-lg-2 col-md-4 col-12">
                  <select className="form-select">
                    <option value="">Status</option>
                    <option value="active">Active</option>
                    <option value="draft">Draft</option>
                    <option value="deactive">Deactive</option>
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
                        <div className="">Imagen</div>
                      </th>
                      <th>
                        <div className="">Nombre del producto</div>
                      </th>
                      <th>
                        <div className="">Categoría</div>
                      </th>
                      <th>
                        <div className="">Estado</div>
                      </th>
                      <th>
                        <div className="">Precio</div>
                      </th>
                      <th>
                        <div className="">Creado en </div>
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
                          src="/img/products/product-img-1.jpg"
                          alt=""
                          className="icon-shape icon-md"
                        />
                      </td>
                      <td className="align-middle border-top-0">
                        Haldiram's Sev Bhujia
                      </td>
                      <td className="align-middle border-top-0">
                        Snack &amp; Munchies
                      </td>
                      <td className="align-middle border-top-0">
                        <span className="custom-badge  badge text-dark-primary bg-light-primary">
                          Active
                        </span>
                      </td>
                      <td className="align-middle border-top-0">24</td>
                      <td className="align-middle border-top-0">24 Nov 2022</td>
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
                <div>Showing 1 to 10 of 26 entries</div>
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
                        3
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
