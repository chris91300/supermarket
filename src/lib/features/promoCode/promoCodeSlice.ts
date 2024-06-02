import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import reducers from "./reducer";

const promoCodeSlice = createSlice({
    name: "promoCode",
    initialState,
    reducers,
});

export const { promoCodeIsValide, resetPromoCode } = promoCodeSlice.actions;

export default promoCodeSlice.reducer;
