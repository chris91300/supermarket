import { Category, SubCategory } from "../types/jsonTypes";

export default function buildInformationsForBannerCategory(
    category: Category | SubCategory
) {
    const { title_fr, imgBanner } = category;
    const bannerAlt = `image représentant la catégorie ${title_fr}`;
    return {
        bannerTitle: title_fr,
        bannerImg: imgBanner,
        bannerAlt,
    };
}
