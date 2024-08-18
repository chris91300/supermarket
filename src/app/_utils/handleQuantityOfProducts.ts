import { dataForFormFavorites } from "@/types/types";
import { map } from "ramda";
import handleQuantityOfProduct from "./handleQuantityOfProduct";

export default function handleQuantityOfProducts(
    favorites: dataForFormFavorites[]
) {
    map(handleQuantityOfProduct, favorites);
}
