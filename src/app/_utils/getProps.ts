import { mainCategory, subCategory } from "@/types/types";
import { prop } from "ramda";

export const getPropCart = prop("cart");

export const getPropFavorites = prop("favorites");

export const getPropFormAddToCart = prop("formAddToCart");

export const getPropOrder = prop("order");

export const getPropPromoCode = prop("promoCode");

export const getPropSubCategories = (obj: mainCategory) => obj.content;

export const getPropProducts = (obj: subCategory) => obj.content;

export const getPropTitleFR = prop("title_fr");

export const getPropID = prop("id");

export const getPropImgPresentation = prop("imgPresentation");
