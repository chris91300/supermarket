import data from "../../_bdd/data.json";
import { forEachObjIndexed, prop } from "ramda";
import { categoriesInformations } from "@/types/types";
import { getPropImgPresentation, getPropTitleFR } from "@/app/_utils/getProps";

export default function getCategoriesInformations() {
    let categories: categoriesInformations = [];

    forEachObjIndexed((cat) => {
        const category = {
            id: prop("id")(cat),
            category: getPropTitleFR(cat),
            img: getPropImgPresentation(cat),
        };

        categories.push(category);
    }, data);

    return categories;
}
