//import arrayIsNotEmpty from "@/app/_utils/arrayIsNotEmpty";
import { getQuantity } from "@/app/_utils/getQuantity";
import { productChoosen } from "@/types/types";
import { isEmpty, length, not } from "ramda";

export default function getProductQuantityInCart(
    productsFound: productChoosen[]
) {
    //const totalProductsFound = length(productsFound);
    const ProductsFoundIsNotEmpty = not(isEmpty(productsFound));
    const quantity = ProductsFoundIsNotEmpty
        ? getQuantity(productsFound[0])
        : 0;

    return quantity;
}
