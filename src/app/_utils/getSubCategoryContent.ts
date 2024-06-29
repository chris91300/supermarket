import { filter, propEq } from "ramda";
import getCategoryContent from "./getCategoryContent";
import { getPropContent } from "./getProps";

export default function getSubCategoryContent(
    category: string,
    subCategory: string
) {
    const categoryChoosen = getCategoryContent(category);
    const isSubCategoryChoosen = propEq(subCategory, "urlName");
    const subCategoryChoosen = filter(isSubCategoryChoosen, categoryChoosen);
    const articles = getPropContent(subCategoryChoosen[0]);

    return articles;
}
