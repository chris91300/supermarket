import { productChoosen } from "@/types/types";
import useChangeProductChoosenQuantity from "./useChangeProductChoosenQuantity";
import useAddProductChoosenIntoCart from "./useAddProductChoosenIntoCart";

export default function useSubmitFunction(
    productChoosen: productChoosen,
    alreadyInCart: boolean
) {
    const changeProductChoosenQuantity =
        useChangeProductChoosenQuantity(productChoosen);

    const addProductChoosenIntoCart =
        useAddProductChoosenIntoCart(productChoosen);

    const submitFunction = alreadyInCart
        ? changeProductChoosenQuantity
        : addProductChoosenIntoCart;

    return submitFunction;
}
