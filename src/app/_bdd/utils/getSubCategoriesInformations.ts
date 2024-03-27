import data from "../data.json";
import { forEachObjIndexed, prop } from "ramda";
import getTitleFR from "./getTitleFR";
import { categoriesInformations } from "@/types/types";

export default function getCategoriesInformations() {
    let categories: categoriesInformations = [];

    forEachObjIndexed((cat) => {
        const category = {
            id: prop("id")(cat),
            category: getTitleFR(cat),
            img: prop("img_presentation")(cat),
        };

        categories.push(category);
    }, data);

    return categories;
}
