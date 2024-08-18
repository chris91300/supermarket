import { DatabaseInterface } from "../../lib/interfaces/database/DatabaseInterface";
import DBJson from "./json/DBJson";
import { Category } from "./types/databasetypes";

class DbAdapter implements DatabaseInterface {
    database: DatabaseInterface;

    constructor(database: DatabaseInterface) {
        this.database = database;
    }

    getCategoriesInformations = () => this.database.getCategoriesInformations();

    getCategory = (str: string) => this.database.getCategory(str);

    getSubCategories = (str: string) => this.database.getSubCategories(str);

    getSubCategory = (subCategory: string, category: Category) =>
        this.database.getSubCategory(subCategory, category);

    getBannerCategoryInformations = (str: string) =>
        this.database.getBannerCategoryInformations(str);

    getBannerSubCategoryInformations = (
        category: string,
        subCategory: string
    ) => this.database.getBannerSubCategoryInformations(category, subCategory);

    getDataForMenu = () => this.database.getDataForMenu();

    getProducts = (category: string, subCategory: string) =>
        this.database.getProducts(category, subCategory);
}

const DbJson = new DBJson();

const DataBase = new DbAdapter(DbJson);

export default DataBase;
