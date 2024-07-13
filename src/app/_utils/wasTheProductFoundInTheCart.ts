import { cartTypes } from "@/types/types";
import { not } from "ramda";
import arrayIsEmpty from "./arrayIsEmpty";
import thereAreIdenticalProductsInTheCart from "./thereAreIdenticalProductsInTheCart";
import error from "./throwError";

export default function wasTheProductFoundInTheCart(productsInCart: cartTypes) {
    const { length } = productsInCart;
    thereAreIdenticalProductsInTheCart(productsInCart) &&
        error("plusieurs produits du même type ont été trouvés");

    return not(arrayIsEmpty(length));
}
