import { Product } from "@/interfaces/product.interface";

export default function TotalProductsCart(cart: Product[]) {
  let total = 0;
  if (cart) {
    total = cart.reduce(
      (acc, product) => acc + product.price * (product.quantity as number),
      0
    );
  }
  return total;
}
