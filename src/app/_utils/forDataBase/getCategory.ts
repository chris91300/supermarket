import { pipe } from "ramda";
import decodeFromURL from "../decodeFromUrl";
import getCategoryFromDataBase from "./getCategoryFromDatabase";
import removeTypeVoidIfIsFound from "./removeTypeVoidIfIsFound";
import { mainCategory } from "@/types/types";
import checkIfCategoryIsFound from "./checkIfCategoryIsFound";

const getCategory = pipe(
    decodeFromURL,
    getCategoryFromDataBase,
    checkIfCategoryIsFound,
    removeTypeVoidIfIsFound<mainCategory>
);

export default getCategory;
