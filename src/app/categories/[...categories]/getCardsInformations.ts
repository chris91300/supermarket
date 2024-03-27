import { not } from "ramda";
import getCategoryContent from "./getCategoryContent";
import getSubCategoryContent from "./getSubCategoryContent";

export default function getCardsInformations(categories: string[]) {
    const [category, subCategory] = categories;
    const userWantCategory = not(Boolean(subCategory));

    if (userWantCategory) {
        return getCategoryContent(category);
    } else {
        return getSubCategoryContent(category, subCategory);
    }
}
