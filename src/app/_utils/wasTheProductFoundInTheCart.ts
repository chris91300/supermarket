import { cartTypes } from "@/types/types";
import { isEmpty, not } from "ramda";
import thereAreIdenticalProductsInTheCart from "./thereAreIdenticalProductsInTheCart";
import error from "./throwError";

export default function wasTheProductFoundInTheCart(productsInCart: cartTypes) {
    thereAreIdenticalProductsInTheCart(productsInCart) &&
        error("plusieurs produits du même type ont été trouvés");

    return not(isEmpty(productsInCart));
}
