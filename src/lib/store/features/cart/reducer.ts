import { findIndex, remove, over } from "ramda";
import {
    actionAddProduct,
    actionChangeQuantityProduct,
    actionDeleteProduct,
    cartTypes,
} from "@/types/types";
import getProductToModify from "../utils/getProductToModify";
import setNewQuantity from "../utils/setNewQuantity";
import idEqual from "../utils/idEqual";
import productChoosenIsNotFound from "../utils/productChoosenIsNotFound";

const reducer = {
    addProduct: (state: cartTypes, action: actionAddProduct) => {
        const newState = [...state, action.payload];
        return newState;
    },

    deleteProduct: (state: cartTypes, action: actionDeleteProduct) => {
        const byID = idEqual(action.payload);
        const index = findIndex(byID)(state);
        if (productChoosenIsNotFound(index)) {
            return state;
        }
        const newState = remove(index, 1)(state);
        return newState;
    },

    changeProductQuantity: (
        state: cartTypes,
        action: actionChangeQuantityProduct
    ) => {
        try {
            const { id, quantity } = action.payload;
            const productToModify = getProductToModify(id, state);
            const newQuantity = setNewQuantity(quantity);

            return over(productToModify, newQuantity, state);
        } catch (err) {
            return state;
        }
    },

    empty: () => {
        return [];
    },
};

export default reducer;
