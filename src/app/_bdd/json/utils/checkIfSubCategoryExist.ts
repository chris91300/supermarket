import { pipe } from "ramda";
import checkIfSubCategoryIsFound from "./chekIfSubCategoryIsFound";
import removeTypeVoidIfIsFound from "./removeTypeVoidIfIsFound";

const checkIfSubCategoryExist = pipe(
    checkIfSubCategoryIsFound,
    removeTypeVoidIfIsFound
);

export default checkIfSubCategoryExist;
