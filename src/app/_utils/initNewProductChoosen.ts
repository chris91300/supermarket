import { type Product } from "../_bdd/types/databasetypes";
import { type productChoosen } from "@/types/types";
import { nanoid } from "@reduxjs/toolkit";

export default function initNewProductChoosen(product: Product) {
    const newProductChoosen: productChoosen = {
        id: nanoid(),
        quantity: 0,
        product,
    };

    return newProductChoosen;
}
