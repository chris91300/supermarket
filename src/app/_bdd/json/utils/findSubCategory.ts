import { subCategory } from "@/types/types";
import { find, propEq } from "ramda";

export default function findSubCategory(
    subCategory: string,
    subCategories: subCategory[]
) {
    const subCategoryChoosenByUser = propEq(subCategory, "urlName");
    return find<subCategory>(subCategoryChoosenByUser)(subCategories);
}
