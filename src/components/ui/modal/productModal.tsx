"use client";
import { initialData } from "@/app/seed/seed";
import { QuantitySelector } from "@/components/product/quantity-selector/QuantitySelector";
import { useCartStore, useUIModalProductStore } from "@/store";
import Image from "next/image";

export const ProductModal = () => {
  //const slug = "Batin-crofessor-pampden-1";
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

  if (!product) {
    //page no found
    return;
  }
  product["quantity"] = 1;
  function handleGetQuantity(quantity: number) {
    if (!product) {
      return;
    }
    product["quantity"] = quantity;
    console.log(product);
  }
  return (
    <>
      {isSideModalProductOpen && (
        <div key={product.id}>
          <div className="modal-overlay fixed inset-0 bg-black opacity-50 z-10"></div>
          <div
            id="modal-cart"
            className="modal fixed opacity-0 transition-opacity duration-300 ease-linear md:w-11/12 md:max-w-1000 hidden z-40 left-8 right-8 md:left-1/2 top-1/2 transform -translate-y-1/2 md:-translate-x-1/2 p-7 bg-white modal-open"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="w-full">
                <Image
                  className="w-full h-full"
                  src={`/img/product/${product.images[0]}`}
                  alt="product image"
                  width="432"
                  height="480"
                />
              </div>
              <div>
                <button
                  className="text-black text-lg absolute top-7 right-7 modal-close"
                  onClick={() => closeSideModalProduct()}
                >
                  <i className="icon-close"></i>
                </button>

                <h3 className="text-dark font-medium text-md lg:text-lg leading-none mb-4">
                  {product.title}
                </h3>
                <h5 className="font-bold text-md leading-none text-orange mb-8">
                  ${product.price}
                  <del className="font-normal text-base mr-1 inline-block">
                    $110.00
                  </del>
                </h5>

                <p className="mb-5 text-sm">{product.description}</p>

                <select className="w-full h-12 border border-solid border-gray-300  px-5 py-2 appearance-none">
                  <option value="red">red</option>
                  <option value="green">green</option>
                  <option value="blue">blue</option>
                </select>

                <div className="flex flex-wrap items-center mt-8">
                  <QuantitySelector
                    quantity={1}
                    onGetQuantity={handleGetQuantity}
                  ></QuantitySelector>
                  <div className="ml-2 sm:ml-8">
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-black leading-none py-4 px-5 md:px-8 font-normal text-sm h-11 text-white transition-all hover:bg-orange"
                    >
                      Añadir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
