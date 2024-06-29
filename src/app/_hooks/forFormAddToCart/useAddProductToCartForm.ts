import { product } from "@/types/types";
import { addProduct } from "@/lib/features/formAddToCart/formAddToCartSlice";
import { useAppDispatch } from "../forUsingStore/hooks";

export default function useAddProductToCartForm(product: product) {
    const dispatch = useAppDispatch();

    return function AddProductToCartForm() {
        dispatch(addProduct(product));
    };
}
