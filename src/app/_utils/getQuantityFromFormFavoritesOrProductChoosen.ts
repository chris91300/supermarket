import { dataForFormFavorites, productChoosen } from "@/types/types";
import isADataFormFavorites from "./isADataFormFavorites";

export default function getQuantityFromFormFavoritesOrProductChoosen(
    data: dataForFormFavorites | productChoosen
) {
    const isDataFormFavorites = isADataFormFavorites(data);
    const productQuantity = isDataFormFavorites
        ? data.defaultQuantity
        : data.quantity;

    return productQuantity;
}
