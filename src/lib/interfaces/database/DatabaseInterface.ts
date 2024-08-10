import {
    article,
    categoriesInformations,
    categoryForBuildMenu,
    mainCategory,
    subCategory,
} from "@/types/types";

export interface DatabaseInterface {
    getCategoriesInformations: () => categoriesInformations;

    getCategory: (str: string) => mainCategory;

    getSubCategories: (str: string) => subCategory[];

    getSubCategory(subCategory: string, category: mainCategory): subCategory;

    getBannerCategoryInformations: (str: string) => {
        bannerTitle: string;
        bannerImg: string;
        bannerAlt: string;
    };

    getBannerSubCategoryInformations(
        category: string,
        subCategory: string
    ): {
        bannerTitle: string;
        bannerImg: string;
        bannerAlt: string;
    };

    getDataForMenu(): categoryForBuildMenu[];

    getProducts(category: string, subCategory: string): article[];
}
