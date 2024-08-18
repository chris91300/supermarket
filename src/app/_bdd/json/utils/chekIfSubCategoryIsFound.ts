import { identity, ifElse, isNotNil } from "ramda";
import throwError from "../../../_utils/throwError";
import { SubCategory } from "../types/jsonTypes";

const throwNewError = () =>
    throwError("La sous catégorie demandée n'existe pas.");

const checkIfSubCategoryIsFound = ifElse(
    isNotNil<SubCategory | undefined>,
    identity,
    throwNewError
);

export default checkIfSubCategoryIsFound;
