"use client";

import Image from "next/image";
import { useCartStore, useUIStore } from "@/store";
import useFromStore from "./useFromStore";
import clsx from "clsx";
import { QuantitySelector } from "../product/quantity-selector/QuantitySelector";
//import { Product } from "@/interfaces/product.interface";
import { useState } from "react";
import Link from "next/link";

export function ShoppingCart() {
  const cart = useFromStore(useCartStore, (state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  let total = 0;
  if (cart) {
    total = cart.reduce(
      (acc, product) => acc + product.price * (product.quantity as number),
      0
    );
  }
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);
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
      {isSideMenuOpen && (
        <div
          className="fade offcanvas-backdrop show"
          onClick={() => {
            closeMenu();
          }}
        ></div>
      )}

      <div
        role="dialog"
        aria-modal="true"
        className={clsx("offcanvas offcanvas-end", {
          "offcanvas offcanvas-end show": isSideMenuOpen,
        })}
        id="offcanvasRight"
      >
        <div className="border-bottom offcanvas-header">
          <div className="text-start">
            <h5 id="offcanvasRightLabel" className="mb-0 fs-4">
              carrito de Compra
            </h5>
          </div>
          <button
            onClick={() => {
              closeMenu();
            }}
            type="button"
            className="btn-close"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-group list-group-flush">
            <li className="py-3 ps-0 border-bottom list-group-item">
              <div className="align-items-center undefined row">
                <div className="col-lg-7 col-md-6 col-6">
                  <div className="d-flex">
                    <a className="text-inherit" href="">
                      <h6 className="mb-0">Total</h6>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-4"></div>
                <div className="text-center col-md-2 col-2">
                  <span className="fw-bold">${total}</span>
                </div>
              </div>
            </li>

            {cart?.map((product) => (
              <li
                key={product.id}
                className="py-3 ps-0 border-bottom list-group-item"
              >
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
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
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
        
            <Link href={"cart"}>
              <button type="button" className="btn btn-dark">
                Procesar Pedido
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
