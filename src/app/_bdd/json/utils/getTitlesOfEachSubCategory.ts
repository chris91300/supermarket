import { subCategory } from "@/types/types";
import { map, pipe } from "ramda";
import { getPropTitleFR, getPropSubCategories } from "../../../_utils/getProps";

const getTitleFrOfEachSubCategory = map<subCategory, string>(getPropTitleFR);

const getTitlesOfEachSubCategory = pipe(
    getPropSubCategories,
    getTitleFrOfEachSubCategory
);

export default getTitlesOfEachSubCategory;
