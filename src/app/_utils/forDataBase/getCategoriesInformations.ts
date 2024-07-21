import { append, forEachObjIndexed } from "ramda";
import { categoriesInformations } from "@/types/types";
import {
    getPropID,
    getPropImgPresentation,
    getPropTitleFR,
} from "@/app/_utils/getProps";
import getDatabase from "./getDatabase";

export default function getCategoriesInformations() {
    const data = getDatabase();
    let categoriesInformations: categoriesInformations = [];

    forEachObjIndexed((cat) => {
        const categoryInformations = {
            id: getPropID(cat),
            category: getPropTitleFR(cat),
            img: getPropImgPresentation(cat),
        };

        categoriesInformations = append(
            categoryInformations,
            categoriesInformations
        );
    }, data);

    return categoriesInformations;
}
