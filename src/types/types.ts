import { Product } from "@/app/_bdd/json/types/jsonTypes";
import { PayloadAction } from "@reduxjs/toolkit";

export type stores = "cart" | "favorites" | "formAddToCart";

export type id = {
    id: string;
};

export type productChoosen = id & {
    product: Product;
    quantity: number;
};

export type productModification = id & {
    quantity: number;
};

export type cartTypes = productChoosen[];

export type favoritesTypes = {
    products: Product[];
    visible: boolean;
};

export type formAddToCartType = {
    product: Product;
    visible: boolean;
};

export interface actionType {
    type: string;
}

export type actionAddProduct = PayloadAction<productChoosen>;

export type actionDeleteProduct = PayloadAction<string>;

export type actionChangeQuantityProduct = PayloadAction<productModification>;

export type menuContainerType = {
    primaryMenu: string;
    children: React.ReactNode;
};

export type menuItemType = {
    primaryMenu: string;
    onClick: () => void;
};

export type subMenuItemType = {
    primaryMenu: string;
    secondaryMenu: string;
};

export type bannerInformations = {
    bannerTitle: string;
    bannerImg: string;
    bannerAlt: string;
};

export interface dataForFormAddToCart {
    alreadyInCart: boolean;
    defaultQuantity: number;
    handleQuantityOfProduct: (newQuantity: number) => void;
}

export interface dataForFormFavorites extends dataForFormAddToCart {
    product: Product;
}
