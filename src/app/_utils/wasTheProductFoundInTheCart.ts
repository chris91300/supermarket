import { cartTypes } from "@/types/types";
import { gt, not } from "ramda";
import arrayIsEmpty from "./arrayIsEmpty";

export default function wasTheProductFoundInTheCart(productsInCart: cartTypes) {
    const { length } = productsInCart;
    if (gt(length, 1)) {
        throw new Error("plusieurs produits du même type ont été trouvés");
    }

    return not(arrayIsEmpty(length));
}
