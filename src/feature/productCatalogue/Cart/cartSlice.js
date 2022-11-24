import { createSlice } from "@reduxjs/toolkit";
import data from "../../../data";
const initialState = {
  count:0,
  cartItem:[]
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
        setCount:(state, action)=>{
            // api call to update cart count from here 
            state.count++;
        }
  },
});
//Action Creators are generated for each case reducer function
export const {setCount} = cartSlice.actions;
export default cartSlice.reducer;
