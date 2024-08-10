import { subCategory } from "@/types/types";
import { identity, ifElse, isNotNil } from "ramda";
import throwError from "../../../_utils/throwError";

const throwNewError = () =>
    throwError("La sous catégorie demandée n'existe pas.");

const checkIfSubCategoryIsFound = ifElse(
    isNotNil<subCategory | undefined>,
    identity,
    throwNewError
);

export default checkIfSubCategoryIsFound;
