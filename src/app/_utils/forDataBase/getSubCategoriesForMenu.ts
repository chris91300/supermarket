import { getPropContent, getPropTitleFR } from "@/app/_utils/getProps";
import { mainCategory } from "@/types/types";
import { map } from "ramda";

export default function getSubCategoriesForMenu(data: mainCategory) {
    const content = getPropContent(data);
    const subCategoriesForMenu = map(getPropTitleFR, content);

    return subCategoriesForMenu;
}
