import { formAddToCartType } from "@/types/types";
import { not as inverse } from "ramda";
import { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/app/_bdd/types/databasetypes";

const reducer = {
    addProduct: (state: formAddToCartType, action: PayloadAction<Product>) => {
        return {
            ...state,
            product: action.payload,
        };
    },
    toogleIsVisible: (state: formAddToCartType) => {
        return {
            ...state,
            visible: inverse(state.visible),
        };
    },
};

export default reducer;
