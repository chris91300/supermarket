import { find, propEq } from "ramda";
import { SubCategory } from "../types/jsonTypes";

export default function findSubCategory(
    subCategory: string,
    subCategories: SubCategory[]
) {
    const subCategoryChoosenByUser = propEq(subCategory, "urlName");
    return find<SubCategory>(subCategoryChoosenByUser)(subCategories);
}
