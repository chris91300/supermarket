import { cartTypes } from "@/types/types";
import { gt } from "ramda";

export default function thereAreIdenticalProductsInTheCart(
    productsInCart: cartTypes
) {
    return gt(productsInCart.length, 1);
}
