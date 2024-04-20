import { useFavorites } from "@/app/_hooks/hooks";
import { product } from "@/types/types";
import { includes } from "ramda";

export default function useIsInFavorites(product: product) {
    const favorites = useFavorites();
    const { products } = favorites;
    const isInFavorites = includes(product, products);

    return isInFavorites;
}
