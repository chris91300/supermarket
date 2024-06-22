import { useAddProductToCart } from "@/app/_hooks/hooks";
import { setQuantity } from "@/app/_utils/setQuantity";
import { productChoosen } from "@/types/types";
import { equals, not } from "ramda";

export default function useAddProductChoosenIntoCart(
    productChoosen: productChoosen
) {
    const addProductToCart = useAddProductToCart();

    return function addProductChoosenToCart(newQuantity: number) {
        if (not(equals(newQuantity, 0))) {
            const setQuantityOn = setQuantity(newQuantity);
            const newProductChoosen = setQuantityOn(productChoosen);
            addProductToCart(newProductChoosen);
        }
    };
}
