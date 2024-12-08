import Link from "next/link";
import "../../../../../../public/css/dropzone.min.css";

import { EditorConvertToMarkdown, Previews } from "@/components";

export default function () {
  return (
    <div className="container">
      <div
        id="shoptab"
        className="grid grid-cols-12 gap-y-5 lg:gap-y-0 gap-x-5"
      >
        <div className="col-span-12 lg:col-span-4">
          <ul className="shop-tab-nav account-nav flex flex-wrap flex-col">
            <li>
              <a
                className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-gray-600 block"
                href="#dashboad"
              >
                dashboad
              </a>
            </li>
            <li>
              <a
                className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-gray-600 block"
                href="#orders"
              >
                orders
              </a>
            </li>
            <li>
              <a
                className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-gray-600 block"
                href="#download"
              >
                download
              </a>
            </li>
            <li>
              <a
                className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-gray-600 block"
                href="#payment-method"
              >
                payment method
              </a>
            </li>
            <li>
              <Link
                className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-gray-600 block"
                href="/admin/product/list"
              >
                Lista de Producto
              </Link>
            </li>
            <li className="active">
              <Link
                className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-gray-600 block"
                href="/admin/product/new"
              >
                {" "}
                Nuevo Producto
              </Link>
            </li>
            <li>
              <a
                className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-b border-gray-600 block"
                href="login-register.html"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <div>
            <div id="account" className="shop-tab-content active">
              <div className="p-8 border border-gray-600">
                <h3 className="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">
                  Nuevo Producto
                </h3>
                <form action="#">
                  <div className="grid grid-cols-12 gap-x-5">
                    <div className="col-span-12 lg:col-span-6 mb-5">
                      <div className="form-check form-switch mb-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchStock"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchStock"
                        >
                          In Stock
                        </label>
                      </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 mb-5">
                      <input
                        className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                        id="first-name"
                        placeholder="Nombre del producto"
                        type="text"
                      />
                    </div>

                    <div className="col-span-12 lg:col-span-6 mb-5">
                      <input
                        className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                        id="last-name"
                        placeholder="Precio del Producto"
                        type="text"
                      />
                    </div>

                    <div className="col-span-12 lg:col-span-6 mb-5">
                      <input
                        className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                        id="last-name"
                        placeholder="categoria"
                        type="text"
                      />
                    </div>

                    <div className="col-span-12 lg:col-span-6 mb-5">
                      <input
                        className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                        id="last-name"
                        placeholder="codigo del producto"
                        type="text"
                      />
                    </div>

                    <div className="col-span-12 lg:col-span-6 mb-5">
                      <input
                        className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                        id="last-name"
                        placeholder="stock disponible"
                        type="text"
                      />
                    </div>

                    <div className="col-span-12 lg:col-span-6 mb-5">
                      <input
                        className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                        id="last-name"
                        placeholder="Product SKU"
                        type="text"
                      />
                    </div>

                    <div className="col-span-12 mb-5">
                      <EditorConvertToMarkdown></EditorConvertToMarkdown>
                    </div>

                    <div className="col-span-12 mb-5">
                      <Previews></Previews>
                    </div>

                    <div className="col-span-12 lg:col-span-6 mb-5">
                      <input
                        className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                        id="new-pwd"
                        placeholder="unidad"
                        type="text"
                      />
                    </div>

                    <div className="col-span-12 lg:col-span-6 mb-5">
                      <input
                        className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                        id="confirm-pwd"
                        placeholder="peso"
                        type="text"
                      />
                    </div>

                    <div className="col-span-12">
                      <button
                        className="inline-block leading-none uppercase text-white text-sm bg-dark px-5 py-5 transition-all hover:bg-orange"
                        aria-label="Save Changes"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
