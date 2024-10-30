"use client";
import { QuantitySelector } from "@/components";
import { useCartStore } from "@/store";
import Image from "next/image";
import TotalProductsCart from "@/middleware/totalProductsCart";
import { useState } from "react";

export default function () {
  const cart = useCartStore((state) => state.cart);
  const RemoveItem = useCartStore((state) => state.removeFromCart);
  //const products = initialData.products
  let total = 0;
  total = TotalProductsCart(cart);

  function handleGetQuantity(quantity: number) {
    if (total < 1) {
      return;
    }
    const [nquantity, setQuantity] = useState(quantity);
    setQuantity(nquantity);
  }

  return (
    <>
      <div className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-5">
            <div className="overflow-x-auto">
              <table className="w-full min-w-max">
                <thead>
                  <tr>
                    <th className="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">
                      Image
                    </th>
                    <th className="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">
                      Product
                    </th>
                    <th className="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">
                      Price
                    </th>
                    <th className="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">
                      Quantity
                    </th>
                    <th className="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">
                      Total
                    </th>
                    <th className="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product) => (
                    <tr key={product.id}>
                      <td className="w-32 p-3 border border-solid border-gray-600 text-center">
                        <a href="#">
                          <Image
                            src={`/img/product/${product.images[0]}`}
                            alt="product image"
                            width={103}
                            height={114}
                          />
                        </a>
                      </td>
                      <td className="p-3 border border-solid border-gray-600 text-center">
                        <a
                          href="#"
                          className="transition-all hover:text-orange"
                        >
                          {product.title}
                        </a>
                      </td>
                      <td className="p-3 border border-solid border-gray-600 text-center">
                        <span>
                          <span>${product.price}</span>
                        </span>
                      </td>
                      <td className="p-3 border border-solid border-gray-600 text-center">
                        <QuantitySelector
                          quantity={product.quantity}
                          onGetQuantity={handleGetQuantity}
                        ></QuantitySelector>
                      </td>
                      <td className="p-3 border border-solid border-gray-600 text-center">
                        <span>${product.price * product.quantity}</span>
                      </td>
                      <td className="p-3 border border-solid border-gray-600 text-center">
                        <a
                          href="#"
                          className="inline-block mx-1 hover:text-orange transition-all"
                        >
                          <i className="icon-pencil"></i>
                        </a>
                        <a
                          onClick={() => RemoveItem(product)}
                          href="#"
                          className="inline-block mx-1 hover:text-orange transition-all"
                        >
                          <i className="icon-close"></i>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <section className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
            <div>
              <div>
                <h3 className="text-md font-semibold capitalize mb-8">
                  calculate shipping
                </h3>
                <form action="#">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
                    <div className="col-span-2 sm:col-span-1">
                      <select className="border border-solid border-gray-300 bg-transparent w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base">
                        <option>Select country</option>
                        <option>Azerbaijan</option>
                        <option>Bahamas</option>
                        <option>Bahrain</option>
                        <option>Bangladesh</option>
                        <option>Barbados</option>
                      </select>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <select className="border border-solid border-gray-300 bg-transparent w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base">
                        <option>Select State</option>
                        <option>Azerbaijan</option>
                        <option>Bahamas</option>
                        <option>Bahrain</option>
                        <option>Bangladesh</option>
                        <option>Barbados</option>
                      </select>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <input
                        className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                        placeholder="Postcode / ZIP"
                        type="text"
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <a
                        href="#"
                        className="inline-block bg-dark leading-none py-4 px-5 md:px-8 text-sm text-white transition-all hover:bg-orange uppercase font-semibold hover:text-white mb-5 sm:mb-0"
                      >
                        estimate
                      </a>
                    </div>

                    <div className="col-span-2">
                      <h3 className="text-md font-semibold capitalize mb-8">
                        Discount coupon Code
                      </h3>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <input
                        className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                        placeholder="coupon Code"
                        type="text"
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <a
                        href="#"
                        className="inline-block bg-dark leading-none py-4 px-5 md:px-8 text-sm text-white transition-all hover:bg-orange uppercase font-semibold hover:text-white mb-8 sm:mb-0"
                      >
                        apply code
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="mt-4 lg:mt-0">
              <div className="bg-gray-700 p-10">
                <ul className="flex flex-wrap items-center justify-between">
                  <li className="text-base font-semibold">Product</li>
                  <li className="text-base font-semibold">Total</li>
                </ul>

                <ul className="flex flex-wrap items-center justify-between">
                  <li className="text-base font-semibold">Shipping</li>
                  <li className="text-base font-semibold">Free shipping</li>
                </ul>
                <div className="border-t border-b border-gray-600 py-5 mt-5">
                  <ul className="flex flex-wrap items-center justify-between">
                    <li className="text-base font-semibold">Total</li>
                    <li className="text-base font-semibold text-orange">
                      ${total}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-block bg-dark leading-none py-4 px-5 md:px-8 text-sm text-white transition-all hover:bg-orange uppercase font-semibold hover:text-white"
                >
                  Update Cart
                </a>
                <a
                  href="#"
                  className="inline-block bg-dark leading-none py-4 px-5 md:px-8 text-sm text-white transition-all hover:bg-orange uppercase font-semibold hover:text-white ml-4"
                >
                  checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
