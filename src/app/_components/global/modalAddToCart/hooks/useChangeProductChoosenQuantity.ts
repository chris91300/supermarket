import {
    useChangeQuantityOfProductChoosen,
    useDeleteProductFromCart,
} from "@/app/_hooks/hooks";
//import { getID } from "@/app/_utils/getID";
//import { setID } from "@/app/_utils/setID";
//import { setQuantity } from "@/app/_utils/setQuantity";
import { productChoosen } from "@/types/types";
import { equals } from "ramda";

export default function useChangeProductChoosenQuantity(
    productChoosen: productChoosen
) {
    const deleteProductFromCart = useDeleteProductFromCart(productChoosen);
    const changeQuantityOfProductChoosen =
        useChangeQuantityOfProductChoosen(productChoosen);
    const initialQuantity = productChoosen.quantity;

    return function changeProductChoosenQuantity(newQuantity: number) {
        if (equals(newQuantity, 0)) {
            deleteProductFromCart();
        } else {
            if (initialQuantity != newQuantity) {
                changeQuantityOfProductChoosen(newQuantity);
            }
        }
    };
}
