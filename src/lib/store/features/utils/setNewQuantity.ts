import { lensProp, set } from "ramda";
import { productChoosen } from "@/types/types";

export default function setNewQuantity(quantity: number) {
    const lensQuantity = lensProp<productChoosen>("quantity");
    return set(lensQuantity, quantity);
}
