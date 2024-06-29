import { dataForFormFavorites } from "@/types/types";
import { map } from "ramda";
import callSubmitFunction from "./callSubmitFunction";

export default function callAllSubmitFunction(
    favorites: dataForFormFavorites[]
) {
    map(callSubmitFunction, favorites);
}
