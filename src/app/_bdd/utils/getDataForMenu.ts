import { categoryForBuildMenu, dataType } from "@/types/types";
import { forEachObjIndexed } from "ramda";
import getTitleFR from "./getTitleFR";
import getSubCategoriesForMenu from "./getSubCategoriesForMenu";

export default function getDataForMenu(data: dataType) {
    const newData: categoryForBuildMenu[] = [];

    forEachObjIndexed((cat) => {
        const category = {
            menu: getTitleFR(cat),
            subMenu: getSubCategoriesForMenu(cat),
        };

        newData.push(category);
    }, data);

    return newData;
}
