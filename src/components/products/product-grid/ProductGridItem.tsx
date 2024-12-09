"use client";
import { Product } from "@/interfaces/product.interface";
import { useCartStore, useUIModalProductStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
interface Props {
  product: Product;
}
export const ProductGridItem = ({ product }: Props) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const openSideModalProduct = useUIModalProductStore(
    (state) => state.openSideModalProduct
  );
  product["quantity"] = 1;
  return (
    <div key={product.id} className="col1">
      <div className="card-product card">
        <div className="card-body">
          <div className="text-center position-relative">
            <a href="#" onClick={() => openSideModalProduct(product.slug)}>
              <Image
                src={`/img/products/${product.images[0]}`}
                alt={product.title}
                width={220}
                height={220}
                className="mb-3 img-fluid"
              />
            </a>
            <div className="text-small mb-1">
              <a className="text-decoration-none text-muted" href="#!">
                <small>{product.categoryName}</small>
              </a>
            </div>
            <h2 className="fs-6">
              <Link
                className="text-inherit text-decoration-none"
                href={product.slug}
              >
                {product.title}
              </Link>
            </h2>
            <div className="d-inline-flex gap-1 align-items-center ">
              <small className="text-warning">
                <div className="d-flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-star-fill text-warning"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-star-fill text-warning"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-star-fill text-warning"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-star-fill text-warning"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-star-half text-warning"
                  >
                    <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"></path>
                  </svg>
                </div>
              </small>
              <span className="text-muted small">4.3 (4)</span>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <span className="text-dark">$ {product.price} </span>
              </div>
              <div>
                <a
                  onClick={() => addToCart(product)}
                  role="button"
                  href="#!"
                  className="btn btn-primary btn-sm btn btn-primary"
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
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>{" "}
                  Añadir
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
