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

export interface article {
    id: string;
    name: string;
    img: string;
    packaging: string;
    price: number;
}

export interface subCategory {
    id: string;
    title_fr: string;
    img_presentation: string;
    img_title: string;
    content: article[];
}

export interface mainCategory {
    id: string;
    title_fr: string;
    img_presentation: string;
    img_title: string;
    content: subCategory[];
}

export interface dataType {
    [index: string]: mainCategory;
}

export type categoryForBuildMenu = {
    menu: string;
    subMenu: string[];
};

export interface categoryInformations extends id {
    category: string;
    img: string;
}

export type categoriesInformations = categoryInformations[];
