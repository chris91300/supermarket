import { prop } from "ramda";
import { Category, SubCategory } from "../types/jsonTypes";

export const getPropID = prop("id");

export const getPropImgPresentation = prop("imgPresentation");

export const getPropProducts = (obj: SubCategory) => obj.products;

export const getPropSubCategories = (obj: Category) => obj.subcategories;

export const getPropTitleFR = prop("title_fr");
