//import { initialData } from "@/app/seed/seed";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
  id: number;
  description: string;
  images: string[];
  inStock: number;
  quantity: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
  brand: string;
}

interface State {
  cart: Product[];
  qty: number;
  totalItems: number;
  totalPrice: number;
}

interface Actions {
  addToCart: (Item: Product) => void;
  updateQuantity: (Item: Product, qty: number) => void;
  removeFromCart: (Item: Product) => void;
}

const INITIAL_STATE: State = {
  cart: [],
  qty: 0,
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create(
  persist<State & Actions>(
    (set, get) => ({
      cart: INITIAL_STATE.cart,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,
      qty: INITIAL_STATE.qty,
      addToCart: (product: Product) => {
        const cart = get().cart;
        const cartItem = cart.find((item) => item.id === product.id);

        const quantity = product.quantity;

        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: (item.quantity as number) + quantity }
              : item
          );
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }));
        } else {
          const updatedCart = [...cart, { ...product, quantity: 1 }];

          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }));
        }
      },
      updateQuantity(product: Product, qty: number) {
        //const cart = get().cart;
        const cartItem = product.id;

        const quantity = product.quantity + qty;
        if (cartItem) {
          if (quantity >= 1) {
            //const updatedCart = [...cart, { ...product, quantity: 1 }];
            set((state) => ({
              //cart: updatedCart,

              totalPrice: state.totalPrice + product.price * quantity,
            }));
          }
        }
      },
      removeFromCart: (product: Product) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== product.id),
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - product.price,
        }));
      },
    }),
    {
      name: "cart-storage",
      // getStorage: () => sessionStorage, (optional) by default the 'localStorage' is used
      // version: 1, // State version number,
      // migrate: (persistedState: unknown, version: number) => {
      // 	if (version === 0) {
      // 		// if the stored value is in version 0, we rename the field to the new name
      // 		persistedState.totalProducts = persistedState.totalItems
      // 		delete persistedState.totalItems
      // 	}

      // 	return persistedState as State & Actions
      // },
    }
  )
);
