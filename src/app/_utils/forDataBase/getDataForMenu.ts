import { categoryForBuildMenu, dataType } from "@/types/types";
import { forEachObjIndexed } from "ramda";
import { getPropTitleFR } from "@/app/_utils/getProps";
import getTitlesOfEachSubCategory from "./getTitlesOfEachSubCategory";

export default function getDataForMenu(data: dataType) {
    const menuInformations: categoryForBuildMenu[] = [];

    forEachObjIndexed((cat) => {
        const menus = {
            menu: getPropTitleFR(cat),
            subMenu: getTitlesOfEachSubCategory(cat),
        };

        menuInformations.push(menus);
    }, data);

    return menuInformations;
}
