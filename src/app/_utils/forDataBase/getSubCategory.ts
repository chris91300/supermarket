import { mainCategory, subCategory } from "@/types/types";
import { pipe, curry } from "ramda";
import { getPropSubCategories } from "../getProps";
import checkIfSubCategoryIsFound from "./chekIfSubCategoryIsFound";
import removeTypeVoidIfIsFound from "./removeTypeVoidIfIsFound";
import findSubCategory from "./findSubCategory";

const findSubCategoryCurried = curry(findSubCategory);

export default function getSubCategory(
    subCategory: string,
    category: mainCategory
) {
    const getSubcatData = pipe(
        getPropSubCategories,
        findSubCategoryCurried(subCategory),
        checkIfSubCategoryIsFound,
        removeTypeVoidIfIsFound<subCategory>
    )(category);

    return getSubcatData;
}
