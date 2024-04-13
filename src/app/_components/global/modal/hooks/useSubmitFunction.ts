import { productChoosen } from "@/types/types";
import useChangeProductChoosenQuantity from "./useChangeProductChoosenQuantity";
import useAddProductChoosenIntoCart from "./useAddProductChoosenIntoCart";

export default function useSubmitFunction(
    productChoosen: productChoosen,
    alreadyInCart: boolean
) {
    if (alreadyInCart) {
        return useChangeProductChoosenQuantity(productChoosen);
    } else {
        return useAddProductChoosenIntoCart(productChoosen);
    }
}
