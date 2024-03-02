import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import reducers from "./reducer";

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers,
});

export const { addProduct, deleteProduct, changeProductQuantity, empty } =
    cartSlice.actions;

export default cartSlice.reducer;
