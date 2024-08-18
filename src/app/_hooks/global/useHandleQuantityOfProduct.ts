import { productChoosen } from "@/types/types";
import useChangeProductChoosenQuantity from "./useChangeProductChoosenQuantity";
import useAddProductChoosenIntoCart from "./useAddProductChoosenIntoCart";

export default function useHandleQuantityOfProduct(
    productChoosen: productChoosen,
    alreadyInCart: boolean
) {
    const changeProductChoosenQuantity =
        useChangeProductChoosenQuantity(productChoosen);

    const addProductChoosenIntoCart =
        useAddProductChoosenIntoCart(productChoosen);

    const handleQuantityOfProduct = alreadyInCart
        ? changeProductChoosenQuantity
        : addProductChoosenIntoCart;

    return handleQuantityOfProduct;
}
