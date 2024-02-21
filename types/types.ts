import { PayloadAction } from "@reduxjs/toolkit";

export type product = {
    id: string;
    img: string;
    packaging: string;
    price: number;
};

export type productChoosen = {
    id: string;
    product: product;
    quantity: number;
};

export type cartTypes = productChoosen[];

export type productModification = {
    id: string;
    quantity: number;
};

export interface actionType {
    type: string;
}

export type actionAddProduct = PayloadAction<productChoosen>;
/*extends actionType {
    payload: productChoosen;
}*/

export type actionDeleteProduct = PayloadAction<string>;
/*export interface actionDeleteProduct extends actionType {
    payload: string;
}*/

export type actionChangeQuantityProduct = PayloadAction<productModification>;
/*export interface actionChangeQuantityProduct extends actionType {
    payload: productModification;
}*/
