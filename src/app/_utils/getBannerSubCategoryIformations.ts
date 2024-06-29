import { prop, pathEq, filter, head } from "ramda";
import decodeFromURL from "@/app/_utils/decodeFromUrl";
import { bannerInformations, dataIndex, dataType } from "@/types/types";
import db from "../_bdd/data.json";
import { getPropContent } from "@/app/_utils/getProps";
import getCategoryInformations from "./getCategoryInformations";

const data: dataType = db;

export default function getBannerSubCategoryInformations(
    category: string,
    subCategory: string
): bannerInformations {
    const categoryInformations = getCategoryInformations(category);
    const subCat = decodeFromURL(subCategory);
    const subCategories = getPropContent(categoryInformations); //prop("content", categoryInformations);
    const subCategoryChoosen = pathEq(subCat, ["urlName"]);
    const subCategoryInformations = filter(subCategoryChoosen, subCategories);
    const subCatChoosen = subCategoryInformations[0];
    const { title_fr, imgBanner } = subCatChoosen;
    const bannerAlt = `image représentant la catégorie ${title_fr}`;
    return {
        bannerTitle: title_fr,
        bannerImg: imgBanner,
        bannerAlt,
    };
}
