
import { map } from "ramda";
import buildCardCategory from "./buildCardCategory";
import { CategoriesInformations } from "../_bdd/types/databasetypes";


export default function buildCardsCategories(categories: CategoriesInformations){

    const categoriesComponent = map(buildCardCategory, categories)

    return categoriesComponent;
}