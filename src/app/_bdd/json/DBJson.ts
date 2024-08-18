import { DatabaseInterface } from "../../../lib/interfaces/database/DatabaseInterface";
import getDatabase from "@/app/_bdd/json/utils/getDatabase";
import { append, curry, flip, forEachObjIndexed, pipe, prop } from "ramda";
import decodeFromURL from "@/app/_utils/decodeFromUrl";
import checkIfCategoryExist from "@/app/_bdd/json/utils/checkIfCategoryExist";
import findSubCategory from "@/app/_bdd/json/utils/findSubCategory";
import checkIfSubCategoryExist from "./utils/checkIfSubCategoryExist";
import buildInformationsForBannerCategory from "@/app/_bdd/json/utils/buildInformationsForBannerCategory";
import getTitlesOfEachSubCategory from "@/app/_bdd/json/utils/getTitlesOfEachSubCategory";
import {
    type CategoriesInformations,
    type Category,
    type CategoryForBuildMenu,
    type DataType,
} from "./types/jsonTypes";
import {
    getPropID,
    getPropImgPresentation,
    getPropProducts,
    getPropSubCategories,
    getPropTitleFR,
} from "./utils/getProps";

export default class DBJson implements DatabaseInterface {
    db: DataType;

    constructor() {
        this.db = getDatabase();
    }

    getCategoriesInformations = () => {
        let CategoriesInformations: CategoriesInformations = [];

        forEachObjIndexed((category) => {
            const categoryInformations = {
                id: getPropID(category),
                category: getPropTitleFR(category),
                img: getPropImgPresentation(category),
            };

            CategoriesInformations = append(
                categoryInformations,
                CategoriesInformations
            );
        }, this.db);

        return CategoriesInformations;
    };

    getCategory = (str: string) => {
        const getCategoryFromDatabase = flip<string, DataType, Category>(prop)(
            this.db
        );

        return pipe(
            decodeFromURL,
            getCategoryFromDatabase,
            checkIfCategoryExist
        )(str);
    };

    getSubCategories = (str: string) => {
        return pipe(this.getCategory, getPropSubCategories)(str);
    };

    getSubCategory = (subCategory: string, category: Category) => {
        const findSubCategoryCurried = curry(findSubCategory);
        const getSubcatData = pipe(
            getPropSubCategories,
            findSubCategoryCurried(subCategory),
            checkIfSubCategoryExist
        )(category);

        return getSubcatData;
    };

    getBannerCategoryInformations = (str: string) => {
        return pipe(this.getCategory, buildInformationsForBannerCategory)(str);
    };

    getBannerSubCategoryInformations = (
        category: string,
        subCategory: string
    ) => {
        const getSubCategoryCurried = curry(this.getSubCategory);
        return pipe(
            this.getCategory,
            getSubCategoryCurried(subCategory),
            buildInformationsForBannerCategory
        )(category);
    };

    getDataForMenu = () => {
        const menuInformations: CategoryForBuildMenu[] = [];

        forEachObjIndexed((cat) => {
            const menus = {
                menu: getPropTitleFR(cat),
                subMenu: getTitlesOfEachSubCategory(cat),
            };

            menuInformations.push(menus);
        }, this.db);

        return menuInformations;
    };

    getProducts = (category: string, subCategory: string) => {
        const getSubCategoryCurried = curry(this.getSubCategory);
        const products = pipe(
            this.getCategory,
            getSubCategoryCurried(subCategory),
            getPropProducts
        )(category);

        return products;
    };
}
