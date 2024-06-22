import {
    useAddProductToCartForm,
    useToogleCartFormIsVisible,
} from "@/app/_hooks/hooks";
import { product } from "@/types/types";

export default function useToogleAddToCartForm(product: product) {
    const addProductToCartForm = useAddProductToCartForm(product);
    const showCartForm = useToogleCartFormIsVisible();
    return function displayAddToCartForm() {
        addProductToCartForm();
        showCartForm();
    };
}
