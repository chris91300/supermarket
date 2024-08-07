import useFavorites from "@/app/_hooks/forFavorites/useFavorites";
import { product } from "@/types/types";
import { includes } from "ramda";

export default function useIsInFavorites(product: product) {
    const { products } = useFavorites();
    //const { products } = favorites;
    const isInFavorites = includes(product, products);

    return isInFavorites;
}
