import { Category } from "@/interfaces/category.interface";

import { CategoryItem } from "./CategoryItem";

interface Props {
  categorys: Category[];
}

export const CategoryGrid = ({ categorys }: Props) => {
  return (
    <section className="my-lg-14 my-8">
      <div className="container">
        <div className="row">
          <div className="mb-6 col-12">
            <h3 className="mb-0">Categorias</h3>
          </div>
        </div>
        <div className="g-4 row row-cols-lg-5 row-cols-md-3 row-cols-2">
          {categorys.map((category) => (
            <CategoryItem key={category.id} category={category}></CategoryItem>
          ))}
        </div>
      </div>
    </section>
  );
};
