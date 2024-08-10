import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import reducers from "./reducer";

const formAddToCartSlice = createSlice({
    name: "formAddToCart",
    initialState,
    reducers,
});

export const { addProduct, toogleIsVisible } = formAddToCartSlice.actions;

export default formAddToCartSlice.reducer;
