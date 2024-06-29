import { categoriesInformations } from "@/types/types";
import { map } from "ramda";
import buildCardCategoryWithoutSubCategory from "./buildCardCategoryWithoutSubCategory";


export default function buildCategoriesCardsFrom(categories: categoriesInformations){

    const categoriesComponent = map(buildCardCategoryWithoutSubCategory, categories)

    return categoriesComponent;
}