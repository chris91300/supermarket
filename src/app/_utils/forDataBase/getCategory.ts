import { pipe } from "ramda";
import decodeFromURL from "../decodeFromUrl";
import getCategoryFromDataBase from "./getCategoryFromDatabase";
import checkIfCategoryExist from "./checkIfCategoryExist";

const getCategory = pipe(
    decodeFromURL,
    getCategoryFromDataBase,
    checkIfCategoryExist
);

export default getCategory;
