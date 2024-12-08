"use client";
import { Product } from "@/interfaces/product.interface";
import { useCartStore } from "@/store";

interface Props {
  product: Product;
}

export const CartItemQuantity = ({ product }: Props) => {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const quantity = useCartStore((state) => state.qty);

  return (
    <div className="input-spinner input-group input-group-sm">
      <strong> ${(product.price * product.quantity).toFixed(2)}</strong>
      <input
        onClick={() => updateQuantity(product, "-")}
        className="button-minus btn btn-sm"
        type="button"
        value="-"
      />
      <input
        className="quantity-field form-control-sm form-input quantity-field form-control-sm form-input-sm"
        type="number"
        value={quantity}
        name="quantity"
      />
      <input
        onClick={() => updateQuantity(product, "+")}
        className="button-plus btn btn-sm"
        type="button"
        value="+"
      />
    </div>
  );
};
