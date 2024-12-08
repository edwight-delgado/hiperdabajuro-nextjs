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
                href="/admin/customer"
              >
                Clientes
              </a>
            </li>
            <li>
              <a
                className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-gray-600 block"
                href="/admin/category/new"
              >
                Categorias
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
            <li className="active">
              <Link
                className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-gray-600 block"
                href="/admin/product/list"
              >
                Lista de Producto
              </Link>
            </li>
            <li>
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
                  Lista de Producto
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-max">
                    <thead>
                      <tr>
                        <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                          No
                        </th>
                        <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                          Name
                        </th>
                        <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                          Date
                        </th>
                        <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                          Status
                        </th>
                        <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                          Total
                        </th>
                        <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          1
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          Mostarizing Oil
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          Aug 22, 2018
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          Pending
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          $45
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          <a
                            href="shopping-cart.html"
                            className="ht-btn black-btn"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          2
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          Katopeno Altuni
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          July 22, 2018
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          Approved
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          $100
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          <a
                            href="shopping-cart.html"
                            className="ht-btn black-btn"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          3
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          Murikhete Paris
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          June 12, 2017
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          On Hold
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          $99
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          <a
                            href="shopping-cart.html"
                            className="ht-btn black-btn"
                          >
                            View
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
      </div>
    </div>
  );
}