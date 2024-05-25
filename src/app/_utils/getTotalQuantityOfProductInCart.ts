import { cartTypes } from "@/types/types";
import getTotalQuantityIn from "./getTotalQuantityIn";

export default function getTotalQuantityOfProductInCart(cart: cartTypes) {
    return getTotalQuantityIn(cart);
}
