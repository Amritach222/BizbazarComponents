import { createSlice } from "@reduxjs/toolkit";
const initialState={
    tab:'spec',
}
// creating different tab states 
const  catalogue_tabs={
    'spec':'spec',
    'review':'review',
    'shipping':'shipping',
    'seller':'seller'
}
export const tabSlice=createSlice({
    name:'tab_changer',
    initialState,
    // Creating reducer to change catalogue tab
    reducers:{
        changeTab:(state,action)=>{
            state.tab=catalogue_tabs[action.payload];

        }
    }
})
//Action Creators are generated for each case reducer function
export const {changeTab} =tabSlice.actions

export default tabSlice.reducer