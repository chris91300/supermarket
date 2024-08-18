import { identity, ifElse, isNotNil } from "ramda";
import throwError from "../../../_utils/throwError";
import { Category } from "../types/jsonTypes";

const throwNewError = () => throwError("catégorie invalide.");

const checkIfCategoryIsFound = ifElse(
    isNotNil<Category | undefined>,
    identity,
    throwNewError
);

export default checkIfCategoryIsFound;
