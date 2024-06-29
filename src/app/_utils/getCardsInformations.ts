import getCategoryContent from "./getCategoryContent";
import getSubCategoryContent from "./getSubCategoryContent";

export default function getCardsInformations(categories: string[]) {
    const [category, subCategory] = categories;
    const userWantSubCategory = Boolean(subCategory);

    if (userWantSubCategory) {
        return getSubCategoryContent(category, subCategory);
    } else {
        return getCategoryContent(category);
    }
}
