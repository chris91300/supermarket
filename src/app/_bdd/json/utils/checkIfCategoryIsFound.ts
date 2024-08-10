import { mainCategory } from "@/types/types";
import { identity, ifElse, isNotNil } from "ramda";
import throwError from "../../../_utils/throwError";

const throwNewError = () => throwError("catégorie invalide.");

const checkIfCategoryIsFound = ifElse(
    isNotNil<mainCategory | undefined>,
    identity,
    throwNewError
);

export default checkIfCategoryIsFound;
