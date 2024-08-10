import { formAddToCartType } from "@/types/types";
import { not as inverse } from "ramda";
import { PayloadAction } from "@reduxjs/toolkit";
import { product } from "@/types/types";

const reducer = {
    addProduct: (state: formAddToCartType, action: PayloadAction<product>) => {
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
