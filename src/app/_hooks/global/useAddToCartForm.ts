import { Product } from "@/app/_bdd/types/databasetypes";
import useAddProductToCartForm from "@/app/_hooks/forFormAddToCart/useAddProductToCartForm";
import useToogleCartFormIsVisible from "@/app/_hooks/forFormAddToCart/useToogleCartFormIsVisible";

export default function useAddToCartForm(product: Product) {
    const addProductToCartForm = useAddProductToCartForm(product);
    const showCartForm = useToogleCartFormIsVisible();

    return function displayAddToCartForm() {
        addProductToCartForm();
        showCartForm();
    };
}
