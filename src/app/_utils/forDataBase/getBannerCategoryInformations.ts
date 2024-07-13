import { pipe } from "ramda";
import buildInformationsForBannerCategory from "./buildInformationsForBannerCategory";
import getCategory from "./getCategory";

const getBannerCategoryInformations = pipe(
    getCategory,
    buildInformationsForBannerCategory
);

export default getBannerCategoryInformations;
