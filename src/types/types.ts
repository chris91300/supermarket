import { PayloadAction } from "@reduxjs/toolkit";

export type stores = "cart" | "favorites" | "formAddToCart";

export interface id {
    id: string;
}
export interface product extends id {
    img: string;
    packaging: string;
    price: number;
}

export interface productChoosen extends id {
    product: product;
    quantity: number;
}

export interface productModification extends id {
    quantity: number;
}

export type cartTypes = productChoosen[];

export type favoritesTypes = product[];

export interface actionType {
    type: string;
}

export type actionAddProduct = PayloadAction<productChoosen>;

export type actionDeleteProduct = PayloadAction<string>;

export type actionChangeQuantityProduct = PayloadAction<productModification>;
