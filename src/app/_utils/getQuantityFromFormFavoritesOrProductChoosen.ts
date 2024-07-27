import { dataForFormFavorites, productChoosen } from "@/types/types";
import isADataFormFavorites from "./isADataFormFavorites";
import { getDefaultQuantity, getQuantity } from "./getProps";

export default function getQuantityFromFormFavoritesOrProductChoosen(
    data: dataForFormFavorites | productChoosen
) {
    const isDataFormFavorites = isADataFormFavorites(data);
    const productQuantity = isDataFormFavorites
        ? getDefaultQuantity(data as dataForFormFavorites)
        : getQuantity(data as productChoosen);

    return productQuantity;
}
