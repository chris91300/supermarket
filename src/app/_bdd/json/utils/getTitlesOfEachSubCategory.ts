import { map, pipe } from "ramda";
import { SubCategory } from "../types/jsonTypes";
import { getPropSubCategories, getPropTitleFR } from "./getProps";

const getTitleFrOfEachSubCategory = map<SubCategory, string>(getPropTitleFR);

const getTitlesOfEachSubCategory = pipe(
    getPropSubCategories,
    getTitleFrOfEachSubCategory
);

export default getTitlesOfEachSubCategory;
