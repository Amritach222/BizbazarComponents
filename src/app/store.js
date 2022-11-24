import { configureStore } from "@reduxjs/toolkit";
import tabSlice from "../feature/productCatalogue/tabSlice";
import ProductSlice from "../feature/productCatalogue/productSlice";
import cartSlice from "../feature/productCatalogue/Cart/cartSlice";
export const store = configureStore({
    reducer: {
      'tab_changer':tabSlice,
      'product':ProductSlice,
      'cart':cartSlice
    },
})
