import { mainCategory, subCategory } from "@/types/types";

export default function buildInformationsForBannerCategory(
    category: mainCategory | subCategory
) {
    const { title_fr, imgBanner } = category;
    const bannerAlt = `image représentant la catégorie ${title_fr}`;
    return {
        bannerTitle: title_fr,
        bannerImg: imgBanner,
        bannerAlt,
    };
}
