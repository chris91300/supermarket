import { subCategory } from "@/types/types";
import { identity, ifElse, isNotNil } from "ramda";
import throwError from "../throwError";

const throwNewError = () =>
    throwError("La sous catégorie demandée n'est pas correcte.");

const checkIfSubCategoryIsFound = ifElse(
    isNotNil<subCategory | undefined>,
    identity,
    throwNewError
);

export default checkIfSubCategoryIsFound;
