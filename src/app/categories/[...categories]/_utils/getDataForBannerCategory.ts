import { not, prop } from "ramda";
import decodeFromURL from "@/app/_utils/decodeFromUrl";
import { bannerInformations, dataIndex, dataType } from "@/types/types";
import db from "../../../_bdd/data.json";
import getBannerCategoryInformations from "./getBannerCategoryInformations";
import getBannerSubCategoryInformations from "./getBannerSubCategoryIformations";

const data: dataType = db;

export default function getDataForBannerCategory(categories: string[]) {
    const [category, subCategory] = categories;
    const userWantCategory = not(Boolean(subCategory));

    if (userWantCategory) {
        return getBannerCategoryInformations(category);
    } else {
        return getBannerSubCategoryInformations(category, subCategory);
    }
}