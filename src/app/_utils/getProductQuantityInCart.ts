import { getQuantity } from "@/app/_utils/getQuantity";
import { productChoosen } from "@/types/types";
import { isEmpty, not } from "ramda";

export default function getProductQuantityInCart(
    productsFound: productChoosen[]
) {
    const ProductsFoundIsNotEmpty = not(isEmpty(productsFound));
    const quantity = ProductsFoundIsNotEmpty
        ? getQuantity(productsFound[0])
        : 0;

    return quantity;
}
