import { categoryForBuildMenu, dataType } from "@/types/types";
import { forEachObjIndexed } from "ramda";
import getSubCategoriesForMenu from "./getSubCategoriesForMenu";
import { getPropTitleFR } from "@/app/_utils/getProps";

export default function getDataForMenu(data: dataType) {
    const newData: categoryForBuildMenu[] = [];

    forEachObjIndexed((cat) => {
        const category = {
            menu: getPropTitleFR(cat),
            subMenu: getSubCategoriesForMenu(cat),
        };

        newData.push(category);
    }, data);

    return newData;
}
