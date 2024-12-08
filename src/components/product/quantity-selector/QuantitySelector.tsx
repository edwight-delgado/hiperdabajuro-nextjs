"use client";
import { initialData } from "@/app/seed/seed";
import { Product } from "@/interfaces/product.interface";
import { useState } from "react";

interface Props {
  quantity: number;
  id: number;
  onGetQuantity: (quantity: number, id: number) => void;
  //onGetProductQuantity: (onGetQuantity: any, Product: Product) => void;
}

export const QuantitySelector = ({ quantity, onGetQuantity, id }: Props) => {
  const [count, setCount] = useState(quantity);
  const onQuantityChange = (value: number) => {
    if (count + value < 1) {
      return;
    }
    const prod = initialData.products.filter((item) => item.id == id);
    setCount(count + value);
    onGetQuantity(count + value, prod[0].id);
  };
  return (
    <div className="input-spinner input-group input-group-sm">
      <input
        onClick={() => onQuantityChange(-1)}
        className="button-minus btn btn-sm"
        type="button"
        value="-"
      />
      <input
        className="quantity-field form-control-sm form-input quantity-field form-control-sm form-input-sm"
        type="number"
        value={count}
        name="quantity"
      />
      <input
        onClick={() => onQuantityChange(+1)}
        className="button-plus btn btn-sm"
        type="button"
        value="+"
      />
    </div>
  );
};
