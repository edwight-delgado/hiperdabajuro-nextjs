"use client";

import Image from "next/image";
import { useCartStore, useUIStore } from "@/store";
import useFromStore from "@/components/cart/useFromStore";
import clsx from "clsx";
import { QuantitySelector, ShoppingCart } from "@/components";
import { Product } from "@/interfaces/product.interface";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function () {
  const cart = useFromStore(useCartStore, (state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  let total = 0;
  if (cart) {
    total = cart.reduce(
      (acc, product) => acc + product.price * (product.quantity as number),
      0
    );
  }

  const updateQty = useCartStore((state) => state.updateQuantity);
  //product["quantity"] = 1;
  const [forceUpdate, setForceUpdate] = useState(false);
  function handleGetQuantity(quantity: number, id: number) {
    const prod = cart?.filter((item) => item.id == id);
    if (!prod) {
      return;
    }

    prod[0]["quantity"] = quantity;

    updateQty(prod[0], quantity);

    console.log("product:", prod, "produc:", prod[0].quantity);

    setForceUpdate(!forceUpdate);
  }
  return (
    <>
      <section className="mb-lg-14 mb-8 mt-8">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="py-1 border-0 mb-8 card">
                <div>
                  <h1 className="fw-bold">Carrito de Compras</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div className="py-3">
                <ul className="list-group list-group-flush">
                  {cart?.map((product) => (
                    <li className="py-3 ps-0 border-top list-group-item">
                      <div className="align-items-center undefined row">
                        <div className="col-lg-7 col-md-6 col-6">
                          <div className="d-flex">
                            <Image
                              src={`/img/products/${product.images[0]}`}
                              alt={product.title}
                              loading="lazy"
                              width={64}
                              height={64}
                              className="icon-shape icon-xxl"
                            />
                            <div className="ms-3">
                              <a className="text-inherit" href="">
                                <h6 className="mb-0">{product.title}</h6>
                              </a>
                              <span>
                                <small className="text-muted"></small>
                              </span>
                              <div className="mt-2 small lh-1">
                                <a
                                  onClick={() => removeFromCart(product)}
                                  className="text-decoration-none text-inherit"
                                  href="#!"
                                >
                                  <span className="me-1 align-text-bottom">
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
                                      className="text-success"
                                    >
                                      <polyline points="3 6 5 6 21 6"></polyline>
                                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                      <line
                                        x1="10"
                                        y1="11"
                                        x2="10"
                                        y2="17"
                                      ></line>
                                      <line
                                        x1="14"
                                        y1="11"
                                        x2="14"
                                        y2="17"
                                      ></line>
                                    </svg>
                                  </span>
                                  <span className="text-muted">Eliminar</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-4">
                          <QuantitySelector
                            id={product.id}
                            quantity={product.quantity}
                            onGetQuantity={handleGetQuantity}
                          ></QuantitySelector>
                        </div>
                        <div className="text-center col-md-2 col-2">
                          <span className="fw-bold">
                            ${product.price * product.quantity}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-12">
              <div className="mb-5 mt-6 card">
                <div className="p-6 card-body">
                  <h2 className="h5 mb-4">Resumen</h2>
                  <div className="mb-2 card">
                    <div className="list-group list-group-flush">
                      <div className="d-flex justify-content-between align-items-start list-group-item">
                        <div className="me-auto">
                          <div className="">Item Subtotal</div>
                        </div>
                        <span className="">$93.55</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-start list-group-item">
                        <div className="me-auto">
                          <div className="">Tarifa de envío</div>
                        </div>
                        <span className="">$0.00</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-start list-group-item">
                        <div className="me-auto">
                          <div className="">Impuesto IVA 12%</div>
                        </div>
                        <span className="">$16.84</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-start list-group-item">
                        <div className="me-auto">
                          <div className="fw-bold">Subtotal</div>
                        </div>
                        <span className="fw-bold">$110.39</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-grid mb-1 mt-4">
                    <Link
                      role="button"
                      className="d-flex justify-content-between align-items-center btn btn-primary btn-lg"
                      href="/cart/checkout"
                    >
                      Procesar Pedidos
                      <span className="fw-bold">${total}</span>
                    </Link>
                  </div>
                  <p>
                    <small>
                      Al realizar su pedido, usted acepta estar sujeto a los{" "}
                      <a href="#">Términos de servicio</a> y{" "}
                      <a href="">la Política de privacidad</a> de hipermercado.
                    </small>
                  </p>
                  <div className="mt-8">
                    <h2 className="h5 mb-3">Add Promo or Gift Card</h2>
                    <form className="">
                      <div className="mb-2">
                        <label
                          className="sr-only form-label"
                          htmlFor="giftcard"
                        >
                          Email address
                        </label>
                        <input
                          placeholder="Promo or Gift Card"
                          type="text"
                          id="giftcard"
                          className="form-control"
                          value=""
                        />
                      </div>
                      <div className="d-grid">
                        <button
                          type="submit"
                          className="mb-1 btn btn-outline-dark"
                        >
                          Redeem
                        </button>
                      </div>
                      <p className="text-muted mb-0">
                        <small>Terms &amp; Conditions apply</small>
                      </p>
                    </form>
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
