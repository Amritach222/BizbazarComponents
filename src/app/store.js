import { configureStore } from "@reduxjs/toolkit";
import tabSlice from "../feature/productCatalogue/tabSlice";
import ProductSlice from "../feature/productCatalogue/productSlice";
export const store = configureStore({
    reducer: {
      'tab_changer':tabSlice,
      'product':ProductSlice
    },
})
