import { mainCategory } from "@/types/types";
import { pipe, curry } from "ramda";
import { getPropSubCategories } from "../getProps";
import findSubCategory from "./findSubCategory";
import checkIfSubCategoryExist from "./checkIfSubCategoryExist";

const findSubCategoryCurried = curry(findSubCategory);

export default function getSubCategory(
    subCategory: string,
    category: mainCategory
) {
    const getSubcatData = pipe(
        getPropSubCategories,
        findSubCategoryCurried(subCategory),
        checkIfSubCategoryExist
    )(category);

    return getSubcatData;
}
