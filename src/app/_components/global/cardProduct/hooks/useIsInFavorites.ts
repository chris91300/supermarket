import { useFavorites } from "@/app/_hooks/hooks";
import { product } from "@/types/types";
import { includes } from "ramda";

export default function useIsInFavorites(product: product) {
    const favorites = useFavorites();
    const isInFavorites = includes(product, favorites);

    return isInFavorites;
}
