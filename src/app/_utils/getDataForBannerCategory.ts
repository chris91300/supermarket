import getBannerCategoryInformations from "./forDataBase/getBannerCategoryInformations";
import getBannerSubCategoryInformations from "./forDataBase/getBannerSubCategoryIformations";

export default function getDataForBannerCategory(categories: string[]) {
    const [category, subCategory] = categories;
    const userWantCategory = Boolean(subCategory);

    if (userWantCategory) {
        return getBannerSubCategoryInformations(category, subCategory);
    } else {
        return getBannerCategoryInformations(category);
    }
}
