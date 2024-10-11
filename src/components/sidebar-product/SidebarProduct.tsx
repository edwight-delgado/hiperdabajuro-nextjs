export default function () {
  return (
    <div className="lg:w-1/4 px-4 order-last lg:order-first mt-8 lg:mt-0">
      <div>
        <div className="mb-12">
          <h4 className="font-medium text-md lg:text-lg text-dark capitalize mb-10">
            Search
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
            Categories
          </h4>
          <ul>
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
            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
              <input
                className="checkbox opacity-0 absolute"
                id="checkbox-3"
                type="checkbox"
              />
              <label
                htmlFor="checkbox-3"
                className="relative cursor-pointer behtmlFore:empty behtmlFore:inline-block behtmlFore:w-5 behtmlFore:h-5 behtmlFore:bg-white behtmlFore:border-2 behtmlFore:border-solid behtmlFore:border-gray-300 behtmlFore:rounded behtmlFore:mr-4 align-middle flex items-center"
              >
                Drone{" "}
              </label>
              <a
                href="#"
                className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 text-sm hover:text-white
        hover:bg-orange transition-all"
              >
                7
              </a>
            </li>
            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
              <input
                className="checkbox opacity-0 absolute"
                id="checkbox-4"
                type="checkbox"
              />
              <label
                htmlFor="checkbox-4"
                className="relative cursor-pointer behtmlFore:empty behtmlFore:inline-block behtmlFore:w-5 behtmlFore:h-5 behtmlFore:bg-white behtmlFore:border-2 behtmlFore:border-solid behtmlFore:border-gray-300 behtmlFore:rounded behtmlFore:mr-4 align-middle flex items-center"
              >
                Fourth option
              </label>
              <a
                href="#"
                className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 text-sm hover:text-white
        hover:bg-orange transition-all"
              >
                7
              </a>
            </li>
            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
              <input
                className="checkbox opacity-0 absolute"
                id="checkbox-5"
                type="checkbox"
              />
              <label
                htmlFor="checkbox-5"
                className="relative cursor-pointer behtmlFore:empty behtmlFore:inline-block behtmlFore:w-5 behtmlFore:h-5 behtmlFore:bg-white behtmlFore:border-2 behtmlFore:border-solid behtmlFore:border-gray-300 behtmlFore:rounded behtmlFore:mr-4 align-middle flex items-center"
              >
                Smartwatch{" "}
              </label>
              <a
                href="#"
                className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 text-sm hover:text-white
        hover:bg-orange transition-all"
              >
                7
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <h4 className="font-medium text-md lg:text-lg text-dark capitalize mb-8">
            Vendors
          </h4>

          <ul>
            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
              <input
                className="checkbox opacity-0 absolute"
                id="checkbox-11"
                type="checkbox"
              />
              <label
                htmlFor="checkbox-11"
                className="relative cursor-pointer behtmlFore:empty behtmlFore:inline-block behtmlFore:w-5 behtmlFore:h-5 behtmlFore:bg-white behtmlFore:border-2 behtmlFore:border-solid behtmlFore:border-gray-300 behtmlFore:rounded behtmlFore:mr-4 align-middle flex items-center"
              >
                {" "}
                Vendor 1{" "}
              </label>
            </li>
            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
              <input
                className="checkbox opacity-0 absolute"
                id="checkbox-21"
                type="checkbox"
              />
              <label
                htmlFor="checkbox-21"
                className="relative cursor-pointer behtmlFore:empty behtmlFore:inline-block behtmlFore:w-5 behtmlFore:h-5 behtmlFore:bg-white behtmlFore:border-2 behtmlFore:border-solid behtmlFore:border-gray-300 behtmlFore:rounded behtmlFore:mr-4 align-middle flex items-center"
              >
                {" "}
                Vendor 10{" "}
              </label>
            </li>
            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
              <input
                className="checkbox opacity-0 absolute"
                id="checkbox-31"
                type="checkbox"
              />
              <label
                htmlFor="checkbox-31"
                className="relative cursor-pointer behtmlFore:empty behtmlFore:inline-block behtmlFore:w-5 behtmlFore:h-5 behtmlFore:bg-white behtmlFore:border-2 behtmlFore:border-solid behtmlFore:border-gray-300 behtmlFore:rounded behtmlFore:mr-4 align-middle flex items-center"
              >
                {" "}
                Vendor 11{" "}
              </label>
            </li>
            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
              <input
                className="checkbox opacity-0 absolute"
                id="checkbox-41"
                type="checkbox"
              />
              <label
                htmlFor="checkbox-41"
                className="relative cursor-pointer behtmlFore:empty behtmlFore:inline-block behtmlFore:w-5 behtmlFore:h-5 behtmlFore:bg-white behtmlFore:border-2 behtmlFore:border-solid behtmlFore:border-gray-300 behtmlFore:rounded behtmlFore:mr-4 align-middle flex items-center"
              >
                Vendor 12
              </label>
            </li>
            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
              <input
                className="checkbox opacity-0 absolute"
                id="checkbox-51"
                type="checkbox"
              />
              <label
                htmlFor="checkbox-51"
                className="relative cursor-pointer behtmlFore:empty behtmlFore:inline-block behtmlFore:w-5 behtmlFore:h-5 behtmlFore:bg-white behtmlFore:border-2 behtmlFore:border-solid behtmlFore:border-gray-300 behtmlFore:rounded behtmlFore:mr-4 align-middle flex items-center"
              >
                Vendor 2{" "}
              </label>
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <h4 className="font-medium text-md lg:text-lg text-dark capitalize mb-10">
            Color
          </h4>
          <ul>
            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
              <input
                className="checkbox opacity-0 absolute"
                id="checkbox-12"
                type="checkbox"
              />
              <label
                htmlFor="checkbox-12"
                className="relative cursor-pointer behtmlFore:empty behtmlFore:inline-block behtmlFore:w-5 behtmlFore:h-5 behtmlFore:bg-white behtmlFore:border-2 behtmlFore:border-solid behtmlFore:border-gray-300 behtmlFore:rounded behtmlFore:mr-4 align-middle flex items-center"
              >
                red{" "}
              </label>
            </li>
            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
              <input
                className="checkbox opacity-0 absolute"
                id="checkbox-22"
                type="checkbox"
              />
              <label
                htmlFor="checkbox-22"
                className="relative cursor-pointer behtmlFore:empty behtmlFore:inline-block behtmlFore:w-5 behtmlFore:h-5 behtmlFore:bg-white behtmlFore:border-2 behtmlFore:border-solid behtmlFore:border-gray-300 behtmlFore:rounded behtmlFore:mr-4 align-middle flex items-center"
              >
                green{" "}
              </label>
            </li>
            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
              <input
                className="checkbox opacity-0 absolute"
                id="checkbox-32"
                type="checkbox"
              />
              <label
                htmlFor="checkbox-32"
                className="relative cursor-pointer behtmlFore:empty behtmlFore:inline-block behtmlFore:w-5 behtmlFore:h-5 behtmlFore:bg-white behtmlFore:border-2 behtmlFore:border-solid behtmlFore:border-gray-300 behtmlFore:rounded behtmlFore:mr-4 align-middle flex items-center"
              >
                blue{" "}
              </label>
            </li>
            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
              <input
                className="checkbox opacity-0 absolute"
                id="checkbox-42"
                type="checkbox"
              />
              <label
                htmlFor="checkbox-42"
                className="relative cursor-pointer behtmlFore:empty behtmlFore:inline-block behtmlFore:w-5 behtmlFore:h-5 behtmlFore:bg-white behtmlFore:border-2 behtmlFore:border-solid behtmlFore:border-gray-300 behtmlFore:rounded behtmlFore:mr-4 align-middle flex items-center"
              >
                yellow
              </label>
            </li>
            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
              <input
                className="checkbox opacity-0 absolute"
                id="checkbox-52"
                type="checkbox"
              />
              <label
                htmlFor="checkbox-52"
                className="relative cursor-pointer behtmlFore:empty behtmlFore:inline-block behtmlFore:w-5 behtmlFore:h-5 behtmlFore:bg-white behtmlFore:border-2 behtmlFore:border-solid behtmlFore:border-gray-300 behtmlFore:rounded behtmlFore:mr-4 align-middle flex items-center"
              >
                white{" "}
              </label>
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <h4 className="font-medium text-md lg:text-lg text-dark capitalize mb-10">
            Size
          </h4>

          <ul>
            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
              <input
                className="checkbox opacity-0 absolute"
                id="checkbox-13"
                type="checkbox"
              />
              <label
                htmlFor="checkbox-13"
                className="relative cursor-pointer behtmlFore:empty behtmlFore:inline-block behtmlFore:w-5 behtmlFore:h-5 behtmlFore:bg-white behtmlFore:border-2 behtmlFore:border-solid behtmlFore:border-gray-300 behtmlFore:rounded behtmlFore:mr-4 align-middle flex items-center"
              >
                s
              </label>
            </li>
            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
              <input
                className="checkbox opacity-0 absolute"
                id="checkbox-23"
                type="checkbox"
              />
              <label
                htmlFor="checkbox-23"
                className="relative cursor-pointer behtmlFore:empty behtmlFore:inline-block behtmlFore:w-5 behtmlFore:h-5 behtmlFore:bg-white behtmlFore:border-2 behtmlFore:border-solid behtmlFore:border-gray-300 behtmlFore:rounded behtmlFore:mr-4 align-middle flex items-center"
              >
                m
              </label>
            </li>
            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
              <input
                className="checkbox opacity-0 absolute"
                id="checkbox-33"
                type="checkbox"
              />
              <label
                htmlFor="checkbox-33"
                className="relative cursor-pointer behtmlFore:empty behtmlFore:inline-block behtmlFore:w-5 behtmlFore:h-5 behtmlFore:bg-white behtmlFore:border-2 behtmlFore:border-solid behtmlFore:border-gray-300 behtmlFore:rounded behtmlFore:mr-4 align-middle flex items-center"
              >
                l
              </label>
            </li>
            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
              <input
                className="checkbox opacity-0 absolute"
                id="checkbox-43"
                type="checkbox"
              />
              <label
                htmlFor="checkbox-43"
                className="relative cursor-pointer behtmlFore:empty behtmlFore:inline-block behtmlFore:w-5 behtmlFore:h-5 behtmlFore:bg-white behtmlFore:border-2 behtmlFore:border-solid behtmlFore:border-gray-300 behtmlFore:rounded behtmlFore:mr-4 align-middle flex items-center"
              >
                xl
              </label>
            </li>
            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
              <input
                className="checkbox opacity-0 absolute"
                id="checkbox-53"
                type="checkbox"
              />
              <label
                htmlFor="checkbox-53"
                className="relative cursor-pointer behtmlFore:empty behtmlFore:inline-block behtmlFore:w-5 behtmlFore:h-5 behtmlFore:bg-white behtmlFore:border-2 behtmlFore:border-solid behtmlFore:border-gray-300 behtmlFore:rounded behtmlFore:mr-4 align-middle flex items-center"
              >
                xxl
              </label>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-md lg:text-lg text-dark capitalize mb-10">
            Tags
          </h4>

          <ul className="flex flex-wrap -m-1">
            <li className="m-1">
              <a
                href="#"
                className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange"
              >
                black
              </a>
            </li>
            <li className="m-1">
              <a
                href="#"
                className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange"
              >
                blue
              </a>
            </li>
            <li className="m-1">
              <a
                href="#"
                className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange"
              >
                fiber
              </a>
            </li>
            <li className="m-1">
              <a
                href="#"
                className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange"
              >
                gold
              </a>
            </li>
            <li className="m-1">
              <a
                href="#"
                className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange"
              >
                gray
              </a>
            </li>
            <li className="m-1">
              <a
                href="#"
                className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange"
              >
                green
              </a>
            </li>
            <li className="m-1">
              <a
                href="#"
                className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange"
              >
                l
              </a>
            </li>
            <li className="m-1">
              <a
                href="#"
                className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange"
              >
                leather
              </a>
            </li>
            <li className="m-1">
              <a
                href="#"
                className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange"
              >
                m
              </a>
            </li>
            <li className="m-1">
              <a
                href="#"
                className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange"
              >
                magenta
              </a>
            </li>
            <li className="m-1">
              <a
                href="#"
                className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange"
              >
                maroon
              </a>
            </li>
            <li className="m-1">
              <a
                href="#"
                className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange"
              >
                metal
              </a>
            </li>
            <li className="m-1">
              <a
                href="#"
                className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange"
              >
                navy
              </a>
            </li>
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
