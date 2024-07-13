import { pipe } from "ramda";
import removeTypeVoidIfIsFound from "./removeTypeVoidIfIsFound";
import checkIfSubCategoryIsFound from "./chekIfSubCategoryIsFound";

const checkIfSubCategoryExist = pipe(
    checkIfSubCategoryIsFound,
    removeTypeVoidIfIsFound
);

export default checkIfSubCategoryExist;
