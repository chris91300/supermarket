import {
    type categoriesInformations,
    type categoryForBuildMenu,
    type dataType,
    type mainCategory,
} from "@/types/types";
import { DatabaseInterface } from "../../../lib/interfaces/database/DatabaseInterface";
import getDatabase from "@/app/_bdd/json/utils/getDatabase";
import { append, curry, flip, forEachObjIndexed, pipe, prop } from "ramda";
import {
    getPropID,
    getPropImgPresentation,
    getPropProducts,
    getPropSubCategories,
    getPropTitleFR,
} from "@/app/_utils/getProps";
import decodeFromURL from "@/app/_utils/decodeFromUrl";
import checkIfCategoryExist from "@/app/_bdd/json/utils/checkIfCategoryExist";
import findSubCategory from "@/app/_bdd/json/utils/findSubCategory";
import checkIfSubCategoryExist from "./utils/checkIfSubCategoryExist";
import buildInformationsForBannerCategory from "@/app/_bdd/json/utils/buildInformationsForBannerCategory";
import getTitlesOfEachSubCategory from "@/app/_bdd/json/utils/getTitlesOfEachSubCategory";

export default class DBJson implements DatabaseInterface {
    db: dataType;

    constructor() {
        this.db = getDatabase();
    }

    getCategoriesInformations = () => {
        let categoriesInformations: categoriesInformations = [];

        forEachObjIndexed((category) => {
            const categoryInformations = {
                id: getPropID(category),
                category: getPropTitleFR(category),
                img: getPropImgPresentation(category),
            };

            categoriesInformations = append(
                categoryInformations,
                categoriesInformations
            );
        }, this.db);

        return categoriesInformations;
    };

    getCategory = (str: string) => {
        const getCategoryFromDatabase = flip<string, dataType, mainCategory>(
            prop
        )(this.db);

        return pipe(
            decodeFromURL,
            getCategoryFromDatabase,
            checkIfCategoryExist
        )(str);
    };

    getSubCategories = (str: string) => {
        return pipe(this.getCategory, getPropSubCategories)(str);
    };

    getSubCategory = (subCategory: string, category: mainCategory) => {
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
        const menuInformations: categoryForBuildMenu[] = [];

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
