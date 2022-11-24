import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";
// To change the product image position we write some positions to change
const imagePositions = {
  left: "flex-row",
  right: "flex-row-reverse",
  top: "flex-column align-items-center",
};
// to change the product item position
const product_item_position = {
  left: "flex-row-reverse",
  right: "flex-row",
  top: "flex-column-reverse align-items-center",
  bottom: "flex-column align-items-center",
};
const initialState = {
  position: imagePositions.left,
  available_color: data.catalogue.product[0].product_color,
  color_items: data.catalogue.product[0].product_color[0].images,
  item_position:product_item_position.left,
  rating:1,
  review: ""
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  // Creating reducer to change image position
  reducers: {
    changePosition: (state, action) => {
      state.position = imagePositions[action.payload];
      // Api calls from here to change the position of an image
    },
    setAvailableColor: (state, action) => {
      // change product available color from here
    },
    setColorItems: (state, action) => {
      state.color_items =
        data.catalogue.product.product_color[action.payload].images;
    },
    changeProductItemsPosition: (state, action) => {
      // Call this method to change the position of  product item
      state.item_position = product_item_position[action.payload];
    },
    setRating: (state, action) => {
      // call this  method to change the product rating
      state.rating = action.payload;
    },
    writeReview: (state, action) => {
      //  call this method to write review
      state.review = action.payload;
      return "success";
    },
  },
});
//Action Creators are generated for each case reducer function
export const {
  changePosition,
  setColorItems,
  changeProductItemsPosition,
  setAvailableColor,
  setRating,
  writeReview,
} = productSlice.actions;
export default productSlice.reducer;
