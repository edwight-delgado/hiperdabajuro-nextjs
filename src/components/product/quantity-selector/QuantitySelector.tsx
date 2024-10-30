"use client";
import { useState } from "react";

interface Props {
  quantity: number;
  onGetQuantity: (quantity: number) => void;
}

export const QuantitySelector = ({ quantity, onGetQuantity }: Props) => {
  const [count, setCount] = useState(quantity);
  const onQuantityChange = (value: number) => {
    if (count + value < 1) {
      return;
    }
    setCount(count + value);
    onGetQuantity(count + value);
  };
  return (
    <div className="flex count border border-solid border-gray-300 p-2 h-11">
      <button
        onClick={() => onQuantityChange(-1)}
        className="decrement flex-auto w-5 leading-none"
        aria-label="button"
      >
        -
      </button>
      <input
        type="number"
        min="1"
        max="100"
        step="1"
        value={count}
        className="quantity__input flex-auto w-8 text-center focus:outline-none input-appearance-none"
      />
      <button
        onClick={() => onQuantityChange(+1)}
        className="increment flex-auto w-5 leading-none"
        aria-label="button"
      >
        +
      </button>
    </div>
  );
};
