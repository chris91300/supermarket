import { productChoosen } from "@/types/types";
import { getQuantity } from "./getQuantity";

export default function byQuantity(
    acc: number,
    productChoosen: productChoosen
) {
    return acc + getQuantity(productChoosen);
}
