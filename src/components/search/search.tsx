/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term: string) => {
    //console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <form className="">
      <div className="input-group">
        <input
          placeholder="Busqueda de Producto"
          type="text"
          className="w-45 form-control"
          onChange={(e: { target: { value: any } }) =>
            handleSearch(e.target.value)
          }
          defaultValue={searchParams.get("query")?.toString()}
        />
        <button
          onClick={(e: any) => {
            handleSearch(e.target.value);
          }}
          type="submit"
          className="input-group-text bg-transparent input-group-text bg-transparent-primary"
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
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
    </form>
  );
}
