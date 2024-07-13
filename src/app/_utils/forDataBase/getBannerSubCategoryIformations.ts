import { pipe, curry } from "ramda";
import buildInformationsForBannerCategory from "./buildInformationsForBannerCategory";
import getSubCategory from "./getSubCategory";
import getCategory from "./getCategory";

const getSubCategoryCurried = curry(getSubCategory);

export default function getBannerSubCategoryInformations(
    category: string,
    subCategory: string
) {
    return pipe(
        getCategory,
        getSubCategoryCurried(subCategory),
        buildInformationsForBannerCategory
    )(category);
}
