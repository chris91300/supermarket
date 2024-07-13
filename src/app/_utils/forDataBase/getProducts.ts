import { getPropProducts } from "../getProps";
import getSubCategory from "./getSubCategory";
import { curry, pipe } from "ramda";
import getCategory from "./getCategory";

const getSubCategoryCurried = curry(getSubCategory);

export default function getProducts(category: string, subCategory: string) {
    const products = pipe(
        getCategory,
        getSubCategoryCurried(subCategory),
        getPropProducts
    )(category);

    return products;
}
