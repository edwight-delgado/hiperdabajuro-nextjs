"use client";
import { initialData } from "@/app/seed/seed";
import { useCartStore, useUIModalProductStore } from "@/store";
//import { useEffect, useState } from "react";
import Image from "next/image";
import "./style.css";

//import { QuantitySelector } from "@/components/product/quantity-selector/QuantitySelector";

export const ProductModal = () => {
  const closeSideModalProduct = useUIModalProductStore(
    (state) => state.closeSideModalProduct
  );
  const isSideModalProductOpen = useUIModalProductStore(
    (state) => state.isSideModalProductOpen
  );
  const addToCart = useCartStore((state) => state.addToCart);
  const slugState = useUIModalProductStore((state) => state.slugState);
  const product = initialData.products.find(
    (product) => product.slug == slugState
  );
  //const updateQty = useCartStore((state) => state.updateQuantity);
  if (!product) {
    //page no found
    return;
  }
  product["quantity"] = 1;

  return (
    <>
      {isSideModalProductOpen && (
        <>
          <div
            className="fade modal-backdrop show"
            onClick={() => closeSideModalProduct()}
          ></div>
          <div
            key={product.id}
            role="dialog"
            aria-modal="true"
            className="fade modal show"
            id="fade_modal"
          >
            <div
              id="quickViewModal"
              className="modal-dialog modal-xl modal-dialog-centered"
            >
              <div className="modal-content">
                <div className="modal-content-dialog">
                  <div className="modal-content-content">
                    <div className="p-8 modal-body">
                      <div className="position-absolute top-0 end-0 me-3 mt-3">
                        <button
                          onClick={() => closeSideModalProduct()}
                          type="button"
                          className="btn-close btn-close-primary"
                        ></button>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="container">
                            <Image
                              src={`/img/products/${product.images[0]}`}
                              alt={product.title}
                              width={502}
                              height={376}
                              className="img-fluid"
                            />
                          </div>
                          <div className="product" id="product">
                            <div>
                              <div>
                                <div
                                  className="slick-slider slick-initialized"
                                  dir="ltr"
                                >
                                  <div className="slick-list">
                                    <div className="slick-track">
                                      <div
                                        data-index="-1"
                                        className="slick-slide slick-cloned"
                                        aria-hidden="true"
                                      ></div>
                                      <div
                                        data-index="0"
                                        className="slick-slide slick-active slick-current"
                                        aria-hidden="false"
                                      >
                                        <div>
                                          <div
                                            className="product productModal"
                                            id="productModal"
                                          ></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-tools">
                            <div
                              id="productModalThumbnails"
                              className="thumbnails g-3 row"
                            >
                              <div className="tns-nav-active col-3">
                                <div className="thumbnails-img">
                                  <img
                                    src="/img/products/product-single-img-1.jpg"
                                    alt="Image"
                                    className=""
                                  />
                                </div>
                              </div>
                              <div className="col-3">
                                <div className="thumbnails-img">
                                  <img
                                    src="/img/products/product-single-img-2.jpg"
                                    alt="Image"
                                    className=""
                                  />
                                </div>
                              </div>
                              <div className="col-3">
                                <div className="thumbnails-img">
                                  <img
                                    src="/img/products/product-single-img-3.jpg"
                                    alt="Image"
                                    className=""
                                  />
                                </div>
                              </div>
                              <div className="col-3">
                                <div className="thumbnails-img">
                                  <img
                                    src="/img/products/product-single-img-4.jpg"
                                    alt="Image"
                                    className=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="ps-lg-8 mt-6 mt-lg-0">
                            <a className="mb-4 d-block" href="">
                              Instant Food
                            </a>
                            <h2 className="mb-1 h1">{product.title}</h2>
                            <div className="mb-4 d-flex align-items-center ">
                              <small className="text-warning d-flex gap-1">
                                <div className="d-flex gap-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    width="14"
                                    height="14"
                                    fill="currentColor"
                                    className="bi bi-star-fill text-warning"
                                  >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                  </svg>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    width="14"
                                    height="14"
                                    fill="currentColor"
                                    className="bi bi-star-fill text-warning"
                                  >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                  </svg>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    width="14"
                                    height="14"
                                    fill="currentColor"
                                    className="bi bi-star-fill text-warning"
                                  >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                  </svg>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    width="14"
                                    height="14"
                                    fill="currentColor"
                                    className="bi bi-star-fill text-warning"
                                  >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                  </svg>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    width="14"
                                    height="14"
                                    fill="currentColor"
                                    className="bi bi-star-half text-warning"
                                  >
                                    <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"></path>
                                  </svg>
                                </div>
                              </small>
                              <a className="ms-2" href="#">
                                (4 reviews)
                              </a>
                            </div>
                            <div className="fs-4">
                              <span className="fw-bold text-dark">
                                ${product.price}{" "}
                              </span>
                              <span className="fw-bold text-dark text-muted">
                                | Bsf 18
                              </span>
                            </div>
                            <hr className="my-6" />
                            <div className="mb-4 d-flex gap-1">
                              <input
                                className="btn-check"
                                type="checkbox"
                                name="size"
                              />
                              <label className="btn btn-outline-secondary">
                                250g
                              </label>
                              <input
                                className="btn-check"
                                type="checkbox"
                                name="size"
                              />
                              <label className="btn btn-outline-secondary">
                                500g
                              </label>
                              <input
                                className="btn-check"
                                type="checkbox"
                                name="size"
                              />
                              <label className="btn btn-outline-secondary">
                                1kg
                              </label>
                            </div>
                            <div className="w-25"></div>
                            <div className="mt-3 justify-content-start g-2 align-items-center row">
                              <div className="d-grid col-lg-4 col-md-5 col-6">
                                <button
                                  onClick={() => addToCart(product)}
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="me-2"
                                  >
                                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                                  </svg>
                                  Añadir
                                </button>
                              </div>
                              <div className="col-md-4 col-5">
                                <div className="d-flex gap-1">
                                  <a className="btn btn-light" href="#!">
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
                                    >
                                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <hr className="my-6" />
                            <div>
                              <table className="table table-borderless">
                                <tbody>
                                  <tr>
                                    <td>Product Code:</td>
                                    <td>FBB00255</td>
                                  </tr>
                                  <tr>
                                    <td>Availability:</td>
                                    <td>In Stock</td>
                                  </tr>
                                  <tr>
                                    <td>Type:</td>
                                    <td>Fruits</td>
                                  </tr>
                                  <tr>
                                    <td>Shipping:</td>
                                    <td>
                                      <small>
                                        01 day shipping.{" "}
                                        <span className="text-muted">
                                          ( Free pickup today)
                                        </span>
                                      </small>
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
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
