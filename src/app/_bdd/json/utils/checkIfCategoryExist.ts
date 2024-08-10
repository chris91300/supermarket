import { pipe } from "ramda";
import checkIfCategoryIsFound from "./checkIfCategoryIsFound";
import removeTypeVoidIfIsFound from "./removeTypeVoidIfIsFound";

const checkIfCategoryExist = pipe(
    checkIfCategoryIsFound,
    removeTypeVoidIfIsFound
);

export default checkIfCategoryExist;
