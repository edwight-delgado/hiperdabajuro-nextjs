"use client";
import { initialData } from "@/app/seed/seed";
import { QuantitySelector } from "@/components/product/quantity-selector/QuantitySelector";
import { useUIModalProductStore } from "@/store";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  slug: string;
}
export const ProductModal = ({ slug }: Props) => {
  //const slug = "Batin-crofessor-pampden-1";
  const closeSideModalProduct = useUIModalProductStore(
    (state) => state.closeSideModalProduct
  );
  const product = initialData.products.find((product) => product.slug == slug);

  if (!product) {
    //page no found
    notFound();
  }
  return (
    <>
      <div className="modal-overlay fixed inset-0 bg-black opacity-50 z-10"></div>
      <div
        id="modal-cart"
        className="modal fixed opacity-0 transition-opacity duration-300 ease-linear md:w-11/12 md:max-w-1000 hidden z-40 left-8 right-8 md:left-1/2 top-1/2 transform -translate-y-1/2 md:-translate-x-1/2 p-7 bg-white modal-open"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="w-full">
            <Image
              className="w-full h-full"
              src={`/img/product/product1.webp`}
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
              $130.00
              <del className="font-normal text-base mr-1 inline-block">
                $110.00
              </del>
            </h5>

            <p className="mb-5 text-sm">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. All the Lorem Ipsum generators on the
              Internet tend to repeat predefined chunks as necessary,
            </p>

            <select className="w-full h-12 border border-solid border-gray-300  px-5 py-2 appearance-none">
              <option value="red">red</option>
              <option value="green">green</option>
              <option value="blue">blue</option>
            </select>

            <div className="flex flex-wrap items-center mt-8">
              <QuantitySelector quantity={5}></QuantitySelector>
              <div className="ml-2 sm:ml-8">
                <button className="bg-black leading-none py-4 px-5 md:px-8 font-normal text-sm h-11 text-white transition-all hover:bg-orange">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
