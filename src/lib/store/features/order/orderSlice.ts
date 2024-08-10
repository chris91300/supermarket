import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import reducers from "./reducer";

const orderSlice = createSlice({
    name: "promoCode",
    initialState,
    reducers,
});

export const { orderIsValide, resetOrder } = orderSlice.actions;

export default orderSlice.reducer;
