import { findIndex, propEq, remove } from "ramda";
import cartInitialState from "./initialState";
import {
    actionAddProduct,
    actionChangeQuantityProduct,
    actionDeleteProduct,
    cartTypes,
} from "../../../types/types";

const reducer = {
    addProduct: (state: cartTypes, action: actionAddProduct) => {
        state.push(action.payload);
    },

    deleteProduct: (state: cartTypes, action: actionDeleteProduct) => {
        const byID = propEq(action.payload, "id");
        const index = findIndex(byID)(state);
        state.splice(index, 1);
    },

    changeProductQuantity: (
        state: cartTypes,
        action: actionChangeQuantityProduct
    ) => {
        const byID = propEq(action.payload.id, "id");
        const index = findIndex(byID)(state);
        state[index].quantity = action.payload.quantity;
    },

    empty: (state: cartTypes) => {
        state.splice(0, state.length);
    },
};

export default reducer;
