import useChangeQuantityOfProductChoosen from "@/app/_hooks/forCart/useChangeQuantityOfProductChoosen";
import useDeleteProductFromCart from "@/app/_hooks/forCart/useDeleteProductFromCart";
import { equalsZero } from "@/app/_utils/equalsZero";
import { productChoosen } from "@/types/types";
import { equals, not } from "ramda";

export default function useChangeProductChoosenQuantity(
    productChoosen: productChoosen
) {
    const deleteProductFromCart = useDeleteProductFromCart(productChoosen);
    const changeQuantityOfProductChoosen =
        useChangeQuantityOfProductChoosen(productChoosen);
    const initialQuantity = productChoosen.quantity;

    return function changeProductChoosenQuantity(newQuantity: number) {
        if (equalsZero(newQuantity)) {
            deleteProductFromCart();
        } else {
            if (not(equals(initialQuantity, newQuantity))) {
                changeQuantityOfProductChoosen(newQuantity);
            }
        }
    };
}
