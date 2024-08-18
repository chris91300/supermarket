import {
    CategoriesInformations,
    Category,
    CategoryForBuildMenu,
    Product,
    SubCategory,
} from "@/app/_bdd/types/databasetypes";

export interface DatabaseInterface {
    getCategoriesInformations: () => CategoriesInformations;

    getCategory: (str: string) => Category;

    getSubCategories: (str: string) => SubCategory[];

    getSubCategory(subCategory: string, category: Category): SubCategory;

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

    getDataForMenu(): CategoryForBuildMenu[];

    getProducts(category: string, subCategory: string): Product[];
}
