import { getID } from "@/app/_utils/getID";
import { setID } from "@/app/_utils/setID";
import { setQuantity } from "@/app/_utils/setQuantity";
import {
    changeProductQuantity,
    deleteProduct,
} from "@/lib/features/cart/cartSlice";
import { productChoosen } from "@/types/types";
import { equals, pipe } from "ramda";
import { useDispatch } from "react-redux";

export default function useChangeProductChoosenQuantity(
    productChoosen: productChoosen
) {
    const dispatch = useDispatch();
    const id = getID(productChoosen);

    return function changeProductChoosenQuantity(newQuantity: number) {
        if (equals(newQuantity, 0)) {
            dispatch(deleteProduct(id));
        } else {
            const setIdAndQuantityOn = pipe(
                setID(id),
                setQuantity(newQuantity)
            );
            const newProductChoosen = setIdAndQuantityOn(productChoosen);
            dispatch(changeProductQuantity(newProductChoosen));
        }
    };
}
