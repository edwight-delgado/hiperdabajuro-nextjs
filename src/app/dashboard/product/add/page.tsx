"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useReducer, useState } from "react";

export default function () {
  const [titulo, setTitulo] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  return (
    <div className="container">
      <div className="mb-5 row">
        <div className="col-md-12">
          <div className="d-md-flex justify-content-between align-items-center">
            <div>
              <h2>Nuevo Producto</h2>
              <nav aria-label="breadcrumb" className="mb-0">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a className="text-inherit" href="#" role="button">
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a className="" href="#" role="button">
                      <span>Productos</span>
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Nuevo Producto
                  </li>
                </ol>
              </nav>
            </div>
            <div>
              <Link
                role="button"
                className="btn btn-light"
                href="/dashboard/product"
              >
                Lista de Productos
              </Link>
            </div>
          </div>
        </div>
      </div>
      <form
        className="row"
        onSubmit={async (e) => {
          e.preventDefault();
          let name = titulo;
          console.log(titulo);
          const res = await fetch("/dashboard/api/product", {
            method: "POST",
            body: JSON.stringify({ name, email }),
            headers: { "Content-Type": "application/json" },
          });
          const data = await res.json();
          console.log(data);
          router.refresh();
        }}
      >
        <div className="col-lg-8 col-12">
          <div className="mb-6 card-lg card">
            <div className="p-6 card-body">
              <h4 className="mb-4 h5">Información del Producto</h4>
              <div className="row">
                <div className="mb-3 col-lg-6">
                  <label className="form-label">Titulo</label>
                  <input
                    onChange={(e) => setTitulo(e.target.value)}
                    placeholder="Product Name"
                    className="form-control"
                    type="text"
                    name="titulo"
                  />
                </div>
                <div className="mb-3 col-lg-6">
                  <label className="form-label">Categoría de producto</label>
                  <select className="form-select">
                    <option>Product Category</option>
                    <option value="Dairy, Bread &amp; Eggs">
                      Dairy, Bread &amp; Eggs
                    </option>
                    <option value="Snacks &amp; Munchies">
                      Snacks &amp; Munchies
                    </option>
                    <option value="Fruits &amp; Vegetables">
                      Fruits &amp; Vegetables
                    </option>
                  </select>
                </div>
                <div className="mb-3 col-lg-6">
                  <label className="form-label">Peso</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Peso"
                    className="form-control"
                    type="text"
                  />
                </div>
                <div className="mb-3 col-lg-6">
                  <label className="form-label">Weight</label>
                  <select className="form-select">
                    <option>Select Units</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="mb-3 mt-5 col-lg-12">
                  <h4 className="mb-3 h5">Imágenes del producto</h4>
                  <div role="presentation" className="dropzone">
                    <input accept="image/*" multiple type="file" />
                    <div className="text-center pt-4">
                      <p className="dropzone-content">
                        Suelte los archivos aquí para cargarlos
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-3 mt-5 col-lg-12">
                  <h4 className="mb-3 h5">Descripciones de productos</h4>
                  <div className="quill ">
                    <div className="ql-toolbar ql-snow">
                      <span className="ql-formats">
                        <span className="ql-header ql-picker">
                          <span
                            className="ql-picker-label"
                            role="button"
                            aria-expanded="false"
                            aria-controls="ql-picker-options-0"
                          >
                            <svg viewBox="0 0 18 18">
                              {" "}
                              <polygon
                                className="ql-stroke"
                                points="7 11 9 13 11 11 7 11"
                              ></polygon>{" "}
                              <polygon
                                className="ql-stroke"
                                points="7 7 9 5 11 7 7 7"
                              ></polygon>{" "}
                            </svg>
                          </span>
                          <span
                            className="ql-picker-options"
                            aria-hidden="true"
                            id="ql-picker-options-0"
                          >
                            <span
                              role="button"
                              className="ql-picker-item"
                              data-value="1"
                            ></span>
                            <span
                              role="button"
                              className="ql-picker-item"
                              data-value="2"
                            ></span>
                            <span
                              role="button"
                              className="ql-picker-item"
                              data-value="3"
                            ></span>
                            <span
                              role="button"
                              className="ql-picker-item ql-selected"
                            ></span>
                          </span>
                        </span>
                        <select className="ql-header">
                          <option value="1"></option>
                          <option value="2"></option>
                          <option value="3"></option>
                          <option selected></option>
                        </select>
                      </span>
                      <span className="ql-formats">
                        <button type="button" className="ql-bold">
                          <svg viewBox="0 0 18 18">
                            <path
                              className="ql-stroke"
                              d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                            ></path>
                            <path
                              className="ql-stroke"
                              d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                            ></path>
                          </svg>
                        </button>
                        <button type="button" className="ql-italic">
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <line
                              className="ql-stroke"
                              x1="7"
                              x2="13"
                              y1="4"
                              y2="4"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="5"
                              x2="11"
                              y1="14"
                              y2="14"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="8"
                              x2="10"
                              y1="14"
                              y2="4"
                            ></line>{" "}
                          </svg>
                        </button>
                        <button type="button" className="ql-underline">
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <path
                              className="ql-stroke"
                              d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
                            ></path>{" "}
                            <rect
                              className="ql-fill"
                              height="1"
                              rx="0.5"
                              ry="0.5"
                              width="12"
                              x="3"
                              y="15"
                            ></rect>{" "}
                          </svg>
                        </button>
                        <button type="button" className="ql-link">
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <line
                              className="ql-stroke"
                              x1="7"
                              x2="11"
                              y1="7"
                              y2="11"
                            ></line>{" "}
                            <path
                              className="ql-even ql-stroke"
                              d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"
                            ></path>{" "}
                            <path
                              className="ql-even ql-stroke"
                              d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"
                            ></path>{" "}
                          </svg>
                        </button>
                      </span>
                      <span className="ql-formats">
                        <button
                          type="button"
                          className="ql-list"
                          value="ordered"
                        >
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <line
                              className="ql-stroke"
                              x1="7"
                              x2="15"
                              y1="4"
                              y2="4"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="7"
                              x2="15"
                              y1="9"
                              y2="9"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="7"
                              x2="15"
                              y1="14"
                              y2="14"
                            ></line>{" "}
                            <line
                              className="ql-stroke ql-thin"
                              x1="2.5"
                              x2="4.5"
                              y1="5.5"
                              y2="5.5"
                            ></line>{" "}
                            <path
                              className="ql-fill"
                              d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"
                            ></path>{" "}
                            <path
                              className="ql-stroke ql-thin"
                              d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"
                            ></path>{" "}
                            <path
                              className="ql-stroke ql-thin"
                              d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"
                            ></path>{" "}
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="ql-list"
                          value="bullet"
                        >
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <line
                              className="ql-stroke"
                              x1="6"
                              x2="15"
                              y1="4"
                              y2="4"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="6"
                              x2="15"
                              y1="9"
                              y2="9"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="6"
                              x2="15"
                              y1="14"
                              y2="14"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="3"
                              x2="3"
                              y1="4"
                              y2="4"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="3"
                              x2="3"
                              y1="9"
                              y2="9"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="3"
                              x2="3"
                              y1="14"
                              y2="14"
                            ></line>{" "}
                          </svg>
                        </button>
                      </span>
                      <span className="ql-formats">
                        <button type="button" className="ql-clean">
                          <svg className="" viewBox="0 0 18 18">
                            {" "}
                            <line
                              className="ql-stroke"
                              x1="5"
                              x2="13"
                              y1="3"
                              y2="3"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="6"
                              x2="9.35"
                              y1="12"
                              y2="3"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="11"
                              x2="15"
                              y1="11"
                              y2="15"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="15"
                              x2="11"
                              y1="11"
                              y2="15"
                            ></line>{" "}
                            <rect
                              className="ql-fill"
                              height="1"
                              rx="0.5"
                              ry="0.5"
                              width="7"
                              x="2"
                              y="14"
                            ></rect>{" "}
                          </svg>
                        </button>
                      </span>
                    </div>
                    <div className="ql-container ql-snow">
                      <div
                        className="ql-editor ql-blank"
                        data-gramm="false"
                        contentEditable="true"
                      >
                        <p>
                          <br />
                        </p>
                      </div>
                      <div
                        className="ql-clipboard"
                        contentEditable="true"
                      ></div>
                      <div className="ql-tooltip ql-hidden">
                        <a
                          className="ql-preview"
                          rel="noopener noreferrer"
                          target="_blank"
                          href="about:blank"
                        ></a>
                        <input
                          type="text"
                          data-formula="e=mc^2"
                          data-link="https://quilljs.com"
                          data-video="Embed URL"
                        />
                        <a className="ql-action"></a>
                        <a className="ql-remove"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="mb-6 card-lg card">
            <div className="p-6 card-body">
              <div className="form-check form-switch">
                <input
                  id="flexSwitchStock"
                  className="form-check-input"
                  type="checkbox"
                  checked
                />
                <label htmlFor="flexSwitchStock" className="form-check-label">
                  En stock
                </label>
              </div>
              <div>
                <div className="mb-3">
                  <label className="form-label">Código del producto</label>
                  <input
                    placeholder="Enter Product Title"
                    className="form-control"
                    type="text"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Código SKU del producto</label>
                  <input
                    placeholder="Enter Product Title"
                    className="form-control"
                    type="text"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Estado</label>
                  <br />
                  <div className="form-check form-check-inline">
                    <input
                      id="inlineRadio1"
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                    />
                    <label
                      title=""
                      htmlFor="inlineRadio1"
                      className="form-check-label"
                    >
                      Activo
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      id="inlineRadio2"
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                    />
                    <label
                      title=""
                      htmlFor="inlineRadio2"
                      className="form-check-label"
                    >
                      Desactivo
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6 card-lg card">
            <div className="p-6 card-body">
              <h4 className="mb-4 h5">Precio del producto</h4>
              <div className="mb-3">
                <label className="form-label">Dolar USD</label>
                <input
                  placeholder="$0.00"
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Bolivar Bsf</label>
                <input
                  placeholder="$0.00"
                  className="form-control"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="mb-6 card-lg card">
            <div className="p-6 card-body">
              <h4 className="mb-4 h5">Metadatos</h4>
              <div className="mb-3">
                <label className="form-label">Título meta</label>
                <input
                  placeholder="Title"
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Meta descripción</label>
                <textarea
                  placeholder="Meta Description"
                  className="form-control"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary" type="submit">
              Crear Producto
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
