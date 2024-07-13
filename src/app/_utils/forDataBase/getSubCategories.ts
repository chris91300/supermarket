import { pipe } from "ramda";
import { getPropSubCategories } from "../getProps";
import getCategory from "./getCategory";

const getSubCategories = pipe(getCategory, getPropSubCategories);

export default getSubCategories;
