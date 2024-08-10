import Database from "@/app/_bdd/DbStrategy";

export default function getDataForBannerCategory(categories: string[]) {
    const [category, subCategory] = categories;
    const userWantCategory = Boolean(subCategory);

    if (userWantCategory) {
        return Database.getBannerSubCategoryInformations(category, subCategory);
    } else {
        return Database.getBannerCategoryInformations(category);
    }
}
