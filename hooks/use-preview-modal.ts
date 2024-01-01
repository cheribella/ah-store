import { create } from "zustand";

import { Product } from "@/types";

interface PreviewModalStore {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  data: undefined,
  isOpen: false,
  onOpen: (data: Product) => set({ data: data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
