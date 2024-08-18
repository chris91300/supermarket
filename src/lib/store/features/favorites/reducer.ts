import { PayloadAction } from "@reduxjs/toolkit";
import { favoritesTypes } from "@/types/types";
import {
    remove,
    findIndex,
    includes,
    append,
    not as inverse,
    propEq,
} from "ramda";
import { Product } from "@/app/_bdd/types/databasetypes";

const reducer = {
    addProduct: (state: favoritesTypes, action: PayloadAction<Product>) => {
        const product = action.payload;
        if (includes(product, state.products)) {
            return state;
        }

        const products = append(product, state.products);
        return { ...state, products };
    },

    deleteProduct: (state: favoritesTypes, action: PayloadAction<string>) => {
        const byID = propEq(action.payload, "id");
        const index = findIndex(byID)(state.products);
        if (index === -1) {
            return state;
        }
        const products = remove(index, 1)(state.products);
        return { ...state, products };
    },

    toogleIsVisible: (state: favoritesTypes) => {
        return {
            ...state,
            visible: inverse(state.visible),
        };
    },

    empty: (state: favoritesTypes) => {
        return { ...state, products: [] };
    },
};

export default reducer;
