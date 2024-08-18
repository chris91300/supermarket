import useAddProductToCart from "@/app/_hooks/forCart/useAddProductToCart";
import { equalsZero } from "@/app/_utils/equalsZero";
import { setToQuantity } from "@/app/_utils/setToQuantity";
import { productChoosen } from "@/types/types";
import { not } from "ramda";

export default function useAddProductChoosenIntoCart(
    productChoosen: productChoosen
) {
    const addProductToCart = useAddProductToCart();

    return function addProductChoosenToCart(newQuantity: number) {
        if (not(equalsZero(newQuantity))) {
            const setQuantityOn = setToQuantity(newQuantity);
            const newProductChoosen = setQuantityOn(productChoosen);
            addProductToCart(newProductChoosen);
        }
    };
}
