import { lensIndex } from "ramda";
import { cartTypes, productChoosen } from "@/types/types";
import findIndexOfProductChoosen from "./findIndexOfProductChoosen";
import productChoosenIsNotFound from "./productChoosenIsNotFound";

export default function getProductToModify(id: string, list: cartTypes) {
    const index = findIndexOfProductChoosen(id, list);
    if (productChoosenIsNotFound(index)) {
        throw new Error("product not found");
    }
    const productToModify = lensIndex<productChoosen>(index);
    return productToModify;
}
