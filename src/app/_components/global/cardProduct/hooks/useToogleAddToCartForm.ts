import { useAppDispatch } from "@/app/_hooks/hooks";
import {
    addProduct,
    toogleIsVisible,
} from "@/lib/features/formAddToCart/formAddToCartSlice";
import { product } from "@/types/types";

export default function useToogleAddToCartForm() {
    const dispatch = useAppDispatch();

    return function displayAddToCartForm(product: product) {
        dispatch(addProduct(product));
        dispatch(toogleIsVisible());
    };
}
