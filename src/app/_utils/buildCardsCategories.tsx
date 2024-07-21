import { categoriesInformations } from "@/types/types";
import { map } from "ramda";
import buildCardCategory from "./buildCardCategory";


export default function buildCardsCategories(categories: categoriesInformations){

    const categoriesComponent = map(buildCardCategory, categories)

    return categoriesComponent;
}