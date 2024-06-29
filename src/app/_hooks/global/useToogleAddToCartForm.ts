import useAddProductToCartForm from "@/app/_hooks/forFormAddToCart/useAddProductToCartForm";
import useToogleCartFormIsVisible from "@/app/_hooks/forFormAddToCart/useToogleCartFormIsVisible";
import { product } from "@/types/types";

export default function useToogleAddToCartForm(product: product) {
    const addProductToCartForm = useAddProductToCartForm(product);
    const showCartForm = useToogleCartFormIsVisible();

    return function displayAddToCartForm() {
        addProductToCartForm();
        showCartForm();
    };
}
