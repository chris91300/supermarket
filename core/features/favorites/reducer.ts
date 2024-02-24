import { PayloadAction } from "@reduxjs/toolkit";
import { favoritesTypes, product } from "../../../types/types";
import { remove, findIndex, includes } from "ramda";
import idEqual from "../utils/idEqual";

const reducer = {
    addProduct: (state: favoritesTypes, action: PayloadAction<product>) => {
        const product = action.payload;
        if (includes(product, state)) {
            return state;
        }
        return [...state, action.payload];
    },

    deleteProduct: (state: favoritesTypes, action: PayloadAction<string>) => {
        const byID = idEqual(action.payload);
        const index = findIndex(byID)(state);
        if (index === -1) {
            return state;
        }
        const newState = remove(index, 1)(state);
        return newState;
    },

    empty: () => {
        return [];
    },
};

export default reducer;
