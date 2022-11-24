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
        },
        // this is used to store  cart data 
        setCartItem:(state,action)=>{
            state.cartItem.push(action.payload);
            state.count++;
        }
  },
});
//Action Creators are generated for each case reducer function
export const {setCount, setCartItem} = cartSlice.actions;
export default cartSlice.reducer;
