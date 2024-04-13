import { setQuantity } from "@/app/_utils/setQuantity";
import { addProduct } from "@/lib/features/cart/cartSlice";
import { productChoosen } from "@/types/types";
import { equals, not } from "ramda";
import { useDispatch } from "react-redux";

export default function useAddProductChoosenIntoCart(
    productChoosen: productChoosen
) {
    const dispatch = useDispatch();

    return function addProductChoosenToCart(newQuantity: number) {
        if (not(equals(newQuantity, 0))) {
            const setQuantityOn = setQuantity(newQuantity);
            const newProductChoosen = setQuantityOn(productChoosen);
            dispatch(addProduct(newProductChoosen));
        }
    };
}
