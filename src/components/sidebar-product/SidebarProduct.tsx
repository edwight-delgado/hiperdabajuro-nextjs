import { initialData } from "@/app/seed/seed";
import { preinit } from "react-dom";

export default function () {
  //const categories = initialData.products.find((product) => product.category);
  const categories = initialData.products
    .map((item) => item.category)
    .filter((value, index, self) => self.indexOf(value) === index);
  const tags = initialData.products.map((item) => item.tags);

  return (
    <div className="lg:w-1/4 px-4 order-last lg:order-first mt-8 lg:mt-0">
      <div>
        <div className="mb-12">
          <h4 className="font-medium text-md lg:text-lg text-dark capitalize mb-10">
            Busqueda
          </h4>
          <div className="pro-sidebar-search mb-50 mt-25">
            <form
              className="border border-solid border-gray-300"
              action="#"
              method="get"
            >
              <div className="relative">
                <input
                  className="w-full h-12 text-sm py-4 pl-4 pr-16 bg-white text-dark placeholder-current focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Search our store"
                />
                <button
                  className="w-12 h-full absolute top-0 right-0 flex items-center justify-center text-dark text-md border-l border-solid border-gray-300"
                  type="submit"
                >
                  <i className="icon-magnifier"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mb-12">
          <h4 className="font-medium text-md lg:text-lg text-dark capitalize mb-5">
            {categories ? <p>Categorias </p> : "Categorias No Disponible"}
          </h4>
          <ul>
            {categories.map((cat) => (
              <li key={cat}>
                <a
                  href={`/category/${cat}`}
                  className="mb-5 flex justify-between items-center transition-all hover:text-orange"
                >
                  <input
                    className="checkbox opacity-0 absolute"
                    id="checkbox-1"
                    type="checkbox"
                  />

                  <label
                    htmlFor="checkbox-1"
                    className="relative cursor-pointer behtmlFore:empty behtmlFore:inline-block behtmlFore:w-5 behtmlFore:h-5 behtmlFore:bg-white behtmlFore:border-2 behtmlFore:border-solid behtmlFore:border-gray-300 behtmlFore:rounded behtmlFore:mr-4 align-middle flex items-center"
                  >
                    {cat}
                  </label>

                  <div
                    className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 text-sm hover:text-white
        hover:bg-orange transition-all"
                  >
                    9
                  </div>
                </a>
              </li>
            ))}

            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
              <input
                className="checkbox opacity-0 absolute"
                id="checkbox-1"
                type="checkbox"
              />
              <label
                htmlFor="checkbox-1"
                className="relative cursor-pointer behtmlFore:empty behtmlFore:inline-block behtmlFore:w-5 behtmlFore:h-5 behtmlFore:bg-white behtmlFore:border-2 behtmlFore:border-solid behtmlFore:border-gray-300 behtmlFore:rounded behtmlFore:mr-4 align-middle flex items-center"
              >
                Backpack{" "}
              </label>
              <a
                href="#"
                className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 text-sm hover:text-white
        hover:bg-orange transition-all"
              >
                9
              </a>
            </li>
            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
              <input
                className="checkbox opacity-0 absolute"
                id="checkbox-2"
                type="checkbox"
              />
              <label
                htmlFor="checkbox-2"
                className="relative cursor-pointer behtmlFore:empty behtmlFore:inline-block behtmlFore:w-5 behtmlFore:h-5 behtmlFore:bg-white behtmlFore:border-2 behtmlFore:border-solid behtmlFore:border-gray-300 behtmlFore:rounded behtmlFore:mr-4 align-middle flex items-center"
              >
                Headphone{" "}
              </label>
              <a
                href="#"
                className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 text-sm hover:text-white
        hover:bg-orange transition-all"
              >
                8
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-md lg:text-lg text-dark capitalize mb-10">
            Etiquetas
          </h4>

          <ul className="flex flex-wrap -m-1">
            {tags.map((tag) => (
              <li className="m-1">
                <a
                  href="#"
                  className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange"
                >
                  {tag[0]}
                </a>
              </li>
            ))}

            <li className="m-1">
              <a
                href="#"
                className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange"
              >
                orange
              </a>
            </li>
            <li className="m-1">
              <a
                href="#"
                className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange"
              >
                pink
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
