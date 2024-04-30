import { PayloadAction } from "@reduxjs/toolkit";

export type stores = "cart" | "favorites" | "formAddToCart";

export interface id {
    id: string;
}
export interface product extends id {
    name: string;
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

export type favoritesTypes = {
    products: product[];
    visible: boolean;
};

export type formAddToCartType = {
    product: product;
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

export interface article {
    id: string;
    name: string;
    img: string;
    packaging: string;
    price: number;
}

export interface subCategory {
    id: string;
    name: string;
    urlName: string;
    title_fr: string;
    imgPresentation: string;
    imgBanner: string;
    content: article[];
}

export interface mainCategory {
    id: string;
    title_fr: string;
    imgPresentation: string;
    imgBanner: string;
    content: subCategory[];
}

export type dataIndex =
    | "fruits et legumes"
    | "pains et viennoiseries"
    | "viandes et poissons"
    | "frais";

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

export type bannerInformations = {
    bannerTitle: string;
    bannerImg: string;
    bannerAlt: string;
};

export interface dataForFormAddToCart {
    alreadyInCart: boolean;
    defaultQuantity: number;
    submitFunction: (newQuantity: number) => void;
}

export interface dataForFormFavorites extends dataForFormAddToCart {
    product: product;
}
