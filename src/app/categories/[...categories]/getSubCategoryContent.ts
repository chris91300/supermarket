import { filter, propEq } from "ramda";
import getCategoryContent from "./getCategoryContent";
import getContent from "@/app/_bdd/utils/getContent";

export default function getSubCategoryContent(
    category: string,
    subCategory: string
) {
    const categoryChoosen = getCategoryContent(category);
    const isSubCategoryChoosen = propEq(subCategory, "urlName");
    const subCategoryChoosen = filter(isSubCategoryChoosen, categoryChoosen);
    const articles = getContent(subCategoryChoosen[0]);

    return articles;
}
