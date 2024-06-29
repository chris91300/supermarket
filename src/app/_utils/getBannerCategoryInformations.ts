import { bannerInformations, dataType } from "@/types/types";
import db from "../_bdd/data.json";
import getCategoryInformations from "./getCategoryInformations";

const data: dataType = db;

export default function getBannerCategoryInformations(
    category: string
): bannerInformations {
    const categoryInformations = getCategoryInformations(category);
    const { title_fr, imgBanner } = categoryInformations;
    const bannerAlt = `image représentant la catégorie ${title_fr}`;
    return {
        bannerTitle: title_fr,
        bannerImg: imgBanner,
        bannerAlt,
    };
}
