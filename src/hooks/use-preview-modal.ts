import { Product } from "@/types";
import { create } from "zustand";

interface PreviewModalStore {
    isOpen: boolean;
    data?: Product
    open: (data: Product) => void;
    close: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
    isOpen: false,
    data: undefined,
    open: (data: Product) => set({ isOpen: true, data }),
    close: () => set({ isOpen: false }),
}))

export default usePreviewModal;