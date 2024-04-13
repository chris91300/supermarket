import { product, productChoosen } from "@/types/types";
import { nanoid } from "@reduxjs/toolkit";

export default function initNewProductChoosen(product: product) {
    const newProductChoosen: productChoosen = {
        id: nanoid(),
        quantity: 0,
        product,
    };

    return newProductChoosen;
}
