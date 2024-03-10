import { mainCategory } from "@/types/types";
import { map } from "ramda";
import getContent from "./getContent";
import getTitleFR from "./getTitleFR";

export default function getSubCategoriesForMenu(data: mainCategory) {
    const content = getContent(data);
    const subCategoriesForMenu = map(getTitleFR, content);

    return subCategoriesForMenu;
}
