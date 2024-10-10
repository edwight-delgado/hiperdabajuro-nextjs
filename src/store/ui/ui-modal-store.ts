import { create } from "zustand";

interface State {
  isSideModalProductOpen: boolean;
  openSideModalProduct: () => void;
  closeSideModalProduct: () => void;
}

export const useUIModalProductStore = create<State>()((set) => ({
  isSideModalProductOpen: false,
  openSideModalProduct: () => set({ isSideModalProductOpen: true }),
  closeSideModalProduct: () => set({ isSideModalProductOpen: false }),
}));
