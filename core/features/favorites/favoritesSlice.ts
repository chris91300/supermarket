import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import reducers from "./reducer";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers,
});

export const { addProduct, deleteProduct, empty } = favoritesSlice.actions;

export default favoritesSlice.reducer;
