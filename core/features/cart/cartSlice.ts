import { createSlice } from "@reduxjs/toolkit";
import cartInitialState from "./initialState";
import reducer from "./reducer";

const cartSlice = createSlice({
    name: "cart",
    initialState: cartInitialState,
    reducers: reducer,
});

export const { addProduct, deleteProduct, changeProductQuantity, empty } =
    cartSlice.actions;

export default cartSlice.reducer;
