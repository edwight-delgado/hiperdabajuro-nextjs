import { create } from "zustand";

interface State {
  isSideMobileMenuOpen: boolean;
  openSideMobileMenu: () => void;
  closeSideMobileMenu: () => void;
}

export const useUIMobileMenuStore = create<State>()((set) => ({
  isSideMobileMenuOpen: false,
  openSideMobileMenu: () => set({ isSideMobileMenuOpen: true }),
  closeSideMobileMenu: () => set({ isSideMobileMenuOpen: false }),
}));
