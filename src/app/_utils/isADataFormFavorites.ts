import { dataForFormFavorites, productChoosen } from "@/types/types";

export default function isADataFormFavorites(
    data: dataForFormFavorites | productChoosen
) {
    return "defaultQuantity" in data;
}
