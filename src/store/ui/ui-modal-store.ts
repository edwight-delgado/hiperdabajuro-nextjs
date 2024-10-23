import { create } from "zustand";

interface State {
  isSideModalProductOpen: boolean;
  slugState: string;
  openSideModalProduct: (slug: string) => void;
  closeSideModalProduct: () => void;
}

export const useUIModalProductStore = create<State>()((set) => ({
  isSideModalProductOpen: false,
  slugState: "",
  openSideModalProduct: (slug) =>
    set({
      isSideModalProductOpen: true,
      slugState: slug,
    }),

  closeSideModalProduct: () => set({ isSideModalProductOpen: false }),
}));
