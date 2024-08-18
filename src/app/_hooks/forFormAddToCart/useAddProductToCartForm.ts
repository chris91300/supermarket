import { addProduct } from "@/lib/store/features/formAddToCart/formAddToCartSlice";
import { useAppDispatch } from "../forUsingStore/hooks";
import { Product } from "@/app/_bdd/types/databasetypes";

export default function useAddProductToCartForm(product: Product) {
    const dispatch = useAppDispatch();

    return function AddProductToCartForm() {
        dispatch(addProduct(product));
    };
}
